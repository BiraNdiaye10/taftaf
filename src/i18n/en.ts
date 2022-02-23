import { Routes } from '@taftaf/config';
import { nav } from './global';

const parcels = {
    parcels_title: 'My parcels',
    parcels_empty_msg: 'You have no parcels in our store yet.',
};

export const en = {
    [Routes.home]: {
        nav,
        intro: 'Parcel Sending and Purchase Reshipping',
        services: {
            tooltip_text: 'Coming soon...',
            button_text: 'Learn more',
        },

        services_description: {
            you_shop_for_you: {
                title: 'You shop for you',
                subtitle: 'How it works',
                cta: 'I buy for me',
                step_one: 'Sign up and get your taftaf address in France.',
                step_two:
                    'Shop online at your favorite stores and ship them to your new taftaf address.',
                step_three: 'We will let you know when your package arrives.',
                step_four:
                    'Select and pay for your shipping and relax as we ship your items to you.',
            },

            we_shop_for_you: {
                title: 'We shop for you',
                cta: 'Buy for me',
                subtitle: "You don't have a bank card or you prefer to pay in cash",
                step_one: "Tell us what you want, we'll find it for you.",
                step_two: 'We check the availability of products and give you a quote.',
                step_three: 'If you accept the quotation.',
                step_four: 'We buy and deliver to you.',
            },

            parcel_sending: {
                title: 'Also, we deliver any other package to you',
                subtitle: 'How it works',
                step_one: 'Tell us what package you have to send or receive.',
                step_two: 'Our prices are available {link_text}',
                step_three: 'Our service includes door-to-door pickup and delivery.',
                step_four: "It's taftaf who takes care of everything.",
                cta: 'Contact the delivery service',
            },
        },

        explore: {
            button: 'Create my taftaf address',
            signup: {
                title: 'Get your address',
                text: 'This will be your own address for your online orders in France. No registration fees.',
            },

            order: {
                title: 'Do your shopping via taftaf',
                text: 'Use your taftaf France address as the delivery address when paying at your preferred merchant.',
            },

            combine: {
                title: 'Combine your packages',
                text: 'Shop on multiple websites, combine the parcels into one box and save up to 80% on shipping.',
            },
        },

        brands: {
            title: 'Your favorite brands',
            subtitle: 'The best in the world',
        },

        partners: {
            title: 'Partners',
            subtitle: 'We deliver all over the world via our partners:',
        },

        testimonials: {
            title: 'What clients say about us',
            subtitle: 'Customer testimonials',

            content: {
                text1: 'Impeccable! Correct prices, deadlines respected, I highly recommend.',
                text2: 'I was won over by the efficiency and professionalism of taftaf, a big thank you.',
                text3: 'The shopping service is great, I ordered with my own credit card and taftaf took care of the rest.',
                text4: '3rd time I order with taftaf, never disappointed, always so professional and fast.',
                text5: "The purchase order support service is really great, I didn't have a credit card but I wanted to order on Amazon, I was able to pay in cash and be accompanied throughout the process, until receipt. of my order.",
                text6: 'I was able to receive my fridge and my furniture at home in just 20 days after their departure by boat, an efficient and very fast service.',
                text7: 'I regularly order for my store, and I am never disappointed, I look forward to my next order.',
                text8: 'Good communication and good customer follow-up, I received my package on time.',
                text9: 'Parcel received in very good condition, thank you.',
                text10: "I was skeptical of using a purchase reshipping service as I was new to it, but now I won't be able to do without it, see you next time.",
            },
        },

        login: {
            title: 'Sign in to your account',
            subtitle: "Don't have an account?",
            button_text: 'Sign in',
            link_text: 'Sign up',
            forgot_password: 'Forgot password?',
        },
    },

    [Routes.login]: {
        title: 'Sign in to your account',
        subtitle: "Don't have an account?",
        button_text: 'Sign in',
        link_text: 'Sign up',
        forgot_password: 'Forgot password?',
    },

    [Routes.inscription]: {
        document_title: "S'inscrire",
        signup_title: 'Create your address in just 3 quick steps',

        login_cta: {
            text1: 'Already have an account?',
            text2: 'Sign in',
        },
        signup_label1: 'Pending',
        signup_label2: 'In progress',
        signup_label3: 'Completed',

        signup_step1: {
            title: 'Sign up',
            subtitle: 'Step 1',

            card_title1: 'Sign up with',
            card_title2: 'Or with just your email',
            card_button: 'Sign up',
        },

        signup_step2: {
            title: 'Add your personal Infos',
            subtitle: 'Step 2',
            card_button: 'Save',
        },

        signup_step3: {
            customerId: 'My ID',
            additional_info: 'Apartment / Additional info',
            title: 'Get your taftaf address',
            subtitle: 'Step 3',
            card_title: 'Congratulations',
            card_subtitle: 'Now you have your taftaf address.',
            description_step1: 'Shop online at your favorite stores',
            description_step2:
                "Use your address at checkout, we'll let you know when your items arrive at the warehouse.",
            description_step2_alert:
                'When shopping online, indicate your taftaf address, and remember to mention your ID: {customerId} in the additional address field',
            description_step2_button_state_1: 'Copy my address',
            description_step2_button_state_2: 'Copied',
            button_text: 'Visit your taftaf store',
        },
    },

    [Routes.parcelSending]: {
        title: 'Parcel Sending',
        by_air: {
            title: 'By air',
            content: {
                item1: 'International transport of your packages to Senegal and Guinea.',
                item2: 'You will receive your packages 3-5 days after departure.',
                item3: 'taftaf insurance on all your shipments.',
                item4: 'Customer service available 7 days a week.',
            },
        },

        by_sea: {
            title: 'By sea',

            content: {
                item1: 'International transport by sea of ​​your equipment, large volume.',
                item2: 'You receive your packages 15 to 20 days after departure.',
                item3: 'Taftaf insurance on all your shipments.',
                item4: 'Customer service available 7 days a week.',
            },
        },
    },

    [Routes.purchaseReshipping]: {
        title: 'Purchase Reshipping',
        you_buy: {
            title: 'You buy for yourself',
            content: {
                item1: 'I register on the site to have my login details.',
                item2: 'I order on the merchant site of my choice (in France or abroad).',
                item3: 'I indicate my taftaf delivery address in France. I pay with my bank card.',
                item4: 'The taftaf teams take care of the rest and deliver my package to my home.',
            },
        },

        we_buy: {
            title: 'We buy for you',

            content: {
                item1: 'I tell taftaf: the merchant site and the products to order.',
                item2: 'taftaf offers me a quote for the purchase and delivery service.',
                item3: 'I pay the purchase amount.',
                item4: 'The taftaf teams order the articles from the indicated sites and deliver them to my home.',
            },
        },
    },

    [Routes.contact]: {
        title: 'Get in touch',
    },

    [Routes.locations]: {
        title: 'Our locations',
    },

    [Routes.prices]: {
        title: 'Pricing',
        by_air_button: 'By air',
        by_sea_button: 'By sea',
        pricing_title1: 'France to Senegal',
        pricing_title2: 'Senegal to France',
        pricing_title3: 'France to Guinea',
        pricing_title4: 'Guinea to France',
        timeLimit: 'Time limit',

        by_air: {
            time_limit: '3 to 5 days after departure.',
        },

        by_sea: {
            time_limit_senegal_trip: '15 to 20 days after departure',
            time_limit_guinea_trip: '25 to 30 days after departure',
        },
    },

    [Routes.faq]: {
        title: 'Frequently Asked Questions',
        contact_title: 'Do you have any questions? Please ask here we ready to support',
        contact_info:
            'If your question is not list here, please feel free to make a manual support.',

        button_text: 'Ask your question',

        faq1: {
            question: 'Where do you deliver?',
            response:
                'We deliver everywhere in France and everywhere in Europe! As in Senegal and Guinea-Conakry!',
        },

        faq2: {
            question: 'What is your pricing?',
            response:
                'We have a base rate of 10 € / kg on the PARIS-DAKAR link. A supplement may be charged for provincial towns in France and other European countries.',
        },

        faq3: {
            question:
                'I am in Senegal and I have a package that must go to Europe, how much does it cost?',
            response:
                'In this case, give us the weight of the package and we will give you an exact estimate of how much it will cost you.',
        },

        faq4: {
            question:
                "I am in a provincial town in France and I want to send a package to Dakar, How's it going ?",
            response:
                'Like all our provincial customers, it will have to be sent to us (by post) to our distribution site in Ile-de-France. \n You can contact our Paris agency (contact@taftaf.net) for more information.',
        },

        faq5: {
            question: 'I want to buy a product on the internet with my own bank card. How to do ?',
            response:
                'In this case, all you have to do is pay on your preferred site and give the TAFTAF France address as the delivery address.',
        },

        faq6: {
            question:
                "I want to buy on the internet but I don't have a bank card, what should I do?",
            response: `You can fill out the online form on our website or send us an email at Achat@taftaf.net with the list of the products you want to buy, the price and the quantity of each of the products.
                We will give you an estimate of the overall cost. Half the amount will have to be advanced and the rest paid on delivery.
                `,
        },
    },

    [Routes.profile]: {
        profile_name: 'Name',
        profile_button: 'Edit',
        profile_online_address: 'My taftaf address',
        profile_online_id: 'Apartment / Additional info',
        profile_shipping_address: 'My shipping address',

        profile_edit_title: 'Update my profile',
        profile_edit_submit: 'Save',
        profile_edit_cancel: 'Cancel',
    },

    [Routes.storePackages]: {
        ...parcels,
    },

    [Routes.forgotPassword]: {
        title: 'Forgot your password?',
        subtitle: `Don't worry, enter the email address associated with your account \n \n and we'll send an email with instructions to reset your password`,
        login_cta: 'Return to sign in',
    },
    [Routes.storeOrders]: {
        orders_title: 'Purchase orders',
        modal_create_title: 'Send purchase order',
        modal_update_title: 'Update purchase order',
        modal_button_text: 'New order',
        orders_empty_msg: 'You have no purchase orders in our system yet.',
        order_product_name: 'Product name',
        order_product_weight: 'Weight',
        order_status: 'Status',
        received: 'received',
        completed: 'completed',
    },

    [Routes.storeTracker]: {
        tracking_title: 'Track your parcels',
        choose_parcel_msg: 'Please choose a parcel in the field above',

        tracking_step1: 'Received in France store',
        tracking_step_subtitle_pending: 'Date pending...',

        tracking_step2_title_pending: 'Expected in transit',
        tracking_step2_title_success: 'In transit',

        tracking_step3_title_pending: 'Expected Delivery in Senegal store',
        tracking_step3_title_success: 'Delivered in Senegal store',
    },

    [Routes.prohibitedItems]: {
        title: 'Prohibited Items',
        thead1: 'Products',
        thead2: 'Restrictions',

        product1: { name: 'Alcohol', restriction: 'Prohibited' },
        product2: { name: 'Animals', restriction: 'Prohibited' },
        product3: {
            name: 'Electronic device',
            restriction: 'Limited',
            description: 'Must be packed in special packaging, such as a rigid packet',
        },
        product4: { name: 'Weapons', restriction: 'Prohibited' },
        product5: {
            name: 'Jewelry',
            restriction: 'Limited',
            description: 'Jewelry whose value does not exceed… euros /… CFA francs',
        },
        product6: { name: 'CBD', restriction: 'Prohibited' },
        product7: { name: 'Fuels / flammable products', restriction: 'Prohibited' },
        product8: { name: 'Explosive', restriction: 'Prohibited' },
        product9: {
            name: 'Medicines',
            restriction: 'Limited',
            description: 'Medicines prescribed by a doctor cannot be shipped',
        },
        product10: {
            name: 'Food',
            restriction: 'Limited',
            description: 'Perishable foods are not allowed.',
        },
        product11: {
            name: 'Perfume / Liquid products',
            restriction: 'Limited',
            description: 'Limited to 500ml per bottle.',
        },
        product12: { name: 'Plants', restriction: 'Prohibited' },
        product13: { name: 'Corrosive product', restriction: 'Prohibited' },
        product14: { name: 'Radioactive product', restriction: 'Prohibited' },
        product15: { name: 'Nicotine / tobacco products', restriction: 'Prohibited' },
        product16: {
            name: 'Cosmetic products',
            restriction: 'Limited',
            description:
                'Make-up, facial cream, deodorant, disinfectant for the hands… - Limited to 500ml per bottle',
        },
        product17: { name: 'Earth', restriction: 'Prohibited' },
        product18: { name: 'Chemical products', restriction: 'Prohibited' },
    },

    [Routes.adminDashboard]: {
        title: 'Dashboard',
    },
    [Routes.adminOrders]: {
        title: 'Purchase orders',
        button_text: 'New purchase order',
        subtitle: 'There a {ordersNumber} total purchase orders',
    },
    [Routes.adminPackages]: {
        title: 'Parcels',
        create_text_text: 'New parcel',
        subtitle: 'There a {parcelsNumber} total parcels',
        search: 'Filter by name',
    },
    [Routes.adminUsers]: {
        users_title: 'Users',
        users_subtitle: 'There are {usersNumber} total users',
        users_create_button: 'Create user',
    },

    [Routes.adminSettings]: {
        title: 'taftaf address in France',
    },
};
