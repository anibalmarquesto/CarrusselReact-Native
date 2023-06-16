import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, SafeAreaView, Animated } from 'react-native';


const imagenes = [
  "https://www.gratistodo.com/wp-content/uploads/2016/10/paisajes-oto%C3%B1o-wallpapers.jpg",
  "https://t3.kn3.net/taringa/6/B/8/E/B/B/KonahsFvZ/44D.jpg",
  "https://th.bing.com/th/id/R.a0714d7f87198dd9a5e3962a8d5273cf?rik=eIxSzVyjDjJw%2bQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-qdm0SFLx1YU%2fU7Wv1FdgLCI%2fAAAAAAACPb0%2f6qbiw-aNGSA%2fs1600%2fimagenes%2by%2bfondos%2bpara%2bcompartir%2ben%2bfacebook%2bcomo%2bbanco%2bde%2bimagenes%2bgratis%2b(5).jpg&ehk=lgVMREd5h81fxr5nJ6DM2s84%2fbm%2bQPZj5KoNgpwK9cM%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.QR5AaTFyvzXfQQI-rukouwHaE7?pid=ImgDet&rs=1",
];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO = 10;


export default function App() {
  return (
    <SafeAreaView style={styles.container} >

      <StatusBar hidden />
      <FlatList
        data={imagenes}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: ANCHO_CONTENEDOR }}>
              <view
                style={{
                  marginHorizontal: ESPACIO,
                  padding: ESPACIO,
                  borderRadius: 34,
                  backgroundColor: "#fff",
                  alignItems: "center",
                }}>

                <Image source={{uri:item}} style={
                  styles.posterImage} />
                  
              </view>
            </View>
          );
        }}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  posterImage: {
    width: "100%",
    height: ANCHO_CONTENEDOR * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});



