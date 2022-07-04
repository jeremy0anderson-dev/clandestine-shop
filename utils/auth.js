require('dotenv').config();
const jwt = require('jsonwebtoken');
const {verify} = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
module.exports = {
    authMiddleware: function ({req}) {
        // allows token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization.split(' ')[1];
        if (!token) {
            return req;
        }

        try {
            jwt.verify(token, secret, {expiresIn: expiration}, (error, decoded)=>{
                if (error) throw error;
                console.log(decoded);
                return req.decoded = decoded;
            });
        } catch {
            console.log('Invalid token');
        }
    },
    signToken: function ({firstName, email, _id}) {
        const payload = {firstName, email, _id};
        return jwt.sign(payload, secret, {expiresIn: expiration});
    },
};

const expiration = process.env.JWT_EXPIRE;
