
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        {
          path:'/login',
          component:'../pages/login/login.jsx'
        },
        {
          path: '/',
          component: '../pages/home/_layout',
          routes:[
            {
              path:'/home/',
              component: '../pages/home/list/list',
              Routes: ['./src/utils/PrivateRoute.js'],
            },
            {
              path:'/home/:id',
              component: '../pages/home/detail/$detail',
            }
          ]
        },
      ]
    },

  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'my-react-app',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
