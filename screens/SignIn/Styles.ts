import { Dimensions, StatusBar, StyleSheet } from "react-native"

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  dekstopIn_view: {
    flexDirection: 'row',
  },
  dekstopIn_left: {
    width: (windowWidth -20) / 144 * 50,
    height: windowHeight - 20,
    borderWidth: 1,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    borderColor: '#F3F2F9',
    marginTop: 10,
    marginLeft: 20,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  dekstopIn_right: {
    width: (windowWidth -20) / 144 * 92,
    height: windowHeight - 20,
    borderWidth: 1,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderColor: '#F3F2F9',
    marginTop: 10,
    marginRight: 10,
  },
  dekstopIn_image: {
    width: (windowWidth -20) / 144 * 92 - 2,
    height: windowHeight - 22,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  dekstopIn_logo: {
    width: 200,
    height: 200,
    marginTop: (windowWidth -2) / 144 * 10,
    borderRadius: 500,
    marginBottom: 75,
  },
  dekstopIn_input: {
    width: (windowWidth - 20) /144 * 35,
    height: 40,
    borderWidth: 1,
    borderColor: '#ADADB3',
    borderRadius: 20,
    color: '#F3F2F9',
    fontSize: 18,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  dekstopIn_login: {
    width: (windowWidth - 20) /144 * 35,
    height: 43,
    backgroundColor: '#CB7362',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 33,
  },
  dekstopIn_loginText: {
    fontSize: 24,
    color: '#F3F2F9',
  },
  dekstopIn_toRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dekstopIn_toRegisterLeft: {
    fontSize: 18,
    color: '#F9F871',
  },
  dekstopIn_toRegisterRight: {
    fontSize: 24,
    color: '#CB7362',
    marginLeft: 20,
    marginTop: -3,
  },
})

export default styles