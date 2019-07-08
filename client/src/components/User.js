import React from 'react';
import styled from 'styled-components';

function User(props) {
    const user = props.user
    return (
        <SingleUser>
            <h4>{user.name}</h4>
            <p>{user.bio}</p>
        </SingleUser>
    )
}

const SingleUser = styled.div `
    border: 1px solid red;
`

export default User;
