import React from "react";
import { Button, Card } from "react-bootstrap";
import Header from "../components/Header";
import Link from "next/link";
import ProtectedRoute from "./ProtectedRoute";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBCol, MDBRow } from "mdb-react-ui-kit";

const panel = () => {


  return (
  <>
  <ProtectedRoute />
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
                <MDBBreadcrumbItem active>Services</MDBBreadcrumbItem>
            </MDBBreadcrumb>
        </MDBCol>
    </MDBRow>
</Card.Header>
<Card
  bg="dark"
  style={{ width: '', marginTop: '1rem', marginLeft: '1rem', marginRight: '1rem' }}
  >
  <div className="d-flex justify-content-around">
  <Card
  bg="dark"
  text="white"
  style={{ width: '', marginTop: '1rem', marginLeft: '1rem' }}
  >
      <Card.Header>Netflix</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div>
            {' '}
            Adiquira seu plano com MediaGrowUp.{' '}
          </div>
          <footer>
            <div className="d-grid gap-2 mt-2">
              <Link
              href="/user/services/netflix"
              >
            <Button
            variant="light"
            >
Ver Planos
            </Button>
            </Link>
            </div>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
   
    </div>
    </Card>
  </>)
};

export default panel;
