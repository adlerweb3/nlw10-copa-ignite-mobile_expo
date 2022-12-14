import { Center, Text, Icon } from "native-base";
import { Fontisto } from '@expo/vector-icons';
import { useAuth } from '../hooks/useAuth'

import { Button } from "../components/Button";
import Logo from '../assets/logo.svg';

export function SingIn() {

  const { signIn, user } = useAuth();

  console.log('DADOS DO USUÁRIO =>', user);

  return (
    <Center flex={1} bgColor="gray.900" p={7} >

      <Logo width={212} height={40} />

      <Button
        title="ENTRAR COM GOOGLE"
        textColor="white"
        type='SECONDARY'
        leftIcon={<Icon as={Fontisto} name='google' color='white' size='md' />}
        mt={12}
        onPress={() => signIn}
      />

      <Text color="white" textAlign="center" mt={4} >
        Não utilizamos nenhuma informação além {'\n'}
        do seu e-mail para criação de sua conta
      </Text>

    </Center>
  )
}