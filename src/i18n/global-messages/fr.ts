export const globalFrenchMessages = {
    nav: {
        main: {
            home: 'Accueil',
            services: 'Nos services',
            contact: 'Contact',
        },

        dropdown: {
            account: 'Mon compte',
            profile: 'Profil',
            store: 'Mon stock',
            admin: 'Admin',
            logout: 'Se déconnecter',

            services: {
                parcel_sending: 'Envoi de colis',
                purchase_reshipping: 'Réexpédition d’achat',
                pricing: 'Nos Tarifs',
            },
        },

        account: {
            parcel: 'Colis',
            orders: "Demandes d'achats",
            tracking: 'Suivi',
        },

        admin: {
            dashboard: 'Dashboard',
            parcels: 'Colis',
            users: 'Utilisateurs',
            orders: 'Commandes',
            settings: 'Paramètres',
        },

        footer: {
            help: {
                title: 'Aide',
                faq: 'FAQ',
                prohibited_items: 'Produits interdits',
                shipping_methods: 'Méthodes de livraison',
                shipping_calculator: "Calculateur d'expédition",
            },

            about: {
                title: 'À propos de nous',
                what_taftaf: "Qu'est-ce que le taftaf",
                blog: 'Blog',
            },

            locations: {
                title: 'Nos emplacements',
                werehouse_locations: 'entrepôts',
                relay_points: 'Points relais',
            },

            customer_service: {
                title: 'Service Clients',
                contact_us: 'Contactez-nous',
                tel_france: 'France',
                tel_senegal: 'Sénégal',
                tel_guinea: 'Guinée',
                tel_burundi: 'Coming soon...',
            },
        },

        services: {
            title: 'Nos Services',
            by_air: 'Envoi de colis par voie aérienne',
            by_sea: 'Envoi de colis par voie maritime',
            we_shop_for_you: 'Nous achetons pour vous',
            you_shop_for_you: 'Vous achetez pour vous',
        },

        sign_in: 'Connexion',
        sign_up: 'Créer un compte',
    },

    input_fields: {
        email: 'Email',
        email_placeholder: 'Entrez votre adresse email',
        newPassword: 'Nouveau mot de passe',
        confirmPassword: 'Confirmez le mot de passe',
        first_name: 'Prénom',
        last_name: 'Nom',
        fullname: 'Nom et prénom',
        phone_number: 'N° de téléphone',
        phone_number1: 'N° de téléphone 1',
        phone_number2: 'N° de téléphone 2',
        address: 'Adresse',
        postalCode: 'Code postal',
        profession: 'Profession',
        city: 'Ville',
        country: 'Pays',
        role: 'Rôle',
        password: 'Mot de passe',
        track_parcel_placeholder: 'Sélectionnez un colis',
        search_users_placeholder: 'Filtrer par ID',

        search_orders_placeholder: 'Filter par nom',

        product_name: 'Nom du produit',
        product_link: 'Lien du produit',
        product_description: 'Description du produit',
        origin: 'Origine',
        weight: 'Poids',
        status: 'Statut',
        shipmentApproval: "Approbation d'expédition",
        customer: 'Client(e)',
        select_placeholder: 'Sélectionner...',
    },

    // Modal titles
    modal: {
        user: {
            delete: "Supprimer l'utilisateur",
            update: "Modifier l'utilisateur",
        },

        parcel: {
            create: 'Ajouter le colis',
            update: 'Modifier le colis',
            delete: 'Supprimer le colis',
        },

        order: {
            create: "Créer la demande d'achat",
            update: "Modifier la demande d'achat",
            delete: "Supprimer la demande d'achat",
        },

        settings: { update: "Modifier l'addresse" },
    },

    buttons: {
        send: 'Envoyer',
        create: 'Créer',
        update: 'Modifier',
        delete: 'Supprimer',
        cancel: 'Annuler',
        close: 'Fermer',
        next: 'Suivant',
        prev: 'Précédent',
    },

    toasts: {
        signup: {
            success: {
                title: 'Inscription réussie',
                description: 'Cliquez sur le bouton ci-dessous pour visiter votre stock taftaf.',
            },

            user_registered: {
                title: "Échec de l'inscription",
                description: "L'adresse e-mail que vous avez saisie est déjà utilisée.",
            },
        },

        login: {
            success: {
                title: 'Connexion réussie',
                description: 'Bienvenue dans votre stock taftaf.',
            },

            error: {
                title: 'Échec de la connexion',
                description: 'Email ou Mot de passe invalide.',
            },
        },

        forgot_password: {
            success: {
                title: 'Vérifiez votre boîte de réception',
                description:
                    'Nous avons envoyé des instructions de récupération de mot de passe à votre adresse e-mail',
            },

            error: {
                title: "L'envoi des instructions de réinitialisation du mot de passe a échoué",
                description:
                    "Assurez-vous que l'email que vous avez entré est le même que celui que vous avez utilisé pour créer votre compte.",
            },
        },

        reset_password: {
            success: {
                title: 'Votre mot de passe a été réinitialisé',
                description: 'Veuillez vous connecter pour utiliser votre compte',
            },

            error: {
                title: 'Échec de la réinitialisation du mot de passe',
                description: 'Veuillez demander un autre lien de réinitialisation de mot de passe.',
            },
        },

        shipment: {
            approve: {
                title: 'Envoi approuvé',
                description:
                    'Vous pouvez suivre la progression de la livraison dans notre système de suivi.',
            },
        },

        profile: {
            update: 'Le profil a été mis à jour',
        },

        order: {
            create: {
                title: "La commande d'achat a été soumis.",
                description: 'Nous vous répondrons sous peu par votre email.',
            },

            update: "La commande d'achat a été mis à jour",

            delete: "La commande d'achat a été supprimé",
        },

        parcel: {
            create: 'Le colis a été créé',
            update: 'Le colis a  été mis à jour',
            delete: 'Le colis a été supprimé',
        },

        user: {
            create: "L'utilisateur a été créé",
            update: "L'utilisateur a  été mis à jour",
            delete: "L'utilisateur a été supprimé",

            registered: {
                title: "Échec de la création de l'utilisateur",
                description: "L'adresse e-mail que vous avez saisie est déjà utilisée.",
            },
        },

        setting: {
            update: "L'address a été mis à jour",
        },

        account_validation: {
            success: { title: "L'activation du compte a réussi" },
            error: { title: "Échec de l'activation du compte" },
        },

        contact: {
            success: {
                title: 'Le message a été envoyé',
                description: 'Merci pour votre message, nous vous répondrons rapidement.',
            },

            error: {
                title: "Échec de l'envoi du message",
                description: 'Veuillez réessayer ou nous le faire savoir à: contact@taftaf.net',
            },
        },
    },

    validators: {
        signIn: {
            invalid_email: "L'e-mail est invalide.",
            required_email: "L'e-mail est requis.",
            required_password: 'Mot de passe est requis.',
        },

        account: {
            required_first_name: 'Le prénom est requis.',
            required_last_name: 'Le nom est requis.',
            required_phone_number: 'N° de téléphone est requis.',
            required_address: "L'adresse est requise.",
            required_city: 'La ville est requise.',
            required_country: 'Le pays est requis.',
        },

        create_purchase_order: {
            required_name: 'Le nom du produit est requis.',
        },

        createParcel: {
            required_name: 'Le nom du produit est requis.',
            required_origin: "L'origine est requise",
            min_weight: 'Le poids ne peut pas être inférieur à 1',
            required_weight: 'Le poids est requis',
            required_customer: 'Le client est requis.',
        },

        reset_password: {
            confirm_password: 'Les deux mots de passe doivent être identiques.',
        },
    },

    // multiple used translation content
    order_created_text: 'demandé le:',
    alert_delete_description:
        'Êtes-vous sûr? Vous ne pouvez pas annuler cette action par la suite.',

    account_validation: {
        title: "Attends un peu s'il te plait !",
        description: 'Nous activons votre compte.',
    },

    reset_password: {
        title: 'Créer un nouveau mot de passe',
        subtitle:
            'Votre nouveau mot de passe doit être différent du mot de passe précédemment utilisé',
    },

    parcel: {
        RECEIVED: 'Reçu en magasin France',
        IN_TRANSIT: 'En transit vers le Sénégal',
        DELIVERED: 'Livré au Sénégal',
        WAITING: 'En attente',
        APPROVED: 'Approuvé',

        approve_button_text: "Approuver l'expédition",
        approved_button_text: 'Approuvé',
    },

    single_user: {
        personal_infos_title: 'Informations personnelles',
        shipping_address_title: 'Adresse de livraison',
        parcels_title: 'Colis',
        purchase_orders_title: "Demande d'achats",
    },

    empty: {
        store: {
            parcels: "Vous n'avez pas encore de colis dans notre stock.",
            orders: "Vous n'avez pas encore de demandes d'achat dans notre stock.",
        },

        admin: {
            users: "Aucun utilisateur n'a été trouvé.",
            parcels: "Aucun colis n'a été trouvé.",
            orders: "Aucun demande d'achats n'a été trouvé.",
        },
    },

    seo: {
        title: 'Taftaf - Envoi de Colis et Réexpédition de Shopping',
        description: 'Envoi de Colis et Réexpédition de Shopping',
    },
};
