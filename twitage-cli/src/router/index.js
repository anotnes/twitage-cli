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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Top',
      component: Top
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '',
          name: 'MyPage',
          component: MyPage
        },
        {
          path: 'project',
          name: 'Project',
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
      path: '/SignUp',
      name: 'signUp',
      component: SignUp
    }
    // {
    //   path: '/userEdit',
    //   name: 'UserEdit',
    //   component: UserEdit
    // },
    // {
    //   path: '/taskEdit',
    //   name: 'TaskEdit',
    //   component: TaskEdit
    // }
    // {
    //   path: '/user',
    //   name: 'User',
    //   component: User
    // },
    // {
    //   path: '/project',
    //   name: 'Project',
    //   component: Project
    // }
  ]
})
