import React from 'react';
import { View, Text } from 'react-native';
import TabView  from 'react-native-scrollable-tab-view';
import LinearGradient from 'react-native-linear-gradient';

export const Main = () => (
  <LinearGradient colors={['#52EDC7', '#5AC8FB']} style={{ flex: 1 }}>
    <TabView 
      tabBarTextStyle={{fontSize: 30}}>
      <Text tabLabel="hello"></Text>
      <Text tabLabel="yo"></Text>
    </TabView>
  </LinearGradient>
)