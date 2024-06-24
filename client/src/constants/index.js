import { twitter, instagram, facebook, avatar} from "../assets"

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
        name: 'Souradip Dasgupta',
        role: 'Developer',
        imgUrl: avatar,
    },
    {
        id: 2,
        name: 'Shreya Gautam',
        role: 'Developer',
        imgUrl: avatar,
    },
    {
        id: 3,
        name: 'Vivek Yadav',
        role: 'Developer',
        imgUrl: avatar,
    },
    {
        id: 4,
        name: 'Lokesh Yadav',
        role: 'Developer',
        imgUrl: avatar,
    },
    
];

export const features = [
    {
        id: 1,
        title: 'User-friendly interfaces',
        description: "Intuitive interfaces that prioritize user experience, making it simple and efficient to provide feedback.",
    },
    {
        id: 2,
        title: 'Customizable Feedback Forms',
        description: 'Customizable feedback forms allow users to tailor questions and formats to suit specific needs, ensuring relevant and targeted feedback collection.',
    },
    {
        id: 3,
        title: 'Feedback tracking',
        description: "Track individual feedback submissions to enable detailed monitoring,historical analysis.",
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