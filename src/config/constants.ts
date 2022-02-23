export const APP_NAME = 'Taftaf';

export const TOAST_DURATION = 9000;

export const MAPBOX_TOKEN =
    'pk.eyJ1IjoibXVjb3J0IiwiYSI6ImNrcHk2dzZrZzBtaXAycG9iOHZnYjJ3b28ifQ.4KHl-mWfaolhZVd3aPwG5Q';

export enum Routes {
    base = 'https://app.taftaf.net',
    home = '/',
    services = '/services',
    parcelSending = '/parcel-sending',
    purchaseReshipping = '/purchase-reshipping',
    prices = '/pricing',
    auth = '/auth',
    inscription = '/signup',
    login = '/login',
    createAddress = '/auth/create-address',
    contact = '/contact',
    faq = '/faq',
    prohibitedItems = '/prohibited-items',
    locations = '/locations',
    forgotPassword = '/forgot-password',

    weShopForYou = 'we-shop',
    parcelShipping = 'parcel-shipping',
    youShopForYou = 'you-shop',
    // Admin
    adminDashboard = '/admin/dashboard',
    adminUsers = '/admin/users',
    adminPackages = '/admin/packages',
    adminOrders = '/admin/orders',
    adminSettings = '/admin/settings',

    // Account
    profile = '/account/profile',
    storePackages = '/account/store/packages',
    storeOrders = '/account/store/orders',
    storeTracker = '/account/store/tracker',
}

export enum PackageStatusColors {
    'RECEIVED' = 'yellow',
    'IN_TRANSIT' = 'teal',
    'DELIVERED' = 'green',
}
export enum ShipmentApprovalColors {
    WAITING = 'yellow',
    APPROVED = 'green',
}

export enum OrderStatusColors {
    received = 'blue',
    completed = 'green',
}

export const SERVER_ERRORS = {
    USER_NOT_REGISTERED: 'USER_NOT_REGISTERED',
    USER_REGISTERED: 'USER_REGISTERED',
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
    INVALID_TOKEN: 'INVALID_TOKEN',
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
    ADDRESS_NOT_FOUND: 'ADDRESS_NOT_FOUND',
    ORDER_NOT_FOUND: 'ORDER_NOT_FOUND',
    PARCEL_NOT_FOUND: 'PARCEL_NOT_FOUND',
    USER_NOT_FOUND: 'USER_NOT_FOUND',
    PASSWORD_RESET: 'PASSWORD_RESET',
    RESET_PASSWORD_LINK_SENT: 'RESET_PASSWORD_LINK_SENT',
    SEND_EMAIL_SUCCESS: 'SEND_EMAIL_SUCCESS',
    SEND_EMAIL_FAILED: 'SEND_EMAIL_FAILED',
};
