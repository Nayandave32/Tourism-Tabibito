const express = require('express');
const serveIndex = require('serve-index');
const path = require('path');
//const { request } = require('http');
const e = require('express');
var request = require("request");
const session = require('express-session');
const mysql = require('mysql');
const connection = mysql.createPool({
	host     : 'eu-cdbr-west-02.cleardb.net',
	user     : 'bdb9c4d458a540',
	password : 'dc57e971',
	database : 'heroku_7dcd2f72677ea10',
  //insecureAuth : true
});  //connection.connect(function(error){
  //if(!!error) console.log(error);
  // else console.log('SQL Database Connected!');
//});
//module.exports = connection;



const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.set('views', [ './views', './views/templates'])


app.set('view engine', 'ejs');


app.use(express.urlencoded({extended: false})); 
app.use(express.json());

app.use('/request-type', (req, res, next) => {
    console.log('Request type: ', req.method);
    next();
  });

app.use('/public', express.static('public'));
app.use('/public', serveIndex('public'));
  
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("listening to port 5000"))
 
  
  app.get('/home.ejs', function(req, res) {

    //res.sendFile(path.join(__dirname, '/views/index.html'));
    	// If the user is loggedin
	if (req.session.loggedin == true) {
		// Output username
    back= "back";
		username = req.session.username;
    res.render("home", {username:username, back:back});
	} else {
		// Not logged in
    back= ""
		username ="";
    res.render("home", {username:username, back :back});
	}
	res.end();
});



  app.get('/login.ejs', function(req, res){
    res.render("login");
  })

  app.post('/reg', function(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let password_confirm = req.body.password_confirm;
    let email = "nothing@gmail.com"
    if (!username || !password){
      res.send("eror registering");
    }
    if (password !== password_confirm){
      res.send("passwords do not match")
    }

    connection.query("INSERT INTO accounts (username, password, email) VALUES (?,?,?)", [username, password, email], function(error){
      if(error) {
        console.log(username, password);
        res.send("error")
        throw error;
      } else {
        res.render('login');
      }
    })


  });

  app.get('/logout.ejs', function(req, res){
    
    req.session.destroy(() => {
      res.redirect("login.ejs");
     });
    });


  app.post('/auth', function(req, res) {
    
    let username = req.body.username;
    let password = req.body.password;
   
    if (username && password) {
     
      connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
       
        if (error) throw error;
        
        if (results.length > 0) {
         
          req.session.loggedin = true;
          req.session.username = username;
         
          res.redirect('home.ejs');
        } else {
          res.send('Incorrect Username and/or Password!');
        }			
        res.end();
      });
    } else {
      res.send('Please enter Username and Password!');
      res.end();
    }
  });

  app.get ('/', function(req, res){
    res.render("login");

  });


  app.get ('/register.ejs', function(req, res){
    res.render("register");

  });
  // ONCE THE FOR IS FILLED OUT RENDER THE ITINERARY
  app.post('/plan',  function(req, res) {

   
    var apiKey = "0a1e65d0c66d5ba342ca85733c5714c6";
    var city = "Tokyo";
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
    request(url, function(error, response, body){
    
    weather =JSON.parse(body);

    
    let tourData =  {
      name : req.body.name ,
      surname : req.body.surname ,
      email : req.body.email ,
      medical : req.body.medical ,
      budget : req.body.budget ,
      duration : req.body.duration ,
      size : req.body.size 
    }
  const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }
  
  
  var number = req.body.duration;
  switch(number) {
    case "1-7":
    if ( tourData.budget == "£1000~" && tourData.size == "1-6") {
      res.render("temp1", {tourData: tourData, weather: weather});
      break;
    }
    else if (tourData.budget == "£1500+" && tourData.size == "1-6") {
      res.render("temp2", {tourData: tourData, weather: weather});
      break;
    }
    else if (tourData.budget == "£1000~" && tourData.size == "6-12") {
      res.render("temp3", {tourData: tourData, weather: weather});
      break;
    }
    
    else {
      res.render("temp4", {tourData: tourData, weather: weather});
        break;
    }

    case "7-14":
      if ( tourData.budget == "£1000~" && tourData.size == "1-6") {
        res.render("temp5", {tourData: tourData, weather: weather});
        break;
      }
      else if (tourData.budget == "£1500+" && tourData.size == "1-6") {
        res.render("temp6", {tourData: tourData, weather: weather});
        break;
      }
      else if (tourData.budget == "£1000~" && tourData.size == "6-12") {
        res.render("temp7", {tourData: tourData, weather: weather});
        break;
      }
      
      else {
        res.render("temp8", {tourData: tourData, weather: weather});
          break;
      }

 
  }

  });


  });

  app.get('/FAQ.ejs', function(req, res) {
    if (req.session.loggedin == true) {
      res.render("FAQ");
    } 
  });

  app.get('/info.ejs', function(req, res) {
    if (req.session.loggedin == true) {
       res.render("info");
    }
   
  });

  app.get('/plan.ejs', function(req, res) {
    if (req.session.loggedin == true) {
      res.render("plan");
    }
    
  });

