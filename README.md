# timestamp-microservice
FCC Backend Challenge

Learned to use CORS to use additional HTTP headers to let a user agent gain permission to access selected resources from a server on a different origin (domain) then the site currently in use.

`// enabling cors so that the API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204`
