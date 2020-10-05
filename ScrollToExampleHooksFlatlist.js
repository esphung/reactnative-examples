// ScrollToIndex FlatList Hooks

import React, { useState, useRef } from 'react';
import { ScrollView, Text, View, FlatList, Dimensions, Button, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const style = {
  justifyContent: 'center',
  alignItems: 'center',
  width: width,
  height: 50,
  flex: 1,
  borderWidth: 1,
  
  backgroundColor: 'salmon',
};

const COLORS = ['deepskyblue','fuchsia', 'lightblue '];

function getData(number) {
  let data = [];
  for(var i=0; i<number; ++i)
  {
    data.push("" + i);
  }
  
  return data;
}

export default function ScrollToExample(props) {
  const [flatlistData, setFlatlistData] = useState(getData(50));
  
  let flatListRef = useRef(null);
  
  const getItemLayout = (data, index) => (
    { length: 50, offset: 50 * index, index }
  );
  
  const getColor = (index) => {
    const mod = index%3;
    return COLORS[mod];
  }
  
  const scrollToTop = () => {
    flatListRef.scrollToIndex({
      animated: true,
      index: 0, // randomIndex
    });
  };
  const scrollToBottom = () => {
    flatListRef.scrollToIndex({
      animated: true,
      index: flatlistData.length - 1, // randomIndex
    });
  };
  const scrollToIndex = () => {
    let randomIndex = Math.floor(Math.random(Date.now()) * flatlistData.length);
    flatListRef.scrollToIndex({
      animated: true,
      index: randomIndex
    });
  }
  
  const scrollToItem = () => {
    let randomIndex = Math.floor(Math.random(Date.now()) * flatlistData.length);
    flatListRef.scrollToIndex({
      animated: true,
      index: "" + randomIndex
    });
  }


    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Button
            onPress={scrollToTop}
            title="Scroll to Top"
            color="darkblue"
          />
          <Button
            onPress={scrollToBottom}
            title="Scroll to Bottom"
            color="darkblue"
          />
          <Button
            onPress={scrollToIndex}
            title="Tap to scrollToIndex"
            color="purple"
          />
          <Button
            onPress={scrollToItem}
            title="Tap to scrollToItem"
            color="purple"
          />
        </View>
        <FlatList
          data={flatlistData}
          style={styles.flatlist}
          // ref={flatListRef}
          ref={(ref) => { flatListRef = ref; }}
          keyExtractor={item => item}
          getItemLayout={getItemLayout}
          initialScrollIndex={0}
          initialNumToRender={2}
          renderItem={({ item, index}) => (
              <View style={{...style, backgroundColor: getColor(index)}}>
                <Text>{item}</Text>
              </View>
            )}
          {...props}
        />
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flatlist: {
    flex: 1,
  },
  header: {
    paddingTop: 20,
    backgroundColor: 'darkturquoise', 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});















