import cuid from 'cuid';

export default function reviewsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_REVIEW":
      return [
        ...state,
        {
          id: cuid(),
          ...action.review
        }
      ]

    case "DELETE_REVIEW":
      return state.filter(r => r.id !== action.id)

    default:
      return state
  }
}


// case "ADD_REVIEW":
//   return {
//     reviews: [
//       ...state.reviews,
//       {
//         id: cuid(),
//         restaurantId: action.restaurantId,
//         text: action.text
//       }
//     ]
//   }
  // restaurantsCopy = [...state.restaurants]
  // restIndex = restaurantsCopy.findIndex(rest => rest.id === action.id)
  // restCopy = {...restaurantsCopy[restIndex]}
  // restCopy.reviews.push({id: cuid(), text: action.text})
  // restaurantsCopy[restIndex] = restCopy
  // return { restaurants: restaurantsCopy }

// case "DELETE_REVIEW":
//   restaurantsCopy = [...state.restaurants]
//   restIndex = restaurantsCopy.findIndex(rest => rest.id === action.restId)
//   restCopy = {...restaurantsCopy[restIndex]}
//   const reviewsCopy = restCopy.reviews.filter(rev => rev.id !== action.revId)
//   restCopy.reviews = reviewsCopy
//   restaurantsCopy[restIndex] = restCopy
//   return { restaurants: restaurantsCopy }
