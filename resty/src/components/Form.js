import React from 'react'
import './Form.scss'

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            url: null,
            method : null
        }
    }

    handleWord = event => {
        let url = event.target.value;
        this.setState({url})
    }

    handleClick = event => {
        event.preventDefault()
        let url = this.state.url
        this.setState({ url })
    }

    handleSelect = event => {
        let method = event.target.value
        this.setState({method})
    }

    render() {
        return (
            <div className="form">
                <label for="url">URL: </label>
                <input onChange={this.handleWord} id="url" />
                <div className="methods">
                    <input onChange={this.handleSelect} type="radio" id="get" name="method" value="get" />
                    <label for="get">GET</label>
                    <input onChange={this.handleSelect} type="radio" id="delete" name="method" value="delete" />
                    <label for="delete">DELETE</label>
                    <input onChange={this.handleSelect} type="radio" id="post" name="method" value="post" />
                    <label for="post">POST</label>
                    <input onChange={this.handleSelect} type="radio" id="put" name="method" value="put" />
                    <label for="put">PUT</label>
                </div>
                <button onClick={this.handleClick}>Submit</button>

                <div className="displayParentBox">
                    <div className="displayState">
                        <h3>URL:</h3>
                        <h4>{this.state.url}</h4>
                    </div>
                    <div className="displayState">
                        <h3>METHOD:</h3>
                        <h4>{this.state.method}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;
