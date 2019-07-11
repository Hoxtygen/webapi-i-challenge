import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/actionCreators';
import User from './User';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NewUserForm from './NewUserForm';

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }
    
    render() {
        //console.log(this.props)
        const users = this.props.allUsers.users || [];
        return (
            <div>
                <NewUserForm />
            <main>
                <UserWrapper>
                <ul>
                {
                    users.map(user => {
                       return <Link to = {`/${user.id}`} key = {user.id}> <User 
                        user = {user}
                       />
                    </Link>
                    })
                }
                </ul>
                </UserWrapper>
            </main>
            </div>
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


