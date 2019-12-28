import React from 'react';
import ListedItem from '../ui/ListedItem';
import Categories from '../Categories';

import "./ItemList.css";

class ItemList extends React.Component {
  getList() {
    var me        = this,
        props     = (me && me.props) || {},
        data      = (props && props.data) || {},
        items     = (data && data.items) || [],
        listArray = [];
            
        items.forEach((item, idx) => {
      listArray.push(
        <div className='itemList_container' key={idx}>
          <ListedItem item={item}/>
          <hr className='itemList__container__hr'/>
        </div>
      )
    })

    return listArray;
  }

  render() {
    var me         = this,
        props      = (me && me.props) || {},
        data       = (props && props.data) || {},
        categories = (data && data.categories) || [];
    return (
      <div>
        <div>
          <Categories data={categories}/>
        </div>
        <div className='itemList'>
          {this.getList()}
        </div>
      </div>
    )
  }
}

export default ItemList;
