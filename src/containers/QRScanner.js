import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
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
import { Actions } from 'react-native-router-flux'
import QRS from 'react-native-qrcode-scanner'

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
};

class QRScanner extends Component {

    state = { button1: true, button2: false, button3: false };

    onPressB1() {
        Actions.replace('profile');
    }

    onPressB2() {
        this.setState({ button1: false, button2: true, button3: false });
    }

    onPressB3() {
        Actions.replace('mapa');

    }

    onReadCode(data) {
    	Alert.alert(
    					'Congratulations', 
    					String(data.data) + ' GreenWard points added!', 
    					[ {text: 'Thank you!', onPress: () => this.scanner.reactivate() } ] 
    				);
    }


	render() {
        const { buttonText } = styles;
		return (
            <Container>

                <Header>
                  <Left />
                  <Body>
                    <Title>Scanner</Title>
                  </Body>
                  <Right />
                </Header>

                <Content>
                	<QRS
                		onRead={this.onReadCode.bind(this)}
                		ref={(node) => { this.scanner = node }}
                	/>
                </Content>

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
                        onPress={this.onPressB3.bind(this)}
                        >
                            <Text style={buttonText}>Events</Text>
                        </Button>
                        
                        <Button
                        active
                        onPress={this.onPressB3.bind(this)}
                        >
                            <Text style={buttonText}>Scanner</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
		);
	}
}

export default QRScanner;