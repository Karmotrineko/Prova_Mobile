import { StyleSheet, Text, View } from 'react-native';
import Icone from '../../components/Icone';
import Caixa from '../../components/Caixa';
import Texto from '../../components/Texto';
import Dialogo from '../../components/Dialogo';
import Botao from '../../components/Botao';
import { Link } from '@react-navigation/native';

export default function ForgotPassword() {
  return (
    <Caixa>
        <Texto texto="Consultório Médico"/>
        <Icone/>
            <View style={styles.div}>
                <View style={styles.titulo}>
                    <Text style={styles.header}>Recuperar Conta</Text>
                </View>
                <Dialogo texto="Email" />
                <Botao texto="Resetar a Senha!" />
                    <View style={styles.esqueci}>
                        <Link to={{screen: 'SignIn'}} style={styles.link}>Voltar!</Link>
                        <Link to={{screen: 'Register'}} style={styles.link}>Registre-se!</Link>
                    </View>
            </View>
    </Caixa>
  );
};

const styles = StyleSheet.create({
    div: {
        marginTop: '10%',
    },
    link: {
        textDecorationLine: 'underline',
    },
    esqueci: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header: {
        fontSize: '20px',
        fontFamily: 'Tahoma',
        fontWeight: 'bold',
        marginTop: '-10px'
    },
    titulo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});