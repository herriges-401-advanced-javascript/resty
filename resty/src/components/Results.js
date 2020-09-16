import React from 'react'
import JSONPretty from 'react-json-pretty'

class Results extends React.Component {
    render() {
        return (
            <>
                <h3>Count: {this.props.count}</h3>
                <ul>
                    {Object.keys(this.props.results).map((key, idx) => {
                        return (
                            <li key={idx}>
                                <a href={this.props.results[key]}>{key}</a>
                            </li>
                        )
                    })}
                </ul>
                <JSONPretty data={this.props.headers}></JSONPretty>
                <JSONPretty data={this.props.results}></JSONPretty>
            </>
        )
    }
}

export default Results