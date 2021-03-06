/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('post-component', require('./components/PostComponent.vue').default);
// Vue.component('comments-component', require('./components/CommentsComponent.vue').default);
// Vue.component('comment-component', require('./components/CommentComponent.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
// });
// import VueTypedJs from 'vue-typed-js'
// Vue.use(VueTypedJs)

// function checkLoginState() {
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// }
const app = new Vue({
    el:'#app',

    data () {
        return{
            posts: [],
            lastPostId: 0,
            lastTimeChecked: 0,
        }
    },
        methods:{
            initialPost(){

            axios.get("/api/postbynumber/100?user_id/")

            .then((response) => {
            this.posts = response.data.data;
            this.lastPostId = response.data.data[((response.data.data).length -1)];
            console.log(response.data.data);
        });
    },
},
        mounted(){
             this.initialPost();


    }
})
