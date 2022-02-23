/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    DateTime: any;
};

export type Address = {
    __typename?: 'Address';
    id: Scalars['ID'];
    country: Scalars['String'];
    city: Scalars['String'];
    postalCode: Scalars['String'];
    street: Scalars['String'];
    createdAt?: Maybe<Scalars['DateTime']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AddressInput = {
    country: Scalars['String'];
    city: Scalars['String'];
    postalCode: Scalars['String'];
    street: Scalars['String'];
};

export enum Approval {
    Waiting = 'WAITING',
    Approved = 'APPROVED',
}

export type CreateAccountInput = {
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    email: Scalars['String'];
    password: Scalars['String'];
    phoneNumber1: Scalars['String'];
    phoneNumber2?: Maybe<Scalars['String']>;
    profession?: Maybe<Scalars['String']>;
    street: Scalars['String'];
    postalCode?: Maybe<Scalars['String']>;
    city: Scalars['String'];
    country: Scalars['String'];
};

export type CreateAccountResponse = {
    __typename?: 'CreateAccountResponse';
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    email: Scalars['String'];
    customerId: Scalars['String'];
    postalCode: Scalars['String'];
    street: Scalars['String'];
    city: Scalars['String'];
    country: Scalars['String'];
};

export type CreateUserInput = {
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    password: Scalars['String'];
    email: Scalars['String'];
    role: Role;
    phoneNumber1: Scalars['String'];
    phoneNumber2?: Maybe<Scalars['String']>;
    profession?: Maybe<Scalars['String']>;
    street: Scalars['String'];
    postalCode?: Maybe<Scalars['String']>;
    city: Scalars['String'];
    country: Scalars['String'];
};

export type CreateUserResponse = {
    __typename?: 'CreateUserResponse';
    id: Scalars['ID'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    email: Scalars['String'];
    role?: Maybe<Role>;
    customerId: Scalars['String'];
};

export type ForgotPasswordInput = {
    email: Scalars['String'];
};

export type ForgotPasswordResponse = {
    __typename?: 'ForgotPasswordResponse';
    message: Scalars['String'];
};

export enum Locale {
    En = 'EN',
    Fr = 'FR',
}

export type LoginInput = {
    email: Scalars['String'];
    password: Scalars['String'];
};

export type LoginResponse = {
    __typename?: 'LoginResponse';
    message: Scalars['String'];
};

export type Mutation = {
    __typename?: 'Mutation';
    _empty?: Maybe<Scalars['String']>;
    updateAddress?: Maybe<Address>;
    createAddress?: Maybe<Address>;
    createAccount?: Maybe<CreateAccountResponse>;
    login: LoginResponse;
    forgotPassword?: Maybe<ForgotPasswordResponse>;
    resetPassword?: Maybe<ResetPasswordResponse>;
    validateAccount?: Maybe<ValidateAccountResponse>;
    logout?: Maybe<LoginResponse>;
    createUser: CreateUserResponse;
    updateUser: CreateUserResponse;
    deleteUser: CreateUserResponse;
    createOrderForCustomer?: Maybe<OrderResponse>;
    updateOrderForCustomer?: Maybe<OrderResponse>;
    createParcel?: Maybe<ParcelResponse>;
    updateParcel?: Maybe<ParcelResponse>;
    deleteParcel?: Maybe<ParcelResponse>;
    approveShipment?: Maybe<ParcelResponse>;
    disApproveShipment?: Maybe<ParcelResponse>;
    createOrder?: Maybe<OrderResponse>;
    updateOrder?: Maybe<OrderResponse>;
    deleteOrder?: Maybe<OrderResponse>;
};

export type MutationUpdateAddressArgs = {
    id: Scalars['ID'];
    data: AddressInput;
};

export type MutationCreateAddressArgs = {
    data: AddressInput;
};

export type MutationCreateAccountArgs = {
    locale: Locale;
    data: CreateAccountInput;
};

export type MutationLoginArgs = {
    data: LoginInput;
};

export type MutationForgotPasswordArgs = {
    locale: Locale;
    data: ForgotPasswordInput;
};

export type MutationResetPasswordArgs = {
    data: ResetPasswordInput;
};

export type MutationValidateAccountArgs = {
    token: Scalars['String'];
};

export type MutationCreateUserArgs = {
    locale: Locale;
    data: CreateUserInput;
};

export type MutationUpdateUserArgs = {
    id: Scalars['ID'];
    data: UpdateUserInput;
};

export type MutationDeleteUserArgs = {
    id: Scalars['ID'];
};

export type MutationCreateOrderForCustomerArgs = {
    customer: Scalars['ID'];
    data: OrderInput;
};

export type MutationUpdateOrderForCustomerArgs = {
    id: Scalars['ID'];
    customer: Scalars['ID'];
    data: OrderInput;
};

export type MutationCreateParcelArgs = {
    data: ParcelInput;
};

export type MutationUpdateParcelArgs = {
    id: Scalars['ID'];
    data: ParcelInput;
};

export type MutationDeleteParcelArgs = {
    id: Scalars['ID'];
};

export type MutationApproveShipmentArgs = {
    id: Scalars['ID'];
};

export type MutationDisApproveShipmentArgs = {
    id: Scalars['ID'];
};

export type MutationCreateOrderArgs = {
    data: OrderInput;
};

export type MutationUpdateOrderArgs = {
    id: Scalars['ID'];
    data: OrderInput;
};

export type MutationDeleteOrderArgs = {
    id: Scalars['ID'];
};

export type Order = {
    __typename?: 'Order';
    id: Scalars['ID'];
    name: Scalars['String'];
    link?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    customer?: Maybe<User>;
    createdAt?: Maybe<Scalars['DateTime']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderInput = {
    name: Scalars['String'];
    link?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
};

export type OrderResponse = {
    __typename?: 'OrderResponse';
    id: Scalars['ID'];
    name: Scalars['String'];
    link?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    customer?: Maybe<User>;
    createdAt?: Maybe<Scalars['DateTime']>;
};

export type Parcel = {
    __typename?: 'Parcel';
    id: Scalars['ID'];
    name: Scalars['String'];
    origin: Scalars['String'];
    weight: Scalars['Int'];
    unit: Unit;
    customer?: Maybe<User>;
    status: Status;
    approval: Approval;
    createdAt?: Maybe<Scalars['DateTime']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ParcelInput = {
    name: Scalars['String'];
    origin: Scalars['String'];
    weight: Scalars['Float'];
    unit?: Unit;
    customer: Scalars['ID'];
    status?: Status;
};

export type ParcelResponse = {
    __typename?: 'ParcelResponse';
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    origin?: Maybe<Scalars['String']>;
    weight?: Maybe<Scalars['Int']>;
    unit?: Maybe<Unit>;
    status?: Maybe<Status>;
    approval?: Maybe<Approval>;
};

export type Query = {
    __typename?: 'Query';
    _empty?: Maybe<Scalars['String']>;
    address?: Maybe<Address>;
    me: User;
    users: Array<Maybe<User>>;
    user: User;
    parcels: Array<Maybe<ParcelResponse>>;
    parcel?: Maybe<Parcel>;
    orders: Array<Maybe<OrderResponse>>;
    order?: Maybe<Order>;
};

export type QueryUserArgs = {
    id: Scalars['ID'];
};

export type QueryParcelArgs = {
    id: Scalars['ID'];
};

export type QueryOrderArgs = {
    id: Scalars['ID'];
};

export type ResetPasswordInput = {
    id: Scalars['ID'];
    token: Scalars['String'];
    password: Scalars['String'];
    confirmPassword: Scalars['String'];
};

export type ResetPasswordResponse = {
    __typename?: 'ResetPasswordResponse';
    message: Scalars['String'];
};

export enum Role {
    Customer = 'CUSTOMER',
    Admin = 'ADMIN',
}

export type ShippingAddress = {
    __typename?: 'ShippingAddress';
    street: Scalars['String'];
    postalCode?: Maybe<Scalars['String']>;
    city: Scalars['String'];
    country: Scalars['String'];
};

export enum Status {
    Received = 'RECEIVED',
    InTransit = 'IN_TRANSIT',
    Delivered = 'DELIVERED',
}

export enum Unit {
    G = 'G',
    Kg = 'KG',
    M3 = 'M3',
}

export type UpdateUserInput = {
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    email: Scalars['String'];
    role: Role;
    phoneNumber1: Scalars['String'];
    phoneNumber2?: Maybe<Scalars['String']>;
    profession?: Maybe<Scalars['String']>;
    street: Scalars['String'];
    postalCode?: Maybe<Scalars['String']>;
    city: Scalars['String'];
    country: Scalars['String'];
};

export type User = {
    __typename?: 'User';
    id?: Maybe<Scalars['ID']>;
    firstName?: Maybe<Scalars['String']>;
    lastName?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    customerId?: Maybe<Scalars['String']>;
    phoneNumber1?: Maybe<Scalars['String']>;
    phoneNumber2?: Maybe<Scalars['String']>;
    profession?: Maybe<Scalars['String']>;
    role?: Maybe<Role>;
    shippingAddress: ShippingAddress;
    onlineAddress: Address;
    parcels?: Maybe<Array<Maybe<Parcel>>>;
    orders?: Maybe<Array<Maybe<OrderResponse>>>;
};

export type ValidateAccountResponse = {
    __typename?: 'ValidateAccountResponse';
    message: Scalars['String'];
};

export type UpdateAddressMutationVariables = Exact<{
    id: Scalars['ID'];
    street: Scalars['String'];
    postalCode: Scalars['String'];
    city: Scalars['String'];
    country: Scalars['String'];
}>;

export type UpdateAddressMutation = { __typename?: 'Mutation' } & {
    updateAddress?: Maybe<
        { __typename?: 'Address' } & Pick<
            Address,
            'id' | 'street' | 'postalCode' | 'city' | 'country'
        >
    >;
};

export type CreateAccountMutationVariables = Exact<{
    locale: Locale;
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    email: Scalars['String'];
    password: Scalars['String'];
    phoneNumber1: Scalars['String'];
    phoneNumber2?: Maybe<Scalars['String']>;
    profession?: Maybe<Scalars['String']>;
    street: Scalars['String'];
    postalCode?: Maybe<Scalars['String']>;
    city: Scalars['String'];
    country: Scalars['String'];
}>;

export type CreateAccountMutation = { __typename?: 'Mutation' } & {
    createAccount?: Maybe<
        { __typename?: 'CreateAccountResponse' } & Pick<
            CreateAccountResponse,
            | 'firstName'
            | 'lastName'
            | 'email'
            | 'customerId'
            | 'street'
            | 'city'
            | 'country'
            | 'postalCode'
        >
    >;
};

export type LoginMutationVariables = Exact<{
    email: Scalars['String'];
    password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation' } & {
    login: { __typename?: 'LoginResponse' } & Pick<LoginResponse, 'message'>;
};

export type ForgotPasswordMutationVariables = Exact<{
    locale: Locale;
    email: Scalars['String'];
}>;

export type ForgotPasswordMutation = { __typename?: 'Mutation' } & {
    forgotPassword?: Maybe<
        { __typename?: 'ForgotPasswordResponse' } & Pick<ForgotPasswordResponse, 'message'>
    >;
};

export type ResetPasswordMutationVariables = Exact<{
    id: Scalars['ID'];
    token: Scalars['String'];
    password: Scalars['String'];
    confirmPassword: Scalars['String'];
}>;

export type ResetPasswordMutation = { __typename?: 'Mutation' } & {
    resetPassword?: Maybe<
        { __typename?: 'ResetPasswordResponse' } & Pick<ResetPasswordResponse, 'message'>
    >;
};

export type ValidateAccountMutationVariables = Exact<{
    token: Scalars['String'];
}>;

export type ValidateAccountMutation = { __typename?: 'Mutation' } & {
    validateAccount?: Maybe<
        { __typename?: 'ValidateAccountResponse' } & Pick<ValidateAccountResponse, 'message'>
    >;
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: 'Mutation' } & {
    logout?: Maybe<{ __typename?: 'LoginResponse' } & Pick<LoginResponse, 'message'>>;
};

export type CreateOrderMutationVariables = Exact<{
    name: Scalars['String'];
    link?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
}>;

export type CreateOrderMutation = { __typename?: 'Mutation' } & {
    createOrder?: Maybe<
        { __typename?: 'OrderResponse' } & Pick<
            OrderResponse,
            'id' | 'name' | 'link' | 'description' | 'createdAt'
        >
    >;
};

export type UpdateOrderMutationVariables = Exact<{
    id: Scalars['ID'];
    name: Scalars['String'];
    link?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
}>;

export type UpdateOrderMutation = { __typename?: 'Mutation' } & {
    updateOrder?: Maybe<
        { __typename?: 'OrderResponse' } & Pick<
            OrderResponse,
            'id' | 'name' | 'link' | 'description' | 'createdAt'
        >
    >;
};

export type DeleteOrderMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DeleteOrderMutation = { __typename?: 'Mutation' } & {
    deleteOrder?: Maybe<
        { __typename?: 'OrderResponse' } & Pick<
            OrderResponse,
            'id' | 'name' | 'link' | 'description'
        >
    >;
};

export type CreateParcelMutationVariables = Exact<{
    name: Scalars['String'];
    origin: Scalars['String'];
    weight: Scalars['Float'];
    unit: Unit;
    customer: Scalars['ID'];
    status: Status;
}>;

export type CreateParcelMutation = { __typename?: 'Mutation' } & {
    createParcel?: Maybe<
        { __typename?: 'ParcelResponse' } & Pick<
            ParcelResponse,
            'id' | 'name' | 'origin' | 'weight' | 'unit' | 'status' | 'approval'
        >
    >;
};

export type UpdateParcelMutationVariables = Exact<{
    id: Scalars['ID'];
    name: Scalars['String'];
    origin: Scalars['String'];
    weight: Scalars['Float'];
    unit?: Maybe<Unit>;
    customer: Scalars['ID'];
    status?: Maybe<Status>;
}>;

export type UpdateParcelMutation = { __typename?: 'Mutation' } & {
    updateParcel?: Maybe<
        { __typename?: 'ParcelResponse' } & Pick<
            ParcelResponse,
            'id' | 'name' | 'origin' | 'weight' | 'unit' | 'status' | 'approval'
        >
    >;
};

export type DeleteParcelMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DeleteParcelMutation = { __typename?: 'Mutation' } & {
    deleteParcel?: Maybe<
        { __typename?: 'ParcelResponse' } & Pick<
            ParcelResponse,
            'id' | 'name' | 'origin' | 'weight' | 'unit' | 'status' | 'approval'
        >
    >;
};

export type ApproveShipmentMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ApproveShipmentMutation = { __typename?: 'Mutation' } & {
    approveShipment?: Maybe<
        { __typename?: 'ParcelResponse' } & Pick<
            ParcelResponse,
            'id' | 'name' | 'origin' | 'weight' | 'unit' | 'status' | 'approval'
        >
    >;
};

export type CreateUserMutationVariables = Exact<{
    locale: Locale;
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    email: Scalars['String'];
    password: Scalars['String'];
    phoneNumber1: Scalars['String'];
    phoneNumber2?: Maybe<Scalars['String']>;
    profession?: Maybe<Scalars['String']>;
    street: Scalars['String'];
    postalCode?: Maybe<Scalars['String']>;
    city: Scalars['String'];
    country: Scalars['String'];
    role: Role;
}>;

export type CreateUserMutation = { __typename?: 'Mutation' } & {
    createUser: { __typename?: 'CreateUserResponse' } & Pick<
        CreateUserResponse,
        'id' | 'firstName' | 'lastName' | 'email' | 'customerId' | 'role'
    >;
};

export type UpdateUserMutationVariables = Exact<{
    id: Scalars['ID'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    email: Scalars['String'];
    phoneNumber1: Scalars['String'];
    phoneNumber2?: Maybe<Scalars['String']>;
    profession?: Maybe<Scalars['String']>;
    street: Scalars['String'];
    postalCode?: Maybe<Scalars['String']>;
    city: Scalars['String'];
    country: Scalars['String'];
    role: Role;
}>;

export type UpdateUserMutation = { __typename?: 'Mutation' } & {
    updateUser: { __typename?: 'CreateUserResponse' } & Pick<
        CreateUserResponse,
        'id' | 'firstName' | 'lastName' | 'email' | 'customerId' | 'role'
    >;
};

export type DeleteUserMutationVariables = Exact<{
    id: Scalars['ID'];
}>;

export type DeleteUserMutation = { __typename?: 'Mutation' } & {
    deleteUser: { __typename?: 'CreateUserResponse' } & Pick<
        CreateUserResponse,
        'id' | 'firstName' | 'lastName' | 'email' | 'role'
    >;
};

export type CreateOrderForCustomerMutationVariables = Exact<{
    customer: Scalars['ID'];
    name: Scalars['String'];
    link?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
}>;

export type CreateOrderForCustomerMutation = { __typename?: 'Mutation' } & {
    createOrderForCustomer?: Maybe<
        { __typename?: 'OrderResponse' } & Pick<
            OrderResponse,
            'id' | 'name' | 'link' | 'description' | 'createdAt'
        >
    >;
};

export type UpdateOrderForCustomerMutationVariables = Exact<{
    id: Scalars['ID'];
    customer: Scalars['ID'];
    name: Scalars['String'];
    link?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
}>;

export type UpdateOrderForCustomerMutation = { __typename?: 'Mutation' } & {
    updateOrderForCustomer?: Maybe<
        { __typename?: 'OrderResponse' } & Pick<
            OrderResponse,
            'id' | 'name' | 'link' | 'description' | 'createdAt'
        >
    >;
};

export type AddressQueryVariables = Exact<{ [key: string]: never }>;

export type AddressQuery = { __typename?: 'Query' } & {
    address?: Maybe<
        { __typename?: 'Address' } & Pick<
            Address,
            'id' | 'country' | 'city' | 'postalCode' | 'street'
        >
    >;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: 'Query' } & {
    me: { __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName' | 'role'> & {
            parcels?: Maybe<
                Array<
                    Maybe<
                        { __typename?: 'Parcel' } & Pick<
                            Parcel,
                            | 'id'
                            | 'name'
                            | 'origin'
                            | 'weight'
                            | 'unit'
                            | 'status'
                            | 'approval'
                            | 'createdAt'
                            | 'updatedAt'
                        >
                    >
                >
            >;
            orders?: Maybe<
                Array<
                    Maybe<
                        { __typename?: 'OrderResponse' } & Pick<
                            OrderResponse,
                            'id' | 'name' | 'link' | 'description' | 'createdAt'
                        >
                    >
                >
            >;
        };
};

export type OrdersQueryVariables = Exact<{ [key: string]: never }>;

export type OrdersQuery = { __typename?: 'Query' } & {
    orders: Array<
        Maybe<
            { __typename?: 'OrderResponse' } & Pick<
                OrderResponse,
                'id' | 'name' | 'link' | 'description' | 'createdAt'
            > & {
                    customer?: Maybe<
                        { __typename?: 'User' } & Pick<
                            User,
                            'id' | 'customerId' | 'firstName' | 'lastName'
                        >
                    >;
                }
        >
    >;
};

export type OrderQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type OrderQuery = { __typename?: 'Query' } & {
    order?: Maybe<
        { __typename?: 'Order' } & Pick<
            Order,
            'id' | 'name' | 'link' | 'description' | 'createdAt'
        > & {
                customer?: Maybe<
                    { __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>
                >;
            }
    >;
};

export type ParcelsQueryVariables = Exact<{ [key: string]: never }>;

export type ParcelsQuery = { __typename?: 'Query' } & {
    parcels: Array<
        Maybe<
            { __typename?: 'ParcelResponse' } & Pick<
                ParcelResponse,
                'id' | 'name' | 'origin' | 'weight' | 'unit' | 'status' | 'approval'
            >
        >
    >;
};

export type ParcelQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ParcelQuery = { __typename?: 'Query' } & {
    parcel?: Maybe<
        { __typename?: 'Parcel' } & Pick<
            Parcel,
            | 'id'
            | 'name'
            | 'origin'
            | 'weight'
            | 'unit'
            | 'status'
            | 'approval'
            | 'createdAt'
            | 'updatedAt'
        > & {
                customer?: Maybe<
                    { __typename?: 'User' } & Pick<
                        User,
                        'id' | 'firstName' | 'lastName' | 'customerId'
                    >
                >;
            }
    >;
};

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = { __typename?: 'Query' } & {
    users: Array<
        Maybe<
            { __typename?: 'User' } & Pick<
                User,
                'id' | 'firstName' | 'lastName' | 'email' | 'customerId' | 'role'
            >
        >
    >;
};

export type UserQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type UserQuery = { __typename?: 'Query' } & {
    user: { __typename?: 'User' } & Pick<
        User,
        | 'id'
        | 'firstName'
        | 'lastName'
        | 'phoneNumber1'
        | 'phoneNumber2'
        | 'profession'
        | 'email'
        | 'customerId'
        | 'role'
    > & {
            shippingAddress: { __typename?: 'ShippingAddress' } & Pick<
                ShippingAddress,
                'street' | 'city' | 'country' | 'postalCode'
            >;
            onlineAddress: { __typename?: 'Address' } & Pick<
                Address,
                'street' | 'city' | 'country' | 'postalCode'
            >;
            parcels?: Maybe<
                Array<
                    Maybe<
                        { __typename?: 'Parcel' } & Pick<
                            Parcel,
                            'id' | 'name' | 'origin' | 'weight' | 'unit' | 'status' | 'approval'
                        >
                    >
                >
            >;
            orders?: Maybe<
                Array<
                    Maybe<
                        { __typename?: 'OrderResponse' } & Pick<
                            OrderResponse,
                            'id' | 'name' | 'link' | 'description'
                        >
                    >
                >
            >;
        };
};

export const UpdateAddressDocument = gql`
    mutation updateAddress(
        $id: ID!
        $street: String!
        $postalCode: String!
        $city: String!
        $country: String!
    ) {
        updateAddress(
            id: $id
            data: { street: $street, postalCode: $postalCode, city: $city, country: $country }
        ) {
            id
            street
            postalCode
            city
            country
        }
    }
`;
export type UpdateAddressMutationFn = Apollo.MutationFunction<
    UpdateAddressMutation,
    UpdateAddressMutationVariables
>;

/**
 * __useUpdateAddressMutation__
 *
 * To run a mutation, you first call `useUpdateAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAddressMutation, { data, loading, error }] = useUpdateAddressMutation({
 *   variables: {
 *      id: // value for 'id'
 *      street: // value for 'street'
 *      postalCode: // value for 'postalCode'
 *      city: // value for 'city'
 *      country: // value for 'country'
 *   },
 * });
 */
export function useUpdateAddressMutation(
    baseOptions?: Apollo.MutationHookOptions<UpdateAddressMutation, UpdateAddressMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<UpdateAddressMutation, UpdateAddressMutationVariables>(
        UpdateAddressDocument,
        options
    );
}
export type UpdateAddressMutationHookResult = ReturnType<typeof useUpdateAddressMutation>;
export type UpdateAddressMutationResult = Apollo.MutationResult<UpdateAddressMutation>;
export type UpdateAddressMutationOptions = Apollo.BaseMutationOptions<
    UpdateAddressMutation,
    UpdateAddressMutationVariables
>;
export const CreateAccountDocument = gql`
    mutation createAccount(
        $locale: Locale!
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
        $phoneNumber1: String!
        $phoneNumber2: String
        $profession: String
        $street: String!
        $postalCode: String
        $city: String!
        $country: String!
    ) {
        createAccount(
            locale: $locale
            data: {
                firstName: $firstName
                lastName: $lastName
                email: $email
                password: $password
                phoneNumber1: $phoneNumber1
                phoneNumber2: $phoneNumber2
                profession: $profession
                street: $street
                postalCode: $postalCode
                city: $city
                country: $country
            }
        ) {
            firstName
            lastName
            email
            customerId
            street
            city
            country
            postalCode
        }
    }
`;
export type CreateAccountMutationFn = Apollo.MutationFunction<
    CreateAccountMutation,
    CreateAccountMutationVariables
>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      locale: // value for 'locale'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      phoneNumber1: // value for 'phoneNumber1'
 *      phoneNumber2: // value for 'phoneNumber2'
 *      profession: // value for 'profession'
 *      street: // value for 'street'
 *      postalCode: // value for 'postalCode'
 *      city: // value for 'city'
 *      country: // value for 'country'
 *   },
 * });
 */
export function useCreateAccountMutation(
    baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(
        CreateAccountDocument,
        options
    );
}
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<
    CreateAccountMutation,
    CreateAccountMutationVariables
>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
        login(data: { email: $email, password: $password }) {
            message
        }
    }
`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
    baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
    LoginMutation,
    LoginMutationVariables
>;
export const ForgotPasswordDocument = gql`
    mutation forgotPassword($locale: Locale!, $email: String!) {
        forgotPassword(locale: $locale, data: { email: $email }) {
            message
        }
    }
`;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      locale: // value for 'locale'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(
    baseOptions?: Apollo.MutationHookOptions<
        ForgotPasswordMutation,
        ForgotPasswordMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(
        ForgotPasswordDocument,
        options
    );
}
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
>;
export const ResetPasswordDocument = gql`
    mutation resetPassword(
        $id: ID!
        $token: String!
        $password: String!
        $confirmPassword: String!
    ) {
        resetPassword(
            data: { id: $id, token: $token, password: $password, confirmPassword: $confirmPassword }
        ) {
            message
        }
    }
`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      id: // value for 'id'
 *      token: // value for 'token'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *   },
 * });
 */
export function useResetPasswordMutation(
    baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(
        ResetPasswordDocument,
        options
    );
}
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
>;
export const ValidateAccountDocument = gql`
    mutation validateAccount($token: String!) {
        validateAccount(token: $token) {
            message
        }
    }
`;
export type ValidateAccountMutationFn = Apollo.MutationFunction<
    ValidateAccountMutation,
    ValidateAccountMutationVariables
>;

/**
 * __useValidateAccountMutation__
 *
 * To run a mutation, you first call `useValidateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validateAccountMutation, { data, loading, error }] = useValidateAccountMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useValidateAccountMutation(
    baseOptions?: Apollo.MutationHookOptions<
        ValidateAccountMutation,
        ValidateAccountMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<ValidateAccountMutation, ValidateAccountMutationVariables>(
        ValidateAccountDocument,
        options
    );
}
export type ValidateAccountMutationHookResult = ReturnType<typeof useValidateAccountMutation>;
export type ValidateAccountMutationResult = Apollo.MutationResult<ValidateAccountMutation>;
export type ValidateAccountMutationOptions = Apollo.BaseMutationOptions<
    ValidateAccountMutation,
    ValidateAccountMutationVariables
>;
export const LogoutDocument = gql`
    mutation logout {
        logout {
            message
        }
    }
`;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
    baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
    LogoutMutation,
    LogoutMutationVariables
>;
export const CreateOrderDocument = gql`
    mutation createOrder($name: String!, $link: String, $description: String) {
        createOrder(data: { name: $name, link: $link, description: $description }) {
            id
            name
            link
            description
            createdAt
        }
    }
`;
export type CreateOrderMutationFn = Apollo.MutationFunction<
    CreateOrderMutation,
    CreateOrderMutationVariables
>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      name: // value for 'name'
 *      link: // value for 'link'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateOrderMutation(
    baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(
        CreateOrderDocument,
        options
    );
}
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<
    CreateOrderMutation,
    CreateOrderMutationVariables
