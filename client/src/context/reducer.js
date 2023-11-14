const reducer = (state, action) => {
    switch (action.type) {
      case "BEGIN":
        return {
          ...state,
          isLoading: true,
        };
      case "REGISTER_USER_SUCCESS":
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          isLoading: false,
        };
      case "LOGIN_USER_SUCCESS":
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          isLoading: false,
        };
      case "LOGOUT":
        return{
          ...state,
          user: null,
          token: null,
          isLoading: false,
        }
      case "UPDATE_RESTAURANT_SUCCESS":
        return{
          ...state,
          currentPerson: action.payload.restaurant
        }
      case "GET_ALL_FOOD_SUCCESS":
        
        return{
          ...state,
          foodItems:action.payload
        }
      default:
        return state; // Return the current state for unsupported actions
    }
  };
  
  export default reducer;
  