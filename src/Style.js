import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9E8EA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70,
    paddingBottom: 50,
  },
  welcomeText: {
    color: '#413F3F',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 0,
  },
  titleText: {
    color: '#413F3F',
    fontSize: 70,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  question: {
    color: '#413F3F',
    fontSize: 27,

    paddingBottom: 10,
    paddingTop: 10,
  },
  howTo: {
    fontSize: 18,
    textAlign: 'center',
  },
  magicContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  magic8: {
    width: 250,
    height: 250,
    backgroundColor: 'black',
    borderRadius: 125,
  },
  inner8: {
    width: 170,
    height: 170,
    borderRadius: 85,
    marginTop: 40,
    marginLeft: 40,
    backgroundColor: 'white',
  },
  eight: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    color: 'black',
    fontSize: 150,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  answer: {
    flex: 1.5,
    fontWeight: 'bold',
    fontSize: 35,
    color: '#413F3F',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 50,
  },

});

export default Style;