import { Routes } from '@taftaf/config';
import { nav } from './global';

export const fr = {
    [Routes.home]: {
        nav,
        intro: 'Envoi de Colis et Réexpédition de Shopping',
        services: {
            tooltip_text: 'Bientôt disponible...',
            button_text: 'Voir plus',
        },

        services_description: {
            you_shop_for_you: {
                title: 'Vous achetez pour vous',
                subtitle: 'Comment ça fonctionne',
                cta: "J'achète pour moi",
                step_one: 'Inscrivez-vous et obtenez votre adresse taftaf en France',
                step_two:
                    'Achetez en ligne dans vos magasins préférés et expédiez-les à votre nouvelle adresse taftaf.',
                step_three: "Nous vous informerons de l'arrivée de votre colis.",
                step_four:
                    'Sélectionnez et payez votre expédition, et détendez-vous pendant que nous vous expédions vos articles.',
            },

            we_shop_for_you: {
                title: 'Nous achetons pour vous',
                cta: 'Acheter pour moi',
                subtitle: "Vous n'avez pas de carte bancaire ou vous préférez payer en espèces",
                step_one: 'Dites-nous ce que vous voulez, nous vous le trouverons.',
                step_two:
                    'Nous vérifions la disponibilité des produits et vous soumettons un devis',
                step_three: 'Si vous acceptez le devis',
                step_four: 'Nous achetons et vous livrons',
            },

            parcel_sending: {
                title: 'Aussi, nous vous livrons tout autre colis',
                subtitle: 'Comment ça fonctionne',
                step_one: 'Dites-nous ce que vous avez comme colis à envoyer ou recevoir.',
                step_two: 'Nos tarifs sont disponible {link_text}',
                step_three: "Notre service comprend l'enlevement et la livraison Porte à Porte.",
                step_four: "C'est taftaf qui s'occupe de tout.",
                cta: 'Contacter le service livraison',
            },
        },

        explore: {
            button: 'Créer mon adresse taftaf',

            signup: {
                title: 'Obtenez votre adresse',
                text: "Ce sera votre propre adresse pour vos commandes en ligne en France. Aucun frais d'inscription",
            },

            order: {
                title: 'Faites vos shopping via taftaf',
                text: 'Utilisez votre adresse taftaf France comme adresse de livraison lors du paiement chez votre marchand préféré.',
            },

            combine: {
                title: 'Combinez vos colis',
                text: "Achetez sur plusieurs sites Web, combinez les colis dans une seule boîte et économisez jusqu'à 80% sur les frais d'expédition.",
            },
        },

        brands: {
            title: 'Vos marques préférées',
            subtitle: 'Le meilleur du monde',
        },

        partners: {
            title: 'Partenaires',
            subtitle: 'Nous livrons partout dans le monde via nos partenaires:',
        },

        testimonials: {
            title: 'Ce que les clients disent de nous',
            subtitle: 'Témoignages de clients',

            content: {
                text1: 'Impeccable ! Des tarifs corrects, des délais respectés, je recommande vivement.',
                text2: 'J’ai été séduite par l’efficacité et le professionnalisme de taftaf, un grand merci.',
                text3: 'Le service shopping est super, j’ai commandé avec ma propre CB et taftaf s’est chargé du reste.',
                text4: '3ème fois que je commande avec taftaf, jamais déçu, toujours aussi professionnelle et rapide.',
                text5: "Le service d'aide à la commande d'achat est vraiment top, je n'avais pas de CB mais je voulais commander sur Amazon, j’ai pu payer en espèce et être accompagné tout le long du processus, jusqu’à réception de ma commande.",
                text6: 'J’ai pu recevoir mon frigo et mes meubles à domicile en à peine 20 jours après leur départ par bateau, un service efficace et très rapide.',
                text7: 'Je commande régulièrement pour ma boutique, et je ne suis jamais déçu, j’attends ma prochaine commande avec impatience.',
                text8: 'Bonne communication et bon suivi du client, j’ai reçu mon paquet dans les délais.',
                text9: 'Colis reçu en très bon état, merci.',
                text10: 'J’étais sceptique à l’idée d’utiliser un service de réexpédition d’achat car je ne connaissais pas, mais maintenant je ne vais plus pouvoir m’en passer, à la prochaine.',
            },
        },

        login: {
            title: 'Connectez-vous à votre compte',
            subtitle: "Vous n'avez pas de compte?",
            button_text: 'Se connecter',
            link_text: "S'inscrire",
            forgot_password: 'Mot de passe oublié?',
        },
    },

    [Routes.login]: {
        title: 'Connectez-vous à votre compte',
        subtitle: "Vous n'avez pas de compte?",
        button_text: 'Se connecter',
        link_text: "S'inscrire",
        forgot_password: 'Mot de passe oublié?',
    },

    [Routes.inscription]: {
        document_title: "S'inscrire",
        signup_title: 'Créez votre adresse en seulement 3 étapes rapides',

        login_cta: {
            text1: 'Vous avez déjà un compte?',
            text2: "S'identifier",
        },

        signup_label1: 'En attente',
        signup_label2: 'En cours',
        signup_label3: 'Complété',

        signup_step1: {
            title: "S'inscrire",
            subtitle: 'Étape 1',
            card_title1: "S'inscrire avec",
            card_title2: 'Ou avec juste votre e-mail',
            card_button: "S'inscrire",
        },

        signup_step2: {
            title: 'Ajoutez vos informations personnelles',
            subtitle: 'Étape 2',

            card_button: 'Sauvegarder',
        },

        signup_step3: {
            customerId: 'Mon ID',
            additional_info: 'Appartement / Infos supp',
            title: 'Obtenez votre adresse taftaf',
            subtitle: 'Étape 3',
            card_title: 'Toutes nos félicitations',
            card_subtitle: 'Vous avez maintenant votre adresse taftaf',
            description_step1: 'Achetez en ligne dans vos magasins préférés',
            description_step2:
                "Utilisez votre adresse taftaf lors de votre achat, nous vous informerons de l'arrivée de vos articles à l'entrepôt.",
            description_step2_alert:
                "Lors de vos achats en ligne, indiquez votre adresse taftaf et n'oubliez pas de mentionner votre identifiant: {customerId} dans le champ d'adresse supplémentaire",
            description_step2_button_state_1: 'Copier mon adresse',
            description_step2_button_state_2: 'Copié',
            button_text: 'Visit votre stock taftaf',
        },
    },

    [Routes.parcelSending]: {
        title: 'Envoi de colis',
        by_air: {
            title: 'Par voie aérienne',
            content: {
                item1: 'Transport international de vos colis à destination du Sénégal et de la Guinée.',
                item2: 'Vous recevrez vos colis 3 à 5 jours après le départ.',
                item3: 'Assurance taftaf sur tous vos envois.',
                item4: 'Service client disponible 7j /7.',
            },
        },

        by_sea: {
            title: 'Par voie maritime',

            content: {
                item1: 'Transport international par voie maritime de vos équipements, gros volume.',
                item2: 'Vous recevez vos colis 15 à 20 jours après le départ.',
                item3: 'Assurance taftaf sur tous vos envois.',
                item4: 'Service client disponible 7j /7.',
            },
        },
    },

    [Routes.purchaseReshipping]: {
        title: 'Réexpédition d’achat',
        you_buy: {
            title: 'Vous achetez pour vous',
            content: {
                item1: 'Je m’inscris sur le site  pour avoir mes identifiants.',
                item2: 'Je commande sur le site marchand de mon choix (en France ou à l’étranger).',
                item3: 'J’indique mon adresse de livraison taftaf en France. Je paie avec ma carte bancaire.',
                item4: "Les équipes taftaf s'occupent du reste et livrent mon colis à mon domicile.",
            },
        },

        we_buy: {
            title: 'Nous achetons pour vous',

            content: {
                item1: 'J’indique à taftaf: le site marchand et les produits à commander.',
                item2: "taftaf me propose un devis pour la prestation d'achat et de livraison.",
                item3: "Je paie le montant d'achat.",
                item4: 'Les équipes taftaf commandent les articles auprès des sites indiqués et me livrent à mon domicile.',
            },
        },
    },

    [Routes.prices]: {
        title: 'Nos Tarifs',
        by_air_button: 'Voie aérienne',
        by_sea_button: 'Voie maritime',
        pricing_title1: 'France vers Sénégal',
        pricing_title2: 'Sénégal vers France',
        pricing_title3: 'France vers Guinée',
        pricing_title4: 'Guinée vers France',
        timeLimit: 'Délai',

        by_air: {
            time_limit: '3 à 5 jours après le départ.',
        },

        by_sea: {
            time_limit_senegal_trip: '15 à 20 jours après le départ',
            time_limit_guinea_trip: '25 à 30 jours après le départ',
        },
    },

    [Routes.faq]: {
        title: 'Questions fréquemment posées',
        contact_title:
            'Avez-vous des questions? Veuillez demander ici, nous sommes prêts à soutenir',
        contact_info:
            "Si votre question n'est pas répertoriée ici, n'hésitez pas à faire une assistance manuelle.",

        button_text: 'Pose ta question',

        faq1: {
            question: 'Où est-ce que vous livrez ?',
            response:
                'On livre partout en France et partout en Europe ! Ainsi qu’au Sénégal et en Guinée-Conakry !',
        },

        faq2: {
            question: 'Quelle est votre tarification ?',
            response:
                "Nous avons un tarif de base de 10€/kg sur la liaison Paris-Dakar. Un supplément peut être facturé pour les villes de province en France et autres pays d'Europe.",
        },

        faq3: {
            question:
                "Je suis au Sénégal et j'ai un colis qui doit partir vers l'Europe, ça coûte combien ?",
            response:
                'Dans ce cas, il faut nous donner le poids du colis et nous vous ferons un devis exact de combien ça va vous coûter.',
        },

        faq4: {
            question:
                'Je suis dans une ville de province en France et je souhaite envoyer un colis vers Dakar, Comment ça se passe ?',
            response:
                "Comme tous nos clients de province, il faudra nous l'envoyer (par la poste) vers notre site de distribution en Ile-de-France. \n Vous pouvez contacter notre agence Paris (contact@taftaf.net) pour plus de renseignements.",
        },

        faq5: {
            question:
                'Je souhaite acheter un produit sur internet avec ma propre carte bancaire. Comment faire ?',
            response:
                'Dans ce cas, il vous suffit de payer sur votre Site préféré et donner l’adresse TAFTAF France comme adresse de livraison.',
        },

        faq6: {
            question:
                "Je souhaite acheter sur internet mais je n'ai pas de carte bancaire, comment faire ?",
            response:
                'Vous pouvez remplir le formulaire en ligne sur notre site ou nous envoyer un email à achat@taftaf.net avec la liste des produits que vous voulez acheter, le prix et la quantité de chacun des produits. Nous vous ferons un devis du coût global. Il faudra avancer la moitié du montant et régler le reste à la livraison.',
        },
    },

    [Routes.contact]: {
        title: 'Nous écrire',
    },
    [Routes.profile]: {
        profile_name: 'Nom',
        profile_button: 'Modifier',
        profile_online_address: 'Mon adresse taftaf',
        profile_online_id: 'Appartement / Infos supp',
        profile_shipping_address: 'Mon adresse de livraison',

        profile_edit_title: 'Modifier mon profil',
        profile_edit_submit: 'Sauvegarder',
        profile_edit_cancel: 'Annuler',
    },

    [Routes.storePackages]: {
        parcels_title: 'Mes Colis',
        parcels_empty_msg: "Vous n'avez pas encore de colis dans notre magasin.",
        create_text_text: 'Nouveau colis',
    },

    [Routes.storeOrders]: {
        orders_title: "Demandes d'achat",
        modal_title: "Envoi une commande d'achat",
        modal_create_title: "Envoyer la commande d'achat",
        modal_update_title: "Modifier la commande d'achat",
        modal_submit_button: 'Envoyer',
        modal_button_text: 'Nouveau commande',
        modal_cancel_button: 'Annuler',
        button_text: "Nouveau commande d'achat",
        orders_empty_msg: "Vous n'avez pas encore de commandes d'achats dans notre système.",
        order_product_name: 'Nom du produit',
        order_product_weight: 'Poids',
        order_status: 'Statut',
        received: 'reçu',
        completed: 'complété',
    },

    [Routes.storeTracker]: {
        tracking_title: 'Suivre votre colis',
        choose_parcel_msg: 'Veuillez choisir un colis dans le champ ci-dessus',

        tracking_step1: 'Reçu en magasin France',
        tracking_step_subtitle_pending: 'Date en attente...',

        tracking_step2_title_pending: 'Prévu en transit',
        tracking_step2_title_success: 'En transit',

        tracking_step3_title_pending: 'Livraison prévue en magasin au Sénégal',
        tracking_step3_title_success: 'Livré en magasin au Sénégal',
    },

    [Routes.forgotPassword]: {
        title: 'Mot de passe oublié?',
        subtitle:
            "Ne vous inquiétez pas, entrez l'adresse e-mail associée à votre compte et nous vous enverrons un e-mail avec les instructions pour réinitialiser votre mot de passe",
        login_cta: 'Retourner pour vous connecter',
    },

    [Routes.prohibitedItems]: {
        title: 'Produits interdits',
        thead1: 'Produits',
        thead2: 'Restrictions',

        product1: { name: 'Alcool', restriction: 'Interdit' },
        product2: { name: 'Animaux', restriction: 'Interdit' },
        product3: {
            name: 'Appareil électronique',
            restriction: 'Limité',
            description:
                'Doit être empaqueté dans un emballage spécial, un paquet rigide par exemple',
        },
        product4: { name: 'Armes', restriction: 'Interdit' },
        product5: {
            name: 'Bijoux',
            restriction: 'Limité',
            description: "Bijoux dont la valeur n'excède pas… euros /…francs CFA",
        },
        product6: { name: 'CBD', restriction: 'Interdit' },
        product7: { name: 'Combutibles/ produits inflammables', restriction: 'Interdit' },
        product8: { name: 'Explosif', restriction: 'Interdit' },
        product9: {
            name: 'Médicaments',
            restriction: 'Limité',
            description:
                'Les médicaments délivrés sur ordonnance médicale ne peuvent pas être expédiés',
        },
        product10: {
            name: 'Nourriture',
            restriction: 'Limité',
            description: 'Les aliments périssable ne sont pas autorisés.',
        },
        product11: {
            name: 'Parfum/ Produits liquides',
            restriction: 'Limité',
            description: 'Limité à 500ml par bouteille',
        },
        product12: { name: 'Plantes', restriction: 'Interdit' },
        product13: { name: 'Produit corrosif', restriction: 'Interdit' },
        product14: { name: 'Produit radioactif', restriction: 'Interdit' },
        product15: { name: 'Produits à base de nicotine/tabac', restriction: 'Interdit' },
        product16: {
            name: 'Produits cosmétiques',
            restriction: 'Limité',
            description:
                'Maquillage, crème faciale, déodorant, désinfectant pour les mains… - Limité à 500ml par bouteille',
        },
        product17: { name: 'Terre', restriction: 'Interdit' },
        product18: { name: 'Produits chimiques', restriction: 'Interdit' },
    },

    [Routes.locations]: {
        title: 'Nos emplacements',
    },
    [Routes.adminDashboard]: {},
    [Routes.adminOrders]: {
        title: "Demandes d'achats",
        button_text: "Nouveau demande d'achat",
        subtitle: "Il y a {ordersNumber} demandes d'achats au total",
    },
    [Routes.adminPackages]: {
        title: 'Colis',
        create_text_text: 'Nouveau colis',
        subtitle: 'Il y a {parcelsNumber} colis au total',
        search: 'Filtrer par nom',
    },
    [Routes.adminUsers]: {
        users_title: 'Utilisateurs',
        users_subtitle: 'Il y a {usersNumber} utilisateurs au total',
        users_create_button: 'Créer un utilisateur',
    },

    [Routes.adminSettings]: {
        title: 'Addresse taftaf en France',
    },
};
