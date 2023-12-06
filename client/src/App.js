import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute.js";
import UserLogin from "./pages/UserLogin";
import OwnerLogin from "./pages/OwnerLogin";
import HomeOwner from "./pages/HomeOwner";
import AddFoodItem from "./components/AddFoodItem.jsx";
import FoodDetail from "./components/FoodDetail.jsx";
import RestaurantDetails from "./pages/RestaurantDetails.jsx";
import AddReview from "./pages/AddReview.jsx";
import Cart from "./components/Cart.js";
import MyOrders from "./pages/MyOrders.jsx";
import Orders from "./pages/Orders.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/home" element={<ProtectedRoute> <Home/></ProtectedRoute> }/>
      <Route path="/home/:ownerId" element={<ProtectedRoute> <HomeOwner/></ProtectedRoute> }/>
      <Route path="/addFood/" element={<ProtectedRoute> <AddFoodItem/></ProtectedRoute> }/>
      <Route path="/foodDetails/:foodId" element={<ProtectedRoute> <FoodDetail/></ProtectedRoute> }/>
      <Route path="/restaurantDetail/:restaurantId" element={<ProtectedRoute> <RestaurantDetails/></ProtectedRoute> }/>
      <Route path="/auth-user" element={<UserLogin/>}/>
      <Route path="/auth-owner" element={<OwnerLogin/>}/>
      <Route path="/addReview/:foodId" element={<ProtectedRoute> <AddReview/></ProtectedRoute>}/>
      <Route path="/cart/:userId" element={<ProtectedRoute> <Cart/></ProtectedRoute>}/>
      <Route path="/myorders/:userId" element={<ProtectedRoute> <MyOrders/></ProtectedRoute>}/>
      <Route path="/orders/:Rid" element={<ProtectedRoute> <Orders/></ProtectedRoute>}/>
      

    </Routes>

      
    </BrowserRouter>
  );
}

export default App;
