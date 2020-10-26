import React, { useState } from 'react';
import './filtroHome.css';
import NotFound from '../../images/3747371.jpg'
import header from '../../images/header_03.jpg'
import Input from '../Input/input'
import {getFirestore} from '../../Firebase/index'

function FiltroHome(props) {

  const [bandera,setBandera] = useState(true)


    function categoryChange(e){
      const db = getFirestore();
      let itemFiltered = null;
      if(!e.target.value){
        itemFiltered = db.collection('items');
        console.log("esa")
      } else{
        console.log("if2")
        itemFiltered = db.collection('items').where('category','==',e.target.value)
      }

      itemFiltered.get()
      .then((response) => {
          if(response.size == 0 ){
            setBandera(false);
            props.updateData([]);
            console.log("NO HAY DATA");
          }
          else{
            props.updateData(response.docs.map( (doc) => {return({id:doc.id,...doc.data()});
          }))
          }
      })
      .catch ( (error) => {console.log("Algo fallo", error);} )
      }

    if(bandera == false){
      return (
        <img src={NotFound}></img>
        )
    }else{
    return (
      <div className="content-header">
        <span id="filtrar">Filtrar</span>
            <select onChange={categoryChange} placeholder="Filter by region" name="continent" id="continent">
                <option value="">Todo</option>
                <option value="phones">Celulares</option>
                <option value="headphones">Auriculares Gamer</option>
                <option value="notebook">Notebooks</option>
            </select>
        
      </div>
    );
  }
}
  
  export default FiltroHome;