import React, {useState} from 'react';
import {ScrollView, Text, View, Switch, TouchableOpacity, Alert, StyleSheet, Image} from 'react-native';


const MyChoices =() => {

  const [selectedChoices, setSelectedChoices] = useState({});
  const toggleSwitch = (choice1, choice2) =>  {
    setSelectedChoices((prev) => ({
      ...prev,
      [choice1]: !prev[choice1],
      [choice2]: prev[choice1],

    }));
  };
     const handleSubmit = () => {
      const selected = Object.keys(selectedChoices).filter((key) => selectedChoices[key]);
      const message = selected.length > 0 
      ? selected.map((choice, index) => `${index + 1}. ${choice}`).join('\n')
      : 'No Choices Selected';
      Alert.alert('Selected Choices', message)
     };

  const coffeePairs =[
    ['Aklas', 'Loonie'],[ 'Tipsy D', 'Sinio'], ['Mhot', 'SixThreat'], ['Dello', 'Smugglaz'],
  ];

  return ( 
  
    <ScrollView style={styles.container}>
  <Text style={styles.title}>FLIPTOP</Text>
   <Image
          source={{
            uri: 'https://www.fliptop.com.ph/img/bg_og.jpg',
          }}
         style={styles.image}
        />
 {coffeePairs.map(([choice1, choice2]) => (
<View key={choice1} style={styles.text}>
<Text style={styles.text, {color: selectedChoices[choice1] ? 'black' : 'yellow'}}>{choice1}</Text>
<Switch
value={selectedChoices[choice1] || false}
onValueChange = {() => toggleSwitch(choice1, choice2)}
trackColor= {{true: 'green', false: 'grey'}}
thumbColor={selectedChoices[choice1] ? 'blue' : 'grey'}
/>
<Text style={styles.text, {color: selectedChoices[choice2] ? 'black' : 'yellow'}}>{choice2}</Text>
</View>
 ))}
<TouchableOpacity onPress={handleSubmit}>

<Text style={styles.button}>Submit</Text>
</TouchableOpacity>
  </ScrollView> 
   )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
    
  },
  image: {
     
          width: 200,
          height: 200,
        
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },  text: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    
  },
  button: {
    backgroundColor: 'red',
    color: 'yellow',
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 20,
   
  }
});

export default MyChoices;
