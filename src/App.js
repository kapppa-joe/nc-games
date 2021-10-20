import "./styles/App.css";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import Main from "./pages/Main";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ListReviews from "./pages/ListReviews";
import SingleReview from "./pages/SingleReview";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Random from "./pages/Random";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Nav />
      <Main>
        <Switch>
          <Route name="home" exact path="/">
            <Home />
          </Route>
          <Route name="categories" exact path="/categories">
            <Categories />
          </Route>
          <Route name="reviews" exact path="/reviews">
            <ListReviews />
          </Route>
          <Route name="read a review" exact path="/reviews/:review_id">
            <SingleReview />
          </Route>
          <Route name="random" exact path="/random">
            <Random />
          </Route>
          <Route name="login" exact path="/login">
            <Login />
          </Route>
          <Route name="logout" exact path="/logout">
            <Logout />
          </Route>
          <Route default name="404 not found">
            <NotFound />
          </Route>
        </Switch>
      </Main>
    </div>
  );
}

export default App;
