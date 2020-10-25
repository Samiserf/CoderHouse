import React from 'react';
import {
    BrowserRouter as 
    Link, NavLink,useParams
  } from "react-router-dom";
import './footer.css'

function Footer(props) {
    return (
        <footer className="containerFooter">
            <div className="col-1">
                <h3>Información</h3>
                <ul>
                    <li><a href="#">Términos y condiciones</a></li>
                    <li><a href="#">Mi cuenta</a></li>
                    <li><a href="#">Nosotros</a></li>
                </ul>
            </div>
            <div className="col-3">
                <h3>Seguinos</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
        </footer>
    );
  }
  
  export default Footer;