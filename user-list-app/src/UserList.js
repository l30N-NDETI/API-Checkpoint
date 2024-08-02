// src/UserList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]); // useState hook to save data

  // useEffect hook to fetch data when component mounts
  useEffect(() => {
    // Define an async function to fetch user data
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Fetch data from API
        setListOfUsers(response.data); // Save data into listOfUsers state
      } catch (error) {
        console.error('Error fetching user data:', error); // Handle errors
      }
    };

    fetchUsers(); // Call the function to fetch data
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))} {/* Map listOfUsers to display list of users */}
      </ul>
    </div>
  );
};

export default UserList;
