import React, { useEffect, useState , useContext } from 'react';
import './productDetail.css';
import {
    BrowserRouter as 
    Link, NavLink,useParams
  } from "react-router-dom";
import Button from '../Button/button'
import Loading from './../../images/loading.gif'
import {getFirestore} from '../../Firebase/index'
import {CartContext} from '../../Context/CartContext';


function ProductDetail(props) {

    const [cart,setCart,increaseCart] = useContext(CartContext);

    const [desc,setDesc] = useState([]);
    const [countItem,setCountItem] = useState(0);
    //state loading
    const [loading,setLoading] = useState(true);
    const [existProduct,setExistProduct] = useState(true);

    let { id } = props.match.params;

    useEffect( () => { 
        console.log(id);
        const db = getFirestore();
        const itemDoc = db.collection('items');
        const itemColection = itemDoc.doc(id);
        // const itemId = itemColection.where('{docs.id}', '==', 'nuevo');

        itemColection.get()
        .then((doc) => {
            if(!doc.exists){

                console.log("No existe el documento");
                setExistProduct(false);
            }
            else{
                console.log("Item encontrado");
                setDesc({id: doc.id, ...doc.data()});
                console.log(doc.data());
            }
        })
        .catch ( (error) => {console.log("Algo fallo", error);} )
        .finally( () => {
            setLoading(false)
        } )
    
    },[id]);

    function HandleIncrease(){
        setCountItem(countItem+1)
    }
    function HandleDecrease(){
        setCountItem(countItem-1)
    }

    if(loading){
        return <div className="container-loading"><img src={Loading} className="loading"></img></div>
    }
    else{
        if(existProduct == false){
            return <div><h3>No existe el producto que desea ver.</h3></div>
        }
        else{

            return (

                <div className="conteiner-desc">
                    <div className="div-back">
                        <Button path="" id="" text="< Back" />
                    </div>
                    <div className="content-CartList">

                            <div className="flag">
                                <img src={desc.image}></img>
                            </div>

                            <div className="description-product">
                                <h1>{desc.title}</h1>
                                <div className="info-product">
                                    <div className="tags_info_countries">
                                        <p>Precio: $<span>{desc.price}</span></p>
                                        <p>Condicion: <span>{desc.condition}</span></p>
                                        <p>Stock: <span>{desc.stock}</span></p>
                                    </div>
                                    <div>
                                        <p>Garantia: <span>{desc.garantia}</span></p>
                                        <p>Color: <span>{desc.color}</span></p>
                                        
                                    </div>
                                </div>
                                <div className="around-countries">
                                <button className="buttonBuy" onClick={() => increaseCart(id)}>
                                    AGREGAR AL CARRITO
                                </button>                            
                                    
                                </div>
                            </div>
                    </div>
                    
            </div>
            );
        }
    }
  }
  
  export default ProductDetail;