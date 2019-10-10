export default [
  {
    path: "/new/products",
    component: () => import(/* webpackChunkName: "page--src--pages--new--products-vue" */ "/Users/peterhychan/Desktop/gridsome-project/src/pages/new/Products.vue"),
    meta: { data: true }
  },
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/peterhychan/Desktop/gridsome-project/src/pages/About.vue"),
    meta: { data: true }
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/peterhychan/Desktop/gridsome-project/src/pages/Index.vue"),
    meta: { data: true }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/peterhychan/Desktop/gridsome-project/src/pages/404.vue"),
    meta: { data: true }
  },
  {
    path: "/new",
    component: () => import(/* webpackChunkName: "page--src--pages--new--index-vue" */ "/Users/peterhychan/Desktop/gridsome-project/src/pages/new/Index.vue"),
    meta: { data: true }
  },
  {
    path: "/products/:page(\\d+)?",
    component: () => import(/* webpackChunkName: "page--src--pages--products-vue" */ "/Users/peterhychan/Desktop/gridsome-project/src/pages/Products.vue"),
    meta: { data: true }
  },
  {
    path: "/blog/:page(\\d+)?",
    component: () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/peterhychan/Desktop/gridsome-project/src/pages/Blog.vue"),
    meta: { data: true }
  },
  {
    path: "/posts/:slug",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/peterhychan/Desktop/gridsome-project/src/templates/Post.vue"),
    meta: { data: true }
  },
  {
    path: "/tags/:id",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/peterhychan/Desktop/gridsome-project/src/templates/Tag.vue"),
    meta: { data: true }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/peterhychan/Desktop/gridsome-project/src/pages/404.vue"),
    meta: { data: true }
  }
]

