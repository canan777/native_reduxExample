import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_TO_CART } from '../redux/actions/actionTypes'


export default function CartScreen() {
  const dispatch = useDispatch();

  const state= useSelector(store => store.cart);
  console.log(state);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/carts/5")
    .then(response=>response.json())
    .then(payload=>dispatch({type:FETCH_TO_CART,payload}))
    .catch(err => console.log(err))
  },[dispatch])
  return (
    <View>
      <FlatList 
      data={state.carts} 
      renderItem={({item})=> {
       
        return(
        <View>
        <Text>veri geldi</Text>
        <Text>{item.date}</Text>
        </View>   
        )
      }}
        />
    </View>
  );
}