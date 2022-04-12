import {useState} from 'react';
import {
  Container,
  TitleContainer,
  Text,
  ButtonContainer,
  AddContainer,
  AddText,
  FlatList
} from './styles';
import SafeArea from '../../Utils/SafeArea';
import Button from '../../Components/Button';
import Checkbox from '../../Components/Checkbox';
import AddItemModal from '../../Components/AddItemModal';

export default function Platform({navigation}) {
    const [initialList, setInitialList]= useState (
    
        [
        {
            id: 1,
            title:'iFood'
        },
        {
            id: 2,
            title:'Rappi'
        },
        {
            id: 3,
            title:'Uber Eats'
        },
        {
            id: 4,
            title:'Loggi'
        },
        {
            id: 5,
            title:'Zé Delivery'
        },
        {
            id: 6,
            title:'99 Food'
        },
        {
            id: 7,
            title:'James'
        },
        ]
    )

    let key = initialList.length;

    function addToList() {
      initialList.push({text: 'Hi', key: ++key});
      setList([...initialList]);
    }

    const [checkboxes,setCheckboxes]=useState(initialList)
    const [newItem,setNewItem]=useState('')
  
    const Item = ({ item }) => (
        <Checkbox marginTop={30} label={item.title}/>
      );
    
    const renderItem = ({ item }) => (
        <Item item={item} />
    );

  return (
    <SafeArea>
        
        <Container>
            <TitleContainer>
                <Text title={true}>Plataformas</Text>
                <Text >Identificando para quais apps você trabalha,{'\n'}poderemos filtrar as informações e mostrar, {'\n'}por exemplo, qual está pagando melhor.</Text>
            </TitleContainer>
            
            <FlatList
                data={checkboxes}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                // initialNumToRender={1}
            />
            <AddItemModal label='Adicionar nova plataforma' />
            <ButtonContainer>
                <Button
                width={'90%'}
                text='Próximo'
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