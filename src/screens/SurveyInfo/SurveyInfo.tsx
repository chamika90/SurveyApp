import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, ActivityIndicator} from 'react-native';
import useFetch from '../../hooks/useFetch';
import DateQuestion from './QuestionTypes/DateQuestion';
import MultipleChoiceQuestion from './QuestionTypes/MultipleChoiceQuestion';
import NumericQuestion from './QuestionTypes/NumericQuestion';
import {styles} from './styles';
import Res from '../../resources';
import ErrorComponent from '../../components/ErrorComponent';
import Strings from '../../resources/strings';

const SURVEY_INFO_ENDPOINT = '/api/survey/';
const {Colors} = Res;

export type QuestionProps = {
  answers: Array<number | string | Array<boolean>>;
  label: string;
  options?: Array<string>;
  type: string;
};
const SurveyInfo = ({route}: Props) => {
  const {surveyId} = route.params;

  const {isLoading, data, error} = useFetch({
    url: `${SURVEY_INFO_ENDPOINT}${surveyId}`,
  });
  const [surveyInfo, setSurveyInfo] = useState([]);
  const [isError, setErrorStatus] = useState(false);

  useEffect(() => {
    if (data) {
      setSurveyInfo(data);
    }
    if (error) {
      setErrorStatus(true);
    }
  }, [data, error]);

  const renderQuestionByType = ({question}: {question: QuestionProps}) => {
    switch (question.type) {
      case 'numeric':
        return <NumericQuestion question={question} />;
      case 'date':
        return <DateQuestion question={question} />;
      case 'mcq':
        return <MultipleChoiceQuestion question={question} />;
    }
  };

  const Question = ({question}: {question: QuestionProps}) => {
    return (
      <View style={[styles.questionContainer, styles.shadowProp]}>
        <Text style={styles.questionTitle}>{question.label}</Text>
        {renderQuestionByType({question})}
      </View>
    );
  };

  return (
    <View style={styles.surveyInfoContainer}>
      <FlatList
        data={surveyInfo}
        renderItem={({item}) => <Question question={item} />}
      />
      {isError && (
        <View style={styles.errorContainer}>
          <ErrorComponent message={Strings.errorMessage} />
        </View>
      )}
      {isLoading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={Colors.summer_sky} />
        </View>
      )}
    </View>
  );
};

export default SurveyInfo;
