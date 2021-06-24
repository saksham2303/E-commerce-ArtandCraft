import React,{useState,useEffect} from 'react'
import axios from 'axios'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
function Productsinfo() {
    let totalsum = 0
    const [products,setproducts] = useState([]);
  useEffect(() =>{
    async function fetchData(){
    const req = await axios.get(`http://localhost:5001/MyCart?email=${localStorage.getItem('useremail')}`);
    
    
    console.log("data on dahsboard- ",req.data)
    setproducts(req.data);
    

}
fetchData();
        },[])

        products.map(d =>{
            totalsum = totalsum + d.productprice
        })

    return (
        <List disablePadding>
        {products.map((product) => (
            
          <ListItem  key={product.productname}>
            <ListItemText primary={product.productname} />
            <Typography variant="body2">{"₹"+product.productprice}</Typography>
          </ListItem>
        ))}
        
        <ListItem>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" >
          ₹{totalsum}
          </Typography>
        </ListItem>
       
      </List>
    )
}

export default Productsinfo
