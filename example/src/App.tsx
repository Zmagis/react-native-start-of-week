import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { getFirstWeekDay, WeekDay } from 'react-native-start-of-week';

export default function App() {
  const [firstWeekDay, setFirstWeekDay] = React.useState<WeekDay | undefined>();

  React.useEffect(() => {
    getFirstWeekDay().then(setFirstWeekDay);
  }, []);

  return (
    <View style={styles.container}>
      <Text>First week day: {firstWeekDay}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
