import { Action, Dispatch } from 'redux';

type DispatcherAsync = (cb: () => Promise<Action>) => Promise<void>;
type DispatcherSync = (cb: () => Action) => Action;

export interface DispatcherReturn {
  async: DispatcherAsync;
  sync: DispatcherSync;
}

export function Dispatcher<T extends Action>(dispatch: Dispatch<T>): DispatcherReturn {
  return {
    async: (cb: () => Promise<T>): Promise<void | never> => {
      return cb().then((action: T) => {
        dispatch(action);
      });
    },
    sync: (cb: () => T): T => {
      return dispatch(cb());
    },
  };
}
