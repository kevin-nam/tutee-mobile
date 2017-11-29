import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Badge } from 'react-native-elements';

class SessionCard extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    navigation: PropTypes.object,
    user: PropTypes.object,
    session: PropTypes.object,
  };

  render() {
    this.props.profile_picture = this.props.profile_picture
      ? this.props.profile_picture
      : require('../MessagingHeader/default-user.jpg');

    return (
      <View style={styles.flexVertical}>
        <View style={styles.profileImageView}>
          <Image
            style={styles.profileImage}
            source={this.props.user.profile_picture}
          />
        </View>
        <View style={styles.profileTextView}>
          <Text allowFontScaling={false} style={styles.profileText}>
            {this.props.user.username}
          </Text>
          <View>
            <Text allowFontScaling={false} style={styles.sessionInfoText}>
              {this.props.session.duration}{' '}
              {this.props.session.duration > 1 ? 'hours' : 'hour'}
            </Text>
            <Text allowFontScaling={false} style={styles.sessionInfoText}>
              ${this.props.session.rate}/hour
            </Text>
          </View>
          <Badge
            value={this.props.session.totalprice}
            textStyle="white"
            containerStyle={styles.badgeContainer}
          />
        </View>
      </View>
    );
  }
}

export default SessionCard;
