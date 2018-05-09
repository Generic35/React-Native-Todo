import React from 'react';
import { View, Text } from 'react-native';
import TabView  from 'react-native-scrollable-tab-view';

export const Main = () => (
  <View>
    <TabView 
      tabBarTextStyle={{fontSize: 30}}>
      <Text tabLabel="hello"></Text>
      <Text tabLabel="yo"></Text>
    </TabView>
  </View>
)