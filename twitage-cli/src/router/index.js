import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Main from '@/components/main/Main'
import MyPage from '@/components/main/MyPage'
//import Modal from '@/components/modal/Modal'
import Project from '@/components/project/Project'
import ProjectEdit from '@/components/project/ProjectEdit'
import ProjectOverview from '@/components/project/ProjectOverview'
import ProjectNew from '@/components/project/ProjectNew'
import Login from '@/components/Login'
import UserEdit from '@/components/user/UserEdit'
import TaskEdit from '@/components/task/TaskEdit'
// import User from '@/components/User'
// import Project from '@/components/Project'

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
          path: 'myPage',
          name: 'MyPage',
          component: MyPage
        },
        {
          path: 'project',
          name: 'Project',
          component: Project,
          children: [
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
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/userEdit',
      name: 'UserEdit',
      component: UserEdit
    },
    {
      path: '/taskEdit',
      name: 'TaskEdit',
      component: TaskEdit
    }
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
