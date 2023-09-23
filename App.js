import { NavigationContainer } from '@react-navigation/native' 
import { Routes } from './src/router.js'

export default function App () {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}
