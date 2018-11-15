import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal } from '../../actions/modal_actions';

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(SessionForm);
