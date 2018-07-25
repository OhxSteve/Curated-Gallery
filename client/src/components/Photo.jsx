import React from 'react';


class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked:false,
    };
  }

  render() {
    return (
      <div className="photo">
        <img src={this.props.photo.photo} alt="shoe" height="612" width="612" />
        <div>{this.props.photo.user}</div>
        <div>{this.props.photo.likes} Likes</div>
      </div>
    );
  }
}


export default Photo;
