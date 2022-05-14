import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/index';
import RegisterLogin from './components/Register_login';
import Layout from './HOC/layout';
import Register from './components/Register_login/register';
import UserDashboard from './components/User/index'
import Auth from './HOC/auth'
import Shop from './components/Shop';
import AddProduct from './components/User/Admin/add_products';
import ManageCategories from './components/User/Admin/ManageCategories';
import ProoductPage from './components/Products';
import UserCart from './components/User/cart';
import UpdateProfile from './components/User/update_profile';
import ManageSite from './components/User/Admin/manage_site';

const Routes = () => {
  return( 
    <Layout>
      <Switch>
      <Route path="/user/dashboard" exact component={Auth(UserDashboard, true)}/>
      <Route path="/user/cart" exact component={Auth(UserCart, true)}/>
      <Route path="/user/user_profile" exact component={Auth(UpdateProfile, true)}/>
      <Route path="/admin/add_product" exact component={Auth(AddProduct, true)}/>
      <Route path="/admin/manage_categories" exact component={Auth(ManageCategories, true)}/>
      
      <Route path="/admin/site_info" exact component={Auth(ManageSite, true)}/>
      

      <Route path="/product_detail/:id" exact component={Auth(ProoductPage,null)}/>
        <Route path="/register" exact component={Auth(Register,false)}/>
        <Route path="/register_login" exact component={Auth(RegisterLogin,false)}/>
        <Route path="/shop" exact component={Auth(Shop,null)}/>
        <Route path="/" exact component={Auth(Home,null)}/>
    </Switch>
    </Layout>
    
  )
}

export default Routes;
