import { View, Text, StyleSheet } from 'react-native'

function MealDetails({duration, complexity, affordability}) {
    return (

        <View style={StyleSheet.details}>
            <Text style={StyleSheet.detailItem}> {duration} </Text>
            <Text style={styles.detailItem}> {complexity.toUpperCase()} </Text>
            <Text style={styles.detailItem}> {affordability.toUpperCase()} </Text>

        </View>
    )
}

export default MealDetails

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContainer: 'center',
        padding: 8
    },

    detailsItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})