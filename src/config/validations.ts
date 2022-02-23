import * as Yup from 'yup';

export const validations = {
    auth: Yup.object().shape({
        email: Yup.string().email('Your email is invalid').required('Your email is required'),
    }),

    addPersonalInfo: Yup.object().shape({
        firstName: Yup.string().required('First name is required.'),
        lastName: Yup.string().required('Last name is required.'),
        phoneNumber1: Yup.string().required('Your phone number is required.'),
        phoneNumber2: Yup.string().optional(),
        street: Yup.string().required('Your address is required.'),
        profession: Yup.string().optional(),
        city: Yup.string().required('Your city is required'),
        country: Yup.string().required('Your country is required'),
    }),

    createUser: Yup.object().shape({
        firstName: Yup.string().required('First name is required.'),
        lastName: Yup.string().required('Last name is required.'),
        email: Yup.string().email('Your email is invalid').required('Your email is required'),
        phoneNumber1: Yup.string().required('Your phone number is required.'),
        phoneNumber2: Yup.string().optional(),
        address: Yup.string().required('Your address is required.'),
        postalCode: Yup.number().required('Postal code is required'),
        profession: Yup.string().optional(),
        city: Yup.string().required('Your city is required'),
        country: Yup.string().required('Your country is required'),
        role: Yup.string().required('Role is required').oneOf(['user', 'admin']),
    }),

    createPurchaseOrder: Yup.object().shape({
        name: Yup.string().required('Product name is required.'),
    }),
};
