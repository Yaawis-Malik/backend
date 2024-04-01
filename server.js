import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';


// const storage = multer.diskStorage({
//     destination: './images/' ,
//     filename: (req, file, cb) => {
//         cb(null, Date.now(+file+orignalname))
//         cb(null, file.orignalname)
//     }
//   });

  
//   const upload = multer({ 
//     storage: storage 
// });

import userRoutes from './routes/user.route.js';
import clientRoutes from './routes/client.route.js';

const app = express();




app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/users', userRoutes);
app.use('/client', clientRoutes);



const CONNECTION_URL = 'mongodb+srv://dev:zeeshan123a.@brand-surge.qeeoiz3.mongodb.net/?retryWrites=true&w=majority&appName=Brand-Surge';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () => console.log(`server is running on ${PORT}`))).catch((error) => console.log(error.message));