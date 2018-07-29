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
      })
    })
  }

  handleClick = (photoInfo) => {
    this.setState({
      clicked:!this.state.clicked,
      photo:photoInfo
    })
  }

  render() {
    return (
      <div>
        <h2>HOW OTHERS ARE WEARING IT</h2>
        <div>Mention @Nike on Instagram for a chance to have your look featured.</div>
          <div className="container">
            {this.state.pictures.map(photo => {
              return <Photo photo={photo} key={photo.id} click={this.handleClick}/>
            })}
          </div>
          {this.state.clicked && 
            <Modal photo={this.state.photo} />
          }
      </div>
    );
  }
}


export default App;
