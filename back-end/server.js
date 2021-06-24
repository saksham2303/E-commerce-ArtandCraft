import express from 'express'
import Signup from './newRoute.js'
import Login from './noteRouteit.js'
import connectdb from './db.js'
import Cors from 'cors'
import MyCart from './Cart.js'
import Addprodt from './Addproduc.js'
import Addcollection from './Addcollection.js'
import BuyProd from './buy.js'
const app = express();
const port = process.env.PORT || 5001;

import fileUpload from 'express-fileupload';
connectdb()




app.use(fileUpload());

// app.use(express.methodOverride());
// app.use(express.multipart());
app.use(express.json({extended: false}));
app.use(express.static("public"))
app.use(Cors());

app.use("/receive/register", Signup);
// app.get("/", (req,res) => res.status(200).send("Saksham World"));
app.use("/receive/getdata", Login);
app.use("/", Addprodt)
app.use("/", Addcollection)
app.use("/", MyCart)
app.use("/",BuyProd)
// app.use("/addinfo", addinfo)




app.listen(port, () => console.log(`listening to ${port}`));