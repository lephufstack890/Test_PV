// Layouts
import { HeaderOnly } from '~/components/Layout';

// Pages
import Student from '~/pages/Student';
import Test1 from '~/pages/Test1';

// Public routes
const publicRoutes = [
    { path: '/', component: Student },
    { path: '/test1', component: Test1 },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
