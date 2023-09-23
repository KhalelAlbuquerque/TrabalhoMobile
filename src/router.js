import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from './pages/home/index.js'
import { Game } from './pages/game/index.js'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();


export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Game" component={Game} 
            options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    if(focused) {
                        return <Ionicons name="game-controller" size={size} color={color}/>
                    }
                    return <Ionicons name="game-controller-outline" size={size} color={color}/>
                }
             }} />
            <Tab.Screen name="Home" component={Home} 
            options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    if(focused) {
                        return <Ionicons name="home" size={size} color={color}/>
                    }
                    return <Ionicons name="home-outline" size={size} color={color}/>
                }
            }} />
        </Tab.Navigator>
    )
}