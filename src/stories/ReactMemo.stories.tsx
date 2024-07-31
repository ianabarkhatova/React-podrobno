import React, {useState} from "react";

export default {
    title: 'ReactMemo Demo'
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

type UsersType = {
    users: Array<string>
}

const UsersSecret = (props: UsersType) => {
    console.log('users')
    return <div> {
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const[count, setCount] = useState(0)
    const[users, setUsers] = useState(['Yana', 'Daniel', 'Lisa'])

    //меняем addUser иммутабельно:
    const addUser = () => {
        const newUsers = [
            ...users,
            'Sveta ' + new Date().getTime()
        ]

        setUsers(newUsers)
    }


    return <>
        <button onClick={() => {setCount(count + 1)}}>+</button>
        <button onClick={addUser}> add user</button>
        <NewMessagesCounter count={count}/>
        <Users users={users}/>
    </>
}