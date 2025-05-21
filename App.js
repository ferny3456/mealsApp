import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import CategoriesScreen from './screens/CategoriesScreens'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailScreen from './screens/MealDetailScreen'

export default function App () {
  return (
   <>
    <StatusBar styles='dark' />
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#987070' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#F1E5D1' }
        }}
      >
        <Stack.Screen
          name="MealsCategories"
          component={CategoriesScreen}
        />
        <Stack.Screen
          name="MealsOverview"
          component={MealsOverviewScreen}
          options={{
            title: 'All categories',
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#C39898' }
          }}
        />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailScreen}
          />

      </Stack.Navigator>
    </NavigationContainer>
   </>
  )
}

const styles = StyleSheet.create({
 container: {
 }
})