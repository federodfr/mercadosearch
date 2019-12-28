import React from 'react';
import CONST from '../../../constants';

require('./ItemDescription.css');

class ItemDescription extends React.Component {
  render() {
    var me          = this,
        props       = (me && me.props) ||{},
        description = (props && props.description) ||'';
    return (
      <div className='ItemDescription'>
        <span className='ItemDescription__title'> {CONST.PRODUCT_DESCRIPTION} </span>
        <span className='ItemDescription__description'> {description} </span> 
      </div>
    )
  }
}

export default ItemDescription;