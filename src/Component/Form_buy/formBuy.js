import React, { useState, useContext, useEffect } from "react";
import DatosForm from "./datos_form";
import "./formBuy.css";
import { CartContext } from "../../Context/CartContext";
import { getFirestore } from "../../Firebase/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

function FormBuy() {
  const [send, setSend] = useState(false);
  const [cart] = useContext(CartContext);
  const [processOrder, setProcessOrder] = useState(false);
  const [banderaCart, setBanderaCart] = useState(true);

  const [datos, setDatos] = useState({
    fullName: null,
    phone: null,
    mail: null,
    verifyMail: null,
    dir: null,
    cp: null,
    card: null,
    expireCart: null,
    securityCode: null,
  });

  function handleSubmit(e) {
    e.preventDefault();
    setSend(true);
  }

  useEffect(() => {
    console.log("entra send");
    console.log(send);
    if (
      datos.fullName != null &&
      datos.phone != null &&
      datos.mail != null &&
      datos.verifyMail != null &&
      datos.dir != null &&
      datos.cp != null &&
      datos.card != null &&
      datos.expireCart != null &&
      datos.securityCode != null
    ) {
      if (datos.verifyMail != datos.mail) {
        document.getElementById("verifyMail").innerHTML =
          "Los campos de mail no coinciden.";
      } else {
        console.log("entra else");
        const db = getFirestore();
        const order = db.collection("Ordenes");
        var date = new Date();
        cart.map((itemCurrent, i) => {
          const dataOrden = {
            buyer: datos,
            idItem: cart[i],
            fecha: date,
          };
          // Add a new document in collection
          order.add(dataOrden).then(({ id }) => {
            cart.splice(0, 1);
            banderaCart ? setBanderaCart(false) : setBanderaCart(true);
            console.log(cart);
            // alert("Se genero tu órden. Número de seguimiento: " + id + "con fecha :" + dataOrden.fecha);
            alert(
              "Se genero tu órden. Número de seguimiento: " +
                id +
                "con fecha :" +
                dataOrden.fecha
            );

            window.location = "/";
          });

          const items = db.collection("items").doc(cart[i].id);
          var actualizarStock = items.update({
            stock: cart[i].stock - cart[i].cantidad,
          });
        });
      }
    }
  }, [send]);

  function handleChange(e) {
    e.persist();
    setDatos((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="conteinerForm">
      <form>
        <div className="conteinerInfo">
          <div className="flex">
            <div className="datosPersonales">
              <h2 id="datosPersonales">Datos personales</h2>
              <DatosForm
                onChange={handleChange}
                type="text"
                placeholder="Nombre y apellido"
                datos={datos.fullName}
                send={send}
                setSend={setSend}
                name="fullName"
              />
              <DatosForm
                onChange={handleChange}
                type="number"
                placeholder="Telefono de contacto"
                datos={datos.phone}
                send={send}
                setSend={setSend}
                name="phone"
              />
              <DatosForm
                onChange={handleChange}
                type="mail"
                placeholder="Ingresa tu email"
                datos={datos.mail}
                send={send}
                setSend={setSend}
                name="mail"
              />
              <DatosForm
                onChange={handleChange}
                type="mail"
                placeholder="Ingresa nuevamente tu email"
                datos={datos.verifyMail}
                send={send}
                setSend={setSend}
                name="verifyMail"
              />
              <span id="verifyMail"></span>
              <DatosForm
                onChange={handleChange}
                type="text"
                placeholder="Domicilio"
                datos={datos.dir}
                send={send}
                setSend={setSend}
                name="dir"
              />
              <DatosForm
                onChange={handleChange}
                type="number"
                placeholder="Código postal"
                datos={datos.cp}
                send={send}
                setSend={setSend}
                name="cp"
              />
            </div>
            <div className="datosCompra">
              <h2>Datos de la compra</h2>
              <DatosForm
                onChange={handleChange}
                type="number"
                placeholder="Tarjeta NRO"
                datos={datos.card}
                send={send}
                setSend={setSend}
                name="card"
              />
              <DatosForm
                onChange={handleChange}
                type="date"
                placeholder="Fecha vencimiento"
                datos={datos.expireCart}
                send={send}
                setSend={setSend}
                name="expireCart"
              />
              <DatosForm
                onChange={handleChange}
                type="number"
                placeholder="Código seguridad"
                datos={datos.securityCode}
                send={send}
                setSend={setSend}
                name="securityCode"
              />
            </div>
          </div>
          <div className="container-buttons">
            <button
              className="enviar"
              onClick={(e) => handleSubmit(e)}
              type="submit"
              value="Enviar"
            >
              Enviar
            </button>
            <Link to="/cart">
              <button className="cancelar">Cancelar</button>
            </Link>
          </div>
        </div>
      </form>
      <img src="https://cdn.pixabay.com/photo/2017/09/18/08/56/credit-card-2761073_960_720.png"></img>
    </div>
  );
}

export default FormBuy;
