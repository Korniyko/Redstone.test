import React, { useEffect } from 'react';
import App from './containers/App';
import { Provider } from 'react-redux';
import getStore from './store';
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import createInitStore from './store';
import ReactDOM from 'react-dom';



const rootContainer = document.getElementById('root')

const store = createInitStore();

const AppWithStore = () => {
    useEffect(() => {

        window.addEventListener('beforeunload', () => store.persist())


        return () => {

            store.persist();
            window.removeEventListener('beforeunload', () => store.persist())

        }

    }, []);


    return (
        <Provider store={store} >
            <Router>
                <App />
            </Router>
        </Provider>

    );
}
ReactDOM.render(<AppWithStore />, document.getElementById('root'));
