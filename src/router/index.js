import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: "/",
        name: "Main",
        component: () => import('@/views/main/Index')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;