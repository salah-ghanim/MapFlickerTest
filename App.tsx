import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';

// @ts-ignore
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function App() {
  const [markers, setMarkers] = useState([
    {latitude: 37.8067698, longitude: -122.4578827},
    {latitude: 37.7735338, longitude: -122.4635475},
    {latitude: 37.7552137, longitude: -122.4405449},
    {latitude: 37.8047354, longitude: -122.4206322},
    {latitude: 37.7858175, longitude: -122.5035452},
  ]);

  useEffect(() => {
    setInterval(() => {
      console.log('schuffle array');
      // if you comment out the following shuffleArray line, the flickering stops.
      shuffleArray(markers);
      setMarkers([...markers]);
    }, 1000);
  }, []);

  return (
    <MapView
      style={{flex: 1}}
      initialRegion={{
        longitude: -122.4194,
        latitude: 37.7749,
        latitudeDelta: 0.1,
        longitudeDelta: 0.2,
      }}>
      {markers.map(coordinate => (
        <Marker
          key={`marker_${coordinate.latitude}_${coordinate.longitude}`}
          coordinate={coordinate}
          tracksViewChanges={false}
        />
      ))}
    </MapView>
  );
}
