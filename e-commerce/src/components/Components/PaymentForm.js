import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { payment } from '../actions';
export default function PaymentForm() {
  const [state, setstate] = useState({
    cardname:"",
    cardnumber:"",
    expirydate:"",
    cvv:""
  })
  const {cardname,cardnumber,expirydate,cvv} = state
  function handleChange(e){
    setstate(
      {
        
        ...state,
        [e.target.name]:e.target.value
      
      }
      
      )

  }
  function Clicks(){
    let txt = ""
    if(cardnumber.length!=12){
      txt = "Cardnumber must be of length 12"
      document.getElementById("success").className = "text-danger"
    }
    else if(cardname.length==0){
      txt = "Enter Card holder name"
      document.getElementById("success").className = "text-danger"
    }
    else if(expirydate.length==0){
      txt = "Enter expiry date"
      document.getElementById("success").className = "text-danger"
    }
    else if(cvv.length!=4){
      txt = "Length of cvv must be 4"
      document.getElementById("success").className = "text-danger"
    }

    else {
      payment.pay = {
        "cardnumber":cardnumber,
        "cardname":cardname,
        "expirydate":expirydate,
        "cvv":cvv
      }
  txt = "Details added successfully"
  document.getElementById("success").className = "text-success"
}
  document.getElementById("success").innerHTML = txt;
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" name="cardname" value={cardname} onChange={handleChange} label="Name on card" fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            value={cardnumber}
            name = "cardnumber"
            onChange={handleChange}
            label="Card number"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" value={expirydate} onChange={handleChange} name="expirydate" label="Expiry date" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            value={cvv}
            name = "cvv"
            onChange={handleChange}
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
      <p className="text-success" id="success"></p>
      <button onClick={Clicks} className="text-muted" style={{width:"20%",height:"30px",color:"",border:"none",boxShadow:"1px 1.4px 1px 1.4px"}}>Add</button>
    </React.Fragment>
  );
}