import React from 'react';
import Logo_ML from'../../assets/Logo_ML.png';
import ic_Search from '../../assets/ic_Search.png';
import CONST from '../../constants';

require('./SearchBar.css')

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueSearch: ''
    }
  }

  handleOnKeyDown(evt) {
    if(evt.keyCode === 13){
      this.redirectToList();
    }
  }


  handleOnChange(e) {
    e.preventDefault();
    var target  = e.target,
        value   = (target && target.value) || '';
        
    this.setState({
      valueSearch: value
    })
  }

  handleOnCLick () {
    this.redirectToList();
  }

  redirectToList() {
    let me = this,
        state = (me && me.state) || {},
        valueSearch = (state && state.valueSearch) || '';

    window.location=`${window.location.protocol}//${window.location.host}/items?search=${valueSearch}`
  }

  render() {
    return (
      <div className='SearchBar'>
        <div className='SearchBar'>
          <img 
            src={Logo_ML} 
            alt='' 
            className='SearchBar__imageML'/>
          <input 
            type='text' 
            placeholder={CONST.SEARCH_BAR_PLACEHOLDER}
            className='SearchBar__textBox'
            onChange={(evt) => this.handleOnChange(evt)}
            onKeyDown={(evt) => this.handleOnKeyDown(evt)}/>
          <button 
            className='SearchBar__searchButton'
            onClick={() => this.handleOnCLick()}>
            <img src={ic_Search} alt=''/>
        </button>
      </div>
      </div>
    )
  }
}

export default SearchBar;