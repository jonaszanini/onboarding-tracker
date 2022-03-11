
import { useEffect, useState } from 'react';
import { Users } from './components/Users';
import { api } from './services/api';
import './styles/style.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/global';

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Todos{
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    api.get('users')
      .then(response => setUsers(response.data))
  }, [])

  return (
    <div className="container">
      <div className='title'>
        <h1>Onboarding Tracker</h1>
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<Users userList={users} />} />
          <Route path='users' element={<Users userList={users} />}/>
            <Route path='users/:id/*' element={<Users userList={users} />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
