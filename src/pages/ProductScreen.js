import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_TO_PRODUCT } from '../redux/actions/actionTypes';
import { useNavigation } from '@react-navigation/native';

export default function ProductScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // store'a abone oluruz
  const products = useSelector(state => state?.product.products);
  useEffect(() =>{
  fetch("https://fakestoreapi.com/products")
  .then(response => response?.json())
  .then (payload => dispatch({type: FETCH_TO_PRODUCT, payload}))
  .catch(error => console.log(error));
  },[]);

  return (
    <View>
      <FlatList 
      data={products}
       keyExtractor={item => item?.id.toString()}
        renderItem={({item}) => {
        return (
         <TouchableOpacity
         onPress={()=>navigation.navigate("ProductDetail",{product: item})
         } 
         style={styles.container}>
          <View style={styles.itemContainer}>
            <Image 
            source={{uri:item.image}} 
            style={styles.thumbnail} 
            resizeMode='contain'
            />
            <View style={styles.metaContainer}>
              <Text numberOfLines={3}   style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>by  {item.category}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() =>navigation.navigate("Carts",{product:item})
              }> 
              Add +
              </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Clear All</Text>
              </TouchableOpacity>
            </View>
          </View>
         </TouchableOpacity>         
        )
      }} 
    />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
  itemContainer:{
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    
  },
  title: {
    width:'44%',
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 10,
  },
  metaContainer: {
    padding: 5,
    paddingLeft: 10,
  },
  buttonContainer:{
    position: 'absolute',
    top: 110,
    right:10,
    gap: 4,
  },
  button:{
    backgroundColor: "#24a0ed",
    borderRadius: 10,
    padding: 5,
  },
  buttonText:{
    fontSize: 14,
    color: '#fff',
  },
});