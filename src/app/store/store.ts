import { combineReducers, createStore, Store } from 'redux';
import reducers from './reducers';

export enum SelectedPage {
  None,
  Wedding
}
export interface WeddingStore {
  selectedPage: SelectedPage;
}

export const store: Store<WeddingStore> = createStore(combineReducers({
  selectedPage: reducers
}));
