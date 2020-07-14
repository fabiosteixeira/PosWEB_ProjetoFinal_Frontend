import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../_actions';

class HomePage extends React.Component {
    render() {
        const { user, users } = this.props;
        return (
            <div className="d-flex justify-content-center">
                <h1>Hi {user.name}!</h1>
                <p>You're logged in with React & JWT!!</p>
                <h3>Users from secure api end point:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {/* {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.name}
                            </li>
                        )} */}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>

            <style jsx>{`
                p {
                    color: red;
                  }
            `}</style>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };