//Class contact 
const { ContactModel } = require('../Models/contact.model');
const mongoose = require("mongoose");
require('dotenv').config();

class Contact {

    constructor() {
        this.MDBURI = process.env.MONGO_URI;
    }

    //get contacts
    async getContacts(filter = false) {
        try {
            await mongoose.connect(this.MDBURI);
            const contacts = filter ? await ContactModel.find().limit(filter.max) : await ContactModel.find();
            return {
                status: 200,
                data: contacts
            };
        } catch (error) {
            console.log(error);
            return {
                status: 500,
                data: error
            };
        } finally {
            await mongoose.disconnect();
        }
    }

    //get contact
    async getContact(id) {
        try {
            await mongoose.connect(this.MDBURI);
            const contact = await ContactModel.findOne({ _id: id })
            return {
                status: 200,
                data: contact
            };
        } catch (error) {
            console.log(error);
            return {
                status: 500,
                data: error
            };
        }finally{
            await mongoose.disconnect();
        }
    }

    //add contact
    async saveContact(data) {
        try {
            await mongoose.connect(this.MDBURI);
            const contact = await ContactModel.insertMany({
                name: data.name,
                lastname: data.lastname,
                email: data.email,
                phone: data.phone,
                date: data.date,
                adress: data.adress,
                contactType: data.contactType,
                origin: data.origin,
                comments: [],
                task: []
            });
            return {
                status: 200,
                data: contact
            };
        } catch (error) {
            return {
                status: 500,
                data: error
            };
        }
        finally {
            await mongoose.disconnect();
        }
    }

    //update contact
    async updateContact(id, data) {
        try {
            await mongoose.connect(this.MDBURI);
            const contact = await ContactModel.findOneAndUpdate({
                _id: id
            }, {
                $set: {
                    name: data.name,
                    lastname: data.lastname,
                    email: data.email,
                    phone: data.phone,
                    date: data.date,
                    adress: data.adress,
                    contactType: data.contactType,
                    origin: data.origin,
                    comments: [],
                    task: []
                }
            });
            return {
                status: 200,
                data: contact
            };
        } catch (error) {
            return {
                status: 500,
                data: error
            };
        } finally {
            await mongoose.disconnect();
        }
    }

    //delete contact
    async deleteContact(id) {
        try {
            await mongoose.connect(this.MDBURI);
            await ContactModel.deleteOne({ id: id });
            return {
                status: 200,
                data: { msj: "Contacto eliminado correctamente" }
            };
        } catch (error) {
            return {
                status: 500,
                data: error
            };
        }
        finally {
            await mongoose.disconnect();
        }
    }

    async addComment(id, data){
        try{
            await mongoose.connect(this.MDBURI);
            //console.log(data);
            const contact = await ContactModel.findById({_id:id});
            //console.log(contact);
            if (contact) {
                contact.comments.push({
                    body:data,
                    date: new Date(),
                });
                const updated = await contact.save();
                return {
                    status:200,
                    data: updated
                }
            }
            return {
                status:404,
                data: {
                    msj: "Usuaio no encontrado"
                }
            }
        }catch(error){
            return {
                status:500,
                data: error
            }
        }finally{
            await mongoose.disconnect();
        }
    }

    async addTask (id, data){
        try{
            await mongoose.connect(this.MDBURI);
            const contact = await ContactModel.findById({_id:id});
            if (contact) {
                contact.task.push({
                    title: data.title,
                    last_date: Date.last_date
                })
                const updated = await contact.save();
                return {
                    status:200,
                    data: updated
                }
            }
            return {
                status:404,
                data: {
                    msj: "Usuaio no encontrado"
                }
            }
        } catch (error) {
            return {
                status:500,
                data: error
            }
        } finally {
            await mongoose.disconnect();
        }
    }

    async searchContact (search){
        try{
            await mongoose.connect(this.MDBURI);
            const contact = await ContactModel.find({
                $or:[
                    {"name": { $regex: '.*' + search.toLowerCase() + '.*' }},
                    {"lastname": { $regex: '.*' + search.toLowerCase() + '.*' }}
                ]
            });
            return {
                status:200,
                data: contact
            }
        } catch (error) {
            return {
                status:500,
                data: error
            }
        } finally {
            await mongoose.disconnect();
        }
    }
}

exports.contactClass = new Contact();