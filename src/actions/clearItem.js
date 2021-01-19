import { CLEAR_ITEM } from "./types"

export const clearItem = (name) => {
   return (dispatch) => {
       dispatch({
           type: CLEAR_ITEM,
           payload: name
       })
   } 
}