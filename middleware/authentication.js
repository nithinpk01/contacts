const expressAsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = expressAsyncHandler(async(req, res, next) =>{
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        var token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                res.status(401);
                throw new Error("Token is not valid")
            }
            req.user = user;
        })
        next();
    } else {
        res.status(401);
        throw new Error("You are not authenticated")
    }
})
module.exports = validateToken;