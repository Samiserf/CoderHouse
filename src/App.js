import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Component/Nav/nav'
import FiltroHome from './Component/Filtros/filtroHome'
import CartList from './Component/CartList/cartList'
import CountryDetail from './Component/countryDetail/countryDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {CartProvider} from './Context/CartContext'
import Loading from './images/loading.gif'
import Cart from './Component/Cart/cart'



function App() {

  

  const [data, setData] = useState([]);
  const [theme, settheme] = useState(true);
  const [loading,setLoading] = useState(true);

  useEffect( () => { 

    const task = new Promise((resolve, reject) => {

      setTimeout( () => {

        const data = fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055")
        resolve(data);
        console.log(data)
      },3000);

    });
    task.then((response) => {return response.json() })
    .then(response => {
      setData(response.results)
      setLoading(false)
    });

  },[]);

  function changeTheme(){
    
    if(theme){console.log(theme); settheme(false)}
    else{settheme(true)}
    
  } 

if(loading){
  return <div className="container-loading"><img src={Loading} className="loading"></img></div>
}else{

    return (
      <div className={theme ? "App" : "App-dark"}>
        <Router>
          <CartProvider>
            <NavBar changeTheme={changeTheme}/>
         
          <switch>
            <Route exact path="/">
              <FiltroHome updateData={setData} data={data}/>
              
              < CartList data={data}/>
              
            </Route>
            <Route exact path="/pais/:id" component={CountryDetail}/>
            <Route exact path="/cart" component={Cart}/>
          </switch>
          </CartProvider>  

        </Router>
      </div>
    );
  }
}

export default App;
