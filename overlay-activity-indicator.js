// style for indicator
const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


// return in view
...
{this.state.loading &&
    <View style={styles.loading}>
      <ActivityIndicator size='large' />
    </View>
}