>;
export const UpdateOrderDocument = gql`
    mutation updateOrder($id: ID!, $name: String!, $link: String, $description: String) {
        updateOrder(id: $id, data: { name: $name, link: $link, description: $description }) {
            id
            name
            link
            description
            createdAt
        }
    }
`;
export type UpdateOrderMutationFn = Apollo.MutationFunction<
    UpdateOrderMutation,
    UpdateOrderMutationVariables
>;

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      link: // value for 'link'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateOrderMutation(
    baseOptions?: Apollo.MutationHookOptions<UpdateOrderMutation, UpdateOrderMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(
        UpdateOrderDocument,
        options
    );
}
export type UpdateOrderMutationHookResult = ReturnType<typeof useUpdateOrderMutation>;
export type UpdateOrderMutationResult = Apollo.MutationResult<UpdateOrderMutation>;
export type UpdateOrderMutationOptions = Apollo.BaseMutationOptions<
    UpdateOrderMutation,
    UpdateOrderMutationVariables
>;
export const DeleteOrderDocument = gql`
    mutation deleteOrder($id: ID!) {
        deleteOrder(id: $id) {
            id
            name
            link
            description
        }
    }
`;
export type DeleteOrderMutationFn = Apollo.MutationFunction<
    DeleteOrderMutation,
    DeleteOrderMutationVariables
