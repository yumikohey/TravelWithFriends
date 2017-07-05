import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import Row from './TimeLine/Row';
import Footer from './TimeLine/Footer';

const Header = ({ title }) => (
  <View style={[styles.rowContainer, { backgroundColor: '#fff' }]}>
    <View style={styles.rowLeftArea}>
      <VerticalLine />
    </View>
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default class TripTimeline extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps){
        const { fullTripId } = this.props;
        const prevFullTripId = prevProps.fullTripId;
        console.log("lalalalal")
        console.log(this.props);
        return fullTripId !== prevFullTripId;
    }

    render() {
        console.log('supsupsup');
        const { fullTripDetails } = this.props;
        const data = [{
            address: "Pier 33, San Francisco, California, 94122, United States",
            adjusted_visit_length:180,
            check_full_address:1,
            city:"San Francisco",
            coord_lat:37.8066212,
            coord_long:-122.4050043,
            day:0,
            icon_url:"https://s3.amazonaws.com/travel-with-friends/icon_img_file/icon_353.jpg",
            id:353,
            img_url:"https://s3.amazonaws.com/travel-with-friends/img_file/353.jpg",
            name:"Alcatraz Island",
            poi_type:"Park",
            state:"California"
        }];
        const listOfRows = fullTripDetails.length > 0 && fullTripDetails.map( trip => { return (<Row
                        key={trip.id}
                        title={trip.name}
                        description={trip.address}
                        status={'Launched'}
                        completed={true}
                        min={trip.adjusted_visit_length} 
                        day={trip.day} />
                    )});
        const plainText = <Text>Hi</Text>
        const fullTripDetailsUI = fullTripDetails.length > 0 ? listOfRows : plainText;
        return (<View style={styles.artboard}>
            <View>
                {fullTripDetailsUI}
                <Footer />
            </View>
        </View>);
    }
};


