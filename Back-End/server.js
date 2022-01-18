const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql2')
const app = express()

app.use(cors())
app.use(bodyparser.json())

//database connection
const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'super_db',
  port:3306
});

db.connect(err=>{
  if(err) {
    console.log(err,'DB_Error')
  }
  console.log('Database Connected ...')
});

app.get('/customer',(req,res)=>{
  var qr = 'select * from customer_t';

  db.query(qr,(err,result)=>{
    if(err){
      console.log(err,'error')
    }

    if(result.length>0){
      res.send({
        message:'all user data',
        data:result
      });
    }
  });
});

app.get('/customer/:id',(req,res)=>{
  let cid = req.params.id;
  let qr = `select * from customer_t where 'cid'=${cid}`;

  db.query(qr,(err,result)=>{
    if(err){console.log(err);}

    if(result && result.length>0){
      res.send({
        message:'get single data',
        data:result
      });
    }else{
      res.send({
        message:'data not found'
      });
    }
  });
});

app.post('/customer/register',(req,res)=>{
   console.log(req.body,'createData');

    let fullname = req.body.fullname;
    let username = req.body.username;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let password = req.body.password;
    let dob = req.body.dob;

    let qr =`insert into customer_t(cid,fullname,username,email,mobile,password,dob)values(NULL,'${fullname}','${username}','${email}','${mobile}','${password}','${dob}')`;

    db.query(qr,(err,result)=>{
      if(err){console.log(err);}

      if(result.length>0){
        res.send({
          message:'data inserted'
        });
      }else{
        res.send({
          message:'wrong'
        });
      }
  });
});

/*app.put('/customer/update/:id',(req,res)=>{

  console.log(req.body,'updatedata');
  let cid = req.body.cid;
  let fullname = req.body.username;
  let username = req.body.username;
  let email = req.body.email;
  let mobile = req.body.mobile;
  let password = req.body.password;
  let dob = req.body.dob;

  let qr =`update customer set 'fullname'=${fullname},'username'=${username},'email'=${email},'mobile'=${mobile},'password'=${password}
    where cid=${cid}`;

  db.query(qr,(err,result)=>{
    if(err){console.log(err);}

    res.send({
      message:'data updated'
    });
  });
}); */

app.post('/customer/login',(req,res)=>{
  console.log(req.body,'loginData');
  let username = req.body.username;
  let password = req.body.password;

  console.log(username, password)

  let qr = `select * from customer_t where username="${username}" AND password="${password}"`;
  console.log(qr)

  db.query(qr,(err,result)=> {
    if (err) {
      console.log(err);
    }

    if (result) {
      res.send({
        message:'Login Successful'
      });
      //res.redirect('http://127.0.0.1:4200/dashboard');
    } else {
      res.redirect('http://localhost:8081/customer/login');
    }
  });
});

app.listen(8081,()=>{
  console.log('Server is Running ....')
});
