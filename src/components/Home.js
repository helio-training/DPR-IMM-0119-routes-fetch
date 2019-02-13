import React, { Component } from 'react'

class Home extends Component {
    state = {
        contacts : [ 'Example' ]
    }
    async componentDidMount() {
        console.log('mounted')
        await fetch('https://simple-contacts-zjobvqqnrp.now.sh/contacts')
            .then(async (result) => {
                let data = await result.json()
                data = data.map(person => <li>{person.name}</li>)
                this.setState({ contacts: data })
            })
            // .then(data => data.map(person => <li>{person.name}</li>))
            // .then(data => this.setState({contacts : data}))
    }
    render() {
        // console.log('rendering')
        return (
            <div>
                <h2>List of Contact Names</h2>
                <ul>
                    {this.state.contacts}
                </ul>
            </div>
            
        )
    }
}

export default Home

