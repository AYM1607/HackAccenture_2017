import React, { Component } from 'react';
import {  Container, 
          Header, 
          Content, 
          Thumbnail, 
          H1, 
          Text,
          Col,
          Title, 
          Row, 
          Grid, 
          List, 
          ListItem, 
          Icon,
          Left, 
          Right, 
          Body, 
          H2,
          Footer,
          FooterTab,
          Button 
        } from 'native-base';
import { Actions } from 'react-native-router-flux'
//import { } from 'react-native-easy-grid';
 class Profile extends Component {

    onPressB1() {
    }

    onPressB2() {
    }

    onPressB3() {
        Actions.replace('mapa');
    }

    onPressB4() {
        Actions.replace('scanner');
    }

  render() {
    var items= [{icon:"refresh", name: "100 latas recicladas"},{icon:"cart", name: "10 articulos organicos"}, {icon:"navigate", name: "Paticipar en 5 eventos"},{icon:"navigate", name: "Paticipar en 5 eventos"}];
    return (
      <Container >

      <Header>
        <Left />
        <Body><Title>My Profile</Title></Body>
        <Right />
      </Header>

      <Content contentContainerStyle={styles.container}>
      <Grid>
        <Row size={20}>
          <Col size={25} style={styles.profile}>
          <Thumbnail large source={require('../img/profile-icon.jpg')}/>
          </Col>
          <Col size={75} style={styles.points}>
           <H1 style={styles.titles}>GreenWards:{"\n"}
              20,000</H1>
          </Col>
        </Row>
        <H2 style={styles.subtitles}> Mi informacion </H2>
        <Row size={30}>
          <List style={styles.row}>
                <ListItem>
                  <Text>Name:</Text>
                </ListItem>
                <ListItem>
                  <Text>Phone:</Text>
                </ListItem>
                <ListItem>
                  <Text>Email:</Text>
                </ListItem>
          </List>
        </Row>
        <H2 style={styles.subtitles}> Mis Medallas </H2>
        <Row size={28}>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem icon>
                <Left style={styles.lista}>
                  <Icon name={item.icon} />
                </Left>
                <Body>
                <Text>{item.name} </Text>
                </Body>
                <Right>
                <Icon name="done-all" style={{fontSize: 20, color: 'green'}}/>
                <Icon android="md-done-all" />
                </Right>
              </ListItem>
            } >
          </List>
        </Row>
      </Grid>
      </Content>

      <Footer>
                    <FooterTab>
                        <Button
                        active
                        onPress={this.onPressB1.bind(this)}
                        >
                            <Text style={styles.buttonText}>Profile</Text>
                        </Button>

                        <Button
                        onPress={this.onPressB2.bind(this)}
                        >
                            <Text style={styles.buttonText}>Rewards</Text>
                        </Button>

                        <Button
                        onPress={this.onPressB3.bind(this)}
                        >
                            <Text style={styles.buttonText}>Events</Text>
                        </Button>

                        <Button
                        onPress={this.onPressB4.bind(this)}
                        >
                            <Text style={styles.buttonText}>Scanner</Text>
                        </Button>
                    </FooterTab>
                </Footer>

      </Container>
    );
  }
}
const styles = {
	container: {
		alignItems: 'center',
    width:'100%',
    height:'100%',
	},
  row:{
    width:'100%',
    height:'100%',
    marginBottom:10,

  },
  profile:{
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 1,
    height:'100%',
    width:'100%',
  },
  points:{
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 40,
  },
  lista:{
    marginLeft: 10,
  },
  subtitles:{
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    marginLeft:'25%',
  },
  titles:{
    color: 'green',
    //alignItems:'center',
  },
  buttons: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
  },
  imageStyle: {
    width: '85%',
    marginTop: 50,
    marginBottom: 30,
  },
};
export default Profile;