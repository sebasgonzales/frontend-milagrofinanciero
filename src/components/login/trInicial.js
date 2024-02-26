import React from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

const idCuenta = cookies.get('idCuenta');
const cbu = cookies.get('cbu');
const monto = 10000;

const trInicial = () => {
    
    //--FECHA formateada--//

    // Obtener la fecha actual
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1; 
    const dia = fechaActual.getDate();
    const horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();
    const milisegundos = fechaActual.getMilliseconds();
    const segundosFormateados = segundos < 10 ? '0' + segundos : segundos;
    const fechaFormateada = `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}T${horas}:${minutos}:${segundosFormateados}.${milisegundos}Z`;
    //----//

    const dataTInicial = {
        Id: 0,
        Monto: 10000,
        Realizacion: fechaFormateada,
        idTipoMotivo: 1,
        Referencia: "Transaccion Inicial",
        IdCuentaOrigen: 131,
        IdCuentaDestino: idCuenta,
        IdTipoTransaccion: 2,
    };

    const transaccionInicial = async () => {
        try{
            const response = await axios.post(`https://colosal.duckdns.org:15001/MilagroFinanciero/Transaccion?numeroCuentaOrigen=111396740353&cbuDestino=${cbu}&monto=${monto}`, dataTInicial);
            console.log('Respuesta de la transacción:', response.data);
            console.log('Saldo data :', response.data.Monto, 'Saldo por parametro :', monto);
            console.log('TRANSACCION REALIZADA!!')
        } catch (error) {
            console.log("Error al realizar la transacción", error);
        }
    }

  return (
    {transaccionInicial}
  )
}

export default trInicial