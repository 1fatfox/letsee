import { connect } from 'react-redux';
import { logout, demoSignUp } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting';
import { withRouter } from 'react-router-dom'

const msp = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  demoSignUp: () => dispatch(demoSignUp())
});

export default withRouter(connect(msp, mdp)(Greeting));
