import './App.css';
import Greet from './Greet'; // does not need .js; both are js files
import Message from './Message';
import Button from './Button';
import Hello from './hello';
import Employee from './employee';

import { NavDropdown, Nav } from 'react-bootstrap';
// import { Router } from 'react-router';
import Router from './router';
import { useEffect } from 'react';
import NavBar from "./navBar";



function App() {

  return (
    <div className="App">
      <NavBar/>
      <Router/>
        {/* <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container> */}
  </div>
  );
}

export default App;
