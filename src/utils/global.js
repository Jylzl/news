import service from "@/utils/request";
import api from "@/api/api";
export default {
    install(Vue, options) {
        console.log(options)
        Vue.prototype.$axios = service; //axios全局方法
        Vue.prototype.$api = api; //api地址全局方法
    }
}