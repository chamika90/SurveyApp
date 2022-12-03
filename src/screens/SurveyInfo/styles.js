const {StyleSheet} = require('react-native');
import Res from '../../resources';

const {Colors} = Res;

export const styles = StyleSheet.create({
  surveyInfoContainer: {
    height: '100%',
    paddingTop: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
  questionContainer: {
    backgroundColor: Colors.athens_gray,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  questionTitleContainer: {
    flex: 1,
  },
  questionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
    marginBottom: 10,
  },
  shadowProp: {
    shadowColor: Colors.white,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  loaderContainer: {
    marginBottom: 100,
  },
  errorContainer: {
    marginBottom: 200,
  },
});
