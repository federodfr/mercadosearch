import React from 'react';

class Image extends React.Component {

  render() {
        return (
            <div
                style={{
                    width: this.props.size + 'px',
                    height: this.props.size + 'px',
                    backgroundImage: `url(${this.props.src})`,
                    borderRadius: '4px',
                    margin: '0px 16px',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    overflow: 'hidden'
                }}>
            </div>
          )
  }
}

export default Image;
