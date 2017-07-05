import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  artboard: {
    backgroundColor: '#F9FDFF',
  },
  verticalLine: {
    width: 3,
  },
  dot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#46D2B3',
  },
  dotCompleted: {
    backgroundColor: '#46D2B3',
  },
  title: {
    fontSize: 48,
    fontWeight: '200',
    color: '#000',
  },
  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 30,
  },
  rowDescription: {
    fontSize: 16,
    width: '50%',
  },
  rowLeftArea: {
    width: '7%', // odd number to avoid antialiasing
    alignItems: 'center',
    height: 150,
  },
  rowDate: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  rowTitle: {
    fontSize: 20,
  },
});