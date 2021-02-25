import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string()
        .required('Username is required')
        .min (6, 'Username must be at least 6 chars long')
        .max (10, 'Username must not exceed 10 chars long'),
    password: yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 chars long')
        .max(10, 'Password must not exceed 10 chars'),
})