const express = require('express');
const app = express();
const {contactRouter} = require("./Routers/index.routes");
const cors = require('cors');
//const {notFound} = require("./middleware/routeNotFound.js");

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/contacts/", contactRouter);

//app.use(notFound);

const PORT = 3001;
app.listen(PORT, ()=>console.log(`App start on http://localhost:${PORT}`));
