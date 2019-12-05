const routes = [
  {
    path: "/",
    component: () => import("layouts/starbucksLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/Index.vue") },
      { path: "/test", component: () => import("pages/Test.vue") },
      { path: "/signin", component: () => import("pages/SignIn.vue") },
      {
        path: "/drinks/hot-coffees",
        component: () => import("pages/HotCoffees.vue")
      },
      { path: "/menu", component: () => import("pages/Menu.vue") },
      { path: "/product", component: () => import("pages/Product.vue") }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
