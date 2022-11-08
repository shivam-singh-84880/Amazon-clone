import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/placeOrderScreen";
import ProductDetails from "./screens/ProductDetails";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="my-3">
        <Container>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
