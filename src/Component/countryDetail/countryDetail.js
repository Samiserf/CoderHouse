import React, { useEffect, useState } from 'react';
import './countryDetail.css';
import {
    BrowserRouter as 
    Link, NavLink,useParams
  } from "react-router-dom";
import Button from '../Button/button'
import Loading from './../../images/loading.gif'



function CountryDetail(props) {

    const [desc,setDesc] = useState([]);
    const [countItem,setCountItem] = useState(0);
    //state loading
    const [loading,setLoading] = useState(true);

    let { id } = props.match.params;

    useEffect( () => { 


        const task = new Promise((resolve, reject) => {

            setTimeout( () => {
      
              const data =fetch(`https://api.mercadolibre.com/items/${id}`)
              resolve(data);
              console.log(data)
            },1000);
      
          });
          task.then((response) => {return response.json() })
          .then(response => {
            setDesc(response)
            setLoading(false)
          });
    
    },[id]);

    function HandleIncrease(){
        setCountItem(countItem+1)
    }
    function HandleDecrease(){
        setCountItem(countItem-1)
    }

    if(loading){
        return <div className="container-loading"><img src={Loading} className="loading"></img></div>
      }else{

    return (

        <div className="conteiner-desc">
            <div className="div-back">
                <Button path="" id="" text="< Back" />
            </div>
            <div className="content-CartList">

                    <div className="flag">
                        <img src={desc.thumbnail}></img>
                    </div>

                    <div className="description-country">
                        <h1>{desc.name}</h1>
                        <div className="info-country">
                            <div className="tags_info_countries">
                                <p>Titulo: <span>{desc.title}</span></p>
                                <p>Precio: <span>{desc.currency_id} {desc.price}</span></p>
                                <p>MercadoPago: <span>{desc.accepts_mercadopago}</span></p>
                                <p>Garantía: <span>{desc.warranty}</span></p>
                                <p>Cantidad a comprar: {countItem}</p>
                            </div>
                            <div>
                                <p>Última edición: <span>{desc.last_updated}</span></p>
                                
                            </div>
                        </div>
                        <div className="around-countries">
                        <button onClick={HandleDecrease}>-</button><button>Comprar</button> <button onClick={HandleIncrease}>+</button>
                            {/* <p>Relacionados:</p>
                            <div className="List-countries-around">
                                {descBorder.map( (border,i) => (
                                    <Button path="pais/" id={border} text={border} />
                                    ) )}
                                    TO DO
                            </div> */}
                            
                        </div>
                    </div>
            </div>
            
      </div>
    );
    }
  }
  
  export default CountryDetail;