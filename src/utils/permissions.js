// 全局路由钩子
// 页面加载进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import getPageTitle from '@/utils/get-page-title'
import router from '@/router/index' //路由

router.beforeEach((to, from, next) => {
    NProgress.start();
    // set page title
    document.title = getPageTitle(to.meta.title)
    next();
})

router.afterEach(() => {
    NProgress.done();
});