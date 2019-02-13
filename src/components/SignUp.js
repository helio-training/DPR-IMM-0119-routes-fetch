import React, { Component } from 'react'

class SignUp extends Component {
    // constructor(){
    //     super()
    //     this.state = {

    //     }
    // }
    state = {
        username: "",
        password: ""
    }
    handleSubmit = async event => {
        event.preventDefault()
        console.log(this.state)
        await fetch('https://simple-contacts-zjobvqqnrp.now.sh/signup', {
            method: "POST",
            body: JSON.stringify({
                name: this.state.username,
                pw: this.state.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(result => result.json()).then(data => console.log(data))
        .then(() => this.setState({ username: "", password: ""}))
        .catch((error) => console.log(error))
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Registration</legend>
                    <input type="text" placeholder="UserName" 
                        value={this.state.username}
                        onChange={ (event) =>  this.setState({ username : event.target.value }) }/>
                    <br/>
                    <input type="password" placeholder="Password" 
                        value={this.state.password}
                        onChange={ (event) =>  this.setState({ password : event.target.value }) }/>
                    <hr/>
                    <input type="submit"/>
                </fieldset>
            </form>
        )
    }
}

export default SignUp