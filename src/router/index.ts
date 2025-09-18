import { createRouter, createWebHistory } from "vue-router"

const components = {
  HOME: () => import("../layouts/DefaultLayout.vue"),
  ABOUT_US: () => import("../views/AboutUs.vue"),
  AUTO_ELECTRICS: () => import("../views/AutoElectrics.vue"),
  BUILDS_FITOUTS: () => import("../views/BuildsFitOuts.vue"),
  SERVICES: () => import("../views/Services.vue"),
  DESIGN_ENGINEERING: () => import("../views/DesignEngineering.vue"),
  MANUFACTURING: () => import("../views/Manufacturing.vue"),
  SERVICING_MAINTENANCE: () => import("../views/ServicingMaintenance.vue"),
  TRIMS_ACCESSORIES: () => import("../views/TrimsAccessories.vue"),
}

export const ROUTE_NAME = {
  HOME: "home",
  ABOUT_US: "about_us",
  AUTO_ELECTRICS: "auto_electrics",
  BUILDS_FITOUTS: "builds_fitouts",
  SERVICES: "services",
  DESIGN_ENGINEERING: "design_engineering",
  MANUFACTURING: "manufacturing",
  SERVICING_MAINTENANCE: "servicing_maintenance",
  TRIMS_ACCESSORIES: "trims_accessories"
}

export const routes = [
  {
    path: "/",
    name: ROUTE_NAME.HOME,
    component: components.HOME
  },
   {
    path: "/about-us",
    name: ROUTE_NAME.ABOUT_US,
    component: components.ABOUT_US
  },
   {
    path: "/builds-fitouts",
    name: ROUTE_NAME.BUILDS_FITOUTS,
    component: components.BUILDS_FITOUTS
  },
  {
    path: "/services",
    name: ROUTE_NAME.SERVICES,
    component: components.SERVICES
  },
  {
    path: "/services/design-engineering",
    name: ROUTE_NAME.DESIGN_ENGINEERING,
    component: components.DESIGN_ENGINEERING
  },
  {
    path: "/services/manufacturing",
    name: ROUTE_NAME.MANUFACTURING,
    component: components.MANUFACTURING
  },
  {
    path: "/services/trims-accessories",
    name: ROUTE_NAME.TRIMS_ACCESSORIES,
    component: components.TRIMS_ACCESSORIES
  },
  {
    path: "/services/auto-electrics",
    name: ROUTE_NAME.AUTO_ELECTRICS,
    component: components.AUTO_ELECTRICS
  },
  {
    path: "/services/servicing-maintenance",
    name: ROUTE_NAME.SERVICING_MAINTENANCE,
    component: components.SERVICING_MAINTENANCE
  }
]

const router = createRouter({
  history: createWebHistory("/acmtransport-prototype/"),
  routes
})

export default router
