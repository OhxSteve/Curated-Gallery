import React from 'react';


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: 50,
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 720,
      minHeight: 480,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <img src={this.props.photo.photo} alt="shoe" height="400" width="400" />
          <div className='user-info'>
            <img className='user-thumbnail' src={this.props.photo.user_pic} alt="user" height="50" width="50" />
            <div>{this.props.photo.user}</div>
            <div>{this.props.photo.posted_on}</div>
          </div>
          <div className="buttons">            
            {this.props.modal !== 0 && (
            <span class="arrow left"onClick={this.props.previous} >
            &#8249;
            </span>
            )}
            {this.props.modal !== this.props.max && (
            <span class="arrow right" onClick={this.props.next}>
            &#8250;
            </span>
            )}
            <span className="close" onClick={this.props.close}>
            &#10005;
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;