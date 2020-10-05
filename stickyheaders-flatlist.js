import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

const items = ['hello', 'world'];

class StickyTable extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      FlatListItems: []
    };
  }

  componentDidMount() {
    // load passed props
    const { items } = this.props;
    this.setState({ FlatListItems: items });

  }

  listItemPressed(item) {
    console.log(item)
  }

  FlatListItemSeparator() {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  Render_FlatList_Sticky_header() {
    var Sticky_header_View = (
    <View style={styles.header_style}>
 
      <Text style={
        {
          textAlign: 'center',
          color: '#fff',
          fontSize: 22
        }
      }> FlatList Sticky Header </Text>
 
    </View>
    );
    return Sticky_header_View;
  };

  renderItem(item, index) {
    // Array.map((item, index) => return <Text key={index}></Text>)
    return (
      <Text
        style={styles.FlatList_Item}
        onPress={() => this.listItemPressed(item)}
      >
        { `${index} ${JSON.parse(JSON.stringify(item))}` }
      </Text>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          contentContainerStyle={
            {
              // alignItems: 'center',

              borderWidth: 1,
              borderColor: 'gray',
              borderStyle: 'dotted',

              backgroundColor: 'pink',
            }
          }

          data={ this.state.FlatListItems }
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ this.FlatListItemSeparator}
          renderItem={({ item, index }) => this.renderItem( item, index )}
          ListHeaderComponent={this.Render_FlatList_Sticky_header}
          stickyHeaderIndices={[0]}
        />
      </View>
    );
  }

  // table methods
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is a test table with sticky headers</Text>
      <StickyTable items={items} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: (Platform.OS === 'iOS') ? 20 : 0
  },

  FlatList_Item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
   
  header_style:{
   
    width: '100%', 
    height: 45, 
    backgroundColor: '#00BCD4', 
    alignItems: 'center', 
    justifyContent: 'center'
   
}
});