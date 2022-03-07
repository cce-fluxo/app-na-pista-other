import styled from "styled-components/native";
import { fonts,colors, screenHeight} from "../../Constants/constants";


export const Container=styled.View`
    background-color:  ${colors.background} ;
    flex:1;
    justify-content: space-between;
    height:${screenHeight};
`

export const Image=styled.ImageBackground`
    flex: 1;
    justify-content: center;
    font-family: title;

`

export const TitleContainer=styled.View`
    flex: 1;
    align-items: flex-start; 
    padding-top: 20px;
    padding-left: 10px;
    height:${screenHeight}*70%;
    margin-bottom: 10px;
`

export const Text=styled.Text`
    font-family:${props=>
    {return props.title?fonts.BebasNeue:fonts.Ubuntu}};
    font-size:${props=>
    {return props.title?'120px':'24px'}};
    line-height:${props=>
    {return props.title?'75%':'120%'}};
    margin-left:${props=>
    {return props.title?'0':'8px'}};
    margin-top:${props=>
    {return props.title?'0':'10px'}};
`

export const ButtonContainer=styled.View`
   flex: 1;
   align-items: center; 
  
`


export const Button=styled.TouchableOpacity`
    font-size:16px;
    width: 90%;
    height: 36px;
    justify-content: center; 
    text-align: center;
    background-color:${props=>
    {return props.login?'white':null}};
    border:${props=>
    {return props.login?'0px':'1px solid black'}};
    margin-top:${props=>
    {return props.login?'0':'10px'}};

`