import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      product: 0,   
    };
  }


  componentDidMount() {
    this.retreivePhotos();
  }

  retreivePhotos = () => {
    axios.get('/gram', {
      params: {
        product: this.state.product,
      }
    })
    .then((response) => {
      this.setState({
        pictures:response.data,
      })
    })
  }

  render() {
    return (
      <div>
        <h2>HOW OTHERS ARE WEARING IT</h2>
        <div>Mention @Nike on Instagram for a chance to have your look featured.</div>
      </div>
    );
  }
}


export default App;
