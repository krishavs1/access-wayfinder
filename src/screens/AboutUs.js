// AboutUs.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AboutUs = () => {
  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.arrowButton}
        onPress={navigateBack}
      >
        {/* Unicode arrow character */}
        <View style={styles.circle}>
            {/* Unicode arrow character */}
            <Text style={styles.arrowText}>{'\u2190'}</Text>
          </View>
      </TouchableOpacity>

      <View>
        <Text style={styles.header}>About Us</Text>
      </View>

      <View style={styles.textBox}>
        <Text style={styles.subHeader}>Our Work</Text>
        <Text style={styles.paragraph}>
         Our goal is to raise awareness towards accessibility by providing easy access to accessibility information that is usually unknown to the public until they actually visit the store, and using the platform as a way to inspire businesses to do all they can to include everyone.
       </Text>
       <Text style={styles.paragraph}>
         The Access Wayfinder team is spearheaded by Krishav Singla, a Westfield resident and current high school senior. Inspired by his personal encounters with his wheelchair-using grandparents and friend, he decided to do something to counteract the mystery of accessibility. Collaborating with Mayor Brindle, the Downtown Westfield Corporation, and college freshman Sarah Maher, he conducted surveys and interviewed over 130 businesses in Westfield. He then worked alongside high school junior Ethan Lung to develop a user-friendly app for iOS and Android.
       </Text>
       <Text style={styles.paragraph}>
         This app allows users to explore ratings and key accessibility details of local businesses. The app is currently organized in multiple categories and in an A to Z order within each category, but we hope to implement a search bar soon. The future vision includes expanding to other towns globally and reaching as many users as possible. Thank you for joining us on our mission to enhance accessibility for everyone.
       </Text>
     </View>
     <View style={styles.textBox}>
       <Text style={styles.subHeader}>Grading Scale</Text>
       <Text style={styles.role}>Entrance</Text>
       <Text style={styles.info}>
         5: The entrance meets all ADA requirements, including a wide door, pull side clearance, and stairs in front of it.
       </Text>
       <Text style={styles.info}>
       4: The entrance struggles with pull-side clearance or door width (less than 36")
       </Text>
       <Text style={styles.info}>
       3: The entrance has a step in the front with no possible ramp, and possibly struggles with the above.
       </Text>
       <Text style={styles.info}>
       2: The entrance has multiple steps or it's impossible for a wheelchair to go through the door.
       </Text>
       <Text style={styles.info}>
       1: The entrance is on the second floor and stairs are the only way to get there.
       </Text>
       <Text style={styles.role}>Interior</Text>
       <Text style={styles.info}>
         5: The interior is spacious with multiple paths for wheelchairs to move through, and has a place to sit down.
       </Text>
       <Text style={styles.info}>
       4: The interior may be slightly cramped and someone could struggle to move around.
       </Text>
       <Text style={styles.info}>
       3: Cramped interior and might not have a place to sit down.
       </Text>
       <Text style={styles.info}>
       2: A small interior where a wheelchair would greatly struggle to move through.
       </Text>
       <Text style={styles.info}>
       1: No place to sit down and the interior is extremely crammed.
       </Text>
       <Text style={styles.role}>Parking</Text>
       <Text style={styles.info}>
         5: Handicap spots exist right outside the entrance.
       </Text>
       <Text style={styles.info}>
       4: Handicap spots exist nearby, but may be across the street or a short walk/roll away.
       </Text>
       <Text style={styles.info}>
       3: Handicap spots are relatively nearby but may require a longer walk.
       </Text>
       <Text style={styles.info}>
       2: No accessible parking spots nearby.
       </Text>
       <Text style={styles.info}>
       1: No parking spots nearby.
       </Text>
         
         
         
     </View>

     <View style={styles.textBox}>
       <Text style={styles.subHeader}>Krishav Singla</Text>
       <Text style={styles.role}>App Founder and Developer</Text>
       <Text style={styles.info}>
         Krishav is a senior at the Union County Magnet High School. After venturing through downtown Westfield with his grandfather, he saw from a different lens how inaccessible some of the vibrant restaurants or relaxing spas were. While he didn’t think twice about a couple of steps in front of the entrance, it changed the whole landscape for his grandfather. He was inspired to pursue Access Wayfinder after talking to other seniors and veterans who struggle with accessibility, and wanted to make the world a better place for them.
       </Text>
     </View>
     <View style={styles.textBox}>
       <Text style={styles.subHeader}>Sarah Maher</Text>
       <Text style={styles.role}>App Outreach and Accessibility Reviewer</Text>
       <Text style={styles.info}>
       Sarah is a college freshman at Pomona College in California who grew up in Westfield. Having been born with a disability, she is very aware of the accessibility challenges that people like her face on a day-to-day basis. When presented with the idea for Access Wayfinder, she eagerly agreed to help make this a reality so that the downtown she loves can be more accessible to everyone who visits.
       </Text>
     </View>

     <View style={styles.textBox}>
       <Text style={styles.subHeader}>Ethan Lung</Text>
       <Text style={styles.role}>App Developer and Designer</Text>
       <Text style={styles.info}>
       Ethan is a junior at the Union County Vocational Technical School. With a creative mind, he focuses on creating a beneficial impact by designing and developing mobile apps. Ever since he was a young child, Ethan wanted to make sure that everyone was given a fair chance at enjoying life. So, when the idea of Access Wayfinder came up, Ethan undoubtly decided to use his previous computer science knowledge to co-collaborate on the app, to make accessibility available for everyone.
       </Text>
     </View>

     


      {/* Button to navigate back */}
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 60,
    backgroundColor: '#fff',
  },
  arrowButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    
    zIndex: 1,
  },
  arrowText: {
    color: '#000',
    fontSize: 20,
  },
  arrowContainer: {
    padding: 20,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#87bfd7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    marginTop: 60,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
  },
  textBox: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#87bfd7',
    borderRadius: 10,
    padding: 15,
    width: '100%',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  role: {
    textAlign: 'center',
    color: '#87bfd7',
    fontWeight: 'bold',
  },
  info: {
    textAlign: 'center',
    color: '#555',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AboutUs;
