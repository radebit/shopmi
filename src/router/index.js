import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/home";
import Index from '../views/index'
import Product from "../views/product";
import ShopDetail from "../views/shopDetail";
import ShopCart from "../views/shopCart";
import Order from "../views/order";
import OrderList from "../views/orderList";
import OrderPay from "../views/orderPay";
import OrderConfirm from "../views/orderConfirm";
import AliPay from "../views/aliPay";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'index',
                component: Index,
            }, {
                path: '/product/:id',
                name: 'product',
                component: Product
            }, {
                path: '/shopDetail/:id',
                name: 'shopDetail',
                component: ShopDetail
            }
        ]
    }, {
        path: '/shopCart',
        name: 'shopCart',
        component: ShopCart
    }, {
        path: '/order',
        name: 'order',
        component: Order,
        children: [
            {
                path: 'orderPay',
                name: 'orderPay',
                component: OrderPay
            },
            {
                path: 'orderList',
                name: 'orderList',
                component: OrderList
            }, {
                path: 'orderConfirm',
                name: 'orderConfirm',
                component: OrderConfirm
            }
            , {
                path: 'aliPay',
                name: 'aliPay',
                component: AliPay
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
