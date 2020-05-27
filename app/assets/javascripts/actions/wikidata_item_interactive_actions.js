import {
  SUBMIT_WIKIDATA_ITEM,
  RECEIVE_WIKIDATA_ITEM
} from '../constants/wikidata_item_interactive.js';


export const fetchWikidataItem = input => (dispatch) => {
  dispatch({ type: SUBMIT_WIKIDATA_ITEM, input });
  // parse input to QITEM
  // API call to wikidata, then extract item data and dispatch it
};
