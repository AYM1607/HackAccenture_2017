import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Container,
         Icon,
         Right,
         Left,
         Body,
         Button,
         Header,
         Title,
         Footer,
         FooterTab,
         Content,
        } from 'native-base';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import CustomMarker from '../components/CustomMarker';
import CustomCallout from '../components/CustomCallout';

const styles = {
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonText: {
        color: 'rgb(0,122,255)',
  },
  imageStyle: {
    width: '60%',
    height: 100,
    alignSelf: 'center',
  }
};

class Mapa extends Component {

    state = { button1: true, button2: false, button3: false };

    onPressB1() {
        Actions.replace('profile');
    }

    onPressB2() {
        Actions.replace('rewards');
    }

    onPressB3() {
        this.setState({ button1: false, button2: false, button3: true });
    }

    onPressB4() {
        Actions.replace('scanner');
    }

	render() {
        const { buttonText } = styles;
		return (
            <Container>

                <MapView
                    style={styles.map}
                    initialRegion={{
                    latitude: 25.651526,
                    longitude: -100.377454,
                    latitudeDelta: 0.0422,
                    longitudeDelta: 0.0421,
                    }}
                >

                  {this.props.events.map(marker =>(
                    <MapView.Marker
                      key={marker.key}
                      coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                    >
                      <CustomMarker
                        fontSize={12}
                        value={marker.title}
                        onPress={() => {
                          this.showCallout();
                        }}
                      />
                      <MapView.Callout
                        style={{ flex: -1, position: 'absolute', width:300}}
                      >
                          <Title>{marker.titleCallout}</Title>
                          <Text style={{ alignSelf: 'center', justifyContent: 'center'}}>
                          {marker.text}
                          </Text>
                          <Image source={require('../img/rio.jpg')} style={styles.imageStyle} />
                      </MapView.Callout>
                    </MapView.Marker>
                  ))}


                </MapView>

                <Header>
                  <Left />
                  <Body>
                    <Title>Events</Title>
                  </Body>
                  <Right />
                </Header>

                <Content
                    pointerEvents='none'
                />

                <Footer>
                    <FooterTab>
                        <Button
                        onPress={this.onPressB1.bind(this)}
                        >
                            <Text style={buttonText}>Profile</Text>
                        </Button>

                        <Button
                        onPress={this.onPressB2.bind(this)}
                        >
                            <Text style={buttonText}>Rewards</Text>
                        </Button>

                        <Button
                        active
                        onPress={this.onPressB3.bind(this)}
                        >
                            <Text style={buttonText}>Events</Text>
                        </Button>

                        <Button
                        onPress={this.onPressB4.bind(this)}
                        >
                            <Text style={buttonText}>Scanner</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    events: state.Events,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event) => {
      dispatch({
        type: "CREATE_EVENT",
        payload: event,
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mapa)
