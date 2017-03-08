import { PROJECT_SELECTED } from './types'

export function selectBook(book) {
 // selectBook is an Action Creator, it needs to return an action,
 // an object with a type property
 return {
   type: PROJECT_SELECTED,
   payload: book
 };
}
