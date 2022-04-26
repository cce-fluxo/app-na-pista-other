import { useState } from "react";
import {
  Container,
  Subcontainer,
  Text,
  ButtonContainer,
  TextContainer,
  IconContainer,
  EarningContainer,
  ScrollView,
  View,
  MainContainer,
  ProgressBarContainer,
  ActivityButton,
  TimeContainer
} from "./styles";
import SafeArea from "../../Utils/SafeArea";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Ionicons, AntDesign, FontAwesome, Fontisto, Entypo  } from "react-native-vector-icons";
import { colors, screenHeight, screenWidth } from "../../Constants/constants";
import AddEarningModal from "../../Components/AddEarningModal";

export default function Home({
  navigation,
  marginRight,
  marginLeft,
  marginTop,
  width,
  screenWidth,
  fontSize,
  lineHeight,
  color,
}) {
  return (
    <SafeArea>
      <MainContainer showsVerticalScrollIndicator={false}>
        <Subcontainer>
          <TextContainer>
            <Text fontSize={20} lineHeight={30} color="black">
              Bom dia, Daniel
            </Text>
            <IconContainer
              marginRight={-100}
              onPress={() => navigation.navigate("Plataformas")}
            >
              <AntDesign name="plus" size={24} color={colors.icon} />
            </IconContainer>
            <IconContainer
              marginRight={15}
              onPress={() => navigation.navigate("First")}
            >
              <Ionicons name="settings-sharp" size={24} color={colors.icon} />
            </IconContainer>
          </TextContainer>
        </Subcontainer>

        <Container>

          <View marginTop={140}>
            <Text fontSize={16} lineHeight={50} color={colors.icon}>
              Jornada do dia
            </Text>
            <Text fontSize={14} lineHeight={20} color={colors.inputTitle}>
              Clique no botão abaixo para começar e vamos {"\n"}
              gravar automaticamente o seu tempo de {"\n"}
              trabalho e a distância percorrida.
            </Text>
            <TimeContainer>
                <ActivityButton>
                    <FontAwesome name="play" size={24} color={colors.icon}/>
                </ActivityButton>
                <TextContainer>
                    <Fontisto name="stopwatch" size={20} color={colors.inputTitle} />
                    <Text fontSize={12} lineHeight={20} color={colors.inputTitle}>TEMPO</Text>
                </TextContainer>
                <TextContainer>
                    <Entypo name="swap" size={20} color={colors.inputTitle} />
                    <Text fontSize={12} lineHeight={20} color={colors.inputTitle}>DISTÂNCIA</Text>
                </TextContainer>
            </TimeContainer>
            
          </View>

          <View marginTop={20}>
            <TextContainer>
                <Text fontSize={16} lineHeight={20} color={colors.icon}>
                Metas desta semana
                </Text>
                <IconContainer
                marginRight={10}
                onPress={() => navigation.navigate("Plataformas")}
                >
                <AntDesign name="right" size={18} color={colors.icon} />
                </IconContainer>
            </TextContainer>
          </View>

          <AddEarningModal />

        </Container>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <EarningContainer marginRight={0} marginLeft={28}>
            <TextContainer>
              <Text fontSize={13} lineHeight={20} color={colors.inputTitle}>
                HOJE
              </Text>
              <IconContainer
                marginRight={10}
                onPress={() => navigation.navigate("Plataformas")}
              >
                <AntDesign name="right" size={18} color={colors.icon} />
              </IconContainer>
            </TextContainer>
            <ProgressBarContainer></ProgressBarContainer>
          </EarningContainer>

          <EarningContainer marginRight={0} marginLeft={20}>
            <TextContainer>
              <Text fontSize={13} lineHeight={20} color={colors.inputTitle}>
                ESTA SEMANA
              </Text>
              <IconContainer
                marginRight={10}
                onPress={() => navigation.navigate("Plataformas")}
              >
                <AntDesign name="right" size={18} color={colors.icon} />
              </IconContainer>
            </TextContainer>
          </EarningContainer>

          <EarningContainer marginRight={20} marginLeft={20}>
            <TextContainer>
              <Text fontSize={13} lineHeight={20} color={colors.inputTitle}>
                ESTE MÊS
              </Text>
              <IconContainer
                marginRight={10}
                onPress={() => navigation.navigate("Plataformas")}
              >
                <AntDesign name="right" size={18} color={colors.icon} />
              </IconContainer>
            </TextContainer>
          </EarningContainer>
    
        </ScrollView>

      </MainContainer>
      
    </SafeArea>
  );
}