import { useEffect, useState } from "react";
import axios from "axios";
import User from "../user/User";


const ExternalUser = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUsers();
 },[])
  
  const loadUsers = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data)
    setUsers(data);
  }
    return (
        <div>
            <h1>Users Information :{users.length}</h1>
             {
        users.map(user => <User user={user} key={user.id}></User>)
      }
        </div>
    );
};

export default ExternalUser;