import { Pressable, Text, PressableProps } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export const IonicButton = ({ name="desktop", size=35, color="black", text="Artículos", onPress=()=>{}}) => {
    return (
        <Pressable style={{
                backgroundColor: '#6929ff',
                width: 120,
                height: 120,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 60,
                marginHorizontal: 10
            }}
            onPress={ onPress }
        >
            <Ionicons name={name} size={size} color={color} />
            <Text style={{ color: color }}>{text}</Text>
        </Pressable>
    )
}
