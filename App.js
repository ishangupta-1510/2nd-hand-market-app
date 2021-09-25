import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewImageScreen from './app/screen/ViewImageScreen';
import WelcomeScreen from './app/screen/WelcomeScreen';
import AppText from './app/components/AppText/AppText';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButoon from './app/components/AppButton';
export default function App() {
  return (
    <WelcomeScreen />
  );
}