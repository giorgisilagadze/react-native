import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [color, setColor] = useState("white");
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isModalVisible ? "light-content" : "dark-content"}
        showHideTransition="fade"
        // hidden
      />
      <ScrollView
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <View style={styles.container}>
          <ActivityIndicator size={"large"} color={"red"} animating={true} />
          <Text style={styles.text}>ახლა შენ უყურებ ჩემ პირველ აპლიკაციას</Text>
          <Pressable
            onLongPress={() => setColor("blue")}
            onPressOut={() => setColor("green")}
            onPressIn={() => setColor("red")}
          >
            <Text style={styles.text}>გაალურჯე</Text>
          </Pressable>
          <Text style={{ color: color }}>გაწითლდეს დაკლიკებისას</Text>
          <Pressable onPress={() => setIsModalVisible(true)}>
            <Text style={{ color: "white" }}>press for modal</Text>
          </Pressable>
          <Button
            title="alert"
            onPress={() =>
              Alert.alert("alert appears", "smth wrong", [
                {
                  text: "cancel",
                  onPress: () => console.log("canceled"),
                },
                { text: "Ok", onPress: () => console.log("Ok") },
                {
                  text: "Later",
                  onPress: () => console.log("later"),
                },
              ])
            }
          />
          <Modal
            visible={isModalVisible}
            animationType="slide"
            presentationStyle="pageSheet"
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "lightblue",
                paddingTop: 60,
              }}
            >
              <Text>Modal is visible</Text>
              <Button
                title="hide Modal"
                onPress={() => setIsModalVisible(false)}
              />
            </View>
          </Modal>

          {/* <Image source={logoImg} style={{ width: 200, height: 200 }} />
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            style={{ width: 200, height: 200 }}
          /> */}
          {/* <ImageBackground source={logoImg} style={{ width: 200, height: 200 }}>
            <Text style={styles.text}>this is some text</Text>
          </ImageBackground> */}

          <Button
            title="Press"
            onPress={() => setColor("red")}
            color="red"
            disabled={false}
          />
        </View>
        <View style={[styles.div, styles.boxShadow]}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingTop: 50,
  },
  text: {
    color: "white",
  },
  div: {
    width: 200,
    height: 200,
    backgroundColor: "white",
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 5,
      height: 10,
    },

    shadowOpacity: 1,
    shadowRadius: 10,
  },
});
