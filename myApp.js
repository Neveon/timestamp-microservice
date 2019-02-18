var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

//API endpoint is GET [project-url]/api/timestamp/:date_string?

//A date string is valid if can be successfully parsed by new Date(date_string) (JS) .
//Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds.
//In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because
//this will ensure an UTC timestamp.

//If the date string is empty it should be equivalent to trigger new Date(),
//i.e. the service uses the current timestamp.

//If the date string is valid the api returns a JSON having the structure 
//{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
//e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}.

//If the date string is invalid the api returns a JSON having the structure
//{"unix": null, "utc" : "Invalid Date" }. It is what you get from the date manipulation
//functions used above.

//Mount the Logger middleware here
app.use(function(req, res, next){
 console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
});

//The ISO 8601 syntax (YYYY-MM-DD) is the preferred JavaScript date format:
app.get('/api/timestamp/:date_string?', (req, res) => {
  if(req.params.date_string === undefined /*|| isNaN(new Date(req.params.date_string).getTime()) === false*/ ){
    let date_string = new Date(); 
    //console.log(date_string);
    res.json({"unix": date_string.getTime(),"utc":date_string.toUTCString()});
  } else {
      let date_string = new Date(req.params.date_string);
      //console.log(date_string.toUTCString());
      res.json({"unix": date_string.getTime(),"utc":date_string.toUTCString()});
    }
  
});

/** Redirecting home to api/timestamp which returns current date */
app.get('/', (req, res) => {
  res.redirect('/api/timestamp/');
});

app.listen(process.env.PORT || 3000 );
