import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    paddingRight: 30,
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
    fontSize: 10,
    color: '#46D2B3',
  },
  rowTitle: {
    fontSize: 20,
  },
});

const VerticalLine = ({ height = 1, color = '#46D2B3' }) => (
  <View
    style={[styles.verticalLine, { flex: height, backgroundColor: color }]}
  />
);

VerticalLine.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string,
}

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

const Footer = () => (
  <View style={styles.rowContainer}>
    <View style={styles.rowLeftArea}>
      <VerticalLine height={40} />
    </View>
  </View>
);

const Dot = ({ completed }) =>
  <View name="Dot" style={[styles.dot, completed && styles.dotCompleted]} />

Dot.propTypes = {
  completed: PropTypes.bool,
};

const Row = ({ title, description, completed, date, status }) => (
  <View style={styles.rowContainer}>
    <View name="Row Left" style={styles.rowLeftArea}>
      <VerticalLine />
      <Dot completed={completed} />
      <VerticalLine height={4} />
    </View>
    <View name="Row Body" style={{ opacity: completed ? 1 : 0.5 }}>
      <Text
        name="Row Date"
        style={styles.rowDate}
      >{`${status} on ${date}`}</Text>
      <Text name="Row Title" style={styles.rowTitle}>{title}</Text>
      <Text name="Row Description" style={styles.rowDescription}>
        {description}
      </Text>
    </View>
  </View>
);

Row.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  completed: PropTypes.bool,
  date: PropTypes.string,
  status: PropTypes.string,
};

export default TripTimeline = () => (
  <View style={styles.artboard}>
    {data.records.map(({ id, fields }) => (
      <Row
        key={id}
        title={fields.Feature}
        description={fields['Feature Description']}
        status={fields['Launched?'] ? 'Launched' : fields['Feature Status']}
        completed={fields['Launched?']}
        date={fields['Target Launch Date']}
      />
      ))}
    <Footer />
  </View>
);

