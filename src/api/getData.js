import React from 'react'
import { useState } from 'react';
import axios from "axios";

  //declaraciones


//
export const getDataIdContacto = async (cuentaSeleccionada, setDataId) => {
  try {
    const result = await axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Cuenta/cuentas/Numero/${cuentaSeleccionada}/Contacto`);
    setDataId(result.data);
  } catch (error) {
    console.log("Error al obtener la información de los contactos:", error.message);
    throw new Error("Error al obtener la información de los contactos");
  }
};

// Definición de getBancoId
export const getIdBanco= (nombreBanco, setIdBanco, toast) => {
  try {
    const response = axios.get(`https://colosal.duckdns.org:15001/MilagroFinanciero/Banco/IdxNombre/${nombreBanco}`);
    setIdBanco(response.data.id); // Asigna el IdBanco obtenido
  } catch (error) {
    console.error('Error al obtener el IdBanco:', error.message);
    toast.error('Error al obtener el IdBanco');
  }
}
