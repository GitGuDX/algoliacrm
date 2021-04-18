import mongoose from 'mongoose';
import algoliasearch from 'algoliasearch';

const client = algoliasearch('FIM60MKDNL', '62002d4f3a380e257335f8e130078701');
const index = client.initIndex('XD');






const contactSchema = mongoose.Schema({
    email:  String,
    firstName:   String, 
    lastName: String, 

});



const contactContent = mongoose.model('contactContent', contactSchema);






export default contactContent;