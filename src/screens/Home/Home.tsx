import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import BottomCurvedView from '../../components/BottomCurvedView';
import useFetch from '../../hooks/useFetch';
import {styles} from './styles';
import Res from '../../resources';
import {NAVIGATION_SCREENS} from '../../config/constants';
import ErrorComponent from '../../components/ErrorComponent';
import Strings from '../../resources/strings';

const {Colors} = Res;

const surveysApiEndpoint = '/api/surveys';

type SurveyProps = {
  id: number;
  name: string;
};

const Home = ({navigation}: any) => {
  const [surveyList, setSurveyList] = useState([]);
  const [isError, setErrorStatus] = useState(false);
  const {isLoading, data, error} = useFetch({url: surveysApiEndpoint});

  useEffect(() => {
    if (data) {
      setSurveyList(data);
    }
    if (error) {
      setErrorStatus(true);
    }
  }, [data, error]);

  const handleSurveyRowSelection = (id: number) => {
    navigation.navigate(NAVIGATION_SCREENS.SURVEY_INFO, {surveyId: id});
  };

  const Title = () => {
    return (
      <BottomCurvedView backgroundColor={Colors.summer_sky}>
        <Text style={styles.title}>{Strings.surveyListTitle}</Text>
      </BottomCurvedView>
    );
  };

  const Survey = ({item}: {item: SurveyProps}) => {
    return (
      <TouchableOpacity
        style={[styles.surveyContainer, styles.shadowProp]}
        onPress={() => handleSurveyRowSelection(item.id)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.titleContainer}>
        <Title />
      </View>
      <View style={styles.surveyListContainer}>
        <FlatList
          data={surveyList}
          renderItem={({item}) => <Survey item={item} key={item.id} />}
          keyExtractor={(item: SurveyProps) => item.id.toString()}
        />
      </View>
      {isLoading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={Colors.summer_sky} />
        </View>
      )}
      {isError && (
        <View style={styles.errorContainer}>
          <ErrorComponent message={Strings.errorMessage} />
        </View>
      )}
    </View>
  );
};

export default Home;
