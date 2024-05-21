import { Button, StyleSheet, Text, View } from 'react-native'

const SobreNosScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>You're in Sobre Nós</Text>
            <Button 
                title='Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

export default SobreNosScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',    
    },
})
