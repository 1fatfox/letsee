import { connect } from 'react-redux';
import { logout, demoSignUp } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id] ? state.entities.users[state.session.id] : "";
  const shop = state.entities.shops[currentUser.shop] || null;
  return {
    currentUser,
    shop,
    push: ownProps.history.push
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  demoSignUp: () => dispatch(demoSignUp())
});

export default withRouter(connect(msp, mdp)(Greeting));
