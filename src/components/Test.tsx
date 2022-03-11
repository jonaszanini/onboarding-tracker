import { useEffect, useState } from "react";

interface user{
    id: number;
}


export function Test(){
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState<user[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    },[])

    function increment(){
        setCounter(counter + 1)
    }

    function decrement(){
        if(counter >= 1){
            setCounter(counter - 1)
        }        
    }

    return(
        <div>
            <p>{counter}</p>
            <button type="button" onClick={increment}>increase</button>
            <button type="button" onClick={decrement}>decrease</button>

            {users.map(user => {
                return(
                    <p key={user.id}>{user.id}</p>
                )
            })}
        </div>

        
    )
}