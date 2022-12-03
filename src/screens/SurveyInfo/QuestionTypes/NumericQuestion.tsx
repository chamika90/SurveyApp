import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getAverage} from '../../../helper/utils';
import {QuestionProps} from '../SurveyInfo';

const NumericQuestion = ({question}: {question: QuestionProps}) => {
  const [average, setAverage] = useState(0);

  useEffect(() => {
    const averageAnswer = getAverage(question.answers);
    setAverage(averageAnswer);
  }, [question]);

  return (
    <View>
      <Text> {average} </Text>
    </View>
  );
};

export default NumericQuestion;
