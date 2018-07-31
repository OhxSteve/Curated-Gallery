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

    const photoStyle = {
      position: 'relative',
      fontFamily: 'freight-sans-pro, sans-serif',
      fontSize:'14px',
    };

    const shopStyle = {
      position: 'absolute',
      top: '40%',
      left: '30%',
      backgroundColor: 'rgba(192,192,192,0.6)',
      fontSize: '15px',
      padding: '15px 27px 15px 27px',
      borderRadius: '5px', 
    }
    const likesStyle= {
      color:'grey',
    }

    return (

      <div className='photo' style={photoStyle} onMouseEnter={this.handleHover} onMouseLeave={this.handleUnhover} onClick={() => this.props.click(this.props.id)}>
        <img src={this.props.photo.photo} alt="shoe" height="400" width="400" />
        <div>{this.props.photo.user}</div>
        <div className='likes' style={likesStyle}>{this.props.photo.likes} Likes</div>
        {this.state.hovered && 
        <div className='shop' style={shopStyle}>Shop the Look</div>
        }
      </div>
    );
  }
}


export default Photo;
