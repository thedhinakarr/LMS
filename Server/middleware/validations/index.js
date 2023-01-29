import { body, validationResult } from "express-validator"


function userRegistrationValidation() {
    return [
        body(`fullName`, `Full name is required`).notEmpty().isLength({ min: 3 }),
        body(`UserName`, `User name is required`).notEmpty().isLength({ min: 3 }),
        body(`email`, `Email is required`).isEmail(),
        body(`password`, `Password must be strong`).isStrongPassword(),
        body('password2').custom((value, { req }) => {
            if (value != req.body.password) {
                throw new Error(`Passwords do not match.`)
            }
            return true;
        }),
        body(`role`).custom((value) => {
            if (value == "user" || value == "admin") {
                return true;
            }
            else throw new Error("INVALID ROLE.")
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


export { userRegistrationValidation, userLoginValidations, errorMiddleWare }