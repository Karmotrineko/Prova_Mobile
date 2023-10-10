import { StyleSheet, Text, View } from 'react-native';
import Icone from '../../components/Icone';
import Caixa from '../../components/Caixa';
import Texto from '../../components/Texto';
import Dialogo from '../../components/Dialogo';
import DialogoSeguro from '../../components/DialogoSeguro';
import Botao from '../../components/Botao';
import { Link } from '@react-navigation/native';

export default function Register() {
  return (
    <Caixa>

        <Texto texto="Consultório Médico"/>
        <Icone/>
            <View style={styles.div}>
                <View style={styles.esqueci}>
                    <Text style={styles.header}> Página de Registração</Text>
                </View>
                <Dialogo texto="Usuário" />
                <DialogoSeguro texto="Senha" />
                <DialogoSeguro texto="Confirmar Senha" />
                <Botao texto="Registrar!" />
                    <View style={styles.esqueci}>
                        <Link to={{screen: 'SignIn'}} style={styles.link}>Voltar!</Link>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: '20px',
        fontFamily: 'Tahoma',
        fontWeight: 'bold',
        marginTop: '-10px',
    }
});