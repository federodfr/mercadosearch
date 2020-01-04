import React from 'react';
import CONST from '../../../constants';
import getSymbolFromCurrency from 'currency-symbol-map';



import "./ItemInfo.css";

class ItemInfo extends React.Component {
  render() {
    var me              = this,
        props           = (me && me.props) || {},
        condition       = (props && props.condition) || '',
        soldQuantity    = (props && props.soldQuantity) || '0',
        title           = (props && props.title) || '',
        price           = (props && props.price) || {},
        currency        = (price && price.currency) || '',
        currencySymbol  = (currency && getSymbolFromCurrency(currency)) || '',
        amount          = (price && price.amount) || '',
        decimals        = (price && price.decimals) || '';
        
    return (
      <div className='ItemInfo'>
        <span className='ItemInfo__header'> {condition} - {soldQuantity} {CONST.SOLD_WORD} </span>
        <span className='ItemInfo__title'> {title} </span>
        <span className='ItemInfo__price'> {currencySymbol} {amount},{decimals} </span>
        <button className='ItemInfo__Button'> {CONST.BUY_BUTTON} </button>
      </div>
    )
  }
}

export default ItemInfo;