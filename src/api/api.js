function setAdminApi(path) {
    let global = '/api/admin/';
    return global + path;
}

const api = {
    contentList: '/api/front/content/list', //文章列表
    validateName: setAdminApi('/member/check_name') //
}

export default api;