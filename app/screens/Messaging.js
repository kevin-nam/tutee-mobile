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
    }
  }

  componentDidMount() {
    console.log('fromUid: ' + this.state.fromUid + ", toUid: " + this.state.toUid);

    // connect to a Firebase table
    const uidRef = this.state.fromUid + '-' + this.state.toUid;
    const dbref = this.state.dbh.ref('/messages/' + uidRef + '/messages');

    // save database reference for later
    this.setState({dbulref: dbref});

    // listen for new messages
    dbref.on('child_added', (e) => {
      console.log('hellohellohello');
      this.setState({loading: false});
      if (e) {
        const msg = (
          <MessageBubble key={this.state.messages.length + 1} messageData={e.val().content}
                         isReceived={e.val().sentBy != this.state.fromUid}/>
        );
        this.state.messages.push(msg);
      }
    });

    this.setState({loading: false});
  }

  static propTypes = {
    navigation: PropTypes.object,
  };

  sendNewMessage = (text) => {
    // TODO: use uid of users
    const message = {
      uidFrom: this.state.fromUid,
      uidTutor: this.state.toUid,
      uidTutee: this.state.toUid,
      content: text
    };

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    fetch('http://138.197.159.56:3232/messaging/send', {
      method: 'POST',
      body: JSON.stringify(message),
      headers: headers
    }).then(function(response) {
      if (response.ok) {
        console.log('Successfully sent a message');
      } else {
        console.log('Sending message', message);
      }
    });
  };

  // TODO: send actual user name rather than uid
  render() {
    const messages = this.state.messages;
    const username = this.state.toUid;

    if (!this.state.loading) {
      return (
        <Container backgroundColor="#9E768F">
          <StatusBar barStyle="light-content"/>
          <KeyboardAvoidingView
            behavior='padding'
            style={{'flex': 1, 'alignSelf': 'stretch'}}
            keyboardVerticalOffset={60}
          >
            <MessagingHeader username={username}/>
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
