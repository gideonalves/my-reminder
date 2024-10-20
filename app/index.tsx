import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Screen() {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Hello World</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9dfdf',
        alignItems: 'center',
        justifyContent: 'center',
    }
})