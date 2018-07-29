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
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50,
      maxWidth:1300
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 600,
      minHeight: 600,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <img src={this.props.photo.photo} alt="shoe" height="400" width="400" />
          <div>{this.props.photo.user}</div>
          <div>{this.props.photo.posted_on}</div>

          <div className="footer">
            <button onClick={this.props.close}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;