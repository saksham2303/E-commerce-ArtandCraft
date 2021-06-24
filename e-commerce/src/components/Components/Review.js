import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { obj } from '.././actions';
import { payment } from '.././actions';
import { products } from '.././actions';
import axios from 'axios'
import Productsinfo from './Productsinfo';


function Da(){
  const [data,setData] = useState([]);
  useEffect(() =>{
    async function fetchData(){
    const req = await axios.get(`http://localhost:5001/MyCart?email=${localStorage.getItem('useremail')}`);
    
    
    console.log("data on dahsboard- ",req.data)
    setData(req.data);
    

}
fetchData();
        },[])

let name = ""
let price = ""
let sumtotal = 0
data.map(dat =>{
 name=dat.productname
 price = dat.productprice
 sumtotal = dat.productprice + sumtotal
 products.push({"name":name, "price":price, "total":sumtotal})
})

      }
const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      {/* <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            Rs. 500
          </Typography>
        </ListItem>
       
      </List> */}
      <Productsinfo/>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{obj.object.fn+" "+obj.object.ln}</Typography>
          <Typography gutterBottom>{obj.object.address}</Typography>
          <Typography gutterBottom>{obj.object.city+", "+obj.object.country}</Typography>
          <Typography gutterBottom>{obj.object.zipcode}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            
              <React.Fragment key={payment.cvv}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.pay.cardname}</Typography>
                  <br/>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.pay.cardnumber}</Typography>
                </Grid>
              </React.Fragment>
           
          </Grid>
        </Grid>
      </Grid>
       </React.Fragment>
  );
}