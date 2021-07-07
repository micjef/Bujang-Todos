import { Dimensions, StatusBar, StyleSheet } from "react-native"

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  dekstopHome_view: {
    flexDirection: 'row',
  },
  dekstopHome_left: {
    width: (windowWidth -20) / 144 * 40,
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
  dekstopHome_image: {
    width: (windowWidth -20) / 144 * 40 - 2,
    height: windowHeight - 22,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  dekstopHome_right: {
    width: (windowWidth -20) / 144 * 102,
    height: windowHeight - 20,
    borderWidth: 1,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderColor: '#F3F2F9',
    marginTop: 10,
    marginRight: 10,
  },
  dekstopHome_title: {
    fontSize: 72,
    color: '#CB7362',
    marginLeft: 90,
    marginTop: 40,
  },
  dekstopHome_list: {
    width: (windowWidth -20) / 144 * 92,
    marginLeft: 40,
    marginTop: 50,
    maxHeight: 1214,
  },
  dekstopHome_add: {
    backgroundColor: '#CB7362',
    width: 80,
    height: 80,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 100,
    bottom: 50,
  },
  dekstopHome_addText: {
    fontSize: 80,
    color: '#F3F2F9',
    marginTop: -15,
  },
})

export default styles