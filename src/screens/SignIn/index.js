import Caixa from "../../components/Caixa";
import Icone from "../../components/Icone";
import Texto from "../../components/Texto";
import { View, StyleSheet } from "react-native";
import Dialogo from "../../components/Dialogo";
import DialogoSeguro from "../../components/DialogoSeguro";
import Botao from "../../components/Botao";
import { Link } from '@react-navigation/native';

export default function SignIn() {
    return (
        <Caixa>
            <Texto texto={"Consultório Médico"} />
            <Icone/>
                <View style={styles.div}>
                    <Dialogo texto={'Usuário'} />
                    <DialogoSeguro texto={'Senha'}/>
                    <Link to={{screen: 'Dashboard'}} style={styles.dash}>ENTRAR</Link>
                     <View style={styles.esqueci}>
                        <Link to={{screen: 'ForgotPassword'}} style={styles.link}>Esqueci a senha</Link>
                        <Link to={{screen: 'Register'}} style={styles.link}>Registre-se</Link>
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
        marginHorizontal: '10px'
    },
    esqueci: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dash: {
        backgroundColor: 'Blue',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 80,
        marginBottom: 30,
        marginTop: 20,
        textDecorationLine: 'underline'
    }
});
