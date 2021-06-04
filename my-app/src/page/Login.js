import React, { useState } from "react";
import "./Login.css";
import Clock from './Clock'
import {  Button ,Form} from 'react-bootstrap';
import logo from './id-card.svg'


function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return id.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  const mystyle = {
    textAlign:'center',
    color:'black'
  }

  return (
    <div>
      <div style={{textAlign:'right'}}><Clock /></div>
        <div>
          <div className="Login">
            <div style = {mystyle}>
            <img src={logo} width='150px' alt="Logo" />;
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group size="lg" controlId="id">
                <Form.Label ><h5>ID</h5></Form.Label>
                <Form.Control
                  autoFocus
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label><h5>Password</h5></Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button  href="clock" block size="lg" type="submit" disabled={!validateForm()}>
                SIGN IN
              </Button>
            </Form>
          </div>
        </div>
    </div>
  );
}
export default Login;