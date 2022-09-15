import {
  FlatList,
  Image,
  ImageBackground,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import colors from "../assets/colors/colors";
import activitiesData from "../assets/data/activitiesData";
import discoverData, { DiscoverData } from "../assets/data/discoverData";
import learnMoreData from "../assets/data/learnMoreData";
// @ts-ignore
import profile from "../assets/images/person.png";
import DiscoverCard from "../components/DiscoverCard";

Feather.loadFont();

const Home = () => {
  const renderDiscoverItem = ({ item }: ListRenderItemInfo<DiscoverData>) => {
    return <DiscoverCard item={item} />;
  };

  const renderActivityItem = ({ item }: ListRenderItemInfo<any>) => (
    <View style={styles.activityItem}>
      <Image source={item.image} style={styles.activityItemImage} />
      <Text style={styles.activityItemTitle}>{item.title}</Text>
    </View>
  );

  const renderLearnMoreItem = ({ item }: ListRenderItemInfo<any>) => (
    <ImageBackground
      source={item.image}
      imageStyle={styles.learnMoreBg}
      style={styles.learnMoreCard}
    >
      <Text style={styles.learnMoreDesc}>{item.title}</Text>
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Bat xem tu view area */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              color={colors.black}
              style={styles.menuIcon}
            />
            <Image source={profile} style={styles.profileImage} />
          </View>
        </SafeAreaView>

        {/* Discover section */}
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoriesWrapper}>
            <Text
              style={[styles.discoverCategoryText, { color: colors.orange }]}
            >
              All
            </Text>
            <Text style={styles.discoverCategoryText}>Destinations11</Text>
            <Text style={styles.discoverCategoryText}>Discover</Text>
            <Text style={styles.discoverCategoryText}>Experiences</Text>
          </View>
        </View>

        <View style={styles.discoverItemWrapper}>
          <FlatList
            data={discoverData}
            renderItem={renderDiscoverItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Activities */}
        <View style={styles.activitiesWrap}>
          <Text style={styles.activitiesTitle}>Activities</Text>
          <FlatList
            data={activitiesData}
            renderItem={renderActivityItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Learn more */}
        <View style={styles.learnMoreWrap}>
          <Text style={styles.learnMoreTitle}>Learn More</Text>
          <FlatList
            data={learnMoreData}
            renderItem={renderLearnMoreItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.orange,
  },
  menuWrapper: {
    marginHorizontal: 20,
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIcon: {},
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
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

  // Activiti
  activitiesWrap: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  activitiesTitle: {
    marginHorizontal: 10,
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 10,
  },
  activityItem: {
    marginHorizontal: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  activityItemImage: {
    width: 36,
  },
  activityItemTitle: {
    marginTop: 5,
    fontWeight: "600",
    fontSize: 12,
    color: colors.gray,
  },

  // Learn more

  learnMoreWrap: {
    marginHorizontal: 10,
    marginTop: 30,
  },

  learnMoreCard: {
    height: 170,
    width: 170,
    marginHorizontal: 10,
    padding: 10,
    paddingBottom: 30,
    justifyContent: "flex-end",
  },

  learnMoreBg: {
    borderRadius: 20,
  },

  learnMoreTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginHorizontal: 10,
    marginBottom: 20,
  },

  learnMoreDesc: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Home;
