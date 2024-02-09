import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NumeroDeCuenta = () => {

    
  return (
    <div>NumeroDeCuenta : {nroCuenta}</div>
  )
}

export default NumeroDeCuenta
// Esto es un ejemplo para recuperar la primera cuenta de un array
// const obtenerPrimerNumeroDeCuenta = (listaDeCuentas) => {
//     return listaDeCuentas.length > 0 ? listaDeCuentas[0].numeroCuenta : null;
//   };
  
//   const primerNumeroDeCuenta = obtenerPrimerNumeroDeCuenta(listaDeCuentas);
//   console.log(primerNumeroDeCuenta);
  