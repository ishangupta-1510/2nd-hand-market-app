import { StyleSheet, Platform} from 'react-native'
const Styles = StyleSheet.create({
    text: {
        color: "dodgerblue",
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir",
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto",
            }
        })
    }
})
export default Styles;