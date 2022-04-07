import { useState} from 'react';

import Input from '../Input';
import Icon from 'react-native-vector-icons/AntDesign';
import Modal from "react-native-modal";
import {  Container, ModalContainer, AddContainer, AddText } from './styles';
import Button from '../Button';




const AddItemModal= ({ marginTop, marginLeft, value, label
  } ) => {
 
    const [isModalVisible, setModalVisible] = useState(false);
    const [newItem, setNewItem] = useState('');

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
      console.log(isModalVisible)
    };

  
  
  

  return (
    <Container marginTop={marginTop} marginLeft={marginLeft}>
        <AddContainer onPress={toggleModal}>
            <Icon name="pluscircle" size={30} color={'black'} />
            <AddText >Adicionar outro</AddText>
        </AddContainer>
        <Modal isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}>
            <ModalContainer>
                <Input title={label} marginTop={20} value={newItem} onChangeText={setNewItem} marginLeft={0}/>
                <Button 
                width={'90%'}
                text='Adicionar'
                marginTop={20}
                marginLeft={0}
                background={'white'}
                size={18}
                onPress={() => {
                    setNewItem(value);
                    setModalVisible(false);
                }}
                />
            </ModalContainer>
        </Modal>
      </Container>
  );
}

export default AddItemModal;