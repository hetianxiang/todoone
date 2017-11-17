import * as types from './actionTypes.js'
export default function (state = [],action){
  switch (action.type){
    case types.ADD_TODO:
      return [...state,{
        id:action.payload.id,
        text:action.payload.text,
        completed:false
      }]
    case types.TOGGLE_TODO:
      return state.map(
        (item) => {
          if(item.id === action.payload.id){
            return {
              ...item,
              completed: !item.completed
            }
          }else{
            return item;
          }
        }
      )
    case types.REMOVE_TODO:
      return state.filter(
        (item) => {
          return item.id !== action.payload.id
        }
      )
    default:
     return state;
  }
}