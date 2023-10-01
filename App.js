import React, { Component, createContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, createAppContainer } from '@react-navigation/native'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FaSymbol } from '@fortawesome/fontawesome-svg-core';

import HomeScreen from "./conteiner/home.js";
import styles from './assets/styles';
import Icon from './components/Icons.js';

export default function App() {
  return (
    <NavigationContainer>
            <Text style={styles.iconMenu}>
              <FontAwesomeIcon icon={ FaSymbol }/>
              
              "Foi?"
            </Text>
    </NavigationContainer>
  )
}