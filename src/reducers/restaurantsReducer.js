import cuid from 'cuid';

export default function restaurantsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return [
        ...state,
        {
          id: cuid(),
          text: action.text,
          reviews: []
        }
      ]

    case "DELETE_RESTAURANT":
      return state.filter(r => r.id !== action.id)

    default:
      return state
  }
}
