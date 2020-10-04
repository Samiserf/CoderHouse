import React, { useState } from 'react';
import './filtroHome.css';
import NotFound from '../../images/3747371.jpg'
import Input from '../Input/input'
import {getFirestore} from '../../Firebase/index'

function FiltroHome(props) {

  const [bandera,setBandera] = useState(true)

    function changeName(e){

      if(e.target.value == '' | e.target.value == '  '){e.preventDefault(); e.stopPropagation();}
      else{
        const db = getFirestore();
        const itemColection = db.collection('items');
        const itemFiltered = itemColection.where('title','in',e.target.value)

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
      
    }

    function handleChange(e){

      fetch(`https://restcountries.eu/rest/v2/region/${e.target.value}`)

      .then(response => {return response.json()})

      .then(response => {
        props.updateData(response);
      })
    }

    if(bandera == false){
      return (
        <img src={NotFound}></img>
        )
    }else{
    return (
      <div className="content-header">
            <div className="content-search">
              {/* <input onChange={changeName} placeholder="Search for a country"></input> */}
              <Input changeName={changeName} />

              {/* <i class="fa fa-search"></i> */}
            </div>
            

            <select onChange={handleChange} placeholder="Filter by region" name="continent" id="continent">
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        
      </div>
    );
  }
}
  
  export default FiltroHome;