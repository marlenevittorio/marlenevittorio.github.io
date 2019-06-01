import { combineReducers, createStore, Store } from 'redux';
import reducers from './reducers';

export enum SelectedPage {
  None,
  Wedding,
  Registry,
}
export interface WeddingStore {
  selectedPage: SelectedPage;
}

export const store: Store<WeddingStore> = createStore(combineReducers({
  selectedPage: reducers
}));
