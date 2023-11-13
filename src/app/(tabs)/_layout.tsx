import { Tabs, } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Layout() {


    return (

        <Tabs screenOptions={{

            headerShown: false,
            tabBarLabelStyle: { color: 'white', fontSize: 13 },
            tabBarStyle: {
                backgroundColor: '#1E90FF',
                paddingTop: 8, 
            
            },

        }}>




            <Tabs.Screen
                name='Perfil'
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: () => <MaterialCommunityIcons name="face-man-profile" size={24} color="white" />,
                }} />
            <Tabs.Screen
                name='Home'
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: () => <MaterialCommunityIcons name="pokeball" size={24} color="white" />
                }} />
            <Tabs.Screen
                name='Cart'
                options={{
                    tabBarLabel: 'Carrinho',
                    tabBarIcon: () => <MaterialCommunityIcons name="cart-outline" size={24} color="white" />
                }} />
        </Tabs>
    )
}

