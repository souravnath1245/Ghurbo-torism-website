import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import OrderReview from "./My-Order/OrderReview";
import Service from "./Pages/Home/Service";
import Login from "./Authentication/Login";
import Header from "./Pages/Home/Header";
import NotFound from "./NotFound/NotFound";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
import Destination from "./Pages/Destination/Destination";
import AddNewService from "./components/AddNewService/AddNewService";
import RegisterClients from "./Admin/RegisterClients";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/home#service">
            <Service />
          </Route>
          <Route path="/myOrder">
            <OrderReview />
          </Route>
          <Route path="/manageAllOrders">
            <ManageAllOrders />
          </Route>
          <Route path="/destination/add">
            <AddNewService />
          </Route>
          <Route path="/register">
           <RegisterClients/>
          </Route>

          <Route path="/destination/:id">
            <Destination />
          </Route>
          <Route path="/myOrder">
            <OrderReview />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
