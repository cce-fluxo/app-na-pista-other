
import ModalSelector from 'react-native-modal-selector'
import { useState } from 'react';
import { Icon } from 'react-native-elements';



import { Container, Title, SelectContainer, SelectText, Drop } from './styles';
const countries = [{ key: 5, label: 'Red Apples' },{ key: 4, label: 'rr Apples' }]


const Dropdown = ({
  title,
  marginTop,
  marginLeft,
  placeholder,
  secureTextEntry,
  keyboardType,
  error,
  touched,
  onChangeText,
  value,
  onSubmitEditing,
  onBlur,
  autoCapitalize,
  autoComplete,
}
) => {
  const [selectedOption,setSelectedOption]=useState('')
  const Custom=()=>{
    return(
      <SelectContainer>
          <SelectText
          >Selecione um</SelectText>
        
      </SelectContainer>
    )
  }
  return(
  <Container marginTop={marginTop} marginLeft={marginLeft}>
    <Title>{title}</Title>
    
    
    

  </Container>
  )
}

export default Dropdown;

