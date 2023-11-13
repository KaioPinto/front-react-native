import { Stack } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Stack screenOptions={{
      headerShown: false
    }}  >
      <Stack.Screen name='index' options={{}} />
      <Stack.Screen name='SignUp' options={{}} />
    </Stack>
  )
}

