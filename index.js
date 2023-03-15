const express= require('express');
const path= require ('path');
const port=8000;

const db= require('./config/mongoose');

//linking or importing Collection  Contact from contact.js
// const Contact=require('./models/contact.js');
const Contact=require('./models/contact')

const app= express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var contactList=[
{
    name:"Arpan",
    phone:"1111111"
},
{
    name:"Uday",
phone:"8379028700"},

{
    name:"Coding Ninja",
    phone:"9344567"
}
  
    
    
]
 app.get('/',function(req,res){

return res.render('home', {
         title:"Contact List",
        contact_list:contactList
    });
 });
app.get('/practice',function(req,res){
    return res.render('practice',{
        title:"Lets play with EJS",
        
    });
});
app.post('/createcontact',function(req,res){
    // Contact.create({
    //     name:req.body.name,
    //     phone:req.body.phone
    // },function(err,newContact){
    //     if(err){
    //         console.log('error in creating a contact!');
    //         return;
    //     }
    //     console.log('**************',newContact);
    //     return res.redirect('back');
    // });
   Contact.create({
    name:req.body.name,
    phone:req.body.phone}).then(function(success){
        console.log('complete add', success)
       res.redirect('back')
      })
      .catch(function(err){
        console.log('err', err);
       res.status(500).send('Error creating contact');
       });
    // contactList.push({
    //     name:req.body.name,
    //     phone:req.body.phone
    // });
     // return res.redirect('/practice')
    // return res.redirect('/');

   
});
app.get('/delete-contact/',function(req,res){
    //  console.log(req.query);
    let phone=req.query.phone;
    // console.log(phone);
    // console.log(contact);
    let contactIndex=contactList.findIndex(x => x.phone == phone);
    if(contactIndex != -1){
        contactList.splice(contactIndex,1);
    }

return res.redirect('back');
}
);

//  app.get('/',function(req,res){
//     console.log(req);
//     res.send('<h1>Cool,it is running! or is it?<h1>');
//  })
     app.listen(port, function(err){
    if(err){
        console.log('Error in running server', err);
        return;
    }
    console.log('Yup! My express server is running at port:',port);
 })