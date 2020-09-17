import React from 'react';
import './reset.css';
import './App.scss';
import axios from 'axios'
import md5 from 'md5'

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form'
import Results from './components/Results'
import History from './components/History'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      request: {},
      history: {},
    }
  }

  updateHistory(request){
    let hash = md5(JSON.stringify(request)) // Using md5, make a unique hash out of the request we get back from APIs

    const history = {...this.state.history, [hash]: request} // create an object using all pre-existing key/value pairs from state history and adding a pair with the name of the unique hash we created and the data of the request. if the hash already exists, it will just overwrite the existing one.
    this.setState({history}, () => {
      localStorage.setItem('history', JSON.stringify(this.state.history)) // set state history, also save to local storage under 'history' a stringy version of the state history
    })
  }

  
  updateResults = (headers ,results) => { // save the headers and results of a request to the state
    this.setState({headers, results})
  }

  updateRequest = (request) => { // save the request to the state
    this.setState({request})
  }

  call = async request => { // takes in a request with a link, method, and body (may be empty)
    try {

      this.updateRequest(request) // saves the request to state
      let response = await axios(request) // runs axios to either get, post, put, or delete to the url
      this.updateHistory(request) // if axios is successful, save the request to local storage and to the state history
      this.updateResults(response.headers, response.data) // save the headers and results to state
    } 
    catch(e){
      console.log(e) // if unseccessful, log error
    }
  }

  onMount(){
    let history = JSON.parse(localStorage.getItem('history')) // grab all previous successful requests and save them to state history, do this first
    this.setState({history})
  }

  render(){
    return (
      <>
        <Header />
        <Form request={this.state.request} handler={this.call}/> {/*sends current request (if there is one) and a reference to the api call function to Form.js on props*/}
        <History handler={this.updateRequest} calls={this.state.history} />
        <Results loading={this.state.loading} headers={this.state.headers} results={this.state.results}/>
        <Footer />
      </>
    );
  }
}

export default App;
