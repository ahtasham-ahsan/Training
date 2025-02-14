// const jwt = require("jsonwebtoken");
// const secretKey = process.env.SECRET_KEY;

// const authorize = (req, res, next) => {
//     const token = req.headers['authorization']?.split(' ')[1];
//     if (!token) {
//         return res.status(401).send('Unauthorized');
//     }

//     jwt.verify(token, secretKey, (err, decoded) => {
//         if (err) {
//             return res.status(401).send('Unauthorized');
//         }

//         req.user = decoded;  // Store decoded token in request for use in other routes
//         next();
//     });
// };

// module.exports = authorize;

const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const authorize = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).send('Unauthorized');
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).send('Unauthorized');
        }

        req.user = decoded;  
        next();
    });
};

module.exports = authorize;
