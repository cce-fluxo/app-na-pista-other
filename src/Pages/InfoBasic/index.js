import { useState } from "react";

import{
  Container,
  TitleContainer,
  Text,
  ButtonContainer
} from './styles'

import SafeArea from '../../Utils/SafeArea';
import Dropdown from '../../Components/Dropdown';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

export default function InfoBasic({navigation}) {
  const [email,onChangeEmail]=useState('')
  const [password,onChangePassword]=useState('')

  return (
    <SafeArea>
      <Container>
        <TitleContainer>
            <Text title={true}>Informações Básicas</Text>
            <Text >Queremos lhe conhecer melhor, mas não se preocupe, não compartilharemos com ninguém!</Text>
        </TitleContainer>

        <Input 
              title={'Nome'}
              marginLeft={0}
              marginTop={50}
          />
        
        <Input 
          title={'Sobrenome'}
          marginLeft={0}
          marginTop={30}
          
          onChangeText={onChangePassword}
          placeholder=''
          />
        
        <ButtonContainer>
          <Button
                width={'90%'}
                text='Próximo'
                marginTop={350}
                marginLeft={0}
                background={'white'}
                size={18}
                onPress={() => navigation.navigate('Metas de Ganho')} // mudar isso aqui depois pra "Onde voce mora?"
            />
        </ButtonContainer>

      </Container>
    </SafeArea>
  )
}