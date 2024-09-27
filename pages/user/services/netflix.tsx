import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import Header from "../../components/Header";
import ProtectedRoute from "../ProtectedRoute";

export default function Index() {
  return (
    <>
  <ProtectedRoute />

    <Header/>
    <Card
    bg="dark"
    text="white"
  style={{ marginRight: '1rem', marginTop: '1rem', marginLeft: '1rem'  }}

    >
    <Card.Header>
        Ganhar realizando ações
    </Card.Header>
    <Card.Body>
        <div>Selecione a rede social</div>
    <Form.Select aria-label="Default select example">
      <option value="instagram">Instagram</option>
    </Form.Select>
    <div>Selecione o tipo de ação</div>
    <Form.Select aria-label="Default select example">
      <option value="likes">Curtir</option>
      <option value="follows">Seguir</option>
    </Form.Select>
    <div className="d-grid gap-2 mt-2">
    <Button
    variant="light"
    >
        Carregas Perfils
    </Button>
    </div>
    </Card.Body>
    </Card>
    </>
  )
}
