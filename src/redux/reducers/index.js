const initialState = {
  favourites: {
    content: [],
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES": {
      const giaAggiunto = state.favourites.content.some(
        (lavoro) => lavoro._id === action.payload._id,
      )

      if (giaAggiunto) {
        return state
      }

      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      }
    }
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter(
            (lavoro) => lavoro._id !== action.payload,
          ),
        },
      }
    default:
      return state
  }
}

export default mainReducer
