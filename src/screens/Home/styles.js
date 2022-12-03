const {StyleSheet} = require('react-native');
import Res from '../../resources';

const {Colors} = Res;

export const styles = StyleSheet.create({
  homeContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
  surveyContainer: {
    backgroundColor: Colors.athens_gray,
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  titleContainer: {
    flex: 2,
    alignItems: 'center',
    paddingBottom: 30,
  },
  title: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: Colors.white,
  },
  surveyListContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  surveyList: {
    justifyContent: 'center',
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
