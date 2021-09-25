import React from 'react';
import { Text } from 'react-native'
import Styles from './Styles';
function AppText({children}) {
    return (
        <Text style={Styles.text}>{children}</Text>
    );
}

export default AppText;