>;

/**
 * __useDeleteOrderMutation__
 *
 * To run a mutation, you first call `useDeleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrderMutation, { data, loading, error }] = useDeleteOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOrderMutation(
    baseOptions?: Apollo.MutationHookOptions<DeleteOrderMutation, DeleteOrderMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<DeleteOrderMutation, DeleteOrderMutationVariables>(
        DeleteOrderDocument,
        options
    );
}
export type DeleteOrderMutationHookResult = ReturnType<typeof useDeleteOrderMutation>;
export type DeleteOrderMutationResult = Apollo.MutationResult<DeleteOrderMutation>;
export type DeleteOrderMutationOptions = Apollo.BaseMutationOptions<
    DeleteOrderMutation,
    DeleteOrderMutationVariables
>;
export const CreateParcelDocument = gql`
    mutation createParcel(
        $name: String!
        $origin: String!
        $weight: Float!
        $unit: Unit!
        $customer: ID!
        $status: Status!
    ) {
        createParcel(
            data: {
                name: $name
                origin: $origin
                weight: $weight
                unit: $unit
                customer: $customer
                status: $status
            }
        ) {
            id
            name
            origin
            weight
            unit
            status
            approval
        }
    }
`;
export type CreateParcelMutationFn = Apollo.MutationFunction<
    CreateParcelMutation,
    CreateParcelMutationVariables
>;

/**
 * __useCreateParcelMutation__
 *
 * To run a mutation, you first call `useCreateParcelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateParcelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createParcelMutation, { data, loading, error }] = useCreateParcelMutation({
 *   variables: {
 *      name: // value for 'name'
 *      origin: // value for 'origin'
 *      weight: // value for 'weight'
 *      unit: // value for 'unit'
 *      customer: // value for 'customer'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useCreateParcelMutation(
    baseOptions?: Apollo.MutationHookOptions<CreateParcelMutation, CreateParcelMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateParcelMutation, CreateParcelMutationVariables>(
        CreateParcelDocument,
        options
    );
}
export type CreateParcelMutationHookResult = ReturnType<typeof useCreateParcelMutation>;
export type CreateParcelMutationResult = Apollo.MutationResult<CreateParcelMutation>;
export type CreateParcelMutationOptions = Apollo.BaseMutationOptions<
    CreateParcelMutation,
    CreateParcelMutationVariables
>;
export const UpdateParcelDocument = gql`
    mutation updateParcel(
        $id: ID!
        $name: String!
        $origin: String!
        $weight: Float!
        $unit: Unit
        $customer: ID!
        $status: Status
    ) {
        updateParcel(
            id: $id
            data: {
                name: $name
                origin: $origin
                weight: $weight
                unit: $unit
                customer: $customer
                status: $status
            }
        ) {
            id
            name
            origin
            weight
            unit
            status
            approval
        }
    }
`;
export type UpdateParcelMutationFn = Apollo.MutationFunction<
    UpdateParcelMutation,
    UpdateParcelMutationVariables
>;

/**
 * __useUpdateParcelMutation__
 *
 * To run a mutation, you first call `useUpdateParcelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateParcelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateParcelMutation, { data, loading, error }] = useUpdateParcelMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      origin: // value for 'origin'
 *      weight: // value for 'weight'
 *      unit: // value for 'unit'
 *      customer: // value for 'customer'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateParcelMutation(
    baseOptions?: Apollo.MutationHookOptions<UpdateParcelMutation, UpdateParcelMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<UpdateParcelMutation, UpdateParcelMutationVariables>(
        UpdateParcelDocument,
        options
    );
}
export type UpdateParcelMutationHookResult = ReturnType<typeof useUpdateParcelMutation>;
export type UpdateParcelMutationResult = Apollo.MutationResult<UpdateParcelMutation>;
export type UpdateParcelMutationOptions = Apollo.BaseMutationOptions<
    UpdateParcelMutation,
    UpdateParcelMutationVariables
>;
export const DeleteParcelDocument = gql`
    mutation deleteParcel($id: ID!) {
        deleteParcel(id: $id) {
            id
            name
            origin
            weight
            unit
            status
            approval
        }
    }
`;
export type DeleteParcelMutationFn = Apollo.MutationFunction<
    DeleteParcelMutation,
    DeleteParcelMutationVariables
>;

/**
 * __useDeleteParcelMutation__
 *
 * To run a mutation, you first call `useDeleteParcelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteParcelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteParcelMutation, { data, loading, error }] = useDeleteParcelMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteParcelMutation(
    baseOptions?: Apollo.MutationHookOptions<DeleteParcelMutation, DeleteParcelMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<DeleteParcelMutation, DeleteParcelMutationVariables>(
        DeleteParcelDocument,
        options
    );
}
export type DeleteParcelMutationHookResult = ReturnType<typeof useDeleteParcelMutation>;
export type DeleteParcelMutationResult = Apollo.MutationResult<DeleteParcelMutation>;
export type DeleteParcelMutationOptions = Apollo.BaseMutationOptions<
    DeleteParcelMutation,
    DeleteParcelMutationVariables
>;
export const ApproveShipmentDocument = gql`
    mutation approveShipment($id: ID!) {
        approveShipment(id: $id) {
            id
            name
            origin
            weight
            unit
            status
            approval
        }
    }
`;
export type ApproveShipmentMutationFn = Apollo.MutationFunction<
    ApproveShipmentMutation,
    ApproveShipmentMutationVariables
>;

/**
 * __useApproveShipmentMutation__
 *
 * To run a mutation, you first call `useApproveShipmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApproveShipmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [approveShipmentMutation, { data, loading, error }] = useApproveShipmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useApproveShipmentMutation(
    baseOptions?: Apollo.MutationHookOptions<
        ApproveShipmentMutation,
        ApproveShipmentMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<ApproveShipmentMutation, ApproveShipmentMutationVariables>(
        ApproveShipmentDocument,
        options
    );
}
export type ApproveShipmentMutationHookResult = ReturnType<typeof useApproveShipmentMutation>;
export type ApproveShipmentMutationResult = Apollo.MutationResult<ApproveShipmentMutation>;
export type ApproveShipmentMutationOptions = Apollo.BaseMutationOptions<
    ApproveShipmentMutation,
    ApproveShipmentMutationVariables
>;
export const CreateUserDocument = gql`
    mutation createUser(
        $locale: Locale!
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
        $phoneNumber1: String!
        $phoneNumber2: String
        $profession: String
        $street: String!
        $postalCode: String
        $city: String!
        $country: String!
        $role: Role!
    ) {
        createUser(
            locale: $locale
            data: {
                firstName: $firstName
                lastName: $lastName
                email: $email
                password: $password
                phoneNumber1: $phoneNumber1
                phoneNumber2: $phoneNumber2
                profession: $profession
                street: $street
                postalCode: $postalCode
                city: $city
                country: $country
                role: $role
            }
        ) {
            id
            firstName
            lastName
            email
            customerId
            role
        }
    }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
    CreateUserMutation,
    CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      locale: // value for 'locale'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      phoneNumber1: // value for 'phoneNumber1'
 *      phoneNumber2: // value for 'phoneNumber2'
 *      profession: // value for 'profession'
 *      street: // value for 'street'
 *      postalCode: // value for 'postalCode'
 *      city: // value for 'city'
 *      country: // value for 'country'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useCreateUserMutation(
    baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
        CreateUserDocument,
        options
    );
}
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
    CreateUserMutation,
    CreateUserMutationVariables
>;
export const UpdateUserDocument = gql`
    mutation updateUser(
        $id: ID!
        $firstName: String!
        $lastName: String!
        $email: String!
        $phoneNumber1: String!
        $phoneNumber2: String
        $profession: String
        $street: String!
        $postalCode: String
        $city: String!
        $country: String!
        $role: Role!
    ) {
        updateUser(
            id: $id
            data: {
                firstName: $firstName
                lastName: $lastName
                email: $email
                phoneNumber1: $phoneNumber1
                phoneNumber2: $phoneNumber2
                profession: $profession
                street: $street
                postalCode: $postalCode
                city: $city
                country: $country
                role: $role
            }
        ) {
            id
            firstName
            lastName
            email
            customerId
            role
        }
    }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
    UpdateUserMutation,
    UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      phoneNumber1: // value for 'phoneNumber1'
 *      phoneNumber2: // value for 'phoneNumber2'
 *      profession: // value for 'profession'
 *      street: // value for 'street'
 *      postalCode: // value for 'postalCode'
 *      city: // value for 'city'
 *      country: // value for 'country'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useUpdateUserMutation(
    baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
        UpdateUserDocument,
        options
    );
}
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
>;
export const DeleteUserDocument = gql`
    mutation deleteUser($id: ID!) {
        deleteUser(id: $id) {
            id
            firstName
            lastName
            email
            role
        }
    }
`;
export type DeleteUserMutationFn = Apollo.MutationFunction<
    DeleteUserMutation,
    DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(
    baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
        DeleteUserDocument,
        options
    );
}
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
>;
export const CreateOrderForCustomerDocument = gql`
    mutation createOrderForCustomer(
        $customer: ID!
        $name: String!
        $link: String
        $description: String
    ) {
        createOrderForCustomer(
            customer: $customer
            data: { name: $name, link: $link, description: $description }
        ) {
            id
            name
            link
            description
            createdAt
        }
    }
`;
export type CreateOrderForCustomerMutationFn = Apollo.MutationFunction<
    CreateOrderForCustomerMutation,
    CreateOrderForCustomerMutationVariables
>;

/**
 * __useCreateOrderForCustomerMutation__
 *
 * To run a mutation, you first call `useCreateOrderForCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderForCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderForCustomerMutation, { data, loading, error }] = useCreateOrderForCustomerMutation({
 *   variables: {
 *      customer: // value for 'customer'
 *      name: // value for 'name'
 *      link: // value for 'link'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateOrderForCustomerMutation(
    baseOptions?: Apollo.MutationHookOptions<
        CreateOrderForCustomerMutation,
        CreateOrderForCustomerMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        CreateOrderForCustomerMutation,
        CreateOrderForCustomerMutationVariables
    >(CreateOrderForCustomerDocument, options);
}
export type CreateOrderForCustomerMutationHookResult = ReturnType<
    typeof useCreateOrderForCustomerMutation
>;
export type CreateOrderForCustomerMutationResult =
    Apollo.MutationResult<CreateOrderForCustomerMutation>;
export type CreateOrderForCustomerMutationOptions = Apollo.BaseMutationOptions<
    CreateOrderForCustomerMutation,
    CreateOrderForCustomerMutationVariables
>;
export const UpdateOrderForCustomerDocument = gql`
    mutation updateOrderForCustomer(
        $id: ID!
        $customer: ID!
        $name: String!
        $link: String
        $description: String
    ) {
        updateOrderForCustomer(
            id: $id
            customer: $customer
            data: { name: $name, link: $link, description: $description }
        ) {
            id
            name
            link
            description
            createdAt
        }
    }
`;
export type UpdateOrderForCustomerMutationFn = Apollo.MutationFunction<
    UpdateOrderForCustomerMutation,
    UpdateOrderForCustomerMutationVariables
>;

/**
 * __useUpdateOrderForCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateOrderForCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderForCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderForCustomerMutation, { data, loading, error }] = useUpdateOrderForCustomerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      customer: // value for 'customer'
 *      name: // value for 'name'
 *      link: // value for 'link'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateOrderForCustomerMutation(
    baseOptions?: Apollo.MutationHookOptions<
        UpdateOrderForCustomerMutation,
        UpdateOrderForCustomerMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        UpdateOrderForCustomerMutation,
        UpdateOrderForCustomerMutationVariables
    >(UpdateOrderForCustomerDocument, options);
}
export type UpdateOrderForCustomerMutationHookResult = ReturnType<
    typeof useUpdateOrderForCustomerMutation
>;
export type UpdateOrderForCustomerMutationResult =
    Apollo.MutationResult<UpdateOrderForCustomerMutation>;
export type UpdateOrderForCustomerMutationOptions = Apollo.BaseMutationOptions<
    UpdateOrderForCustomerMutation,
    UpdateOrderForCustomerMutationVariables
>;
export const AddressDocument = gql`
    query address {
        address {
            id
            country
            city
            postalCode
            street
        }
    }
`;

/**
 * __useAddressQuery__
 *
 * To run a query within a React component, call `useAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddressQuery({
 *   variables: {
 *   },
 * });
 */
