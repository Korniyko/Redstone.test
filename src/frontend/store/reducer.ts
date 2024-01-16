import { Reducer } from "redux";
// import {  } from "../../types";
import { SET_CATEGORIES } from "./actions";


export const categories: Reducer<any> = (state: any | undefined, action): any => {


  if (!state && state === undefined) {
    return null

  }


  switch (action.type) {

    case SET_CATEGORIES:

      return action.categories
   

    default:
      return state;
  };
}



