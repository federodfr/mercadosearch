/* Import statements */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Wrapper from '../components/Wrapper';
import CONST from '../constants';

import "./Routes.css";
class Router extends React.Component {
  render() {
    return (
      <div className='Routes'>
          <Route name="NavBar" component={SearchBar} className='Routes__searchBar'/>
          <div className='Routes__content'>
              <Switch>
                <Route 
                  exact path={CONST.ROUTES_PATHS.ITEM_LIST}
                  render={(props) => <Wrapper {...props} pageName={CONST.PAGEVIEW.ITEM_LIST}/>}/>
                <Route 
                  path={CONST.ROUTES_PATHS.ITEM_DETAIL}
                  render={(props) => <Wrapper {...props} pageName={CONST.PAGEVIEW.ITEM_DETAIL}/>}/>
              </Switch>
            </div>
      </div>
    )
  }
}

export default Router;