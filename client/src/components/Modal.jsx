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
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 1080,
      minHeight: 720,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <img src={this.props.photo.photo} alt="shoe" height="612" width="612" />
          <br />
          <img src={this.props.photo.user_pic} alt="user" height="50" width="50" />
          <div>{this.props.photo.user}</div>
          <div>{this.props.photo.posted_on}</div>

          <div className="footer">
            {this.props.modal !== 0 && (
            <button type="button" onClick={this.props.previous}>
            Previous
            </button>
            )}
            {this.props.modal !== this.props.max && (
            <button type="button" onClick={this.props.next}>
            Next
            </button>
            )}
            <br />
            <button type="button" onClick={this.props.close}>
              Close
            </button>

          </div>
        </div>
      </div>
    );
  }
}

export default Modal;