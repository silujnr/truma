import { lazy } from "react"

const Home = lazy(() => import('../pages/Home.page'));
const Official = lazy(() => import('../pages/Official.page'));
const Units = lazy(() => import('../pages/Units.page'));
const Programs = lazy(() => import('../pages/Programs.page'));
const Activities = lazy(() => import('../pages/Activities.page'));
const Memberships = lazy(() => import('../pages/Memberships.page'));
const Donations = lazy(() => import('../pages/Donations.page'));
const Gallery = lazy(() => import('../pages/Gallery.page'));
const Contact = lazy(() => import('../pages/Contact.page'));

const About = lazy(() => import('../pages/About.page'));

const News = lazy(() => import('../pages/News.page'));
const SingleNews = lazy(() => import('../pages/SingleNews.page'));
const NotFound = lazy(() => import('../pages/Page404.page'));
const Anappeal = lazy(() => import('../pages/Anappeal.page'));
const Announcement = lazy(() => import('../pages/Announcement.page'));
const Affiliations = lazy(() => import('../pages/Affiliations.page'));
const OfficeBearers = lazy(() => import('../pages/OfficeBearers.page'));
const Recognitions = lazy(() => import('../pages/Recognitions.page'));
const Ourteam = lazy(() => import('../pages/Ourteam.page'));

const routes = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        component: Home,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'Official',
        path: '/Official',
        exact: true,
        component: Official,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'Units',
        path: '/units',
        exact: true,
        component: Units,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'Programs',
        path: '/programs',
        exact: true,
        component: Programs,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'Activities',
        path: '/activities',
        exact: true,
        component: Activities,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'Memberships',
        path: '/memberships',
        exact: true,
        component: Memberships,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'Donations',
        path: '/donations',
        exact: true,
        component: Donations,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'Gallery',
        path: '/gallery',
        exact: true,
        component: Gallery,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'Contact',
        path: '/contact',
        exact: true,
        component: Contact,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'About',
        path: '/about',
        exact: true,
        component: About,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'News',
        path: '/news',
        exact: true,
        component: News,
        authentication: false,
        theme: "theme-1"
    },
    {
        name: 'Single News',
        path: '/single-news',
        exact: true,
        component: SingleNews,
        authentication: false,
        theme: "theme-1"
    },
   {
        name: 'An Appeal',
        path: '/anappeal',
        exact: true,
        component: Anappeal,
        authentication: false,
        theme: "theme-1"
    },
    {
        name:'Announcement',
        path:'/announcement',
        exact: true,
        component: Announcement,
        authentication: false,
        theme: "theme-1"
    },
    {
        name:'Affiliations',
        path:'/affiliations',
        exact: true,
        component: Affiliations,
        authentication: false,
        theme: "theme-1"
    },
    {
        name:'OfficeBearers',
        path:'/officeBearers',
        exact: true,
        component: OfficeBearers,
        authentication: false,
        theme: "theme-1"
    },
    {
        name:'Recognitions',
        path:'/recognitions',
        exact: true,
        component: Recognitions,
        authentication: false,
        theme: "theme-1"
    },{
        name:'Ourteam',
        path:'/Ourteam',
        exact: true,
        component: Ourteam,
        authentication: false,
        theme: "theme-1"
    },
    
     {
        name: 'NotFound',
        path: '/*',
        exact: false,
        component: NotFound,
        authentication: false,
    }
];

export default routes;