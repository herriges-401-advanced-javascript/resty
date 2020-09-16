import React from 'react';
import './reset.css';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form'
import Results from './components/Results'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
      count: 0,
      headers: 0,
    }
  }

  handleForm = (count, headers ,results) => {
    this.setState({results, count, headers})
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Form handler={this.handleForm}/>
        <Results count={this.state.count} headers={this.state.headers} results={this.state.results}/>
        <Footer />
      </div>
    );
  }
}



export default App;
