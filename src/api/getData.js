import React from 'react'
import { useState } from 'react';
import axios from "axios";

  //declaraciones


// CONTACTOS ///////////////////////////////
export const getDataIdContacto = async (cuentaSeleccionada, setDataId) => {
  try {
    const result = await axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cuenta/cuentas/Numero/${cuentaSeleccionada}/Contacto`);
    setDataId(result.data);
  } catch (error) {
    console.log("Error al obtener la información de los contactos:", error.message);
    throw new Error("Error al obtener la información de los contactos");
  }
};

// // Definición de getBancoId
// export const getIdBanco= (nombreBanco, setIdBanco, toast) => {
//   try {
//     const response = axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Banco/IdxNombre/${nombreBanco}`);
//     setIdBanco(response.data.id); // Asigna el IdBanco obtenido
//   } catch (error) {
//     console.error('Error al obtener el IdBanco:', error.message);
//     toast.error('Error al obtener el IdBanco');
//   }
// }

// export const getDataIdCuenta = (cuentaSeleccionada, setDataIdCuenta) => {
//   axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cuenta/IdxNumeroCuenta/${cuentaSeleccionada}`)
//       .then((result) => {
//           setDataIdCuenta(result.data.id)
//       })
//       .catch((error) => {
//           console.log(console.error('Error al obtener ids de la cuenta:', error.message))
        
//           throw new Error("Error al obtener la informacion de la cuenta");
//       });
// };

//////////////////////////TRANSACCIONES ///////////7
export const getDataTransacciones =  (cuentaSeleccionada, setData) => {
 axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Transaccion/HistorialTransacciones/${cuentaSeleccionada}`)
      .then((result) => {
      
          setData(result.data)
      })
      .catch((error) => {
          console.log("Error al obtener la información de las transferencias")
      })
}

 export const getDataIdCuenta = (cuentaSeleccionada, setDataIdCuenta, toast) => {
    axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cuenta/IdxNumeroCuenta/${cuentaSeleccionada}`)
        .then((result) => {
            setDataIdCuenta(result.data.id)
        })
        .catch((error) => {
            console.log(console.error('Error al obtener ids de la cuenta:', error.message))
            toast.error('Error al obtener la informacion de la cuenta');
        });
};

 // OBTENGO EL ID DE LA CUENTA DESTINO A TRAVES DEL CBU --------------
 export const obtenerCuentaDestino = async (CbuDestino) => {
  try {
    //la var response almacena la respuesta del servidor
    const response = await axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cuenta/IdxCbu/${CbuDestino}`);
    const cuentaId = response.data.id;
    console.log('ID de la cuenta destino:', cuentaId); // Mostrar en consola
    return cuentaId;
  } catch (error) {
    throw new Error(`Error al obtener la cuenta destino: ${error.message}`);
  }
};

export const getDataTipoMotivo = (setDataMotivo) => {
  axios.get('https://colosal.duckdns.org:15001/MilagroFinanciero/TipoMotivo')
    .then((result) => {
      // Asignamos identificadores únicos a los motivos en el frontend porque el dto no muestra el id
      const dataWithIds = result.data.map((motivo, index) => ({ id: index + 1, nombre: motivo.nombre }));
      setDataMotivo(dataWithIds);
    })
    .catch((error) => {
      console.log("Error al obtener la información de los tipos de motivo");
    });
};

/////-------------------LISTADO CUENTAS--------------------------//////////////////
export const getClienteCuentas = (cuitCuil, setClienteCuentas) => {
  axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cliente/clientes/CuitCuil/${cuitCuil}/ClienteCuenta`)
  .then((result) => {
      const cuentas = result.data.map(cuenta => cuenta.numeroCuenta);
      setClienteCuentas(cuentas);

  })
  .catch((error) => {
      console.log("Error al obtener la información de las cuentas");
  });
}


/////////////////-----------------------SALDO---------///////////
export const getSaldo = async (cuentaSeleccionada, setSaldo, setError, setIsLoading) => {
  try {
    const response = await axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Transaccion/saldo/${cuentaSeleccionada}`);
    setSaldo(response.data.saldoTotal);
  } catch (error) {
    setError("Error al obtener el saldo");
  } finally {
    setIsLoading(false);
  }
};

export const getSaldoDeCuentas = (numeroCuenta, setSaldo) => {
  axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Transaccion/saldo/${numeroCuenta}`)
    .then((result) => {
      setSaldo(result.data.saldoTotal);
    })
    .catch((error) => {
      console.log("Error al obtener la información de las cuentas");
    });
}

///////////////----------------USUARIO----------------/////
export const getUsuario = async (cuitCuil, setUsuario) => {
  try {
    // Ajustada la Logica.
    const response = await axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cliente/clientes/Nombre/${cuitCuil}/Cliente`);
    console.log(response.data)
    setUsuario(response.data);
  } catch (error) {
    console.log("Error al obtener información del usuario", error);
  }
};

