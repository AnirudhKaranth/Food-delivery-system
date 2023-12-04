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
      return {
        ...state,
        user: null,
        token: null,
        isLoading: false,
      }
    case "UPDATE_RESTAURANT_SUCCESS":
      return {
        ...state,
        currentPerson: action.payload.restaurant
      }
    case "GET_ALL_FOOD_SUCCESS":

      return {
        ...state,
        foodItems: action.payload
      }
    case "GET_FOOD_DETAILS":
      return {
        ...state,
        restaurantDetails: action.payload.restaurant,
        reviews: action.payload.reviews,
        foodItemDetail: action.payload.foodItem
      }
      case "GET_ALL_RESTAURANTS":
        return {
          ...state,
          restaurants:action.payload
        }
      case "GET_RESTAURANT_DETAILS":
        return {
          ...state,
          restaurantDetails: action.payload.restaurant,
          reviews: action.payload.reviews,
          foodItems: action.payload.foodItems
        }
      case "GET_REVIEW_BY_FOOD_ID":
        return{
          ...state,
          reviews: action.payload.reviews
        }
      case "GET_CART_BY_USER":
        return{
          ...state,
          cart: action.payload.cart
        }
        case "GET_ORDER_BY_USERID":
          return {
            ...state,
            orders: action.payload.orders
          }
    default:
      return state; // Return the current state for unsupported actions
  }
};

export default reducer;
