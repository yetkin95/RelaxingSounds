import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Sound from 'react-native-sound';
import RelaxingAnimation from './RelaxingAnimation';
import { Image } from 'react-native';

Sound.setCategory('Playback');
const WhiteNoise = () => {
  var volume = 0.5;
  const [sound, setSound] = useState<Sound | null>(null);
  const [lastClicked, setLastClicked] = useState<string | null>(null);
  const playWhiteNoise = () => {
    if (sound) {
      sound.stop();
      setSound(null);
    } 
      const s = new Sound('white_noise.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        s.setNumberOfLoops(-1); // Infinite loops
        s.setVolume(0.5);
        s.play((success) => {
          if (!success) {
            console.log('Sound did not play');
          }
        });
      });
      setSound(s);
      setLastClicked('whiteNoise');
    
  };
  const playBirdSound = () => {
    if (sound) {
      sound.stop();
      setSound(null);
    } 
      const s = new Sound('bird_sound.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        s.setNumberOfLoops(-1); // Infinite loops
        s.setVolume(0.5);
        s.play((success) => {
          if (!success) {
            console.log('Sound did not play');
          }
        });
      });
      setSound(s);
      setLastClicked('birdSound');
    
  };
  const playRainSound = () => {
    if (sound) {
      sound.stop();
      setSound(null);
    } 
      const s = new Sound('soft_rain.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        s.setNumberOfLoops(-1); // Infinite loops
        s.setVolume(0.5);
        s.play((success) => {
          if (!success) {
            console.log('Sound did not play');
          }
        });
      });
      setSound(s);
      setLastClicked("rainSound");
    
  };
  const playOceanSound = () => {
    if (sound) {
      sound.stop();
      setSound(null);
    } 
      const s = new Sound('ocean_waves.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        s.setNumberOfLoops(-1); // Infinite loops
        s.setVolume(0.5);
        s.play((success) => {
          if (!success) {
            console.log('Sound did not play');
          }
        });
      });
      setSound(s);
      setLastClicked('oceanSound');
    
  };
  const stopSound = () => {
    if (sound) {
      sound.stop();
      setSound(null);
      setLastClicked('stopSound');
    } 
  };
  
  
  return (  
    <View style={styles.container}>
      <RelaxingAnimation/>
      <View style={styles.buttonsContainer}>
      <Button 
        title="Play White Noise" 
        onPress={playWhiteNoise} 
        color={lastClicked === 'whiteNoise' ? 'green' : undefined}
      />
      <Button 
        title="Play Bird Sounds" 
        onPress={playBirdSound} 
        color={lastClicked === 'birdSound' ? 'green' : undefined}
      />
      <Button 
        title="Play Rain Sounds" 
        onPress={playRainSound} 
        color={lastClicked === 'rainSound' ? 'green' : undefined}
      />
      <Button 
        title="Play Ocean Sounds" 
        onPress={playOceanSound} 
        color={lastClicked === 'oceanSound' ? 'green' : undefined}
      />
      <Button 
        title="Stop Sound" 
        onPress={stopSound} 
        color={lastClicked === 'stopSound' ? 'green' : undefined}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    marginTop: 20, 
  },
});

export default WhiteNoise;