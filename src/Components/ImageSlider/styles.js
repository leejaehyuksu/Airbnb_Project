import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
    },
    pagination: {
        flexDirection: "row",
        position: 'absolute',
        bottom: -73,
        alignSelf: 'center'
    },
    pagingText: {
        fontSize: (width / 20),
        color: '#888',
        margin: 3
    },
    pagingActive: {
        fontSize: (width / 20),
        color: '#FF5A60',
        margin: 3
    },
});

export default styles;