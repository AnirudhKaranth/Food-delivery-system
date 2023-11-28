import { useContext, createContext, useReducer} from "react";
import axios from "axios"
import reducer from "./reducer";


const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const initialState = {
    isLoading: false,
    token: token,
    user: user ? JSON.parse(user) : null,
    currentPerson:{},
    foodItems:[],
    restaurantDetails:{},
    reviews:[],
    foodItemDetail:{},
    restaurants:[]
};

const AppContext = createContext()
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addUserToLocalStorage = ({ user, token }) => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
    };

    // Type the removeUserFromLocalStorage function
    const removeUserFromLocalStorage = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    // Create an instance of Axios for authenticated requests.
    const authFetch = axios.create({
        baseURL: 'http://localhost:5000/api/v1',
    });


    const signUp = async (currentUser) => {
        dispatch({ type: "BEGIN" })
        try {
            const response = await authFetch.post('/user/signup', currentUser);

            let { user, token } = response.data;
            // user = {
            //     name: user.name,
            //     _id: user.id,
            //     role: user.role
            // }

            dispatch({
                type: "REGISTER_USER_SUCCESS",
                payload: { user, token }
            })
            addUserToLocalStorage({ user, token })
            // displayAlert("Signed up successfully!", "success")
        } catch (error) {
            console.log(error)
            window.alert(error?.response?.data?.msg)

        }
    }

    //===================LOGIN USER===============================//
    const login = async (currentUser) => {
        dispatch({ type: "BEGIN" })
        try {

            const response = await authFetch.post('/user/login', currentUser)

            let { user, token } = response?.data;
            console.log(user)
            // user = {
            //     name: user.name,
            //     _id: user.id,
            //     role: user.role
            // }

            dispatch({
                type: "LOGIN_USER_SUCCESS",
                payload: { user, token }
            })
            addUserToLocalStorage({ user, token })
        } catch (error) {

            console.log(error?.response.data.msg)
            window.alert(error?.response?.data?.msg)

        }

    }
    const logout = () => {
        dispatch({ type: "LOGOUT" })
        removeUserFromLocalStorage()
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////

    // signup owner
    const signupOwner = async (currentUser) => {
        dispatch({ type: "BEGIN" })

        try {
            const response = await authFetch.post("/restaurant/signup", currentUser);

            let { restaurant, token } = response.data

            let user = restaurant

            dispatch({
                type: "REGISTER_USER_SUCCESS",
                payload: { user, token }
            })
            addUserToLocalStorage({ user, token })
        } catch (error) {
            console.log(error)
            window.alert(error?.response?.data?.msg)
        }
    }
    ////////////////////////////////////////////////////////////////////
    //login restaurant
    const loginOwner = async (currentUser) => {
        dispatch({ type: "BEGIN" })
        try {

            const response = await authFetch.post('/restaurant/login', currentUser)

            let { restaurant, token } = response?.data;

          
            let user = restaurant
            dispatch({
                type: "LOGIN_USER_SUCCESS",
                payload: { user, token }
            })
            addUserToLocalStorage({ user, token })
        } catch (error) {

            console.log(error?.response.data.msg)
            window.alert(error?.response?.data?.msg)

        }

    }

    const getOwnerById = async()=>{
        dispatch({type: "BEGIN"})
        try {
            const response = await authFetch.get("/restaurant/getOwner/",{
                headers: {
                    'Authorization': `Bearer ${state.token}`
                }
            })
    
            const {restaurant} = response?.data
            
            dispatch({
                type: "UPDATE_RESTAURANT_SUCCESS",
                payload: {restaurant}
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getAllFoodByCreaterId = async(id)=>{
        try {
            console.log("id: ", id)
            const response = await authFetch.get(`/food/getAllFoodById/${id}`)

            const {foodItems} = response?.data
            console.log(foodItems)
            dispatch({
                type:"GET_ALL_FOOD_SUCCESS",
                payload:foodItems
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addFoodItem = async(foodItem)=>{
        console.log(foodItem)
        try {
            const response = await authFetch.post("/food/addfood",foodItem,{
                headers: {
                    'Authorization': `Bearer ${state.token}`
                }
            })

            const {food} = response?.data
            alert("food added successfully")
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    const getFoodDetails = async(id)=>{
        try {
            const response = await authFetch.get(`/food/getFoodDetail/${id}`)

            const {foodItem, reviews, restaurant} = response?.data

            dispatch({
                type:"GET_FOOD_DETAILS",
                payload:{foodItem, reviews, restaurant}
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getALLRestaurants = async()=>{
        try {
            const response = await authFetch.get("/restaurant/getAllRestaurants")

            const {restaurants} = response?.data

            dispatch({
                type:"GET_ALL_RESTAURANTS",
                payload:restaurants
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getRestaurantDetails = async(id)=>{
        try {
            const response = await authFetch.get(`/restaurant/getRestaurantDetails/${id}`)

            const {foodItems, reviews, restaurant} = response?.data

            dispatch({
                type:"GET_RESTAURANT_DETAILS",
                payload:{foodItems, reviews, restaurant}
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addReview = async(reviewData)=>{
        try {
            const response = await authFetch.post("/review/addreview", reviewData,{
                headers: {
                    'Authorization': `Bearer ${state.token}`
                }
            })

            const {review} = response?.data
            alert("review added successfully!")
            return true

        } catch (error) {
            console.log(error)
            return false
        }
    }

    const getReviewsById = async(foodId)=>{
        try {
            const response = await authFetch.get(`/getreviews/${foodId}`)
            const {reviews} = response?.data
            dispatch({
                type:"GET_REVIEW_BY_FOOD_ID",
                payload:{reviews}
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AppContext.Provider value={{
             ...state, 
             signUp, 
             login, 
             logout, 
             signupOwner, 
             loginOwner , 
             getOwnerById, 
             getAllFoodByCreaterId,
             addFoodItem,
             getFoodDetails,
             getALLRestaurants,
             getRestaurantDetails,
             addReview,
             getReviewsById
             }}
             >
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }