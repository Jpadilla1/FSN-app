import React, {
  Component,
  View,
  Text
} from 'react-native';
import { PureRender } from '../components';

class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}

export default PureRender(Home);
