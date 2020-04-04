import { combineReducers, createStore, Store } from 'redux';
import reducers from './reducers';

export enum SelectedPage {
  None,
  Images,
  Wedding,
}
export interface WeddingStore {
  selectedPage: SelectedPage;
}

export const store: Store<WeddingStore> = createStore(combineReducers({
  selectedPage: reducers
}));
