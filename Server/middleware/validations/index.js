import {body, validationResult } from "express-validators"


function userRegistrationValidation(){
    return[
        body(`username`, `Username is required`).notEmpty().isLength({min: 3}),
        body(`email`,`Email is required`).isEmail(),
        body(`password`, `Password must be strong`).isStrongPassword(),
        body('password2').custom((value, { req }) => {
            if (value != req.body.password) {
                throw new Error(`Passwords do not match.`)
            }
            return true;
        })

    ]
}

function userLoginValidations() {
    return [
        body(`email`, "Email is required").isEmail(),
        body(`password`, `Password is required`).notEmpty()
    ]
}

function errorMiddleWare(req, res, next) {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    return next();
}


export {userRegistrationValidation, userLoginValidations , errorMiddleWare }