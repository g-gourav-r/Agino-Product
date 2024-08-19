import React, { useState } from 'react';
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap';

// Generate random database names for demonstration purposes
const generateRandomDatabaseNames = () => {
  const databases = [];
  const sampleNames = ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'OracleDB', 'SQLServer', 'Cassandra', 'Redis', 'MariaDB', 'DynamoDB'];

  for (let i = 0; i < 10; i++) {
    databases.push(`${sampleNames[Math.floor(Math.random() * sampleNames.length)]}_${Math.floor(Math.random() * 10000)}`);
  }
  return databases;
};

const DatabaseListPage = () => {
  const [databases] = useState(generateRandomDatabaseNames());
  const [status, setStatus] = useState(databases.map(() => false)); // False means inactive

  const handleToggle = (index) => {
    const newStatus = [...status];
    newStatus[index] = !newStatus[index];
    setStatus(newStatus);
  };

  const handleConnect = (dbName) => {
    alert(`Connecting to ${dbName}`);
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <h1 className="text-center">Database List</h1>
      <ListGroup>
        {databases.map((dbName, index) => (
          <ListGroupItem key={index} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{dbName}</strong> - Status: {status[index] ? 'Active' : 'Inactive'}
            </div>
            <div>
              <Button color="primary" onClick={() => handleConnect(dbName)} className="mr-2">Connect</Button>
              <Button color={status[index] ? 'danger' : 'success'} onClick={() => handleToggle(index)}>
                {status[index] ? 'Deactivate' : 'Activate'}
              </Button>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default DatabaseListPage;
