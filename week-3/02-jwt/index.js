const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require("zod")


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
    // Your code here
    function validateInput(obj){
        const schema = zod.object({
            username: zod.string().email(),
            password: zod.string().min(6)
        })

        const response = schema.safeParse(obj)
        //console.log(response)
        //console.log(response.success)

        if(response.success){
            var token = jwt.sign({
                username:username,
                password:password
            }, jwtPassword)
            //console.log(token)
            return token
        }else{
            return "Invalid credentials"
        }  
    }

    const vi = validateInput({
        "username":username,
        "password":password
    }) 
    return vi
    
}
// signJwt("shaikfayazuddin18@gmail.com","cohort12345")

var jwtoken = signJwt("shaikfayazuddin18@gmail.com","cohort12345")
console.log(jwtoken)

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here
    const decoded = jwt.verify(token,jwtPassword)
    console.log(decoded)
}
verifyJwt(jwtoken)
/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
