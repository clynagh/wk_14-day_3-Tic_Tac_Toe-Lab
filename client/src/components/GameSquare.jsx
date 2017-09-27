import React from 'react';

class GameSquare extends React.Component {
  constructor(props){
    super(props),
    this.state = {
      selectedSquare: null

    }
  }


  render(){
    return (
    <div className="square" onclick="">
      This is the square
    </div>
    )
  }
}



export default GameSquare;