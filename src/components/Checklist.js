import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Image, Pressable } from 'react-native';
import axios from 'axios';


import { BASE_URL } from '@env';

function Checklist({ subs, endpoint, headname }) {
  const [selectedSteps, setSelectedSteps] = useState([]);

  const handleSelectStep = (stepName) => {
    if (selectedSteps.includes(stepName)) {
      setSelectedSteps(selectedSteps.filter(s => s !== stepName));
    } else {
      setSelectedSteps([...selectedSteps, stepName]);
    }
  };

  const handleSubmitend = async () => {
    const updateStepsData = {
      steps_to_update: selectedSteps,
    };
    try {
      const response = await axios.put(`${BASE_URL}/${endpoint}/projectLTO`, updateStepsData);
      const responseend = await axios.put(`${BASE_URL}/update_end/projectLTO/testnewend`);
      alert('Steps updated successfully!');
      console.log(`${BASE_URL}/updateSteps`)
    } catch (error) {
      console.error('Failed to update steps:', error);
      alert('Failed to update steps');
      console.log(`${BASE_URL}/updateSteps`)
    }
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);


  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setDropdownVisible(!dropdownVisible)}
        style={styles.dropdownHeader}
      >
        <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.dropdownHeaderText}>{headname}</Text>
          {dropdownVisible ?
            (<Image source={require('../../assets/up.png')} style={{ height: 20, width: 20 }} />)
            :
            (<Image source={require('../../assets/dropdown.png')} style={{ height: 20, width: 20 }} />)
          }
        </View>
      </TouchableOpacity>
      {dropdownVisible && (
        <ScrollView style={styles.dropdownContent}>
          {Object.entries(subs || {}).map(([stepName, stepDetails], index) => (
            stepDetails.completed ? (
              <TouchableOpacity
                key={index}
                style={styles.listItem}
                onPress={() => {
                  console.log(`Step pressed: ${stepName}`);
                  handleSelectStep(stepName);
                }}
              >
                <Text
                  style={{
                    textDecorationLine: selectedSteps.includes(stepName) ? 'line-through' : 'none',
                    color: selectedSteps.includes(stepName) ? 'red' : 'black',
                  }}
                >
                  {stepName}
                </Text>
              </TouchableOpacity>
            ) : null
          ))}
          <View style={styles.containbutton}>
            <TouchableOpacity style={styles.button} onPress={handleSubmitend}>
              <Text style={styles.text}>จบงาน</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>เริ่มงาน</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  containbutton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    color: '#ff6600',
    borderRadius: 6
  },
  text: {
    color: '#ff6600',
  },
  dropdownHeader: {
    padding: 10,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 20,
  },
  dropdownHeaderText: {
    fontSize: 16,
    color: 'black',
    borderRadius: 20,
  },
  dropdownContent: {
    maxHeight: "100%",
    borderRadius: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'orange',
    marginBottom: 10,
    marginTop: 10,
    margin: 10
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Checklist;
