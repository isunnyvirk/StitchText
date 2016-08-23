import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as notificationActionCreators from '../actions/NotificationActions.jsx';
import Notifications from './Notifications.jsx';

class DropDown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notificationType: 'unread',
    };
    const { notifications } = this.props;
    this.markAsRead = this.markAsRead.bind(this);
  }

  componentWillMount() {
    this.props.notificationActions.getNotifications();
  }

  markAsRead(id) {
    const noteId = id || 'all';
    this.props.notificationActions.markAsRead(noteId);
  }

  displayTypeNotifications(type) {
    this.setState({
      notificationType: type,
    });
  }

  stopPropogation(e) {
    e.nativeEvent.stopImmediatePropagation();
  }

  render() {
    return (
      <div>
        <ul id="dropdown" className="dropdown-content">
          <div className="notifications-heading">
            <div className="notifications-panel-tabs">
              <div
                className="notifications-tab"
                onClick={(e) => {
                  this.stopPropogation(e);
                  this.displayTypeNotifications('all');
                }}
              >
                {'Notifications'}
              </div>
              <div
                className="notifications-unreadtab"
                onClick={(e) => {
                  this.stopPropogation(e);
                  this.displayTypeNotifications('unread');
                }}
              >
                {'Unread'}
              </div>
            </div>
            <div
              className="markAsRead"
              onClick={(e) => {
                this.stopPropogation(e);
                this.markAsRead();
              }}
            >
              {'Mark all as read'}
            </div>
          </div>
          <Notifications
            notificationType={this.state.notificationType}
            markAsRead={this.markAsRead}
            notifications
          />
        </ul>
        <a className="dropdown-button" data-activates="dropdown">
          <i className="material-icons">notifications</i>
        </a>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  notificationActions: bindActionCreators(notificationActionCreators, dispatch),
});

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications.notifications,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropDown);

DropDown.propTypes = {
  notificationActions: React.PropTypes.object,
};