import { MDBBreadcrumb, MDBBreadcrumbItem, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useEffect, useRef, useState } from "react"
import { Button, Card, Form } from "react-bootstrap";
import Header from "../../components/Header";
import ProtectedRoute from "../ProtectedRoute";

const PUBLIC_KEY = "TEST-001debb2-d8d5-40a4-953f-8ca65aaa0fa0";

export default function Index(props) {
  //const { id } = useParams(); // id de producto
  const id = 1122;

  const [preferenceId, setPreferenceId] = useState(null)
  const [value, setValue] = useState();
  const initialized = useRef(false)


   function useScript(url) {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
      const existingScript = document.querySelector(`[src="${url}"]`)
  
      if (existingScript) {
        setLoaded(true)
      } else {
        const script = document.createElement("script")
        script.src = url
        script.async = true
        script.onload = () => {
          setLoaded(true)
        }
  
        document.body.appendChild(script)
      }
    }, [url])
  
    return {
      loaded
    }
  }

  const { loaded } = useScript("https://sdk.mercadopago.com/js/v2")

  useEffect(() => {
    if (initialized.current) {
      console.log('initialized.current')
      return
    }

    if (!loaded) {
      console.log('loaded')
      return
    }

    if (preferenceId === null) {
      console.log('preferenceId null')
      return
    }

    initialized.current = true

    const mp = new window.MercadoPago('TEST-2724ac84-5ce2-45d6-8de4-df9d8378ac77', {
      locale: "pt-BR",
    });

    mp.checkout({
      preference: {
        id: preferenceId,
      },
      render: {
        container: '#button-checkout', // Indica el nombre de la clase donde se mostrará el botón de pago
        label: "Pagar", // Cambia el texto del botón de pago (opcional)
      },
    });

  }, [loaded, preferenceId])



    const sendPayment = async () => {
      try {
        const post = await fetch("http://localhost:3000/api/user/balance/add", {
          method: "POST",
          made: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            productId: id,
            description: "Adicionar saldo a carteira SG",
            price: value,
            quantity: 1,
          }),
        });

        const data = await post.json();

        console.log('data id', data.id);
        setPreferenceId(await data.id);
      } catch (error) {
        console.log('error', error);
      }
    }


  return (
    <div>
  <ProtectedRoute />
      <Header />
     <Card.Header
     style={{ marginRight: '1rem', marginTop: '1rem', marginLeft: '1rem'  }}
     >
       <MDBRow>
            <MDBCol>
                <MDBBreadcrumb className="bg-dark rounded-3 p-3 mb-4">
                    <MDBBreadcrumbItem>
                        <a href='/'>Home</a>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active>Panel</MDBBreadcrumbItem>
                </MDBBreadcrumb>
            </MDBCol>
        </MDBRow>
        </Card.Header>
        <Card
      bg="dark"
      text="white"
      style={{ marginRight: '1rem', marginTop: '1rem', marginLeft: '1rem'  }}
      >
        <Card.Body>
        <Form.Group>
          <Form.Label>Valor : </Form.Label>
          <Form.Control
            onChange={({ target: { value } }) => setValue(value)}
            name="value"
            type="number"
            placeholder="10,00"
          />
        </Form.Group>
        <div className="d-grid gap-2 mt-2">
        <Button
        onClick={sendPayment}
        variant="light"
        >
          Gerar Pagamento
        </Button>
        </div>
        </Card.Body>
     <center><div className="button-checkout" id="button-checkout"></div></center>
      </Card>
    </div>
  )
  ;
}