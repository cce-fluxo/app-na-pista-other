import { useState } from "react";

import { AntDesign } from "react-native-vector-icons";
import Modal from "react-native-modal";
import { Container, ModalContainer, AddContainer, AddText } from "./styles";

const AddEarningModal = ({
  marginTop,
  marginLeft,
  value,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };

  return (
    <Container>
      <AddContainer onPress={toggleModal}>
        <AntDesign name="pluscircle" size={30} color={"rgba(0, 62, 70, 176)"} />
      </AddContainer>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <ModalContainer>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default AddEarningModal;

