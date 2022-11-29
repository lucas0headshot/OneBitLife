import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Routes from "./scr/Routes";

export default function App(){
  return(
    <>
      <StatusBar barStyle={"auto"}/>
      <Routes/>
    </>
  );
}