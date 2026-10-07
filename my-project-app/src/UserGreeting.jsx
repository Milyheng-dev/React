import PropTypes from 'prop-types';

function UserGreeting({ isLoggedIn = true, username = "Haha" }) {

    //ternary operator

    const Welcome = <h1 className="Welcome-message">Succed Name: {username}</h1>
    const NotLoggin = <h1 className="false-message">False</h1>
    return (isLoggedIn ? Welcome : NotLoggin)
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string
};
export default UserGreeting