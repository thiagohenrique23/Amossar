import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Splah from "../pages/Splash";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            
            <Stack.Screen
                name="Splah"
                component={Splah}
                options={{headerShown: false}}     
            />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}     
            />
       
        </Stack.Navigator>
    )
}