import { Dimensions, StyleSheet } from "react-native"

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  dekstopHome_box: {
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ADADB3',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dekstopHome_info: {
    marginLeft: 30,
  },
  dekstopHome_lead: {
    fontSize: 36,
    marginTop: 10,
    color: '#F3F2F9',
    textTransform: "capitalize",
  },
  dekstopHome_time: {
    marginLeft: 27,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 24,
    color: '#F3F2F9',
  },
  dekstopHome_progressBox: {
    borderWidth: 1,
    borderColor: '#ADADB3',
    borderRadius: 20,
    width: 202,
    height: 17,
    marginTop: 39,
    marginRight: 49,
  },
  dekstopHome_progressFill: {
    backgroundColor: '#CB7362',
    borderRadius: 20,
    height: 15,
    zIndex: 0,
  },
  dekstopHome_progressText: {
    fontSize: 12,
    color: '#F3F2F9',
    marginTop: -15,
    marginLeft: 90,
    zIndex: 2,
  },
})

export default styles