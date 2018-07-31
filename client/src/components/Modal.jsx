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

    const rightArrowStyle = {
      position: 'absolute',
      top: '40%',
      left: '83%',
      fontSize: '30px',
      color: 'aliceblue',
    };

    const leftArrowStyle = {
      position: 'absolute',
      top: '40%',
      left: '15.5%',
      fontSize: '30px',
      color: 'aliceblue',
    };

    const closeStyle = {
      position: 'absolute',
      top: '10%',
      left: '78%',
      fontSize: '20px', 
    };

    const userInfoStyle = {
      position: 'absolute',
      fontFamily: 'freight-sans-pro, sans-serif',
      fontSize: '15px',
      top: '15%',
      left: '60%',
    };

    const userThumbnailStyle = {
      position: 'absolute',
      borderRadius: '50%',
      top: '15%',
      left: '56%',
    };

    const lineStyle = {
      position: 'absolute',
      borderColor:'rgb(0,0,0,.05)',
      top: '23%',
      left: '56%',
    };

    const timePassedStyle = {
      color: 'grey',
      fontSize: '13px',
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <img className='modal-pic' src={this.props.photo.photo} alt="shoe" height="400" width="400" />
          <img className='user-thumbnail' style={userThumbnailStyle} src={this.props.photo.user_pic} alt="user" height="35" width="35" />
          <div className="user-info" style={userInfoStyle}>
            <div>{this.props.photo.user}</div>
            <div className="timePassed" style={timePassedStyle}>{moment.unix(this.props.photo.posted_on/1000).fromNow()}</div>

          </div>
            <hr width="275" className='line' style={lineStyle} />
          <div className="buttons">            
            {this.props.modalPosition !== 0 && (
            <span class="left-arrow" style={leftArrowStyle} onClick={this.props.previous} >
            &#x1438;
            </span>
            )}
            {this.props.modalPosition !== this.props.max && (
            <span class="right-arrow" style={rightArrowStyle} onClick={this.props.next}>
            &#x1433;
            </span>
            )}
            <span className="close" style={closeStyle} onClick={this.props.close}>
            &#10005;
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;