export const globalEnglishMessages = {
    nav: {
        main: {
            home: 'Home',
            services: 'Our Services',
            contact: 'Contact',
        },

        dropdown: {
            account: 'My account',
            profile: 'Profile',
            store: 'My store',
            admin: 'Admin',
            logout: 'Logout',

            services: {
                parcel_sending: 'Parcel sending',
                purchase_reshipping: 'Purchase reshipping',
                pricing: 'Pricing',
            },
        },

        account: {
            parcel: 'Parcels',
            orders: 'Purchase orders',
            tracking: 'Tracking',
        },

        admin: {
            dashboard: 'Dashboard',
            parcels: 'Parcels',
            users: 'Users',
            orders: 'Orders',
            settings: 'Settings',
        },
        footer: {
            help: {
                title: 'Help',
                faq: 'FAQ',
                prohibited_items: 'Prohibited & limited items',
                shipping_methods: 'Shipping methods',
                shipping_calculator: 'Shipping calculator',
            },

            about: {
                title: 'About us',
                what_taftaf: 'What is taftaf',
                blog: 'Blog',
            },

            locations: {
                title: 'Locations',
                werehouse_locations: 'Warehouse locations',
                relay_points: 'Relay points',
            },

            customer_service: {
                title: 'Customer service',
                contact_us: 'Contact us',
                tel_france: 'France',
                tel_senegal: 'Senegal',
                tel_guinea: 'Guinea',
                tel_burundi: 'Coming soon...',
            },
        },
        services: {
            title: 'Nos Services',
            by_air: 'We send parcels by air',
            by_sea: 'We send parcels by sea',
            we_shop_for_you: 'We shop for you',
            you_shop_for_you: 'You shop for you',
        },

        sign_in: 'Login',
        sign_up: 'Create an account',
    },

    input_fields: {
        email: 'Email',
        email_placeholder: 'Enter your address email',
        newPassword: 'New password',
        confirmPassword: 'Confirm password',
        first_name: 'First name',
        last_name: 'Last name',
        fullname: 'Full name',
        password: 'Password',
        phone_number: 'Phone number',
        phone_number1: 'Phone number 1',
        phone_number2: 'Phone number 2',
        address: 'Address',
        postalCode: 'Postal code',
        profession: 'Profession',
        city: 'City',
        country: 'Country',
        role: 'Role',
        track_parcel_placeholder: 'Select a parcel',
        search_users_placeholder: 'Filter  by ID',
        search_orders_placeholder: 'Filter par name',

        product_name: 'Product name',
        product_link: 'Product link',
        product_description: 'Product description',
        origin: 'Origin',
        weight: 'Weight',
        status: 'Status',
        shipmentApproval: 'Shipment approval',
        customer: 'Customer',
        select_placeholder: 'Select...',
    },

    modal: {
        user: {
            delete: 'Delete user',
            update: 'Update user',
        },

        parcel: {
            create: 'Add parcel',
            update: 'Update parcel',
            delete: 'Delete parcel',
        },

        order: {
            create: 'Create purchase order',
            update: 'Update purchase order',
            delete: 'Delete purchase order',
        },

        settings: { update: 'Update address' },
    },
    buttons: {
        send: 'Send',
        submit: 'Submit',
        create: 'Create',
        update: 'Update',
        delete: 'Delete',
        cancel: 'Cancel',
        close: 'Close',
        next: 'Next',
        prev: 'Previous',
    },

    toasts: {
        signup: {
            success: {
                title: 'Sign up succeeded',
                description: 'Click on the button below to visit your taftaf store.',
            },

            user_registered: {
                title: 'Signup failed',
                description: 'The email address you entered is already in use.',
            },
        },

        login: {
            success: {
                title: 'Sign in succeeded',
                description: 'Welcome to your taftaf store.',
            },

            error: {
                title: 'Login failed',
                description: 'Invalid email or password.',
            },
        },

        forgot_password: {
            success: {
                title: 'Check your mail inbox',
                description: 'We have sent password recovery instructions to your  email',
            },

            error: {
                title: 'Sending password reset instruction failed',
                description:
                    'Make sure the email you entered is the same as the one you used to create your account.',
            },
        },

        reset_password: {
            success: {
                title: 'Your password has reset',
                description: 'Please sign in to use your account.',
            },

            error: {
                title: 'Reset password failed',
                description: 'Please request another password reset link.',
            },
        },

        shipment: {
            approve: {
                title: 'Shipment has approved',
                description: 'You can track the delivery progress in our tracking system.',
            },
        },

        profile: {
            update: 'Profile has updated',
        },

        order: {
            create: {
                title: 'The purchase order has submitted.',
                description: 'We will get back to you shortly by your email.',
            },

            update: 'The purchase order has updated',

            delete: 'The purchase order has deleted',
        },

        parcel: {
            create: 'The parcel has created',
            update: 'The parcel has updated',
            delete: 'The parcel has deleted',
        },

        user: {
            create: 'The user has created',
            update: 'The user has updated',
            delete: 'The user has deleted',

            registered: {
                title: 'Signup failed',
                description: 'The email address you entered is already in use.',
            },
        },

        setting: {
            update: 'The address has updated',
        },

        account_validation: {
            success: { title: 'Activating account succeeded' },
            error: { title: 'Activating account failed' },
        },

        contact: {
            success: {
                title: 'The message has been sent',
                description: 'Thank you for your message we will get back to you soon.',
            },

            error: {
                title: 'Failed to send the message',
                description: 'Please try again, or let us know at: contact@taftaf.net',
            },
        },
    },

    validators: {
        signIn: {
            invalid_email: 'Invalid email.',
            required_email: 'Email is required.',
            required_password: 'Password is required.',
        },
        account: {
            required_first_name: 'First name is required.',
            required_last_name: 'Last name is required.',
            required_phone_number: 'Phone number is required.',
            required_address: 'Address is required.',
            required_city: 'City is required.',
            required_country: 'Country is required.',
        },

        create_purchase_order: {
            required_name: 'Product name is required.',
        },

        createParcel: {
            required_name: 'Product name is required.',
            required_origin: 'Origin is required.',
            min_weight: "Weight can't be under 1.",
            required_weight: 'Weight is required.',
            required_customer: 'Customer is required.',
        },

        reset_password: {
            confirm_password: 'The two passwords must be the same.',
        },
    },

    // multiple used translation content and for dynamic routes pages
    order_created_text: 'ordered on:',

    alert_delete_description: 'Are you sure? You can‘t undo this action afterward.',

    account_validation: {
        title: 'Hold on a little please!',
        description: 'We are activating your account.',
    },

    reset_password: {
        title: 'Create new password',
        subtitle: 'Your new password must be different from previously used password',
    },

    single_user: {
        personal_infos_title: 'Personal infos',
        shipping_address_title: 'Shipping address',
        parcels_title: 'Parcels',
        purchase_orders_title: 'Orders',
    },

    parcel: {
        RECEIVED: 'Received in France store',
        IN_TRANSIT: 'In transit to Senegal',
        DELIVERED: 'Delivered in Senegal',
        WAITING: 'Waiting',
        APPROVED: 'Approved',

        approve_button_text: 'Approve shipment',
        approved_button_text: 'Approved',
    },

    empty: {
        store: {
            parcels: 'You do not have any packages in our store yet.',
            orders: 'You do not have any purchase orders in our store yet.',
        },

        admin: {
            users: 'No users found.',
            parcels: 'No parcels found.',
            orders: 'No purchase orders found.',
        },
    },

    seo: {
        title: 'Taftaf - Parcel Sending and Purchase Reshipping',
        description: 'Parcel Sending and Purchase Reshipping',
    },
};
