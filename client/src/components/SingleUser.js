import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { fetchSingleUser } from '../actions/actionCreators'

 class SingleUser extends Component {
    componentDidMount() {
        this.props.fetchSingleUser(this.props.match.params.id)
    }
    
    render() {
        const user = this.props.activeUser.user || []
        console.log(user)
        return (
            <Fragment>
                <main>
                    <h4>{user.name}</h4>
                    <p>{user.bio}</p>
                    <button type = 'button'>Delete</button>
                </main>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    //console.log(state.activeUser)
    return {
        activeUser: state.activeUser
    }
}

export default connect(mapStateToProps, {fetchSingleUser})(SingleUser)