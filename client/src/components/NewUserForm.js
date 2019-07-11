import React, { Component } from 'react'

export default class NewUserForm extends Component{
    nameRef = React.createRef();
    bioRef = React.createRef();
    render() {
        return (
            <div className = 'form-container'>
                <h2>Add new user</h2>
                <form action="" method="post">
                    <div className="single-input">
                        <input
                         type="text"
                         placeholder = 'name'
                         ref = {this.nameRef}
                         />
                    </div>
                    <div className="single-input">
                        <input 
                        type="text"
                        placeholder = 'bio'
                        refn= {this.bioRef}
                        />
                    </div>
                    <div className="button-container">
                        <button type = 'submit'>Create</button>
                    </div>
                </form>
            </div>
        );
    }
}
