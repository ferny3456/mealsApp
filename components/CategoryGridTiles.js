import {View, Pressable, Text, StyleSheet, Platform } from "react-native"

function CategoryGridTile({title, color, onPress}){
    return (
        <View style={[style.gridItem, { brackgroundColor : color}]}>
            <Pressable android_ripple={{color: '#ccc'}}
            style={({pressed}) => [StyleSheet.button, pressed ? StyleSheet.buttonPressed: null,]}
            onPress={onPress}>
                <View style={StyleSheet.innerContainer}>
                    <Text style={StyleSheet.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})

export default CategoryGridTile