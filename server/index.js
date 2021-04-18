import express from "express";
import mongoose from 'mongoose';
import cors from "cors";
import algolia from 'algoliasearch';


import contactRoutes from './routes/contacts.js';

const app = express();
const client = algolia('FIM60MKDNL', '62002d4f3a380e257335f8e130078701');
const index = client.initIndex('XD');


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/contacts', contactRoutes);


const CONNECTION_URL = 'mongodb+srv://Victor:victor123@cluster0.6y876.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
 .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
 .catch((error) => console.log(error.message));



 mongoose.set('useFindAndModify', false);