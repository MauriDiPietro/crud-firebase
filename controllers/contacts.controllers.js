const db = require("../db/db.js");

const query = db.collection('contacts')

const getAllContacts = async(req, res) =>{
    try {
        const contactsAll = await query.get();
        console.log(contactsAll)
        const contacts = contactsAll.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          res.json(contacts)
    } catch (error) {
        
    }
}

const createContact = async(req, res) =>{
    try {
        const { firstname, lastname, email } = req.body;
        await query.add({
          firstname,
          lastname,
          email
        });
        res.json({message: 'create ok'})
    } catch (error) {
        console.log(error)
    }
}

const updateContact = async(req, res) =>{
    try {
        const { firstname, lastname, email } = req.body;
        const { id } = req.params;
        await query
          .doc(id)
          .update({ firstname, lastname, email });
        res.json(req.body)
    } catch (error) {
        
    }
}

const deleteContact = async(req, res) =>{
    try {
        const { id } = req.params;
        await query.doc(id).delete();
        res.json({message: 'contact deleted'})
    } catch (error) {
        console.log(error)
    }
}

const getContactById = async(req, res) =>{
    try {
        const { id } = req.params;
        const obj = await query.doc(id).get();
        console.log(obj)
        const contact = {
            id: obj.id,
            ...obj.data(),
          };
        res.json(contact)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllContacts,
    createContact,
    updateContact,
    deleteContact,
    getContactById
}