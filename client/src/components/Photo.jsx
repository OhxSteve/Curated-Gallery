import React from 'react';



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
      hovered:true
    })
  }

  handleUnhover = () => {
    this.setState({
      hovered:false
    })
  }


  render() {
    return (

      <div className="photo" onMouseEnter={this.handleHover} onMouseLeave={this.handleUnhover} onClick={() => this.props.click(this.props.id)}>
        <img src={this.props.photo.photo} alt="shoe" height="612" width="612" />
        <div>{this.props.photo.user}</div>
        <div>{this.props.photo.likes} Likes</div>
        {this.state.hovered && 
        <div className="shop">Shop the Look</div>
        }
      </div>
    );
  }
}


export default Photo;