const data = {
    "records": [
        {
            "id": "recPiJS1fuglNYvv9",
            "fields": {
                "Target Launch Date": "2016-12-12",
                "Launched?": true,
                "Marketing lead": "Katrina",
                "Target Completion": "2016-12-07",
                "Product lead": "Reuben",
                "Feature Status": "Ready",
                "Newsletter mention (if any)": [
                    "recWHTB7aD5dwBA0E"
                ],
                "Blog Post?": "Staged/Complete",
                "Support Article?": "Staged/Complete",
                "Press Release?": "Staged/Complete",
                "Launch Email?": "Staged/Complete",
                "Feature": "Facial recognition software v1",
                "Feature Description": "We're adding the ability for our PorchCam cameras to be able to detect and recognize faces, providing an additional layer of security to our devices.",
                "Product Theme": [
                    "reczVR8S6As79HGaQ"
                ],
                "Ads & Promotion?": "Staged/Complete",
                "Ready for launch?": "✅✅✅ Ready ✅✅✅"
            },
            "createdTime": "2016-12-02T00:57:09.000Z"
        },
        {
            "id": "recMBraVG9Q6Qle8C",
            "fields": {
                "Target Launch Date": "2016-12-16",
                "Launched?": true,
                "Marketing lead": "Emily",
                "Target Completion": "2016-12-09",
                "Product lead": "Deepa",
                "Feature Status": "Ready",
                "Newsletter mention (if any)": [
                    "recWHTB7aD5dwBA0E"
                ],
                "Blog Post?": "Staged/Complete",
                "Support Article?": "Staged/Complete",
                "Press Release?": "Staged/Complete",
                "Launch Email?": "Staged/Complete",
                "Feature": "Live streaming for iOS devices",
                "Feature Description": "Ability to watch live streamed videos on iOS devices\n",
                "Product Theme": [
                    "recpIdnkhinZk4cma"
                ],
                "Ads & Promotion?": "Staged/Complete",
                "Ready for launch?": "✅✅✅ Ready ✅✅✅"
            },
            "createdTime": "2016-12-01T22:48:40.000Z"
        },
        {
            "id": "recgzihCWHccxqmlY",
            "fields": {
                "Target Launch Date": "2016-12-16",
                "Launched?": true,
                "Marketing lead": "Emily",
                "Target Completion": "2016-12-09",
                "Product lead": "Deepa",
                "Feature Status": "Ready",
                "Newsletter mention (if any)": [
                    "recWHTB7aD5dwBA0E"
                ],
                "Blog Post?": "Staged/Complete",
                "Support Article?": "Staged/Complete",
                "Press Release?": "Staged/Complete",
                "Launch Email?": "Staged/Complete",
                "Feature": "Live streaming for Android devices",
                "Feature Description": "Ability to watch live streamed videos on Android devices\n",
                "Product Theme": [
                    "recpIdnkhinZk4cma"
                ],
                "Ads & Promotion?": "Staged/Complete",
                "Ready for launch?": "✅✅✅ Ready ✅✅✅"
            },
            "createdTime": "2016-12-02T00:57:09.000Z"
        },
        {
            "id": "recDLHJF08qsFL93S",
            "fields": {
                "Target Launch Date": "2016-12-21",
                "Marketing lead": "Marc",
                "Target Completion": "2016-12-15",
                "Product lead": "Reuben",
                "Feature Status": "Ready",
                "Newsletter mention (if any)": [
                    "recWHTB7aD5dwBA0E"
                ],
                "Blog Post?": "Staged/Complete",
                "Support Article?": "Staged/Complete",
                "Press Release?": "Staged/Complete",
                "Launch Email?": "Not necessary",
                "Feature": "Automatic docking & charging at low battery",
                "Feature Description": "Software update that allows for a PorchCam device to automatically return to the charging dock and charge battery when it's at low battery\n",
                "Product Theme": [
                    "recOrAr3ctd9QTq3k"
                ],
                "Ads & Promotion?": "Staged/Complete",
                "Ready for launch?": "✅✅✅ Ready ✅✅✅"
            },
            "createdTime": "2016-12-02T00:57:10.000Z"
        },
        {
            "id": "recm6O6qPX2BWCfgr",
            "fields": {
                "Target Launch Date": "2016-12-30",
                "Marketing lead": "Stephan",
                "Target Completion": "2016-12-22",
                "Product lead": "Deepa",
                "Feature Status": "Ready",
                "Newsletter mention (if any)": [
                    "recwbkeSJvXRFMVeV"
                ],
                "Blog Post?": "Staged/Complete",
                "Support Article?": "Staged/Complete",
                "Press Release?": "Not necessary",
                "Launch Email?": "Staged/Complete",
                "Feature": "Options for setting mobile alerts",
                "Feature Description": "We currently don't allow users to modify the alert settings on their PorchCam devices, but this feature would allow them to set when and how they're notified\n",
                "Product Theme": [
                    "rec39FKijjkmPouUH"
                ],
                "Ads & Promotion?": "Not necessary",
                "Ready for launch?": "✅✅✅ Ready ✅✅✅"
            },
            "createdTime": "2016-12-02T00:57:10.000Z"
        },
        {
            "id": "recnGfp1cSG5P5vd2",
            "fields": {
                "Target Launch Date": "2017-01-05",
                "Marketing lead": "Stephan",
                "Target Completion": "2016-12-22",
                "Product lead": "Claudia",
                "Feature Status": "Complete, but not staged",
                "Blog Post?": "Staged/Complete",
                "Support Article?": "Staged/Complete",
                "Press Release?": "Staged/Complete",
                "Launch Email?": "Staged/Complete",
                "Feature": "Outdoor weather mode programming",
                "Feature Description": "This software update allows PorchCam devices to better handle outdoor weather (i.e. wind and rain) without compromising safety or video quality",
                "Product Theme": [
                    "rec1CYx49VzPAixYs"
                ],
                "Ads & Promotion?": "Needed",
                "Ready for launch?": "⛔️ Not Ready ⛔️"
            },
            "createdTime": "2016-12-02T00:57:10.000Z"
        },
        {
            "id": "recbGon3EUvhNhIhy",
            "fields": {
                "Target Launch Date": "2017-01-11",
                "Marketing lead": "Marc",
                "Target Completion": "2017-01-11",
                "Product lead": "Reuben",
                "Feature Status": "Complete, but not staged",
                "Newsletter mention (if any)": [
                    "recwbkeSJvXRFMVeV"
                ],
                "Blog Post?": "Staged/Complete",
                "Support Article?": "Needed",
                "Press Release?": "Needed",
                "Launch Email?": "Needed",
                "Feature": "Mesh network for connecting multiple PorchCams",
                "Feature Description": "Creating a mesh network for connecting multiple PorchCams so that they can sync and \"communicate\" with each other",
                "Product Theme": [
                    "rec7Rj2df7z4D6GpB"
                ],
                "Ads & Promotion?": "Needed",
                "Ready for launch?": "⛔️ Not Ready ⛔️"
            },
            "createdTime": "2016-12-02T00:57:11.000Z"
        },
        {
            "id": "recTZK0RdEcJ6ywY5",
            "fields": {
                "Target Launch Date": "2017-01-17",
                "Marketing lead": "Emily",
                "Target Completion": "2017-01-17",
                "Product lead": "Reuben",
                "Feature Status": "Ready",
                "Newsletter mention (if any)": [
                    "recwbkeSJvXRFMVeV"
                ],
                "Blog Post?": "Needed",
                "Support Article?": "Needed",
                "Press Release?": "Not necessary",
                "Launch Email?": "Needed",
                "Feature": "Ability to schedule charging periods (one-time & recurring)",
                "Feature Description": "Allowing users to schedule charging periods in advance (rather than scheduling a charging at that immediate time)",
                "Product Theme": [
                    "recOrAr3ctd9QTq3k"
                ],
                "Ads & Promotion?": "Not necessary",
                "Ready for launch?": "⛔️ Not Ready ⛔️"
            },
            "createdTime": "2016-12-02T00:57:11.000Z"
        },
        {
            "id": "rechNQUbOEd57mIAu",
            "fields": {
                "Target Launch Date": "2017-01-19",
                "Marketing lead": "Katrina",
                "Target Completion": "2017-01-19",
                "Product lead": "Reuben",
                "Feature Status": "Complete, but not staged",
                "Newsletter mention (if any)": [
                    "recwbkeSJvXRFMVeV"
                ],
                "Blog Post?": "Needed",
                "Support Article?": "Needed",
                "Press Release?": "Not necessary",
                "Launch Email?": "Needed",
                "Feature": "Programming multiple PorchCams together at a single time",
                "Feature Description": "Upgrade to the desktop app that allows users to program multiple PorchCams at a single time",
                "Product Theme": [
                    "rec7Rj2df7z4D6GpB"
                ],
                "Ads & Promotion?": "Needed",
                "Ready for launch?": "⛔️ Not Ready ⛔️"
            },
            "createdTime": "2016-12-02T00:57:11.000Z"
        },
        {
            "id": "recK8j4VKBsaK4yMs",
            "fields": {
                "Target Launch Date": "2017-01-31",
                "Marketing lead": "Katrina",
                "Target Completion": "2017-01-31",
                "Product lead": "Deepa",
                "Feature Status": "In progress",
                "Newsletter mention (if any)": [
                    "recYX8670eyffWJD0"
                ],
                "Blog Post?": "Needed",
                "Support Article?": "Needed",
                "Press Release?": "Not necessary",
                "Launch Email?": "Needed",
                "Feature": "Automatic recording for live streams",
                "Feature Description": "Allowing live video feeds to be automatically recorded and saved to the cloud",
                "Product Theme": [
                    "recpIdnkhinZk4cma"
                ],
                "Ads & Promotion?": "Needed",
                "Ready for launch?": "⛔️ Not Ready ⛔️"
            },
            "createdTime": "2016-12-05T04:46:30.000Z"
        },
        {
            "id": "reccpm4annRhAK2Vi",
            "fields": {
                "Target Launch Date": "2017-01-31",
                "Marketing lead": "Katrina",
                "Target Completion": "2017-01-31",
                "Product lead": "Deepa",
                "Feature Status": "In progress",
                "Blog Post?": "Not necessary",
                "Support Article?": "Not necessary",
                "Press Release?": "Needed",
                "Launch Email?": "Needed",
                "Feature": "Updating mobile live streams to 720p quality",
                "Feature Description": "Improving the video quality to 720p for mobile live streams",
                "Product Theme": [
                    "recpIdnkhinZk4cma"
                ],
                "Ads & Promotion?": "Needed",
                "Ready for launch?": "⛔️ Not Ready ⛔️"
            },
            "createdTime": "2016-12-05T04:48:36.000Z"
        },
        {
            "id": "recTG3wscqY6w0a19",
            "fields": {
                "Target Launch Date": "2017-02-02",
                "Marketing lead": "Stephan",
                "Target Completion": "2017-02-02",
                "Product lead": "Deepa",
                "Feature Status": "In progress",
                "Newsletter mention (if any)": [
                    "recYX8670eyffWJD0"
                ],
                "Blog Post?": "Staged/Complete",
                "Support Article?": "Needed",
                "Press Release?": "Needed",
                "Launch Email?": "Needed",
                "Feature": "Saved \"users\" for facial recognition",
                "Feature Description": "Allowing the PorchCam software to \"save\" users for facial recognition so that it can recognize certain people and whether or not they're strangers",
                "Product Theme": [
                    "reczVR8S6As79HGaQ"
                ],
                "Ads & Promotion?": "Needed",
                "Ready for launch?": "⛔️ Not Ready ⛔️"
            },
            "createdTime": "2016-12-02T00:57:09.000Z"
        },
        {
            "id": "recE9TvSKspOtL88O",
            "fields": {
                "Target Launch Date": "2017-02-08",
                "Marketing lead": "Emily",
                "Target Completion": "2017-02-08",
                "Product lead": "Claudia",
                "Feature Status": "In progress",
                "Newsletter mention (if any)": [
                    "recYX8670eyffWJD0"
                ],
                "Blog Post?": "Not necessary",
                "Support Article?": "Needed",
                "Press Release?": "Not necessary",
                "Launch Email?": "Needed",
                "Feature": "Different sounds and styles for mobile alerts",
                "Feature Description": "Rolling out a suite different alert sounds/styles that users can choose and customize",
                "Product Theme": [
                    "rec39FKijjkmPouUH"
                ],
                "Ads & Promotion?": "Not necessary",
                "Ready for launch?": "⛔️ Not Ready ⛔️"
            },
            "createdTime": "2016-12-02T00:57:10.000Z"
        },
        {
            "id": "recRehlBNIwys1VJ5",
            "fields": {
                "Target Launch Date": "2017-02-08",
                "Marketing lead": "Emily",
                "Target Completion": "2017-02-08",
                "Product lead": "Claudia",
                "Feature Status": "In progress",
                "Newsletter mention (if any)": [
                    "recYX8670eyffWJD0"
                ],
                "Blog Post?": "Not necessary",
                "Support Article?": "Needed",
                "Press Release?": "Not necessary",
                "Launch Email?": "Not necessary",
                "Feature": "Prolonged/long-term mute option for alerts",
                "Feature Description": "Allowing a user to mute alerts for a prolonged period of time (from 1 hour up to 2 weeks)",
                "Product Theme": [
                    "rec39FKijjkmPouUH"
                ],
                "Ads & Promotion?": "Not necessary",
                "Ready for launch?": "⛔️ Not Ready ⛔️"
            },
            "createdTime": "2016-12-05T04:46:48.000Z"
        },
        {
            "id": "recFUYYO6dEvTdfJD",
            "fields": {
                "Target Launch Date": "2017-02-13",
                "Marketing lead": "Marc",
                "Target Completion": "2017-02-13",
                "Product lead": "Deepa",
                "Feature Status": "In progress",
                "Newsletter mention (if any)": [
                    "recYX8670eyffWJD0"
                ],
                "Blog Post?": "Needed",
                "Support Article?": "Needed",
                "Press Release?": "Needed",
                "Launch Email?": "Needed",
                "Feature": "Mobile alerts for non-recognized \"users\"",
                "Feature Description": "Allowing push alerts to a mobile device when a PorchCam device's facial recognition sees a non-recognized and saved user",
                "Product Theme": [
                    "reczVR8S6As79HGaQ"
                ],
                "Ads & Promotion?": "Needed",
                "Ready for launch?": "⛔️ Not Ready ⛔️"
            },
            "createdTime": "2016-12-05T04:52:15.000Z"
        },
        {
            "id": "recgt7ND0xMNHAgBw",
            "fields": {
                "Target Launch Date": "2017-02-22",
                "Marketing lead": "Stephan",
                "Target Completion": "2017-02-22",
                "Product lead": "Claudia",
                "Feature Status": "In progress",
                "Blog Post?": "Not necessary",
                "Support Article?": "Needed",
                "Press Release?": "Not necessary",
                "Launch Email?": "Not necessary",
                "Feature": "Updates to outdoor weather mode programming",
                "Feature Description": "Increased improvements to PorchCam's software for navigating in outdoor weather",
                "Product Theme": [
                    "rec1CYx49VzPAixYs"
                ],
                "Ads & Promotion?": "Not necessary",
                "Ready for launch?": "⛔️ Not Ready ⛔️"
            },
            "createdTime": "2016-12-05T04:46:04.000Z"
        },
        {
            "id": "recRblqxKRCpOZxAx",
            "fields": {
                "Target Launch Date": "2017-03-01",
                "Marketing lead": "Marc",
                "Target Completion": "2017-03-01",
                "Product lead": "Claudia",
                "Feature Status": "In progress",
                "Blog Post?": "Needed",
                "Support Article?": "Not necessary",
                "Press Release?": "Not necessary",
                "Launch Email?": "Not necessary",
                "Feature": "Software update to increase battery usage efficiency",
                "Feature Description": "Software update that improves device efficiency and usage of battery life that should increase battery life by up to 25%",
                "Product Theme": [
                    "recOrAr3ctd9QTq3k"
                ],
                "Ads & Promotion?": "Not necessary",
                "Ready for launch?": "⛔️ Not Ready ⛔️"
            },
            "createdTime": "2016-12-05T04:46:04.000Z"
        },
        {
            "id": "rectcclLSaZusnYQf",
            "fields": {
                "Target Launch Date": "2017-03-03",
                "Marketing lead": "Katrina",
                "Target Completion": "2017-03-03",
                "Product lead": "Reuben",
                "Feature Status": "In progress",
                "Newsletter mention (if any)": [
                    "recZNwc6fxlI0lX31"
                ],
                "Blog Post?": "Needed",
                "Support Article?": "Needed",
                "Press Release?": "Not necessary",
                "Launch Email?": "Not necessary",
                "Feature": "Adding mobile controls for maneuvering multiple PorchCams",
                "Feature Description": "Allowing mobile devices to maneuver and program multiple PorchCams",
                "Product Theme": [
                    "rec7Rj2df7z4D6GpB"
                ],
                "Ads & Promotion?": "Not necessary",
                "Ready for launch?": "⛔️ Not Ready ⛔️"
            },
            "createdTime": "2016-12-02T00:57:16.000Z"
        }
    ]
}