export function useAddressQuery(
    baseOptions?: Apollo.QueryHookOptions<AddressQuery, AddressQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<AddressQuery, AddressQueryVariables>(AddressDocument, options);
}
export function useAddressLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<AddressQuery, AddressQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<AddressQuery, AddressQueryVariables>(AddressDocument, options);
}
export type AddressQueryHookResult = ReturnType<typeof useAddressQuery>;
export type AddressLazyQueryHookResult = ReturnType<typeof useAddressLazyQuery>;
export type AddressQueryResult = Apollo.QueryResult<AddressQuery, AddressQueryVariables>;
export const MeDocument = gql`
    query me {
        me {
            id
            firstName
            lastName
            role
            parcels {
                id
                name
                origin
                weight
                unit
                status
                approval
                createdAt
                updatedAt
            }
            orders {
                id
                name
                link
                description
                createdAt
            }
        }
    }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const OrdersDocument = gql`
    query orders {
        orders {
            id
            name
            link
            description
            createdAt
            customer {
                id
                customerId
                firstName
                lastName
            }
        }
    }
`;

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrdersQuery(
    baseOptions?: Apollo.QueryHookOptions<OrdersQuery, OrdersQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
}
export function useOrdersLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
}
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersQueryResult = Apollo.QueryResult<OrdersQuery, OrdersQueryVariables>;
export const OrderDocument = gql`
    query order($id: ID!) {
        order(id: $id) {
            id
            name
            link
            description
            createdAt
            customer {
                id
                firstName
                lastName
            }
        }
    }
