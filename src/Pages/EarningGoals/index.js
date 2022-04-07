import React from 'react'
import { 
    Container, 
    TitleContainer,
    Text,
    ButtonContainer
} from './styles'

import Button from '../../Components/Button'

export default function EarningGoals({navigation}) {
  return (
      <Container>
          <TitleContainer>
              <Text title={true}>Metas de Ganhos</Text>
              <Text>Definindo suas metas de ganhos te ajudaremos a acompanhar se está alcançando elas.</Text>
          </TitleContainer>

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
      </Container>

    )
}
