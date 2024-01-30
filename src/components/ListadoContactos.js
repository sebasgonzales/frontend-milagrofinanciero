
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react'

const ListadoContactos = () => {

    //VARIABLES

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    //TRAIGO DATOS DE LA BD
    const getData = () => {
        axios.get('https://localhost:7042/Cuenta/cuentas/Numero/6655443322/Contacto')
            .then((result) => {
                setData(result.data)
            })
            .catch((error) => {
                console.log("Error al obtener la información de los contactos")
            })
    }

    

  return (
    <Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Banco</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 ? data
                            .map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.nombre}</td>
                                        <td>
                                            {item.banco}
                                        </td>
                                       {/* <td colSpan={2}>
                                            <button className='btn btn-primary' onClick={() => handleShow(item)}>Ver Detalle</button>
                                </td>*/}
                                    </tr>
                                );
                            })
                        : 'Loading...'
                    }
                </tbody>
            </Table>
            
        </Fragment>
  )
}

export default ListadoContactos