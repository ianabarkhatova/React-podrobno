import React, {useCallback, useMemo, useState} from "react";


export default {
    title: 'useMemo'
}

export const difficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1

    resultA = useMemo(() => {
//useMemo, сделай эти вычисления и запомни их, пока 'а' не поменяется:
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;

        }
        return tempResultA;
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>

    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    debugger
    console.log('UsersSecret')
    return <div> {
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsReactMemo = () => {
    console.log('Helps React Memo')
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Yana', 'Daniel', 'Lisa'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('l') > -1);
    }, [users])

    const addUser = () => {
        const newUsers = [
            ...users,
            'Svetlana' + new Date().getTime()
        ]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => {
            setCount(count + 1)
        }}>+
        </button>
        <button onClick={() => addUser()}>add user</button>
        {count}
        <Users users={newArray}/>
    </>
}

//addBook - UseCallback

const BooksSecret = (props: { addBook: () => void }) => {

    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(['React', 'HTML', 'CSS', "JS"])

    const addBook = () => {
        console.log(books)
        const newBooks = [
            ...books,
            'Angular' + new Date().getTime()
        ]
        setBooks(newBooks)
    }

    const memoizedAddBook = useMemo(() => {
        return addBook
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        addBook()
    },[books])


    return <>
        <button onClick={() => {
            setCount(count + 1)
        }}>+
        </button>
        {count}
        <Book addBook={memoizedAddBook2}/>
    </>
}
