import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ex01 from './screens/week02/Ex01';
import Ex02 from './screens/week02/Ex02';
import Ex03 from './screens/week02/Ex03';
import Ex04 from './screens/week02/Ex04';
import Ex05 from './screens/week02/Ex05';
import Ex06 from './screens/week02/Ex06';
import Ex07 from './screens/week02/Ex07';
import Ex08 from './screens/week02/Ex08';
import Ex09 from './screens/week02/Ex09';
import Ex10 from './screens/week02/Ex10';
import Ex11 from './screens/week02/Ex11';
import Ex12 from './screens/week02/Ex12';
import Welcome from './screens/Welcome';
import Travel from './screens/week3/Travel';
import MyIcon from './components/week3/MyIcon';
import Resort from './screens/week4/Resort';
import Health from './screens/week5/Health';
export default function App() {
  return (
    <Health />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
