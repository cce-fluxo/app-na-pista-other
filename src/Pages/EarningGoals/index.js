import React, { useState, useEffect} from 'react' 
import { 
    Container, 
    TitleContainer,
    Text,
    ButtonContainer,
    Title
} from './styles'

import Button from '../../Components/Button'
import IncrementContainer from '../../Components/IncrementContainer'

export default function EarningGoals({navigation}) {

  return (
      <Container>
          <TitleContainer>
              <Text title={true}>Metas de ganhos</Text>
              <Text>Definindo suas metas de ganhos te ajudaremos a acompanhar se está alcançando elas.</Text>
          </TitleContainer>  
          <IncrementContainer title="Diária" marginLeft={0} marginTop={20}/>
          <IncrementContainer title="Semanal" marginLeft={0} marginTop={30}/>
          <IncrementContainer title="Mensal" marginLeft={0} marginTop={30}/>
          <ButtonContainer>
              <Button 
                width={'90%'}
                text='Próximo'
                marginTop={300}
                marginLeft={0}
                background={'white'}
                size={18}
                disabled={true}
                onPress={() => navigation.navigate('Sucesso')}/>
          </ButtonContainer>
          <Title>Definir depois</Title> 
      </Container>
    )
}
