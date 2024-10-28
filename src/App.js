import React, { useContext} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import ProfilePage from '../src/pages/ProfilePage';
import HomePage from '../src/pages/HomePage';
import AuthPage from './pages/AuthPage';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Footer from './shared/components/UiElements/Footer';
import RecipeDetails from './components/RecipeDetail'; 
import AdminPage from './pages/AdminPage';
import AddRecipe from './components/AddRecipe';
import { AuthContext } from './shared/context/auth-context';

function App() {

const auth = useContext(AuthContext);

  let routes;

  if(auth.isAdminLoggedIn) {
    routes = (
      <Switch>
      <Route path="/" exact>
        <AdminPage />
      </Route>
      <Route path="/admin/addrecipes" exact>
        <AddRecipe />
      </Route>
      <Route path="/admin/postedrecipes">
        <HomePage/>
      </Route>
      <Route path="/recipe/:recipeId" exact>
      <RecipeDetails />
      </Route>
      </Switch>
    )
  } else if (auth.isLoggedIn) {
    routes = (
      <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/recipe/:recipeId" exact>
      <RecipeDetails />
      </Route>
      <Route path="/profile" exact>
        <ProfilePage />
      </Route>
    <Redirect to="/" />
    </Switch>
    )
  } else {
    routes = (
      <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/recipe/:recipeId" exact>
      <RecipeDetails />
      </Route>
      <Route path="/auth" exact>
        <AuthPage />
      </Route>
      <Redirect path="/auth" exact />
    </Switch>
    )
  }


  return (
    <Router>
      <MainNavigation/>
      <main>
      {routes}
      </main>
      <Footer />
    </Router>

  )};

export default App;
