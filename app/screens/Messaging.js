import PropTypes from 'prop-types';
import React from 'react';
import { Platform, KeyboardAvoidingView, View } from 'react-native';
import { MessagingHeader } from '../components/MessagingHeader';
import { MessagingBody } from '../components/MessagingBody';
import { MessagingBar } from '../components/MessagingBar';
import { MessageBubble } from '../components/MessageBubble';
import firebaseDbh from '../config/firebase';
import styles from './styles';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 7 : 32;

class Messaging extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      messages: [],
      dbh: firebaseDbh,
      fromUid: this.props.navigation.state.params.fromUid,
      toUid: this.props.navigation.state.params.toUid,
      isInverseUidRef: false,
      dbref: null,
      username: this.props.navigation.state.params.username,
      profile_picture: this.props.navigation.state.params.profile_picture,
    };
  }

  componentDidMount() {
    const listener = this.listenForMessages;

    // connect to a Firebase table
    const uidRef = this.state.fromUid + '-' + this.state.toUid;
    const uidRef2 = this.state.toUid + '-' + this.state.fromUid;
    const dbref = this.state.dbh.ref('/messages/');

    // First check if dbref exists with fromUid-toUid
    dbref.once('value', (snapshot) => {
      if (snapshot.hasChild(uidRef)) {
        console.log('not inversed', uidRef);
        listener(uidRef);
      } else {
        // Else check if dbref exists with toUid-fromUid, if don't exist then just proceed with this one
        console.log('inversed listener', uidRef2);
        this.setState({ isInverseUidRef: true });
        listener(uidRef2);
      }
    });
  }

  listenForMessages = (uidRef) => {
    const dbref = this.state.dbh.ref('/messages/' + uidRef + '/messages');
    this.setState({ dbref: dbref });

    // listen for new messages
    dbref.on('child_added', (e) => {
      if (e) {
        const msg = (
          <MessageBubble
            sentBy={e.val().sentBy}
            key={this.state.messages.length + 1}
            messageData={e.val().content}
            isReceived={e.val().sentBy != this.state.fromUid}
          />
        );
        this.state.messages.push(msg);
        this.setState({ loading: false });
      }
    });

    this.setState({ loading: false });
  };

  static propTypes = {
    navigation: PropTypes.object,
  };

  sendNewMessage = (text) => {
    // TODO: use uid of users

    // Since reference in firebase database is uidTutor-uidTutee
    if (this.state.isInverseUidRef) {
      console.log('inversed');
      const message = {
        uidFrom: this.state.fromUid,
        uidTutor: this.state.toUid,
        uidTutee: this.state.fromUid,
        content: text,
      };

      this.fetchSendMessageRequest(message);
    } else {
      const message = {
        uidFrom: this.state.fromUid,
        uidTutor: this.state.fromUid,
        uidTutee: this.state.toUid,
        content: text,
      };

      this.fetchSendMessageRequest(message);
    }
  };

  fetchSendMessageRequest = (message) => {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    fetch('http://138.197.159.56:3232/messaging/send', {
      method: 'POST',
      body: JSON.stringify(message),
      headers: headers,
    }).then((response) => {
      this.setState({ loading: false });
      if (response.ok) {
        console.log('Successfully sent a message', message);
      } else {
        console.log('Sending message', message);
      }
    });
  };

  componentWillUnmount() {
    console.log('unmounting');
    this.state.dbref.off();
  }

  render() {
    const messages = this.state.messages;
    const uid = this.state.toUid;
    const isTutor = this.props.navigation.state.params.isTutor;
    const username = this.state.username;
    const profile_picture = this.state.profile_picture;

    if (!this.state.loading) {
      return (
        <View style={styles.messagingView}>
          <KeyboardAvoidingView
            behavior="padding"
            style={styles.messagingKeyboardAvoid}
            keyboardVerticalOffset={keyboardVerticalOffset}
          >
            <MessagingHeader
              dbref={this.state.dbref}
              navigation={this.props.navigation}
              profile_picture={profile_picture}
              isTutor={isTutor}
              uid={uid}
              username={username}
              isInverseUidRef={this.state.isInverseUidRef}
            />
            <MessagingBody messages={messages} />
            <MessagingBar displayNewMessage={this.sendNewMessage} />
          </KeyboardAvoidingView>
        </View>
      );
    } else {
      return null;
    }
  }
}

export default Messaging;
