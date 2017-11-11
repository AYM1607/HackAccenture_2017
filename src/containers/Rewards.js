import React, { Component } from 'react';
import {Card,
  Content,
  Header,
  CardItem,
  Body,
  Thumbnail, Button,
  Left,
  List,
  Container,
  Text,
  View,
  H3} from 'native-base';
  import {Alert} from 'react-native';
 class Rewards extends Component{
   _handlePress(puntos){
     fetch("https://us-central1-greenwards-9e80b.cloudfunctions.net/newUser?id=0001&points="+puntos).then();
     Alert.alert("Nada","Se restaran: "+puntos+" GreenWards de tu cuenta y se activara la recompensa seleccionada");
   }
   render(){
     var weeklyOffers=[{thumbnail:'../img/profile-icon.jpg', cost: "100", name:"2 Concert Tickets",
     description:"Two awesome tickets sponsored by a Company "},]
     var regularOffers=[{thumbnail:'../img/profile-icon.jpg', cost: "260", name:"40% off in something!",
     description: "A company is promoting their new product"},
     {thumbnail:'../img/profile-icon.jpg', cost: "100", name:"VIP access to something",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed..."}]
     return (
       <Container>
       <Header />
       <Content contentContainerStyle={styles.contenido}>
       <View  style={styles.button}>
         <Button block success>
            <Text>Flash Offer!</Text>
         </Button>
      </View>
         <List dataArray={weeklyOffers}
            renderRow={(weeklyOffer) =>
              <Card>
                <CardItem header style={styles.CardHead}>
                  <H3>{weeklyOffer.name}</H3>
                </CardItem>
                <CardItem>
                  <Left>
                    <Thumbnail square source={require('../img/tickets.jpg')} style={styles.imageSize}/>
                  </Left>
                  <Body>
                    <Text>{weeklyOffer.description}</Text>
                  </Body>
                </CardItem>
                <CardItem>
                <Left>
                  <Button bordered success onPress={() => this._handlePress(weeklyOffer.cost)}><Text>{weeklyOffer.cost} GreenWards</Text></Button>
                </Left>
                </CardItem>
              </Card>
            }>
          </List>
          <View  style={styles.button}>
            <Button block success >
               <Text style={styles.texto}>Normal Offers</Text>
            </Button>
          </View>
          <List dataArray={regularOffers}
             renderRow={(regularOffer) =>
               <Card >
                 <CardItem header style={styles.CardHead} >
                   <H3>{regularOffer.name}</H3>
                 </CardItem>
                 <CardItem>
                 <Left>
                   <Thumbnail square large source={{uri:"http://lorempixel.com/150/100/food"}} style={styles.imageSize}/>
                 </Left>
                 <Body>
                   <Text>{regularOffer.description}</Text>
                 </Body>
                 </CardItem>
                 <CardItem>
                 <Left>
                    <Button bordered success onPress={() => this._handlePress(regularOffer.cost)}><Text>{regularOffer.cost} GreenWards</Text></Button>
                 </Left>
                 </CardItem>
               </Card>
             }>
         </List>
       </Content>
       </Container>

     );
   }
 }
 const styles={
   button:{
     marginTop:10,
     marginBottom: 10,
     alignSelf:'stretch',
     alignItems: 'center',
   },
   CardHead:{
     alignSelf:'center',
   },
   imageSize:{
     width:150,
     height:100,
   },
 };
 export default Rewards;
