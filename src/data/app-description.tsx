import React from 'react';
import { FaAddressCard, FaBell, FaGift, FaLock, FaSearch, FaPaperPlane } from 'react-icons/fa';
import { GiPayMoney } from 'react-icons/gi';

export const weShopForYou = [
    {
        id: 1,
        title: 'Sign up and get your online France Address',
        icon: <FaLock />,
    },
    {
        id: 2,
        title: 'Shop online at your favorite stores and ship them to your new address.',
        icon: <FaAddressCard />,
    },
    {
        id: 3,
        title: 'We will let you know when your package arrives.',
        icon: <FaBell />,
    },
    {
        id: 4,
        title: 'Select and pay for your shipping and relax as we ship your items to you..',
        icon: <GiPayMoney />,
    },
];

export const youShopForYou = [
    {
        id: 1,
        title: 'Tell us what you want, and wait for your package to get to your Taftaf account.',
        icon: <FaGift />,
    },

    {
        id: 2,
        title: 'We will check availability and purchase products.',
        icon: <FaSearch />,
    },

    {
        id: 3,
        title: 'Once received we ship them to you.',
        icon: <FaPaperPlane />,
    },
];
