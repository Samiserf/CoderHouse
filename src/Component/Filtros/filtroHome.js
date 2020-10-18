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
            <div className="content-search">
              <Input changeName={changeName} />
            </div>
            

            <select onChange={categoryChange} placeholder="Filter by region" name="continent" id="continent">
                <option value="">Todo</option>
                <option value="phones">Celulares</option>
                <option value="headphones">Auriculares Gamer</option>
                
            </select>
        
      </div>
    );
  }
}
  
  export default FiltroHome;