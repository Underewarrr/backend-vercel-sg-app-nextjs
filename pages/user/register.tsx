import React, { useState } from "react";

import { useRouter } from "next/router";
import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";
import axios from "axios";
import Header from "../components/Header";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function Index() {
  //const { data, error, isLoading } = useSwr<User[]>('/api/users/login', fetcher)
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [failedTryRegister, setFailedTryRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const register = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setLoading(true)

    try {
      const { data } = await axios.post(
        "/api/user/register",
        { username, email, password }
      );
      router.push("/");
      return data;
    } catch (error) {
      setFailedTryRegister(true);
    }
  };

  return (
    <>
      <Header />
      <Card.Header
      style={{ width: '', marginTop: '1rem', marginLeft: '1rem', marginRight: '1rem' }}
      >
      <MDBRow>
      <MDBCol>
          <MDBBreadcrumb className="bg-dark rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                  <a href='/'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Register</MDBBreadcrumbItem>
          </MDBBreadcrumb>
      </MDBCol>
      </MDBRow>
      </Card.Header>
      <Card
      bg="dark"
      style={{ width: '', marginTop: '1rem', marginLeft: '1rem', marginRight: '1rem' }}
      >
      
        <Form.Group>
          <Form.Label>Email : </Form.Label>
          <Form.Control
            onChange={({ target: { value } }) => setEmail(value)}
            name="email"
            type="email"
            placeholder="Example@email.com"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Username : </Form.Label>
          <Form.Control
            onChange={({ target: { value } }) => setUsername(value)}
            name="username"
            type="username"
            placeholder="Example"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password : </Form.Label>
          <Form.Control
            onChange={({ target: { value } }) => setPassword(value)}
            placeholder="Password"
            name="password"
            type="password"
          />
        </Form.Group>
        {
          loading ? (
        <div 
        style={{marginTop: '1rem', marginLeft: '1rem' }}
        className="d-flex justify-content-around">
        <Spinner animation="grow" variant="dark" />
        <Spinner animation="grow" variant="dark" />
        <Spinner animation="grow" variant="dark" />
        <Spinner animation="grow" variant="dark" />
        </div>
          ) : null
        }
        <div className="d-grid gap-2 mt-2">
          <Button
            onClick={register}
            className="LoginButton"
            variant="light"
            type="submit"
          >
            Registrar
          </Button>
          {failedTryRegister ? (
            <Alert
              variant="danger"
              onClose={() => setFailedTryRegister(false)}
              dismissible
            >
              {`O endereço de e-mail, já está sendo usado.
                Por favor, tente outro email.`}
            </Alert>
          ) : null}
        </div>
      </Card>

    </>
  );
}
