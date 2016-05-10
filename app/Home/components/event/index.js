import React, {
  Component,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import Spinner from 'react-native-spinkit';
import moment from 'moment';
import { PureRender } from '../../../components';
import styles from './styles';
import condado from '../../../assets/condado.png';
import logo from '../../../assets/logo.png';


class Event extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(route) {
    return () => {
      this.props.navigator.push({ name: route });
    };
  }
  render() {
    if (this.props.fetching && Object.keys(this.props.event).length === 0) {
      return (
        <View style={styles.loader}>
          <Spinner
            type='ThreeBounce'
            color='#50E3C2'
            size={80}
          />
        </View>
      );
    }
    return (
      <ScrollView>
        <Image source={condado} style={styles.eventBackground}>
          <View style={styles.container}>
            <View style={styles.logoWrap}>
              <Image source={logo} style={styles.logo}/>
            </View>
            <Text style={styles.eventDate}>{moment(this.props.event.date.iso).format('DD/MMM/YYYY')}</Text>
          </View>
        </Image>
        <Text style={styles.talksTitle}>Talks</Text>
        <View style={styles.speakers}>
          {this.props.event.talks.map((talk, idx) => {
            return (
              <View key={idx} style={styles.speaker}>
                <Image source={{ uri: talk.profileImg }} style={styles.speakerImg}/>
                <View style={styles.talkInfo}>
                  <Text style={styles.talkTitle}>{talk.title}</Text>
                  <Text style={styles.speakerName}>{talk.author}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.openMicWrapper}>
          <TouchableOpacity onPress={this.handlePress('open-mic')}>
            <View style={styles.openMicButton}>
              <Text style={styles.openMicText}>Request Open Mic</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default PureRender(Event);