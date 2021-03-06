import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: 'rgba(100, 100, 100, 0.4)'
  },
  scrollView: {
    marginBottom: 50
  },
  banner: {
    position: 'relative',
    alignItems: 'center',
    height: 200
  },
  backImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: 200
  },
  logo: {
    marginTop: 15,
    marginBottom: 20,
    width: 100,
    height: 100
  },
  bannerText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: 'bold'
  },
  headerText: {
    fontSize: 20,
    marginBottom: 5
  },
  navAndTickets: {
    flex: 1,
    justifyContent: 'space-between'
  },
  nav: {
    flex: 1,
    marginTop: 20,
    paddingLeft: 50,
    paddingRight: 10
  },
  navLink: {
    color: '#233140',
    marginBottom: 20,
    fontSize: 16,
    fontWeight: '600'
  },
  ticketsButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    backgroundColor: '#F59523',
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 3
  },
  ticketsText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
