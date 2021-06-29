import { Dimensions, StatusBar, StyleSheet } from "react-native"

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  dekstopUp_view: {
    flexDirection: 'row',
  },
  dekstopUp_left: {
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
  dekstopUp_right: {
    width: (windowWidth -20) / 144 * 92,
    height: windowHeight - 20,
    borderWidth: 1,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderColor: '#F3F2F9',
    marginTop: 10,
    marginRight: 10,
  },
  dekstopUp_image: {
    width: (windowWidth -20) / 144 * 92 -2,
    height: windowHeight - 22,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  dekstopUp_logo: {
    width: 200,
    height: 200,
    marginTop: (windowWidth -2) / 144 * 5,
    borderRadius: 500,
    marginBottom: 75,
  },
  dekstopUp_input: {
    width: (windowWidth - 20) /144 * 35,
    height: 40,
    borderWidth: 1,
    borderColor: '#ADADB3',
    borderRadius: 20,
    color: '#F3F2F9',
    fontSize: 18,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  dekstopUp_login: {
    width: (windowWidth - 20) /144 * 35,
    height: 43,
    backgroundColor: '#CB7362',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 33,
  },
  dekstopUp_loginText: {
    fontSize: 24,
    color: '#F3F2F9',
  },
  dekstopUp_toRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dekstopUp_toRegisterLeft: {
    fontSize: 18,
    color: '#F9F871',
  },
  dekstopUp_toRegisterRight: {
    fontSize: 24,
    color: '#CB7362',
    marginLeft: 20,
    marginTop: -3,
  },
})

export default styles