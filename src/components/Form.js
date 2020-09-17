import React from 'react' // DON'T NEED THIS BECAUSE I'M DOING THIS WITH A CLASS 'CAUSE I'M A REBEL
import './Form.scss'
import md5 from 'md5'

class Form extends React.Component {
    constructor(props){
        super(props)

        const method = props.request.method || 'get' // if there is a method in state, be that, else be 'get'
        const url = props.request.url || '' // same as above, except if url doesn't exist, make it an empty string
        const data = props.request.data ? JSON.stringify(props.request.data) : ''

        this.state = {
            request: {
                method,
                url,
                data,
            }
        }
    }

    componentDidUpdate(props) {
        const nextHash = md5(JSON.stringify(props.request))
        const stateHash = md5(JSON.stringify(this.state.request))

        if(nextHash === stateHash) return;

        const request = { ...props.request}

        this.setState({request})
    }

    changeMethod = (method) => {
        const newRequest = {...this.state.request, method}
        this.setState({request: newRequest})
    }

    changeURL = (event) => {
        let url = event.target.value
        const newRequest = {...this.state.request, url}
        this.setState({request: newRequest})
    }

    changeMethod = (method) => {
        const newRequest = {...this.state.request, method};
        this.setState({request: newRequest})
    }

    changeBody = (event) => {
        try {
            let data = JSON.parse(event.target.value)
            const newRequest = {...this.state.request, data};

            this.setState({request: newRequest})
        } catch(e) { }
    }

    

    handleSubmit = async event => {
        event.preventDefault()
        console.log('in submit')
        this.props.handler(this.state.request);
    }

    

    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <label for="url">URL: </label>
                    <input 
                        type="text" 
                        name="url" 
                        defaultValue={this.state.request.url}
                        placeholder="http://api.url/here"
                        onChange={this.changeURL}
                    />
                    <div className="methods">
                        <span className={`method ${this.state.request.method === 'get'}`} onClick={() => this.changeMethod('get')}>
                            GET
                        </span>
                        <span className={`method ${this.state.request.method === 'post'}`} onClick={() => this.changeMethod('post')}>
                            POST
                        </span>
                        <span className={`method ${this.state.request.method === 'put'}`} onClick={() => this.changeMethod('put')}>
                            PUT
                        </span>
                        <span className={`method ${this.state.request.method === 'delete'}`} onClick={() => this.changeMethod('delete')}>
                            DELETE
                        </span>
                    </div>
                    <button>GO</button>
                    <textarea name="data" onChange={this.changeBody} defaultValue={this.state.request.data} ></textarea>
                </form>
            </div>
        )
    }
}

export default Form;
