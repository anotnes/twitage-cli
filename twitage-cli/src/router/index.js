import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/templates/Top'
import Main from '@/components/templates/Main'
import SignIn from '@/components/templates/SignIn'
import SignUp from '@/components/templates/SignUp'
import MyPage from '@/components/organisms/MyPage'
import Project from '@/components/organisms/Project'
import ProjectEdit from '@/components/molecules/ProjectEdit'
import ProjectOverview from '@/components/molecules/ProjectOverview'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '',
      name: 'top',
      component: Top
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'myPage',
          component: MyPage
        },
        {
          path: 'project',
          name: 'project',
          component: Project,
          children: [
            {
              path: '',
              component: ProjectEdit
            },
            {
              path: ':id',
              component: ProjectOverview,
              children: [
                {
                  path: 'edit',
                  component: ProjectEdit
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  // ログインして射ないユーザーはSignInページに飛ばす
  if (requiresAuth && !currentUser) {
    next('signIn')
  } else if (!requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router