`;

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderQuery(
    baseOptions: Apollo.QueryHookOptions<OrderQuery, OrderQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
}
export function useOrderLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
}
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export type OrderQueryResult = Apollo.QueryResult<OrderQuery, OrderQueryVariables>;
export const ParcelsDocument = gql`
    query parcels {
        parcels {
            id
            name
            origin
            weight
            unit
            status
            approval
        }
    }
`;

/**
 * __useParcelsQuery__
 *
 * To run a query within a React component, call `useParcelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useParcelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParcelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useParcelsQuery(
    baseOptions?: Apollo.QueryHookOptions<ParcelsQuery, ParcelsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<ParcelsQuery, ParcelsQueryVariables>(ParcelsDocument, options);
}
export function useParcelsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<ParcelsQuery, ParcelsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<ParcelsQuery, ParcelsQueryVariables>(ParcelsDocument, options);
}
export type ParcelsQueryHookResult = ReturnType<typeof useParcelsQuery>;
export type ParcelsLazyQueryHookResult = ReturnType<typeof useParcelsLazyQuery>;
export type ParcelsQueryResult = Apollo.QueryResult<ParcelsQuery, ParcelsQueryVariables>;
export const ParcelDocument = gql`
    query parcel($id: ID!) {
        parcel(id: $id) {
            id
            name
            id
            name
            origin
            weight
            unit
            status
            approval
            createdAt
            updatedAt
            customer {
                id
                firstName
                lastName
                customerId
            }
        }
    }
`;

