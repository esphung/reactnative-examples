import React, { useState } from 'react';

import {
  View,
  Text,
  Button,
} from 'react-native';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>
      You clicked
        { ` ${count} ` }
      times
      </Text>
      <Button title="Click Me" onPress={() => setCount(count + 1)} />
    </View>
  );
}

export default Example;
