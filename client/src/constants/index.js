import { twitter, instagram, facebook, avatar } from "../assets"

export const header = [
    {
        id: 1,
        title: 'Home',
        url: '#hero',
    },
    {
        id: 2,
        title: 'Features',
        url: '#features',
    },
    {
        id: 3,
        title: 'About Us',
        url: '#about-us',
    },
    {
        id: 4,
        title: 'Contact',
        url: '#contact',
    },
    {
        id: 5,
        title: 'new account',
        url: '#singup',
        onlyMobile: true,
    },
    {
        id: 6,
        title: 'Sign in',
        url: '#login',
        onlyMobile: true,
    },
];

export const socials = [
    {
        id: 1,
        title: "Twitter",
        iconUrl: twitter,
        url: "#",
    },
    {
        id: 2,
        title: "Instagram",
        iconUrl: instagram,
        url: "#",
    },
    {
        id: 3,
        title: "Facebook",
        iconUrl: facebook,
        url: "#",
    },
];

export const team = [
    {
        id: 1,
        name: 'Siddhant Chalke',
        role: 'Developer',
        imgUrl: avatar,
    },
    {
        id: 2,
        name: 'Omkar Potphode',
        role: 'Developer',
        imgUrl: avatar,
    },
    {
        id: 3,
        name: 'Ritik Joshi',
        role: 'Developer',
        imgUrl: avatar,
    },
    {
        id: 4,
        name: 'Sameer Ahamed S',
        role: 'Developer',
        imgUrl: avatar,
    },
    {
        id: 5,
        name: 'Sweeti',
        role: 'Developer',
        imgUrl: avatar,
    },
];

export const features = [
    {
        id: 1,
        title: 'User-friendly interfaces',
        description: 'Interfaces designed for ease of use, ensuring a smooth experience for users interacting with the system.',
    },
    {
        id: 2,
        title: 'Real-time data submission',
        description: 'Capability for users to submit feedback in real-time, allowing for prompt data collection and analysis.',
    },
    {
        id: 3,
        title: 'Feedback tracking',
        description: 'Ability to track individual feedback submissions, facilitating monitoring and analysis of feedback history.',
    },
];

export const adminRoutes = [
    {
        id: 1,
        title: 'Dashboard',
        url: '/admin/dashboard',
    },
    {
        id: 2,
        title: 'Recent feedbacks',
        url: '/admin/forms-list',
    },
    // {
    //     id: 3,
    //     title: 'Create new',
    //     url: '/admin/create-form',
    // },
];

export const userRoutes = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'Notifications',
        url: '/notifications',
    },
]