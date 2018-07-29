import React from 'react';
import axios from 'axios';
import Photo from './Photo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
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
      })
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
    return (
      <div>
        <h2>HOW OTHERS ARE WEARING IT</h2>
        <div>Mention @Nike on Instagram for a chance to have your look featured.</div>
          <div className="container">
            {this.state.pictures.slice(0,this.state.limit).map(photo => {
              return <Photo photo={photo} key={photo.id}/>
            })}
          </div>
          <br/>
            {this.state.limit === 2 &&
            <div onClick={this.onLoadMore}>Load More ({this.state.pictures.length - this.state.limit})</div>
            }
            {this.state.limit === this.state.pictures.length &&
            <div onClick={this.onHide}>Hide</div>
            }
      </div>
    );
  }
}


export default App;
