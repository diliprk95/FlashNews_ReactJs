import React, { Component } from 'react'
import loading from './loading.gif'
import './Spinner.css'

export class Spinner extends Component {
    render() {
        return (
            <div className="loading">
                <img className="paddingtopspin" src={loading} alt="loading"/>
            </div>
        )
    }
}

export default Spinner
