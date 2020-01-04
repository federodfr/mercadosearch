import React from 'react';
import shipping from'../../../assets/ic_shipping.png';
import getSymbolFromCurrency from 'currency-symbol-map';


require('./ElementsInfo.css')

class ElementsInfo extends React.Component {
  render() {
    var me              = this,
        props           = (me && me.props) || {},
        price           = (props && props.price) || {},
        currency        = (price && price.currency) || '',
        currencySymbol  = (currency && getSymbolFromCurrency(currency)) || '',
        amount          = (price && price.amount) || '',
        decimals        = (price && price.decimals) || '',
        title           = (props && props.title) || '',
        state           = (props && props.state) || '',
        isFreeshipping  = (props && props.freeShipping) || false;

    return (
      <div className='ElementsInfo'>
        <div className='ElementsInfo__productInfo'>
          <div>
            <span className='ElementsInfo__productInfo__price'> {currencySymbol} {amount},{decimals} </span>
            {isFreeshipping && <img src={shipping} alt='free shipping' />}
          </div>
          <span className='ElementsInfo__productInfo__title'> {title} </span>
        </div>
        <span className='ElementsInfo__state'> {state} </span>
      </div>
    )
  }
}

export default ElementsInfo;
