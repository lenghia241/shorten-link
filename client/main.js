import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import LinkCreate from './components/link_create';
import { Links } from '../imports/collections/link';
import LinkList from './components/link_list';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <LinkCreate />
        <LinkList />
      </div>
    );
  }
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.app'));
});