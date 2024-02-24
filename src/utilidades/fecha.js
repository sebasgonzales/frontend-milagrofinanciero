import React from 'react'

export function obtenerFechaFormateada() {
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1;
    const dia = fechaActual.getDate();
    const horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();
    const milisegundos = fechaActual.getMilliseconds();
    const horasFormateadas = horas < 10 ? '0' + horas : horas;
    const minutosFormateados = minutos < 10 ? '0' + minutos : minutos;
    const segundosFormateados = segundos < 10 ? '0' + segundos : segundos;

    return `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}T${horasFormateadas}:${minutosFormateados}:${segundosFormateados}.${milisegundos}Z`;
}
