import React, { useState, useEffect } from 'react';
import Card from './components/card/index.js';
import axios from 'axios';

let style = {
  backgroundColor: '#111111',
  display: 'flex',
  flexWrap: 'wrap',
  textAlign: 'center'
}

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await axios(
      'https://jsonplaceholder.typicode.com/users'
    );
    setData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App" data-testid="app-container" style={style}>
        {data.map(user => (
            <Card data={user} key={user.id} />
        ))}
    </div>
  );
}

export default App;
