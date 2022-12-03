import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getOptionCount} from '../../../helper/utils';
import {QuestionProps} from '../SurveyInfo';

type AnswerOptionProps = {
  name: string;
  count: number;
};

type OptionProps = {
  item: AnswerOptionProps;
};

const MultipleChoiceQuestion = ({question}: {question: QuestionProps}) => {
  const [optionsList, setOptionsList] = useState<Array<AnswerOptionProps>>([]);

  useEffect(() => {
    let options: Array<AnswerOptionProps> = [];
    question.options &&
      question.options.forEach((element, index) => {
        const answerCount = getOptionCount(question.answers, index);
        let obj = {name: element, count: answerCount};
        options.push(obj);
      });

    setOptionsList(options);
  }, [question]);

  const Option = ({item}: OptionProps) => {
    return (
      <View style={styles.optionsContainer}>
        <Text style={styles.optionName}>{item.name}:</Text>
        <Text style={styles.optionCount}>{item.count}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={optionsList}
        renderItem={({item}) => <Option item={item} />}
      />
    </View>
  );
};

export default MultipleChoiceQuestion;

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  optionName: {
    flex: 1,
  },
  optionCount: {
    flex: 3,
    alignSelf: 'flex-start',
  },
});
