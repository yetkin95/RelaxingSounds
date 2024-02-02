import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';

const FadeInOutCircle = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;  // Initial value for opacity: 0
  const rotateAnim = useRef(new Animated.Value(0)).current; // Initial value for rotation: 0

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [fadeAnim, rotateAnim]);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={[styles.container, { transform: [{ rotate: rotation }] }]}>
      <Animated.View
        style={{
          ...styles.circle,
          opacity: fadeAnim, // Bind opacity to animated value
        }}
      />
      <Animated.View
        style={{
          ...styles.circle,
          opacity: fadeAnim, // Bind opacity to animated value
          backgroundColor: 'lightblue',
          position: 'absolute',
        }}
      />
      <Animated.View
        style={{
          ...styles.ellipse,
          position: 'absolute',
          transform: [{ rotate: rotation }],
        }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'lightgreen',
  },
  ellipse: {
    width: 120,
    height: 20,
    borderRadius: 30,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 2,
  },
});

export default FadeInOutCircle;