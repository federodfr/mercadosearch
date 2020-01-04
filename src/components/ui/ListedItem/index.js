import React from 'react';
import Image from '../Image';
import ElementsInfo from '../ElementsInfo';
import { getImageSize } from '../../../helpers';

class ItemList extends React.Component {
  render() {
    var me            = this,
        win           = window,
        loc           = (win && win.location) || {},
        protocol      = (loc && loc.protocol) || '',
        host          = (loc && loc.host) || '',
        pathname      = (loc && loc.pathname) || '',
        urlRedirect   = `${protocol}//${host}${pathname}`,
        props         = (me && me.props) || {},
        item          = (props && props.item) || {},
        id            = (item && item.id) || '',
        picture       = (item && item.picture) || '',
        pictureSize   = (picture && getImageSize(picture, 'N')) || '',
        price         = (item && item.price) || '',
        title         = (item && item.title) || '',
        state         = (item && item.state_name) || '',
        freeShipping  = (item && item.freeShipping) || false;

    return (
      <a href={`${urlRedirect}/${id}`} className='itemList__container__anchor'>
        <div className='itemList__container__anchor__elements'>
          <Image src={pictureSize} alt='product image' size='180'/>
          <ElementsInfo 
            price={price} 
            title={title} 
            state={state}
            freeShipping={freeShipping}/>
          </div>
      </a>
    )
  }
}

export default ItemList;
