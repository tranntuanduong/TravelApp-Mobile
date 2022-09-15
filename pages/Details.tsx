import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import colors from "../assets/colors/colors";
import { Nav, StackParamsList } from "../types";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

Ionicons.loadFont();

const height = Dimensions.get("window").height;

const Details = () => {
  const navigation = useNavigation<Nav>();
  const route = useRoute<RouteProp<StackParamsList, "Details">>();
  const { item } = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={st.container}>
        <ImageBackground source={item.image} style={st.backgroundImage}>
          <TouchableOpacity
            style={st.backIcon}
            onPress={() => navigation.goBack()}
          >
            <Entypo name="chevron-left" size={32} color={colors.white} />
          </TouchableOpacity>
          <View style={st.titleWwrapper}>
            <Text style={st.title}>{item.title}</Text>
            <View style={st.location}>
              <Ionicons
                name="ios-location-sharp"
                style={st.locationIcon}
                size={32}
              />
              <Text style={st.locationText}>{item.location}</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={st.descSeciton}>
          <Text style={st.descTitle}>Description</Text>
          <Text style={st.desc}>{item.description}</Text>
          <View style={st.infoWrap}>
            <View>
              <Text style={st.infoItemTitle}>Price</Text>
              <View style={st.infoItemContent}>
                <Text style={st.key}>${item.price}</Text>
                <Text style={st.unit}>/Person</Text>
              </View>
            </View>

            <View>
              <Text style={st.infoItemTitle}>Rating</Text>
              <View style={st.infoItemContent}>
                <Text style={st.key}>{item.rating}</Text>
                <Text style={st.unit}>/5</Text>
              </View>
            </View>

            <View>
              <Text style={st.infoItemTitle}>Duration</Text>
              <View style={st.infoItemContent}>
                <Text style={st.key}>{item.duration}</Text>
                <Text style={st.unit}> hours</Text>
              </View>
            </View>
          </View>

          <View style={st.btn}>
            <Text style={st.btnText}>Book Now</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    position: "relative",
  },
  backgroundImage: {
    height: height * 0.58,
    justifyContent: "space-between",
  },
  descSeciton: {
    backgroundColor: colors.white,
    flex: 1,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  backIcon: {
    marginLeft: 10,
    marginTop: 60,
  },
  titleWwrapper: {
    marginBottom: 20,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: colors.white,
  },
  location: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 5,
  },
  locationIcon: {
    color: colors.white,
    marginRight: 3,
  },
  locationText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  descTitle: {
    fontSize: 24,
    color: colors.black,
    fontWeight: "600",
  },
  desc: {
    fontSize: 16,
    color: colors.gray,
    marginTop: 20,
    lineHeight: 20,
  },
  infoWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  infoItem: {},
  infoItemTitle: {
    fontSize: 12,
    color: colors.gray,
    textTransform: "uppercase",
    fontWeight: "600",
    marginBottom: 4,
  },
  infoItemContent: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  key: {
    fontSize: 24,
    color: colors.orange,
    fontWeight: "600",
  },
  unit: {
    fontSize: 12,
    fontWeight: "500",
    color: colors.gray,
    marginBottom: 3,
  },

  btn: {
    backgroundColor: colors.orange,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    height: 53,
  },
  btnText: {
    fontSize: 18,
    color: colors.white,
    fontWeight: "600",
  },
});

export default Details;
