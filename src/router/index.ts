import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/expanding-cards'
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },

    {
      path: '/expanding-cards',
      name: 'expanding-cards',
      component: () => import('@/views/day01ExpandingCards/index.vue')
    },
    {
      path: '/progress-steps',
      name: 'progress-steps',
      component: () => import('@/views/day02ProgressSteps/index.vue')
    },
    {
      path: '/rotating-navigation',
      name: 'rotating-navigation',
      component: () => import('@/views/day03RotatingNavigation/index2.vue')
    },
    {
      path: '/hidden-search',
      name: 'hidden-search',
      component: () => import('@/views/day04HiddenSearchWidget/index.vue')
    },
    {
      path: '/blury-loading',
      name: 'blury-loading',
      component: () => import('@/views/day05BluryLoading/index.vue')
    },
    {
      path: '/scroll-animation',
      name: 'scroll-animation',
      component: () => import('@/views/day06ScrollAnimation/index.vue')
    },
    {
      path: '/split-landing-page',
      name: 'split-landing-page',
      component: () => import('@/views/day07SplitLandingPage/index.vue')
    },
    {
      path: '/form-wave',
      name: 'form-wave',
      component: () => import('@/views/day08FormWave/index.vue')
    },
    {
      path: '/sound-board',
      name: 'sound-board',
      component: () => import('@/views/day09SoundBoard/index.vue')
    },
    {
      path: '/dad-jokes',
      name: 'dad-jokes',
      component: () => import('@/views/day10DadJokes/index.vue')
    },
    {
      path: '/event-keycodes',
      name: 'event-keycodes',
      component: () => import('@/views/day11EventKeycodes/index.vue')
    },
    {
      path: '/faq-collapse',
      name: 'faq-collapse',
      component: () => import('@/views/day12FAQCollapse/index.vue')
    },
    {
      path: '/random-choice-picker',
      name: 'random-choice-picker',
      component: () => import('@/views/day13RandomChoicePicker/index.vue')
    },
    {
      path: '/animation-navigation',
      name: 'animation-navigation',
      component: () => import('@/views/day14AnimationNavigation/index.vue')
    }
  ]
})

export default router
