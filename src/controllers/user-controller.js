const UserService = require('../services/user-service');
// const{response} = require('express');

const userService = new UserService();

const create = async(req,res)=>{
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password,
        });
        return res.status(201).json({
            success:true,
            data:response,
            error:{},
            message:'Successfully created new user'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'Something went wrong',
            data:{},
            success:false,
            err:error
        });
        
    }
}

module.exports={
    create
}