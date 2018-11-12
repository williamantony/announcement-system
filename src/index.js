import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

// Router Implementation
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Landing, 
  Registration,
  SignIn,
  Dashboard,
  ErrorPage,
  ChoosePassword,
  CreateEvent,
  UpdateEvent,
} from './pages';

// Redux Implementation
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './redux/reducers';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

const store = createStore(Reducers, applyMiddleware(ReduxPromise, ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/register" component={Registration}/>
        <Route exact path="/login" component={SignIn}/>
        <Route exact path="/password" component={ChoosePassword}/>
        <Route exact path="/dashboard" component={Dashboard}/>

        <Route exact path="/events/create" component={CreateEvent}/>
        <Route exact path="/events/:id/" component={UpdateEvent}/>

        <Route component={ErrorPage}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
