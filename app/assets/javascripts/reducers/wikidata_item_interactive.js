import {
  SUBMIT_WIKIDATA_ITEM,
  RECEIVE_WIKIDATA_ITEM
} from '../constants/wikidata_item_interactive.js';

const initialState = {};

export default function wikidataItemInteractive(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_WIKIDATA_ITEM:
      console.log(action);
      return { ...state, input: action.input };
    case RECEIVE_WIKIDATA_ITEM:
      return { ...state };
    default:
      return state;
  }
}
