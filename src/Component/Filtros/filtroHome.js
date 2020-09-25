import React, { useState } from 'react';
import './filtroHome.css';
import NotFound from '../../images/3747371.jpg'
import Input from '../Input/input'


function FiltroHome(props) {

  const [bandera,setBandera] = useState(true)

  // function compareVowel(letra){
  //   const notAllowedChars = new RegExp('[a | e | i | o | u]');
  //   if(notAllowedChars.test(letra)){
  //     return true;
  //   }return false;
  // }

  // function onKeyDown(e){
  //   if(compareVowel(e.key)){
  //     e.preventDefault();}
    
  //   console.log(e.key);
  // }

    function changeName(e){

      if(e.target.value == '' | e.target.value == '  '){e.preventDefault(); e.stopPropagation();}
      else{
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${e.target.value}`)

      .then(response => {return response.json() })

      .then(response => {
            if(response.status=='404'){
              setBandera(false);
              props.updateData([]);
            }else{
              props.updateData(response.results)
            }
      })
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