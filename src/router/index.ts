import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/expanding-cards'
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/test/index.vue')
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
    },
    {
      path: '/incrementing-counter',
      name: 'incrementing-counter',
      component: () => import('@/views/day15IncrementingCounter/index.vue')
    },
    {
      path: '/drink-water',
      name: 'drink-water',
      component: () => import('@/views/day16DrinkWater/index.vue')
    },
    {
      path: '/movie-app',
      name: 'movie-app',
      component: () => import('@/views/day17MovieApp/index.vue')
    },
    {
      path: '/background-slider',
      name: 'background-slider',
      component: () => import('@/views/day18BackgroundSlider/index2.vue')
    },
    {
      path: '/theme-clock',
      name: 'theme-clock',
      component: () => import('@/views/day19ThemeClock/index.vue')
    },
    {
      path: '/button-ripple-effect',
      name: 'button-ripple-effect',
      component: () => import('@/views/day20ButtonRippleEffect/index.vue')
    },
    {
      path: '/drag-n-drop',
      name: 'drag-n-drop',
      component: () => import('@/views/day21DragNDrop/index.vue')
    },
    {
      path: '/drawing-app',
      name: 'drawing-app',
      component: () => import('@/views/day22DrawingApp/index.vue')
    },
    {
      path: '/kinetic-loader',
      name: 'kinetic-loader',
      component: () => import('@/views/day23KineticLoader/index.vue')
    },
    {
      path: '/content-placeholder',
      name: 'content-placeholder',
      component: () => import('@/views/day24ContentPlaceholder/index.vue')
    },
    {
      path: '/sticky-navbar',
      name: 'sticky-navbar',
      component: () => import('@/views/day25StickyNavbar/index.vue')
    },
    {
      path: '/show-notification',
      name: 'show-notification',
      component: () => import('@/views/day27ToastNotification/index.vue')
    }
  ]
})

export default router
