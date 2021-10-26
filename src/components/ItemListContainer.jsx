import ItemList from './ItemList';
import jsonpack from './data.json';
import { useParams } from "react-router-dom";
import React, {useState} from 'react';


const ItemListContainer = ({name}) => {
    
    const {categoryid}=useParams();
    
    const[cat]=useState(categoryid);
    
    const[item,setItems]=useState([])
    
    const call = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(jsonpack)
        },2000)
    })
    
        call.then(response=> {
            setItems(response)
    })

    console.log(cat);

        return (
            <div name="test">
                <div className="fondo">
                    {name}
                    <ItemList items={item}/>
                </div>
            </div>
        )
    }

export default ItemListContainer;