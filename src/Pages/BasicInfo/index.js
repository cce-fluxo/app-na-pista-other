import {useState} from 'react';

import {
  Container,
  TitleContainer,
  Text,
  ButtonContainer,
  
} from './styles';
import SafeArea from '../../Utils/SafeArea';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Dropdown from '../../Components/Dropdown';


export default function BasicInfo({navigation}) {
  const [email,onChangeEmail]=useState('')
  const [password,onChangePassword]=useState('')
  const options = [{ value: 0, label: 0 },{ value: 1, label: 1 }]
  
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
          keyboardType='email-address'
          
          onChangeText={onChangeEmail}
          autoComplete='email'
          placeholder=''
          />
          <Input 
          title={'Sobrenome'}
          marginLeft={0}
          marginTop={30}
          secureTextEntry
          
          onChangeText={onChangePassword}
          placeholder=''
          />
          
          <Dropdown title='Identidade de gênero' 
          marginLeft={0}
          marginTop={30}
          />
          
          <ButtonContainer>
            <Button
              width={'90%'}
              text='Login'
              marginTop={350}
              marginLeft={0}
              background={'white'}
              size={18}
              onPress={() => navigation.navigate('First')}
            />
          </ButtonContainer>
      </Container>         
    </SafeArea>
  );
}
