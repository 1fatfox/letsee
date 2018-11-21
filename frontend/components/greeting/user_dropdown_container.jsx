import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserDropdown from './user_dropdown';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    push: ownProps.history.push
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(msp, mdp)(UserDropdown));
