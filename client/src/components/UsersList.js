import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/actionCreators';
import User from './User';
import styled from 'styled-components';

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }
    
    render() {
        //console.log(this.props)
        const users = this.props.allUsers.users || [];
        return (
            <main>
                <UserWrapper>
                {
                    users.map(user => {
                       return <User 
                       key = {user.id}
                        user = {user}
                       />
                    })
                }
                </UserWrapper>
            </main>
        )
    }
}

const UserWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    border: 1px solid blue;
    justify-content: flex-start;
`

const mapStateToProps = (state) => {
    return {
        allUsers: state.usersList.allUsers,
        error: state.usersList.error,
        loading: state.usersList.loading
    }
}

export default connect(mapStateToProps, { fetchUsers })(UsersList)


