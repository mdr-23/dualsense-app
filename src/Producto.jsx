import {Card, Button, Modal} from 'react-bootstrap';
import React, {useState} from 'react'

function Producto({nombre,imagen,descripcion,precio,sku,stock,comprar,blanco,violeta,negro,rojo,mensaje}){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(

    <Card className="mx-auto mt-5 text-center card" style={{ width: '21rem' }}>
        <Card.Img variant="top" src={imagen} className="mt-3" />
        <div>
            <button className="btn-blanco mx-1" onClick={blanco}></button>
            <button className="btn-negro mx-1" onClick={negro}></button>
            <button className="btn-violeta mx-1" onClick={violeta}></button>
            <button className="btn-rojo mx-1" onClick={rojo}></button>
        </div>
        <Card.Body>
          <Card.Title className="mt-2">{nombre}</Card.Title>
          <Card.Text>
          <p>{descripcion}</p>
          <p className="precio">{precio}</p>
          {/* <p>SKU: {sku}</p> */}
          <p className="stock">{stock}</p>
          </Card.Text>
          {/* <Button onClick={comprar} variant="primary">Comprar</Button> */}
            <Button className="btn-comprar" variant="primary" onClick={handleShow}>
                Agregar al carrito
            </Button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Producto añadido al carrito</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>{nombre}</h5>
                <p>Precio: {precio}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Cerrar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                Ver el carrito
                </Button>
            </Modal.Footer>
            </Modal>
        </Card.Body>
    </Card>



    

    

    

/*         <div>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <p>{precio}</p>
            <p>{sku}</p>
            <p>{stock}</p>
        </div>
 */
    )

}

export default Producto