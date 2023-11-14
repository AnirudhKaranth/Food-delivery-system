import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute.js";
import UserLogin from "./pages/UserLogin";
import OwnerLogin from "./pages/OwnerLogin";
import HomeOwner from "./pages/HomeOwner";
import AddFoodItem from "./components/AddFoodItem.jsx";
import FoodDetail from "./components/FoodDetail.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Landing" element={<Landing/>}/>
      <Route path="/" element={<ProtectedRoute> <Home/></ProtectedRoute> }/>
      <Route path="/home/:ownerId" element={<ProtectedRoute> <HomeOwner/></ProtectedRoute> }/>
      <Route path="/addFood/" element={<ProtectedRoute> <AddFoodItem/></ProtectedRoute> }/>
      <Route path="/foodDetails/:foodId" element={<ProtectedRoute> <FoodDetail/></ProtectedRoute> }/>
      <Route path="/auth-user" element={<UserLogin/>}/>
      <Route path="/auth-owner" element={<OwnerLogin/>}/>

    </Routes>

      
    </BrowserRouter>
  );
}

export default App;
