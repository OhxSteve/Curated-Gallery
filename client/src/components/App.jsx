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
      modalPosition:0,
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
      modalPosition:photoID,
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
    let modalPosition = this.state.modalPosition + 1;
    let photo = this.state.pictures[modalPosition];
    this.setState({
      modalPosition,
      photo,
    })
  }

  previousModal = () => {
    let modalPosition = this.state.modalPosition - 1;
    let photo = this.state.pictures[modalPosition];
    this.setState({
      modalPosition,
      photo,
    })
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

    const containerStyle = {
      display:'flex',
      justifyContent: 'space-between',
      flexWrap:'wrap',
      maxWidth:'820px',
    };

    const appStyle = {
        fontFamily: 'TradeGothic, Trade Gothic, Trade Gothic, Trade Gothic, TradeGothic, Trade-Gothic, ArialNarrow, Arial-Narrow, Arial Narrow, Arial, sans-serif',   
    };

    return (
      <div className='app' style={appStyle}>
        <h2>HOW OTHERS ARE WEARING IT</h2>
        <p>Mention @Nike on Instagram for a chance to have your look featured.</p>
        <br/>
        <div className='container' style={containerStyle}>
        {this.state.pictures.slice(0,this.state.limit).map((photo, i) => {
          return <Photo photo={photo} key={photo.id} click={this.handleClick} id={i}/>
        })}
        </div>
        <br/>
          {this.state.limit === 2 &&
          <div onClick={this.onLoadMore}>Load More  ({this.state.pictures.length - this.state.limit}) 	&#8964;</div>
          }
          {this.state.limit === this.state.pictures.length &&
          <div onClick={this.onHide}>Hide &#8963;</div>
          }
          {this.state.clicked && 
            <Modal photo={this.state.photo} close={this.closeModal} next={this.nextModal} previous={this.previousModal} max={this.state.max} modalPosition={this.state.modalPosition} />
          }
        </div>
    );
  }
}


export default App;
