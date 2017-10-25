import PropTypes from 'prop-types';
import React from 'react';
import {StatusBar, KeyboardAvoidingView, Text} from 'react-native';
import {Container} from '../components/Container';
import {MessagingHeader} from '../components/MessagingHeader';
import {MessagingBody} from '../components/MessagingBody';
import {MessagingBar} from '../components/MessagingBar';
import {MessageBubble} from '../components/MessageBubble';
import firebaseDbh from '../config/firebase';

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
    }
  }

  componentDidMount() {
    console.log('fromUid: ' + this.state.fromUid + ", toUid: " + this.state.toUid);

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
      }
      // Else check if dbref exists with toUid-fromUid, if don't exist then just proceed with this one
      else {
        console.log('inversed listener', uidRef2);
        this.setState({isInverseUidRef: true});
        listener(uidRef2);
      }
    });
  }

  listenForMessages = (uidRef) => {
    const dbref = this.state.dbh.ref('/messages/' + uidRef + '/messages');
    this.setState({dbref: dbref});

    // listen for new messages
    dbref.on('child_added', (e) => {
      if (e) {
        const msg = (
          <MessageBubble sentBy={e.val().sentBy} key={this.state.messages.length + 1} messageData={e.val().content}
                         isReceived={e.val().sentBy != this.state.fromUid}/>
        );
        this.state.messages.push(msg);
        this.setState({loading: false});
      }
    });

    this.setState({loading: false});
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
        content: text
      };

      this.fetchSendMessageRequest(message);
    } else {
      const message = {
        uidFrom: this.state.fromUid,
        uidTutor: this.state.fromUid,
        uidTutee: this.state.toUid,
        content: text
      };

      this.fetchSendMessageRequest(message);
    }
  };

  fetchSendMessageRequest = (message) => {
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    fetch('http://138.197.159.56:3232/messaging/send', {
      method: 'POST',
      body: JSON.stringify(message),
      headers: headers
    }).then((response) => {
      this.setState({loading: false});
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

  // TODO: send actual user name rather than uid
  render() {
    const messages = this.state.messages;
    const username = this.state.toUid;
    const isTutor = this.props.navigation.state.params.isTutor;

    if (!this.state.loading) {
      return (
        <Container backgroundColor="#9E768F">
          <StatusBar barStyle="light-content"/>
          <KeyboardAvoidingView
            behavior='padding'
            style={{'flex': 1, 'alignSelf': 'stretch'}}
            keyboardVerticalOffset={60}
          >
            <MessagingHeader navigation={this.props.navigation} isTutor={isTutor} uid={username} username={username}/>
            <MessagingBody messages={messages}/>
            <MessagingBar displayNewMessage={this.sendNewMessage}/>
          </KeyboardAvoidingView>
        </Container>
      );
    } else {
      return null;
    }
  }
}

export default Messaging;
