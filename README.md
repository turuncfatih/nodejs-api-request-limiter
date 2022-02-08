
NodeJS Express Rate Limit
=============


>Node JS Rate Limiter is a module that can be placed in the middleware that can minimize the spam attacks that can set up the system.

`$ npm install express-rate-limit`

-------------
```javascript
const express = require("express");  //The module we use to create a server on Nodejs

const app = express();

const rateLimit = require('express-rate-limit') //API fetch module to limit incoming requests over the same IP
```
-------------
```javascript
const allowList = ['192.168.0.56', '::1'] // Write down the IPs that you want not to be stuck in the limit
```
```javascript
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // within 15 minutes

    max: 5, // A maximum of 5 requests can come from the same IP.
   
   skip: (request, response) => allowlist.includes(request.ip), // The IPs you give will not be limited....
   
   message:
        'Too many attempts on the same IP, please try again in 15 minutes',
})
```
-------------
```javascript
app.use('/', limiter) // When too many requests come, the API will get in front of it and give an error code.



app.listen(3000, () => { /// 3000 We listen to the requests coming to the port

    console.log("Server running on port 3000")
})


app.get('/', (req, res) => {   /// localhost:3000 We respond to request
    res.send('WELCOME TO API!!!' + req.ip)
   // res.send(req.ip)
})

```

