import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {QuestionProps} from '../SurveyInfo';
import {formatDate} from '../../../helper/utils';

const DateQuestion = ({question}: {question: QuestionProps}) => {
  const [dateList, setDateList] = useState<Array<string>>([]);

  useEffect(() => {
    setDateList(question.answers);
  }, [question]);

  const DateComponent = ({date}) => {
    const formatedDate = formatDate(date);
    return (
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{formatedDate}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={dateList}
        renderItem={({item}) => <DateComponent date={item} />}
      />
    </View>
  );
};

export default DateQuestion;

const styles = StyleSheet.create({
  dateContainer: {
    margin: 5,
  },
  date: {
    flex: 1,
  },
});
