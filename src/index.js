const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig')
const apiRoutes = require('./routes/index');

// const UserService = require('./services/user-service');

const app = express();

const prepareAndstartServer =()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', apiRoutes);

    app.listen(PORT , async()=>{
        
        console.log(`Server started at: ${PORT}`);
        
        // const service = new UserService();
        // const newToken = service.createToken({email:'jiskanam03@gmail.com' , id : 1})
        // console.log("new token is " , newToken);

        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imppc2thbmFtMDNAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTcyOTQzMDQ2MCwiZXhwIjoxNzI5NDMwNTIwfQ.XltHGRJEqUW5Z3nhrtmikxMW3-OHDf7Gnni6nkmM_BU';
        // const response = service.verifyToken(token);
        // console.log(response);
    });
}

prepareAndstartServer();


