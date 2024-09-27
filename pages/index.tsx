import Link from "next/link";
import { Card } from "react-bootstrap";
import Header from "./components/Header";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function Index() {
  return (
    <>
      <Header />
    
      <Card.Header
        style={{ width: '', marginTop: '1rem', marginLeft: '1rem', marginRight: '1rem' }}
      
      >
                        <MDBRow>
                            <MDBCol>
                                <MDBBreadcrumb className="bg-dark rounded-3 p-3 mb-4"> 
                                    <MDBBreadcrumbItem active>Home</MDBBreadcrumbItem>
                                </MDBBreadcrumb>
                            </MDBCol>
                        </MDBRow>
                    </Card.Header>
                    <Card
        style={{ width: '', marginTop: '1rem', marginLeft: '1rem', marginRight: '1rem' }}

      bg="dark"
      text="white"
      >
       
        <Card.Body>
      <div 
      style={{ marginTop: '5rem', marginLeft: '1rem' }}
      
      className="d-flex justify-content-between">
      <div>
        <div
        style={{ fontSize: '3rem', fontFamily: 'ui-sans-serif' }}
        >
      Ganhar Dinheiro<br/>
      Online Usando Suas<br/> Redes Sociais!
      </div>
      <div>Tenha uma renda extra utilizando suas redes sociais para
        <br/> 
      seguir, curtir e comentar. 
        <br/>
      Ganhe dinheiro online agora mesmo!</div>
      </div>

      <Card.Img  src="https://svgshare.com/i/qB_.svg"
         style={{ width: '500px', marginTop: '1rem', marginLeft: '1rem', marginRight: '1rem' }}
        >

        </Card.Img>
      </div>

      </Card.Body>
      </Card>
      

    </>
  );
}
