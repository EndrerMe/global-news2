import home from './shared/layouts/home/home';
import business from './shared/layouts/pages/categories/business';
import entertainment from './shared/layouts/pages/categories/entertainment';
import general from './shared/layouts/pages/categories/general';
import health from './shared/layouts/pages/categories/health';
import science from './shared/layouts/pages/categories/science';
import sport from './shared/layouts/pages/categories/sport';
import technology from './shared/layouts/pages/categories/technology';

const routes = [
    {
        path: '/',
        component: home,
        alias: '/Home'
    },
    {
        path: '/business',
        component: business,
    },
    {
        path: '/entertainment',
        component: entertainment,
    },
    {
        path: '/general',
        component: general,
    },
    {
        path: '/health',
        component: health,
    },
    {
        path: '/science',
        component: science,
    },
    {
        path: '/sport',
        component: sport,
    },
    {
        path: '/technology',
        component: technology,
    },
]

export default routes