import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {address, value}  from '../actions';
import {obj} from '../actions'
export default function AddressForm() {

const [val,setVal] = useState({
  fn: "",
  ln: "",
  add: "",
  state: "",
  city: "",
  country: "",
  zipcode: ""
})
const {fn,ln,add,state,city,country,zipcode} = val

function handleChange(e){

      setVal({
        ...val,
        [e.target.name]: e.target.value
      })

}

function clicks(e){
  let txt = ""
  e.preventDefault()
  if(fn.length<2){
    document.getElementById("success").className = "text-danger"
    txt = "Fill Firstname"
  }
  else if(ln.length<2){
    document.getElementById("success").className = "text-danger"
    txt = "Fill Lastname"
  }
  else if(add.length==0){
    document.getElementById("success").className = "text-danger"
    txt = "Fill Address"
  }
  else if(city.length<1){
    document.getElementById("success").className = "text-danger"
    txt = "Fill city"
  }
  else if(country.length<1){
    document.getElementById("success").className = "text-danger"
    txt = "Fill country"
    
  }
  else if(zipcode.length!=6){
    document.getElementById("success").className = "text-danger"
    txt = "Zipcode minimum length must be of 6"
    
  }


  else{
    
    obj.object = {"fn":fn,
  "ln":ln,
  "address":add,
  "city":city,
  "country":country,
  "zipcode":zipcode}
  document.getElementById("success").className = "text-success"
   txt = "Details added successfully"

}

document.getElementById("success").innerHTML = txt;

}


  return (
    
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="fn"
            value={fn}
            label="First name"
            fullWidth
            autoComplete="given-name"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="ln"
            value={ln}
            label="Last name"
            fullWidth
            autoComplete="family-name"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="add"
            value={add}
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            onChange={handleChange}
          />
        </Grid>
        
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            value={city}
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" value={state} label="State/Province/Region" fullWidth onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zipcode"
            value={zipcode}
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            value={country}
            label="Country"
            fullWidth
            autoComplete="shipping country"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />
         
          }
            
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
      <p className="text-success" id="success"></p>
      <button onClick={clicks} className="text-muted" style={{width:"20%",height:"30px",color:"",border:"none",boxShadow:"1px 1.4px 1px 1.4px"}}>Add</button>
    </React.Fragment>
  );
}