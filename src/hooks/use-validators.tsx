import * as yup from 'yup';
import { Validators } from '@taftaf/types';
import { useTranslator } from './use-translator';

export const useValidators = (): Validators => {
    const { translate: t } = useTranslator();

    const validators = {
        signIn: yup.object().shape({
            email: yup
                .string()
                .email(t('validators.signIn.invalid_email'))
                .required(t('validators.signIn.required_email')),
            password: yup.string().required(t('validators.signIn.required_password')),
        }),

        forgotPassword: yup.object().shape({
            email: yup
                .string()
                .email(t('validators.signIn.invalid_email'))
                .required(t('validators.signIn.required_email')),
        }),

        resetPassword: yup.object().shape({
            password: yup.string().required(t('validators.signIn.required_password')),
            confirmPassword: yup
                .string()
                .oneOf([yup.ref('password'), null], t('validators.reset_password.confirm_password'))
                .required(t('validators.signIn.required_email')),
        }),

        account: yup.object().shape({
            firstName: yup.string().required(t('validators.account.required_first_name')),
            lastName: yup.string().required(t('validators.account.required_last_name')),
            phoneNumber1: yup.string().required(t('validators.account.required_phone_number')),
            phoneNumber2: yup.string().optional(),
            street: yup.string().required(t('validators.account.required_address')),
            profession: yup.string().optional(),
            city: yup.string().required(t('validators.account.required_city')),
            country: yup.string().required(t('validators.account.required_country')),
        }),

        createPurchaseOrder: yup.object().shape({
            name: yup.string().required(t('validators.create_purchase_order.required_name')),
        }),

        // admin
        createUser: yup.object().shape({
            firstName: yup.string().required(t('validators.account.required_first_name')),
            lastName: yup.string().required(t('validators.account.required_last_name')),
            password: yup.string().required(t('validators.signIn.required_password')),
            email: yup
                .string()
                .email(t('validators.signIn.invalid_email'))
                .required(t('validators.signIn.required_email')),
            phoneNumber1: yup.string().required(t('validators.account.required_phone_number')),
            phoneNumber2: yup.string().optional(),
            street: yup.string().required(t('validators.account.required_address')),
            profession: yup.string().optional(),
            city: yup.string().required(t('validators.account.required_city')),
            country: yup.string().required(t('validators.account.required_country')),
        }),

        updateUser: yup.object().shape({
            firstName: yup.string().required(t('validators.account.required_first_name')),
            lastName: yup.string().required(t('validators.account.required_last_name')),

            email: yup
                .string()
                .email(t('validators.signIn.invalid_email'))
                .required(t('validators.signIn.required_email')),
            phoneNumber1: yup.string().required(t('validators.account.required_phone_number')),
            phoneNumber2: yup.string().optional(),
            street: yup.string().required(t('validators.account.required_address')),
            profession: yup.string().optional(),
            city: yup.string().required(t('validators.account.required_city')),
            country: yup.string().required(t('validators.account.required_country')),
        }),

        createParcel: yup.object().shape({
            name: yup.string().required(t('validators.createParcel.required_name')),
            origin: yup.string().required(t('validators.createParcel.required_origin')),
            weight: yup
                .number()
                .min(1, t('validators.createParcel.min_weight'))
                .required(t('validators.createParcel.required_weight')),
        }),

        adminCreatePurchaseOrder: yup.object().shape({
            name: yup.string().required(t('validators.create_purchase_order.required_name')),
            customer: yup.string().required(t('validators.createParcel.required_customer')),
        }),
    };

    return validators;
};
