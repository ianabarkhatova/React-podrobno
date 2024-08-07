import React, {useMemo, useState} from "react";


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

const UsersSecret = (props: {users: Array<string>}) => {
    debugger
    console.log('UsersSecret')
    return <div> {
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsReactMemo = () => {
    console.log('Helps React Memo')
    const[count, setCount] = useState(0)
    const[users, setUsers] = useState(['Yana', 'Daniel', 'Lisa'])

    const newArray = useMemo(()=> {
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
        <button onClick={() => {setCount(count + 1)}}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {count}
        <Users users={newArray}/>
    </>
}

