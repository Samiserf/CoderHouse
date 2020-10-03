import React, { useEffect, useState, useContext } from 'react';
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
import {getFirestore} from './Firebase/index'

function App() {

  const [data, setData] = useState([]); 

  const [theme, settheme] = useState(true);
  const [loading,setLoading] = useState(true);

  useEffect( () => { 
        const db = getFirestore();
        const itemColection = db.collection('items');
        // const data = fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055")
        // resolve(data);
        // console.log(data)

    itemColection.get()
    .then((response) => {
        if(response.size == 0 ){
          console.log("NO HAY DATA");
        }
        else{
          setData(response.docs.map( (doc) => {return({id:doc.id,...doc.data()});
        }))
        }
     })
     .catch ( (error) => {console.log("Algo fallo", error);} )
     .finally( () => {
        setLoading(false)
     } )
      

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
