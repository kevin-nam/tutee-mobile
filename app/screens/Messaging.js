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
      messages: [],
      dbh: firebaseDbh
    }
  }

  componentWillMount() {
    // connect to a Firebase table
    // TODO: change use uid of users
    var dbref = this.state.dbh.ref('/messages/fromMe-tutee/messages');

    // save database reference for later
    this.setState({dbulref: dbref});

    // listen for new messages
    // TODO: verify sent by me
    dbref.on('child_added', (e) => {
      if (e) {
        const msg = (
          <MessageBubble key={this.state.messages.length + 1} messageData={e.val().content}
                         isReceived={e.val().sentBy != "fromMe"}/>
        );
        this.state.messages.push(msg);
        this.setState(this.state);
      }
    });

  }

  static propTypes = {
    navigation: PropTypes.object,
  };

  sendNewMessage = (text) => {
    // TODO: use uid of users
    const message = {
      uidFrom: "fromMe",
      uidTutor: "fromMe",
      uidTutee: "tutee",
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

  render() {
    const messages = this.state.messages;

    return (
      <Container backgroundColor="#9E768F">
        <StatusBar barStyle="light-content"/>
        <KeyboardAvoidingView
          behavior='padding'
          style={{'flex': 1, 'alignSelf': 'stretch'}}
          keyboardVerticalOffset={60}
        >
          <MessagingHeader/>
          <MessagingBody messages={messages}/>
          <MessagingBar displayNewMessage={this.sendNewMessage}/>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Messaging;
