import React from 'react';
import CONST from '../../../constants';


import "./ItemInfo.css";

class ItemInfo extends React.Component {
  render() {
    var me = this,
        props = (me && me.props) || {},
        condition = (props && props.condition) || '',
        soldQuantity = (props && props.soldQuantity) || '0',
        title = (props && props.title) || '',
        price = (props && props.price) || '';
        
    return (
      <div className='ItemInfo'>
        <span className='ItemInfo__header'> {condition} - {soldQuantity} {CONST.SOLD_WORD} </span>
        <span className='ItemInfo__title'> {title} </span>
        <span className='ItemInfo__price'> {CONST.MONEY_SIGN.PESOS} {price} </span>
        <button className='ItemInfo__Button'> {CONST.BUY_BUTTON} </button>
      </div>
    )
  }
}

export default ItemInfo;