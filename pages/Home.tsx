import {
  useNavigation
} from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

type Nav = {
  navigate: (value: string) => void;
};

const Home = () => {
  const navigation = useNavigation<Nav>();
  return (
    <View>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home12</Text>
      <Button onPress={() => navigation.navigate('Details')} title="Click me" />
    </View>
  );
};

export default Home;
