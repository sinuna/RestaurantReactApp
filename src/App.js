
import React from 'react';
import "./App.css";

import {Home} from "./pages/Home";
import { Restaurants } from "./pages/Restaurants";
import contact  from "./pages/Contact";

import  SingleRestaurant  from "./pages/SingleRestaurant";
import { Error } from "./pages/Error";

import {Route, Switch} from 'react-router-dom' ;
import Navbar from './components/Navbar';

function App() {
  return (
   <> 
    
    {/* <Home />
    <Restaurants />
    <SingleRestaurant />
    <Error /> */}
    {/* <Route path="/" component={Home} /> */}

  <Navbar />
   <Switch>
    <Route exact path="/" component={Home} /> 
    <Route exact path="/restaurants/" component={Restaurants} />
    <Route exact  path="/restaurants/:slug" component={SingleRestaurant} />
    <Route exact  path="/contact" component={contact} />
    <Route component={Error} />
  </Switch>
   </>
  );
}

export default App;
