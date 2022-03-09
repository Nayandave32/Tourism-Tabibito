const express = require('express');
const serveIndex = require('serve-index');
const path = require('path');
//const { request } = require('http');
const e = require('express');
var request = require("request");
const session = require('express-session');
const mysql = require('mysql');
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'password123',
	database : 'nodelogin',
  insecureAuth : true
});

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password123';





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
  


  app.listen(3000, () => console.log('Example app is listening on port 3000.'));
  
  app.get('/', function(req, res) {

    //res.sendFile(path.join(__dirname, '/views/index.html'));
    	// If the user is loggedin
	if (req.session.loggedin == true) {
		// Output username
    back= "back";
		username = req.session.username;
    res.render("index", {username:username, back:back});
	} else {
		// Not logged in
    back= ""
		username ="";
    res.render("index", {username:username, back :back});
	}
	res.end();
});



  app.get('/login.ejs', function(req, res){
    res.render("login");
  })

  app.post('/reg', function(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let email = "nothing@gmail.com"
    if (!username || !password){
      res.send("eror registering");
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
      res.redirect("/"); //Inside a callback… bulletproof!
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
         
          res.redirect('/');
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

      case "14-21":
        if ( tourData.budget == "£1000~" && tourData.size == "1-6") {
          console.log("temp9");
          break;
        }
        else if (tourData.budget == "£1500+" && tourData.size == "1-6") {
          console.log("temp10");
          break;
        }
        else if (tourData.budget == "£1000~" && tourData.size == "6-12") {
          console.log("temp11")
          break;
        }
        
        else {
            console.log("temp12");
            break;
        }
     
  
  }

  });

    /*let tourData =  {
     name : req.body.name ,
     surname : req.body.surname ,
     email : req.body.email ,
     medical : req.body.medical ,
     budget : req.body.budget ,
     duration : req.body.duration ,
     size : req.body.size  
    
    res.render("menu", {tourData: tourData}); 
  }*/
   
  });

  app.get('/FAQ.ejs', function(req, res) {
    res.render("FAQ");
  });

  app.get('/info.ejs', function(req, res) {
    res.render("info");
  });

  app.get('/plan.ejs', function(req, res) {
    res.render("plan");
  });

