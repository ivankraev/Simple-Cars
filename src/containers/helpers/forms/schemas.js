import * as yup from "yup";

export const loginValidationSchema = yup
    .object()
    .defined()
    .shape({
        email: yup.string().email().trim().required(),
        password: yup.string().trim().min(6).max(100).required(),
    });

export const registerValidationSchema = yup
    .object()
    .defined()
    .shape({
        email: yup.string().email().trim(),
        password: yup.string().trim().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
            "At least 8 Characters, One Uppercase, One Lowercase, One Number and one symbol"),
        firstname: yup.string().trim().min(2).max(50),
        lastname: yup.string().trim().min(2).max(50)
    });