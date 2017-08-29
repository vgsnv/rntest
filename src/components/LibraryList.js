import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {

  renderRow(){

    const library = this.props.library;

    return library.map((value, key, array) => {
      return(
        <Text key={array.id}>{array[0].title}</Text>
      )
    })
    
  }

  render(){
    return(
      <View>{this.renderRow()}</View>
    );
  }
};

const mapStateToProps = state => ({
  library: state.library
})

export default connect(mapStateToProps)(LibraryList);