//controller contact 
const {contactClass} = require("../Class/contacts.class");
const Ajv = require("ajv");
const ajv = new Ajv()   
const schema = {
    type: "object",
    properties: null,
    required: [],
    additionalProperties: false,
}

const comment = 
{
    body:{type: "string"},
    id:{type: "string"}
}

const task = 
{
    body:{
        type: "object",
        properties: {
            title:{
                type: "string",
            },
            last_date:{
                type: "string",
            }
        },    
    },
    id:{type: "string"}
}

const contact =
{
    name: {type: "string"},
    lastname: {type: "string"},
    email: {type: "string"},
    phone: {type: "string"},
    date: {type: "string"},
    adress: {type: "string"},
    contactType: {type: "string"},
    origin: {type: "string"}
}


exports.getContacts = async (req, res)=>{
    const data = await contactClass.getContacts();
    return res.status(data.status).json(data.data);  
}

exports.saveContact = async (req, res)=>{
    schema.properties = contact;
    schema.required=["name","lastname","email","phone","date","adress","contactType","origin"];
    const validator = ajv.compile(schema);
    
    const contactData = req.body;
    console.log(validator(contactData));
    if(validator(contactData)){
        const data = await contactClass.saveContact(contactData);
        return res.status(data.status).json(data.data)   ;
    }

    
    return res.status(400).json({msj:"Datos invalidos o incompletos"});
}

exports.addComment = async (req, res)=>{
    schema.required=["body", "id"];
    schema.properties=comment;
    const validator = ajv.compile(schema);
    //console.log(schema);

    const commentData = req.body;

    if(validator(commentData)){
        const data = await contactClass.addComment(commentData.id, commentData.body);
        return res.status(data.status).json(data.data);
    }
    return res.status(400).json({msj:"Datos invalidos o incompletos"});
}

exports.addTask = async (req, res)=>{
    schema.required=["id"];
    schema.properties=task;
    const validator = ajv.compile(schema);
    //console.log(schema);

    const taskData = req.body;
    if(validator(taskData)){
        const data = await contactClass.addTask(taskData.id, taskData.body);
        return res.status(data.status).json(data.data);
    }
    return res.status(400).json({msj:"Datos invalidos o incompletos"});
}

exports.deleteContact = async (req, res)=>{
    const id = req.params.id;
    if(id){
        const data = await contactClass.deleteContact(id)
        return res.status(data.status).json(data.data);
    }
    return res.status(400).json({msj:"Datos invalidos o incompletos"});
}
