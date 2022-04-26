import * as React from 'react';
import { ProgressBar, Colors } from 'react-native-paper';
import {color} from '../../Constants/constants'

const Progress = () => (
  <ProgressBar progress={0.5} color={Colors.green500} />
);

export default Progress;
