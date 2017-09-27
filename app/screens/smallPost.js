import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { connectAlert } from '../components/Alert';
import { Container } from '../components/Container';
import { SmallPost } from '../components/Post';

class smallPost extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  render() {
    return (
      <Container backgroundColor="#9E768F">
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <ScrollView showsVerticalScrollIndicator={false}>
            <SmallPost
              title="Looking for a tutor to touch me"
              userImage={null}
              content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum praeponunt, ut sit aliqua rerum selectio, naturam videntur sequi; Praeteritis, inquit, gaudeo. Ait enim se, si uratur, Quam hoc suave! dicturum. Quis istud possit, inquit, negare? Vitiosum est enim in dividendo partem in genere numerare.

Si verbum sequimur, primum longius verbum praepositum quam bonum. Duo Reges: constructio interrete. Aliter enim nosmet ipsos nosse non possumus. Ego vero isti, inquam, permitto. Quae si potest singula consolando levare, universa quo modo sustinebit? Non est igitur summum malum dolor.

Nam de summo mox, ut dixi, videbimus et ad id explicandum disputationem omnem conferemus. Nos commodius agimus. Tollitur beneficium, tollitur gratia, quae sunt vincla concordiae. Sed quanta sit alias, nunc tantum possitne esse tanta. Qua tu etiam inprudens utebare non numquam. Nam memini etiam quae nolo, oblivisci non possum quae volo.

Non enim quaero quid verum, sed quid cuique dicendum sit. Quis, quaeso, illum negat et bonum virum et comem et humanum fuisse? Quid censes in Latino fore? Ego quoque, inquit, didicerim libentius si quid attuleris, quam te reprehenderim. Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Non igitur bene. Polycratem Samium felicem appellabant. Mihi enim erit isdem istis fortasse iam utendum.`}
              date="a date"
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

// export default connect(mapStateToProps)(connectAlert(Home));

export default smallPost;
