import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
const width = Dimensions.get('window').width;

export const MainContainer = styled.View`
  background-color: rgb(0, 0, 0);
  width: ${width}px;
  align-items: center;
  padding: 16px;
  flex-direction: row;
  border: 8px solid rgb(255, 255, 250);
`;
