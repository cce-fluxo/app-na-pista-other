import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';

import {colors,screenHeight, screenWidth,fonts} from '../../Constants/constants';

export const Container = styled.View`
  width: ${screenWidth * 0.817}px;
  max-height: 72px;
  flex:1;
  align-self: center;
  align-items: flex-start;
  margin-top: ${props => props.marginTop}px;
  margin-left: ${props => props.marginLeft}px;
  
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color:${colors.inputTitle};
  font-family: ${ fonts.Ubuntu};
  margin-bottom: 5px;
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.5)',
  selectionColor:   'blue',
})`
  
  width: ${screenWidth * 0.817}px;
  height: 54px;
  background-color: white;
  border-radius: 3.5px;
  
`;


export const SelectContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-radius: 3.5px;
    background-color: white;
    height: 50px;
    width: 100%;
    padding: 0 20px;
    
`;

export const SelectText = styled.Text`
    margin-right: 30px;
    text-align: left;
    color: black;
`;


export const Drop = styled(Icon)`
    position: absolute;
    background-color: black;
    top: 50;
`;