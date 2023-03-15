//as we are using mongoose  for creating schema so we need to require mongoose
const mongoose= require('mongoose');

//way of defining Schema
const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        reuired:true
    },
    phone:{
        type:String,
        required:true
    }
});

//giving the name for collection in data base that is contact and linking it with schema
//collection name should start with capital letter
// const Contact = mongoose.model('Contact',contactSchema);
const Contact=mongoose.model('Contact',contactSchema);
 module.exports=Contact;

//exporting collection
// module.exports=Contact;