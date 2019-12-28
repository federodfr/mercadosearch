import React from 'react';
import CONST from '../../../constants';

require('./ElementsInfo.css')

class ElementsInfo extends React.Component {
  render() {
    var me = this,
        props = (me && me.props) || {},
        price = (props && props.price) || '',
        title = (props && props.title) || '',
        state = (props && props.state) || '';

    return (
      <div className='ElementsInfo'>
        <div className='ElementsInfo__productInfo'>
          <span className='ElementsInfo__productInfo__price'> {CONST.MONEY_SIGN.PESOS} {price} </span>
          <span className='ElementsInfo__productInfo__title'> {title} </span>
        </div>
        <span className='ElementsInfo__state'> {state} </span>
      </div>
    )
  }
}

export default ElementsInfo;
