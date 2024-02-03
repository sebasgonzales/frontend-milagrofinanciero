const getAllCuentas = async (req, res) => {
    try {
        console.log('Recibida solicitud para obtener todas las cuentas');

        
        const cuentas = await cuentas.find();  

        // Formatear las cuentas según sea necesario
        const cuentasFormateadas = cuentas.map(cuenta => ({
            NumeroCuenta: cuenta.NumeroCuenta,
            
        }));

        // Devolver las cuentas formateadas
        res.json(cuentasFormateadas);
    } catch (error) {
        console.error('Error al obtener las cuentas:', error);
        res.status(500).send('Error interno del servidor');
    }
}

module.exports = {
    getAllCuentas
};
