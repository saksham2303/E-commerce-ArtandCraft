import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './ViewCollection.css'
import * as ReactBootstrap from 'react-bootstrap'
function ViewCollection() {

const[data,setdata] = useState([])
useEffect(() =>{ async function fetchdata(){

    const req = await axios.get("http://localhost:5001/uploadcollection")
    setdata(req.data)

}
fetchdata()
},[]

)
var i =0;
    return (
        
        <div className="view__collections">
            <div className="collections_">
                
                {data.map(dat =>(
                    

                <div className="collection_">
                   <div className="pic">
                   <img src={"http://localhost:5001/collections/"+dat.collectionimage}/>

                   </div>
                    
                    <div className="picc">
                    <h5 className="text-primary">{dat.collectionname}</h5>
                    <h5 className="text-success">{dat.collectionowner}</h5> 
                    <h5 className="text-secondary">{dat.collectioncategory}</h5>
                    
                    <p className="text-muted">{dat.collectiondescription}</p>
                    <ReactBootstrap.Button 
variant="primary"

type="submit"




>
View More 
</ReactBootstrap.Button>
                    </div>
                    
                </div>
                

                ))}
                


            </div>
            
        </div>
    )
}

export default ViewCollection
