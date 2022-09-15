import { useNavigation } from "@react-navigation/native";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../assets/colors/colors";
import Entypo from "react-native-vector-icons/Entypo";
import { Nav } from "../types";

Entypo.loadFont();

interface Props {
  item: any;
}
const DiscoverCard = ({ item }: Props) => {
  const navigation = useNavigation<Nav>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Details", {
          item: item,
        })
      }
    >
      <ImageBackground
        source={item.image}
        style={styles.discoverCard}
        imageStyle={styles.discoverImageCard}
      >
        <Text style={styles.discoverCardTitle}>{item.title}</Text>
        <View style={styles.discoverCardLocationWrapper}>
          <Entypo
            name="location-pin"
            style={styles.locationCardIcon}
            size={18}
            color={colors.white}
          />
          <Text style={styles.discoverCardLocation}>{item.location}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  discoverCard: {
    width: 170,
    height: 250,
    marginHorizontal: 10,
    color: colors.gray,
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: "flex-end",
  },

  discoverWrapper: {
    marginHorizontal: 20,
  },
  discoverTitle: {
    // fontFamily: "Lato-Bold",
    fontSize: 32,
    fontWeight: "600",
  },
  discoverCategoriesWrapper: {
    flexDirection: "row",
    marginTop: 20,
  },
  discoverCategoryText: {
    marginRight: 30,
    // fontFamily: "Lato-Regular",
    fontSize: 16,
    color: colors.gray,
  },
  discoverItemWrapper: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  discoverCardWrap: {
    marginHorizontal: 10,
  },

  discoverImageCard: {
    borderRadius: 20,
  },
  discoverCardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.white,
  },
  discoverCardLocation: {
    marginLeft: 5,
    fontWeight: "600",
    fontSize: 12,
    color: colors.white,
  },
  locationCardIcon: {},
  discoverCardLocationWrapper: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
});

export default DiscoverCard;
