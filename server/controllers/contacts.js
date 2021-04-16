import contactContent from '../models/contactSchema.js';
import Contact from '../models/contactSchema.js';
import algoliasearch from 'algoliasearch';


const client = algoliasearch('FIM60MKDNL', 'ff22308b9c74a2d8b8b9ad60ed4365f7');
const index = client.initIndex('XD');
export const getContacts = async (req, res) => {
    try {
        const contactContents = await  contactContent.find();

        res.status(200).json(contactContents);
    } catch (error) {
        res.status(404).json({ message: error.nessage})
    }
}

export const createContact = async (req, res) => {
    const contact = req.body;

    const newContact = new contactContent(contact);

    try {
        await newContact.save();
        index.saveObjects(JSON.stringify(newContact));
        res.status(201).json(newContact);
        
    } catch (error) {
        res.status(409).json({ message: error.message });

    }
}