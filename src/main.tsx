import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './main.scss';
import './core/i18n/i18n';
import { Loading } from './shared/loading/loading';
import { store } from "./app/store/store";
import { Provider } from "react-redux";
import { AppComponent } from './app/app';

ReactDOM.render(
    <React.Suspense fallback={<Loading/>}>
        <Provider store={store}>
            <AppComponent/>
        </Provider>
    </React.Suspense>
    ,
    document.getElementById('app'));
