import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../Components/nav/navbar';
import Hero1 from '../Components/Hero/heroBKG';
import Survey from '../Components/Survey/Survey';
import SignUp from '../Components/SignUp/SignUp';
import Login from '../Components/Login/Login';
import BusinessPage from '../Components/BusinessPage/BusinessPage';
import axios from 'axios';
import { GlobalContext } from '../Components/Context/GlobalState';

const Layout = () => {
  const context = useContext(GlobalContext);

  useEffect(() => {
    axios.get('http://localhost:3000/get-session').then((result) => {
      const sessionUser = result.data.user;
      const user = {
        id: sessionUser._id,
        email: sessionUser.email,
        name: sessionUser.name,
      };
      context.storeSession(user);
    });
  }, []);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" render={Hero1} />
        <Route exact path="/survey" render={Survey} />
        <Route exact path="/get-started" render={SignUp} />
        <Route exact path="/login" render={Login} />
        <div className="page-background">
          <Route exact path="/test" render={BusinessPage} />
        </div>
      </Switch>
    </Router>
  );
};

export default Layout;
