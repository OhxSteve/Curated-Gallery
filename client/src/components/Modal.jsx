import React from 'react';
import moment from 'moment';


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
      maxWidth: 720,
      maxHeight: 480,
      margin: '0 auto',
      padding: 30,
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <img className='modal-pic' src={this.props.photo.photo} alt="shoe" height="400" width="400" />
          <img className='user-thumbnail' src={this.props.photo.user_pic} alt="user" height="35" width="35" />
          <div className="user-info">
            <div>{this.props.photo.user}</div>
            <div className="timePassed">{moment.unix(this.props.photo.posted_on/1000).fromNow()}</div>

          </div>
            <hr width="275" className='line' />
          <div className="buttons">            
            {this.props.modalPosition !== 0 && (
            <span class="arrow left"onClick={this.props.previous} >
            &#x1438;
            </span>
            )}
            {this.props.modalPosition !== this.props.max && (
            <span class="arrow right" onClick={this.props.next}>
            &#x1433;
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