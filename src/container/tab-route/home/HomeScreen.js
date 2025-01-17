import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ClearAuthStatus, } from '../../../Redux/action';
import { connect } from 'react-redux';

const arr1 = [
  "vaish",
  "aaru",
  "aarynt",
  "plk"
];
const arr2 = [
  {
    "name": "vaishu",
    "age": 22,
  },
  {
    "name": "bhuru",
    "age": 23,
  },
  {
    "name": "kalu",
    "age": 24,
  },
  {
    "name": "bhalu",
    "age": 25,
  },
];
const arr3 = [
  true,
  false,
  false,
  true,
];
const arr4 = [
  12,
  13,
  14,
  15,
];



const HomeScreen = (props) => {

  const [namestate,setnameState] = useState(0)

  const printName = (item) => {
    console.log(item);
  }

  useEffect(() => {
    printName("vasihali")
  }, [namestate])

  printName("nitish")

  const renderNames = ({ item }) => (
    (typeof item === "number" || typeof item === 'string') ?
      <TouchableOpacity onPress={() => { printName(item) }}>
        <Text>{item}</Text>
      </TouchableOpacity>
      :
      (
        typeof item === 'boolean'
          ? <Text>
            {item ? 'true' : 'false'}
          </Text> :
          <>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
          </>
      )

  );



  const clearStatus = async () => {
    await props.ClearAuthStatus();
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={clearStatus}>
          <Text>**************************</Text>
        </TouchableOpacity>
        <FlatList
          data={arr1}
          renderItem={
            renderNames
          }
        />
        <Button
        title='tap me ' 
        onPress={()=>{setnameState(namestate+1)}}
        />
        <Text>{namestate}</Text>
      </View>
    </SafeAreaView>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.authReducer.loading,
    errMsg: state.authReducer.errMsg,
    responseCode: state.authReducer.responseCode,
  };
};

const mapDispatchToProps = {
  ClearAuthStatus
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
