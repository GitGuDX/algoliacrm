import contactContent from '../models/contactSchema.js';
import Contact from '../models/contactSchema.js';
import algoliasearch from 'algoliasearch';


const client = algoliasearch('FIM60MKDNL', 'XXX');
const index = client.initIndex('XD');
export const getContacts = async (req, res) => {
    try {
        const contactContents = await  contactContent.find().lean().exec();
        index.saveObjects(contactContents);
        res.status(200).json(contactContents.toJSON());
       
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createContact = async (req, res) => {
    const contact = req.body;

    const newContact = new contactContent(contact);

    try {
        await newContact.save();
        index.saveObjects(newContact);

        res.status(201).json(newContact.toJSON());
        
    } catch (error) {
        res.status(409).json({ message: error.message });

    }
}
