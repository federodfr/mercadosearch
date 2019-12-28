import React from 'react';
import "./Categories.css";

class ItemDetail extends React.Component {
  getCategoriesPath(){
    let me = this,
        props = (me && me.props) || {},
        data = (props && props.data) || {},
        categoriesString = (data && data.join(' > ')) || '';

    return categoriesString
  }

  render() {
    return (
      <div className='Categories'>
        <span className='Categories__text'> { this.getCategoriesPath() } </span>
      </div>
    )
  }
}

export default ItemDetail;