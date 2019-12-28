import React from 'react';
import Logo_ML from '../../assets/Logo_ML.png';
import Image from '../ui/Image';
import ItemInfo from '../ui/ItemInfo';
import ItemDescription from '../ui/ItemDescription';

import "./ItemDetail.css";

class ItemDetail extends React.Component {
  render() {
    var me            = this,
        props         = (me && me.props) || {},
        data          = (props && props.data) || {},
        item          = (data && data.item) || {},
        picture       = (item && item.picture) || {},
        urlPicture    = (picture && picture.url) || '',
        condition     = (item && item.condition) || '',
        sold_quantity = (item && item.sold_quantity) || '',
        title         = (item && item.title) || '',
        price         = (item && item.price) || '',
        description   = (item && item.description) || '';
      console.log(data)
    return (
      <div className='ItemDetail'>
        <div className='ItemDetail__info'>
          <Image
            src={ urlPicture || Logo_ML} 
            alt=''
            size='640'
          />
          <ItemInfo 
            condition={condition}
            soldQuantity={sold_quantity}
            title={title}
            price={price}
           />
        </div>
        <ItemDescription 
          description={description} 
        />
      </div>
    )
  }
}

export default ItemDetail;