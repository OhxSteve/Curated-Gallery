import React from 'react';
import Modal from './Modal.jsx';


class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked:false,
      hovered:false,
    };
  }

  handleHover = () => {
    this.setState({
      hovered:!this.state.hovered
    })
  }

  handleClick = () => {
    this.setState({
      clicked:!this.state.clicked
    })
  }

  render() {
    return (

      <div className="photo" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} onClick={this.handleClick}>
        <img src={this.props.photo.photo} alt="shoe" height="612" width="612" />
        <div>{this.props.photo.user}</div>
        <div>{this.props.photo.likes} Likes</div>
        {this.state.hovered && 
        <div className="shop">Shop the Look</div>
        }
        {this.state.clicked && 
        <Modal photo={this.props.photo.photo} />
        }
      </div>
    );
  }
}


export default Photo;