/**
 * __useParcelQuery__
 *
 * To run a query within a React component, call `useParcelQuery` and pass it any options that fit your needs.
 * When your component renders, `useParcelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParcelQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useParcelQuery(
    baseOptions: Apollo.QueryHookOptions<ParcelQuery, ParcelQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<ParcelQuery, ParcelQueryVariables>(ParcelDocument, options);
}
export function useParcelLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<ParcelQuery, ParcelQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<ParcelQuery, ParcelQueryVariables>(ParcelDocument, options);
}
export type ParcelQueryHookResult = ReturnType<typeof useParcelQuery>;
export type ParcelLazyQueryHookResult = ReturnType<typeof useParcelLazyQuery>;
export type ParcelQueryResult = Apollo.QueryResult<ParcelQuery, ParcelQueryVariables>;
export const UsersDocument = gql`
    query users {
        users {
            id
            firstName
            lastName
            email
            customerId
            role
        }
    }
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(
    baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
}
export function useUsersLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const UserDocument = gql`
    query user($id: ID!) {
        user(id: $id) {
            id
            firstName
            lastName
            phoneNumber1
            phoneNumber2
            profession
            email
            customerId
            role
            shippingAddress {
                street
                city
                country
                postalCode
            }
            onlineAddress {
                street
                city
                country
                postalCode
            }
            parcels {
                id
                name
                origin
                weight
                unit
                status
                approval
            }
            orders {
                id
                name
                link
                description
            }
        }
    }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;

export const UpdateAddress = gql`
    mutation updateAddress(
        $id: ID!
        $street: String!
        $postalCode: String!
        $city: String!
        $country: String!
    ) {
        updateAddress(
            id: $id
            data: { street: $street, postalCode: $postalCode, city: $city, country: $country }
        ) {
            id
            street
            postalCode
            city
            country
        }
    }
`;
export const CreateAccount = gql`
    mutation createAccount(
        $locale: Locale!
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
        $phoneNumber1: String!
        $phoneNumber2: String
        $profession: String
        $street: String!
        $postalCode: String
        $city: String!
        $country: String!
    ) {
        createAccount(
            locale: $locale
            data: {
                firstName: $firstName
                lastName: $lastName
                email: $email
                password: $password
                phoneNumber1: $phoneNumber1
                phoneNumber2: $phoneNumber2
                profession: $profession
                street: $street
                postalCode: $postalCode
                city: $city
                country: $country
            }
        ) {
            firstName
            lastName
            email
            customerId
            street
            city
            country
            postalCode
        }
    }
`;
export const Login = gql`
    mutation login($email: String!, $password: String!) {
        login(data: { email: $email, password: $password }) {
            message
        }
    }
`;
export const ForgotPassword = gql`
    mutation forgotPassword($locale: Locale!, $email: String!) {
        forgotPassword(locale: $locale, data: { email: $email }) {
            message
        }
    }
`;
export const ResetPassword = gql`
    mutation resetPassword(
        $id: ID!
        $token: String!
        $password: String!
        $confirmPassword: String!
    ) {
        resetPassword(
            data: { id: $id, token: $token, password: $password, confirmPassword: $confirmPassword }
        ) {
            message
        }
    }
`;
export const ValidateAccount = gql`
    mutation validateAccount($token: String!) {
        validateAccount(token: $token) {
            message
        }
    }
`;
export const Logout = gql`
    mutation logout {
        logout {
            message
        }
    }
`;
export const CreateOrder = gql`
    mutation createOrder($name: String!, $link: String, $description: String) {
        createOrder(data: { name: $name, link: $link, description: $description }) {
            id
            name
            link
            description
            createdAt
        }
    }
`;
export const UpdateOrder = gql`
    mutation updateOrder($id: ID!, $name: String!, $link: String, $description: String) {
        updateOrder(id: $id, data: { name: $name, link: $link, description: $description }) {
            id
            name
            link
            description
            createdAt
        }
    }
`;
export const DeleteOrder = gql`
    mutation deleteOrder($id: ID!) {
        deleteOrder(id: $id) {
            id
            name
            link
            description
        }
    }
`;
export const CreateParcel = gql`
    mutation createParcel(
        $name: String!
        $origin: String!
        $weight: Float!
        $unit: Unit!
        $customer: ID!
        $status: Status!
    ) {
        createParcel(
            data: {
                name: $name
                origin: $origin
                weight: $weight
                unit: $unit
                customer: $customer
                status: $status
            }
        ) {
            id
            name
            origin
            weight
            unit
            status
            approval
        }
    }
`;
export const UpdateParcel = gql`
    mutation updateParcel(
        $id: ID!
        $name: String!
        $origin: String!
        $weight: Float!
        $unit: Unit
        $customer: ID!
        $status: Status
    ) {
        updateParcel(
            id: $id
            data: {
                name: $name
                origin: $origin
                weight: $weight
                unit: $unit
                customer: $customer
                status: $status
            }
        ) {
            id
            name
            origin
            weight
            unit
            status
            approval
        }
    }
`;
export const DeleteParcel = gql`
    mutation deleteParcel($id: ID!) {
        deleteParcel(id: $id) {
            id
            name
            origin
            weight
            unit
            status
            approval
        }
    }
`;
export const ApproveShipment = gql`
    mutation approveShipment($id: ID!) {
        approveShipment(id: $id) {
            id
            name
            origin
            weight
            unit
            status
            approval
        }
    }
`;
export const CreateUser = gql`
    mutation createUser(
        $locale: Locale!
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
        $phoneNumber1: String!
        $phoneNumber2: String
        $profession: String
        $street: String!
        $postalCode: String
        $city: String!
        $country: String!
        $role: Role!
    ) {
        createUser(
            locale: $locale
            data: {
                firstName: $firstName
                lastName: $lastName
                email: $email
                password: $password
                phoneNumber1: $phoneNumber1
                phoneNumber2: $phoneNumber2
                profession: $profession
                street: $street
                postalCode: $postalCode
                city: $city
                country: $country
                role: $role
            }
        ) {
            id
            firstName
            lastName
            email
            customerId
            role
        }
    }
`;
export const UpdateUser = gql`
    mutation updateUser(
        $id: ID!
        $firstName: String!
        $lastName: String!
        $email: String!
        $phoneNumber1: String!
        $phoneNumber2: String
        $profession: String
        $street: String!
        $postalCode: String
        $city: String!
        $country: String!
        $role: Role!
    ) {
        updateUser(
            id: $id
            data: {
                firstName: $firstName
                lastName: $lastName
                email: $email
                phoneNumber1: $phoneNumber1
                phoneNumber2: $phoneNumber2
                profession: $profession
                street: $street
                postalCode: $postalCode
                city: $city
                country: $country
                role: $role
            }
        ) {
            id
            firstName
            lastName
            email
            customerId
            role
        }
    }
`;
export const DeleteUser = gql`
    mutation deleteUser($id: ID!) {
        deleteUser(id: $id) {
            id
            firstName
            lastName
            email
            role
        }
    }
`;
export const CreateOrderForCustomer = gql`
    mutation createOrderForCustomer(
        $customer: ID!
        $name: String!
        $link: String
        $description: String
    ) {
        createOrderForCustomer(
            customer: $customer
            data: { name: $name, link: $link, description: $description }
        ) {
            id
            name
            link
            description
            createdAt
        }
    }
`;
export const UpdateOrderForCustomer = gql`
    mutation updateOrderForCustomer(
        $id: ID!
        $customer: ID!
        $name: String!
        $link: String
        $description: String
    ) {
        updateOrderForCustomer(
            id: $id
            customer: $customer
            data: { name: $name, link: $link, description: $description }
        ) {
            id
            name
            link
            description
            createdAt
        }
    }
`;
export const Address = gql`
    query address {
        address {
            id
            country
            city
            postalCode
            street
        }
    }
`;
export const Me = gql`
    query me {
        me {
            id
            firstName
            lastName
            role
            parcels {
                id
                name
                origin
                weight
                unit
                status
                approval
                createdAt
                updatedAt
            }
            orders {
                id
                name
                link
                description
                createdAt
            }
        }
    }
`;
export const Orders = gql`
    query orders {
        orders {
            id
            name
            link
            description
            createdAt
            customer {
                id
                customerId
                firstName
                lastName
            }
        }
    }
`;
export const Order = gql`
    query order($id: ID!) {
        order(id: $id) {
            id
            name
            link
            description
            createdAt
            customer {
                id
                firstName
                lastName
            }
        }
    }
`;
export const Parcels = gql`
    query parcels {
        parcels {
            id
            name
            origin
            weight
            unit
            status
            approval
        }
    }
`;
export const Parcel = gql`
    query parcel($id: ID!) {
        parcel(id: $id) {
            id
            name
            id
            name
            origin
            weight
            unit
            status
            approval
            createdAt
            updatedAt
            customer {
                id
                firstName
                lastName
                customerId
            }
        }
    }
`;
export const Users = gql`
    query users {
        users {
            id
            firstName
            lastName
            email
            customerId
            role
        }
    }
`;
export const User = gql`
    query user($id: ID!) {
        user(id: $id) {
            id
            firstName
            lastName
            phoneNumber1
            phoneNumber2
            profession
            email
            customerId
            role
            shippingAddress {
                street
                city
                country
                postalCode
            }
            onlineAddress {
                street
                city
                country
                postalCode
            }
            parcels {
                id
                name
                origin
                weight
                unit
                status
                approval
            }
            orders {
                id
                name
                link
                description
            }
        }
    }
`;

export interface PossibleTypesResultData {
    possibleTypes: {
        [key: string]: string[];
    };
}
const result: PossibleTypesResultData = {
    possibleTypes: {},
};
export default result;
