import React from 'react';
import axios from 'axios';
import Photo from './Photo.jsx';
import Modal from './Modal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      clicked: false,
      photo:{},
      modal:0,
      max:0,
      limit:2,  
    };
  }

  componentDidMount() {
    this.retreivePhotos();
  }

  retreivePhotos = () => {
    let productRoute = `${window.location.pathname}gram`
    axios.get(productRoute)
    .then((response) => {
      this.setState({
        pictures:response.data,
        max:response.data.length-1
      })
    })
  }

  handleClick = (photoID) => {
    this.setState({
      modal:photoID,
      photo:this.state.pictures[photoID],
      clicked:!this.state.clicked,
    })
  }

  closeModal = () => {
    this.setState({
      clicked:!this.state.clicked
    })
  }

  nextModal = () => {
    this.setState({
      modal:this.state.modal+=1,
      photo:this.state.pictures[this.state.modal],
    })
  }

  previousModal = () => {
    this.setState({
      modal:this.state.modal-=1,
      photo:this.state.pictures[this.state.modal],
    })
    console.log(this.state.modal, this.state.pictures)
  }

  onLoadMore = () => {
    this.setState({
      limit: this.state.pictures.length
    })
  }

  onHide = () => {
    this.setState({
      limit: 2
    })
  }

  render() {
    return (
      <div>
        <h2>HOW OTHERS ARE WEARING IT</h2>
        <div>Mention @Nike on Instagram for a chance to have your look featured.</div>
          <div className="container">
          {this.state.pictures.slice(0,this.state.limit).map((photo, i) => {
            return <Photo photo={photo} key={photo.id} click={this.handleClick} id={i}/>
          })}
          </div>
        <br/>
          {this.state.limit === 2 &&
          <div onClick={this.onLoadMore}>Load More ({this.state.pictures.length - this.state.limit})</div>
          }
          {this.state.limit === this.state.pictures.length &&
          <div onClick={this.onHide}>Hide</div>
          }
          {this.state.clicked && 
            <Modal photo={this.state.photo} close={this.closeModal} next={this.nextModal} previous={this.previousModal} max={this.state.max} modal={this.state.modal} />
          }
          </div>
    );
  }
}


export default App;
