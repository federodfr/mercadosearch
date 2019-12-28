/* Import statements */
import React from 'react';
import handleServer from '../../server';
import handleData from './handleData';
import ItemDetail from '../ItemDetail';
import ItemList from '../ItemList';
import CONST from '../../constants';

class Wrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      urlServer: '',
      data: {}
    }
  }

  componentDidMount(){
    this.getUrlServer();
  }


  async getDataHandled(){
    let me          = this,
        state       = (me && me.state) || {},
        props       = (me && me.props) || {},
        urlServer   = (state && state.urlServer) || '',
        pageName    = (props && props.pageName) || '',
        dataServer  = (urlServer && await (await handleServer(urlServer))) || {},
        dataHandled = (dataServer && pageName && await (await handleData(dataServer, pageName))) || {};
    
    this.setState({
      data: dataHandled,
      loaded: true,
    });
  }


  getUrlServer(){
    let me        = this,
        win       = window,
        loc       = (win && win.location) || {},
        search    = (loc && loc.search) || '',
        urlParams = (search && new URLSearchParams(search)) || {},
        props     = (me && me.props) || {},
        match     = (props && props.match) || {},
        params    = (match && match.params) || {},
        id        = (params && params.id) || '',
        pageName  = (props && props.pageName) || '';

    switch(pageName){
      default:
        alert(`Server ${CONST.NOT_FOUND}`)
        break;
      case `${CONST.PAGEVIEW.ITEM_LIST}`:
        this.setState({
          urlServer: `${CONST.SERVER_HOST}${CONST.SERVER_PATH_API_ITEMS}?q=${urlParams.get('search')}`,
        },() => me.getDataHandled())
        break;
      case `${CONST.PAGEVIEW.ITEM_DETAIL}`:
        this.setState({
          urlServer: `${CONST.SERVER_HOST}${CONST.SERVER_PATH_API_ITEMS}/${id}`
        },() => me.getDataHandled())
        break;
    }
  }

  render() {
    var me        = this,
        state     = (me && me.state) || {},
        props     = (me && me.props) || {},
        loaded    = (state && state.loaded) || false,
        data      = (state && state.data) || {},
        pageName  = (props && props.pageName) || '';

    if(!loaded){
      return(
        <div>
          loading ...
        </div>
      )
    } else {
      return(
        <div>
          { pageName === `${CONST.PAGEVIEW.ITEM_DETAIL}`  ? <ItemDetail data={data}/> : null}
          { pageName === `${CONST.PAGEVIEW.ITEM_LIST}`    ? <ItemList data={data}/> : null}
        </div>
      )
    }
  }
}

export default Wrapper;