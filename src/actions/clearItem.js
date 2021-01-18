import { CLEAR_ITEM } from "./types"

export const clearItem = (name) => {
   return (dispatch) => {
       console.log("clicked remove btn")
       dispatch({
           type: CLEAR_ITEM,
           payload: name
       })
   } 
}