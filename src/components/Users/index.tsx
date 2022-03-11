
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RadioBox } from '../../styles/RadioBoxStyle';
import { TasksList } from '../TasksList';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

interface UserListProps {
    userList: User[]
}

export function Users({ userList }: UserListProps) {

    let [currentId, setCurrentId] = useState(1)

    function handleId(id: number) {
        setCurrentId(id)
    }

    return (
        <div className='main-content'>
            <div className='users-container'>
                <h2>Users</h2>
                {userList.map(user => {
                    return (
                        <div key={user.id}>
                            <ul>
                                <li>
                                    <RadioBox
                                        id={user.id.toString()}
                                        type="button"
                                        onClick={() => handleId(user.id)}
                                        isActive={user.id.toString() === currentId.toString()}
                                        activeColor="green">
                                        <Link
                                            to={`/users/${user.id}`}
                                            onClick={() => handleId(user.id)} >{user.name}
                                        </Link>
                                    </RadioBox>
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
            <div className='tasks-container'>
                <TasksList id={currentId} />
            </div>
        </div>
    )
}