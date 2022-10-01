import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from "@rneui/themed";
import { Icon } from "@rneui/base";

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Button type="solid">
        Icon
        <Icon name="home" color="white" />
      </Button>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
