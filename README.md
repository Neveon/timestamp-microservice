# timestamp-microservice
### FCC Backend Project Details:

1. A date string is valid if can be successfully parsed by new Date(date_string) (JS) .

2. If the date string is empty it should be equivalent to trigger new Date(),
i.e. the service uses the current timestamp.

3. If the date string is valid the api returns a JSON having the structure 
{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}.

4. If the date string is invalid the api returns a JSON having the structure
{"unix": null, "utc" : "Invalid Date" }. It is what you get from the date manipulation
functions used above.

### What I Learned:

1. Learned to use CORS to use additional HTTP headers to let a user agent gain permission to access selected resources from a server on a different origin (domain) then the site currently in use.

`// enabling cors so that the API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204`

[You can access the project online here:](https://neveon-timestamp-project.glitch.me/api/timestamp/)
