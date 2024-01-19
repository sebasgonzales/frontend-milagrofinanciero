import React,{useState,useEffect, Fragment} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
const ListadoTransferencias = () => {

        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      

    const transdata = [
        {
            id: 1,
            monto: 10000,
            numero: 1,
            acreditacion: "2023-10-04",
            realizacion: "2023-10-04",
            motivo: "Varios",
            referencia: "a",
            cuentaDestino: 987654321,
            cuentaOrigen: 123456789,
            tipoTransaccion: "Programada"
        }
    ]

    const [data,setData] = useState([]);

    useEffect(()=>{
        getData();
    },[])

    const getData = () =>{
        axios.get('https://localhost:7042/Transaccion')
        .then((result)=>{
            setData(result.data)
        })
        .catch((error)=>{
            console.log("Error al obtener la información de las transferencias")
        })
    }

  return (
    <Fragment>
        <Table striped bordered hover>
      <thead>
        <tr>
            <th>#</th>
            <th>Cuenta Destino</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
            data && data.length > 0 ?
                data.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.cuentaDestino}</td>
                            <td>{item.monto}</td>
                            <td>{item.realizacion}</td>
                            <td colSpan={2}>
                                <button className='btn btn-primary' onClick={handleShow}>Detalle</button>
                                    
                            </td>
                        </tr>
                    )
                })
                :
                'Loadig...'
        }

        
      </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Detalle</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            {
            data && data.length > 0 ?
                data.map((item)=>{
                    return(
                        <div>
                            <h6>Número de Operacion: {item.numero}</h6>
                            <h6>Monto: {item.monto}</h6>
                            <h6>Número de Cuenta: {item.cuentaDestino}</h6>
                            <h6>Motivo: {item.motivo}</h6>
                            <h6>Referencia: {item.referencia}</h6>
                            <h6>Fecha de realizacion: {item.realizacion}</h6>
                            <h6>Fecha de acreditacion: {item.acreditacion}</h6>
                            <h6>Tipo de Transferencia: {item.tipoTransaccion}</h6>
                        </div>                     
                    )
                })
                :
                'Loadig...'
        }

                

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </Fragment>
  )
}
export default ListadoTransferencias;