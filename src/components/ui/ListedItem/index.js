import React from 'react';
import Image from '../Image';
import ElementsInfo from '../ElementsInfo';

class ItemList extends React.Component {
  render() {
    var me = this,
        win         = window,
        loc         = (win && win.location) || {},
        protocol    = (loc && loc.protocol) || '',
        host        = (loc && loc.host) || '',
        pathname    = (loc && loc.pathname) || '',
        urlRedirect = `${protocol}//${host}${pathname}`,
        props       = (me && me.props) || {},
        item        = (props && props.item) || {},
        id          = (item && item.id) || '',
        picture     = (item && item.picture) || '',
        price       = (item && item.price) || '',
        title       = (item && item.title) || '',
        state       = (item && item.state_name) || '';

    return (
      <a href={`${urlRedirect}/${id}`} className='itemList__container__anchor'>
        <div className='itemList__container__anchor__elements'>
          <Image src={picture} alt='product image' size='180'/>
          <ElementsInfo 
            price={price} 
            title={title} 
            state={state}/>
          </div>
      </a>
    )
  }
}

export default ItemList;
