import { Reducer, StoreEnhancer } from 'redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';

const keySessionStorage = 'redstoneRedux'

const persist = (store: any) => {
    const state = store.getState()
    window.localStorage.setItem(keySessionStorage, JSON.stringify(state))

}
export default (reducers: Reducer<any>, composeEnhancers: StoreEnhancer<any>) => {
    let initialState: any = {};

    if (window.localStorage) {
        const stateFromSession = window.localStorage.getItem(keySessionStorage)
        if (stateFromSession) {
            initialState = JSON.parse(stateFromSession) || {}
        }
    }
    const store = createStore(reducers, initialState, composeEnhancers)
   
    store.persist = () => persist(store);
   
    return store;

}