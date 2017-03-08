import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './components/home_page/home';
import Projects from './components/projects_page/projects';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={ browserHistory }>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="projects" component={Projects} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.react-main'));
