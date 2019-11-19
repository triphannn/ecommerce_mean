    const jwt=require('jsonwebtoken');
    module.exports = (req, res, next) =>{
        try{
            const token = req.headers.authorization.split(" ")[1];
            const decoded= jwt.verify(token, 'todo-app-super-shared-secret');
            req.userData= decoded;
        }
        catch(error){
            return res.status(401).json({
                message: 'Auth failed'
            });
        }
       
        next();

    };