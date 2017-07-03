import ReactNative from 'react-native';

const {
	StyleSheet,
} = ReactNative;

export default styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: 2,
    backgroundColor: '#75C3FF',
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  listCitiesBg: {
  	display: 'flex', 
  	flex: 1, 
  	backgroundColor: '#0090FF'
  },
  defaultFlex: {
  	flex: 1,
  },
  flexRow: {
  	flex: 1,
  	flexDirection: 'row',
  },
  firstSearchTouchable: {
  	width: '90%',
  	height: 50,
  	marginTop: '7.5%',
  	marginRight: '5%',
  	marginLeft: '5%',
  	backgroundColor: '#00AFFF',
  	borderRadius: 5
  },
  flexRowFullWidth: {
  	width: '100%',
  	flex: 1,
  	flexDirection: 'row',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  flexRowFullWidthHeightFifty: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    height: 50,
    paddingLeft: '2%',
    paddingRight: '0.5%',
  },
  searchBarIcons: {
  	height: 50,
  	marginTop: '1.5%',
  },
  heightFifty: {
  	height: 50
  },
  searchBarPlaceholder: {
  	color: 'white',
   	paddingLeft: '2.5%',
   	paddingTop: '4%',
   	fontSize: 16,
  },
  backwardArrow: {
  	height: 25,
  	marginTop: '7.5%',
  },
  secondSearchTouchable: {
  	width: '90%',
  	height: 50,
  	marginTop: '2.5%',
  	marginRight: '5%',
  	marginLeft: '5%',
  	backgroundColor: '#00AFFF',
  	borderRadius: 5
  },
  listViewSearchInputComponent: {
  	width: '100%',
  	height: 100,
  	backgroundColor: '#0090FF'
  },
  searchInputTextField: {
	color: 'white',
	paddingLeft: '2.5%',
	fontSize: 16,
	width: '90%',
  },
  listViewRow: {
  	flex: 1,
  	padding: 12,
  	flexDirection: 'row',
  	alignItems: 'center'
  },
  listViewRowText: {
	marginLeft: '2.5%',
	color: 'white',
	fontSize: 16,
	fontWeight: 'bold'
  },
});