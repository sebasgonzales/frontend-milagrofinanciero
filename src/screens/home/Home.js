import React from 'react'
import ListadoTransferencias from '../../components/ListadoTransferencias'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div>

      <h1>Esta es la pagina de Home</h1>

      <div className='container text-left'>
        <div className='row align-items-center'>
          <div className='col-8'>
            <h1>Bienvenido Usuario</h1>
            <div className='row align-items-center'>
              <div className='text-center'>
               <p class="fs-3">Cuenta N° 123456789</p>
               <div class="container text-center">
                  <div class="row">
                    <div class="col">
                      <div className='border border-primary'>
                        <div className='margin-right: 10px'>
                          <p>Saldo de la Cuenta</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <Button variant = "primary" size="lg" style={{marginLeft: 5 + 'px'}}>
                        Cambiar Cuenta 
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
 
            </div>
          </div>
          <div className="container text-left">
            <div className="mb-4 justify-content-center">
              <div>
                <p>Act. Reciente</p>
                <Link to="/screens/home/ActividadReciente"> 
                  <Button variant="primary" size="lg" style={{marginLeft: 5 + 'px'}}>
                    Ver todos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='container text-center'>
        <ListadoTransferencias></ListadoTransferencias>
      </div>

    </div>
  )
}

export default Home