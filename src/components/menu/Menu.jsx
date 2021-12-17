import React from 'react'
import Guardar from "../productocomponente/Guardar";
import Mostrar from "../productocomponente/mostrar";
import Pedido from "../Pedido"
import Page404 from './Page404';
import {
    BrowserRouter as Router,
    Routes,
    Link,
    Route
} from "react-router-dom"


const Menu = () => {
    return (
        <div>
           <Router>

            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                <a class="navbar-brand" href="#">Empresa XYZ</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item" >
                            <a class="nav-link" href="/" activeClassName="active">Inicio</a>
                        </li>
                        <li class="nav-item" >
                            <a class="nav-link" href="/mostrar" activeClassName="active">Mostrar</a>
                        </li>
                        <li class="nav-item" >
                            <a class="nav-link" href="/guardar" activeClassName="active">Guardar</a>
                        </li>
                        <li class="nav-item" >
                            <a class="nav-link" href="/pedido" activeClassName="active">Pedido</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route path="*" element={  <Page404></Page404>   }></Route>
                <Route path="/" element={  <Mostrar></Mostrar>   }></Route>
                <Route path="/mostrar"element={  <Mostrar></Mostrar>   }></Route>
                <Route path="/guardar" element={<Guardar></Guardar>}></Route>
                <Route path="/pedido" element={<Pedido></Pedido>}></Route>


            </Routes>

            </Router> 


        </div>
    )
}

export default Menu
