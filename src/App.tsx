import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import SvgIcon from './components/SvgIcon';
import Row from './components/Row';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 32, marginBottom: 16 }}>
        SVG Icons
      </Text>
      <Row>
        <SvgIcon name='calendar' />
        <SvgIcon name='clock' />
        <SvgIcon name='sandwatch' />
        <SvgIcon name='watch' />
      </Row>
      <Row>
        <SvgIcon name='calendar' fill='#F00' />
        <SvgIcon name='clock' fill='orange' />
        <SvgIcon name='sandwatch' fill='rgb(255, 255, 0)' />
        <SvgIcon name='watch' fill='rgba(0, 128, 0, 0.5)' />
        <SvgIcon name='watch' fill='rgba(0, 128, 0, 1)' />
      </Row>
      <Row>
        <SvgIcon width={48} name='calendar' fill='blue' />
        <SvgIcon height={48} name='clock' fill='darkblue' />
        <SvgIcon width={48} height={48} name='sandwatch' fill='purple' />
        <SvgIcon size={48} name='watch' fill='gold' />
      </Row>
    </SafeAreaView>
  );
};

export default App;
