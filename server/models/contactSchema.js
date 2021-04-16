import mongoose from 'mongoose';




// Pass `{algoliaIndex: true}` to push theses attributes for indexing to Algolia

const contactSchema = mongoose.Schema({
    email:  String,
    firstName:   String, 
    lastName: String, 

});



const contactContent = mongoose.model('contactContent', contactSchema);

export default contactContent;