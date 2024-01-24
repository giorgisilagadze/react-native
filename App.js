import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <View style={styles.container}>
          <Text style={styles.text}>ახლა შენ უყურებ ჩემ პირველ აპლიკაციას</Text>
          <Text style={styles.text}>ხოა გლეჯავოი?</Text>
          <Image source={logoImg} style={{ width: 200, height: 200 }} />
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            style={{ width: 200, height: 200 }}
          />
          <ImageBackground source={logoImg} style={{ width: 200, height: 200 }}>
            <Text style={styles.text}>this is some text</Text>
          </ImageBackground>
          <StatusBar style="auto" />
          <Button
            title="Press"
            onPress={() => console.log("deechira")}
            color="red"
            disabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingTop: 50,
  },
  text: {
    color: "white",
  },
});
