import React, { Component } from 'react';

class Com extends Component {
  constructor (props) {
    super(props);
    console.log('1', this); 
  }

  btnClickFn (id) {
    console.log(id, this);
  }

  render () {
    return (
      <div>
        <button onClick = { this.btnClickFn.bind(this, 22) }>react按钮</button>
      </div>
    )
  }
}
// const com = new Com()
// com.btnClickFn()
export default Com;
