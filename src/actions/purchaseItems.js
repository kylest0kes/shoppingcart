import { PURCHASE_ITEMS } from "./types";

export const purchaseItems = () => {
   return (dispatch) => {
       console.log("clicked purchase btn")
       dispatch({
           type: PURCHASE_ITEMS,
       })
   } 
}