import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Image, Pressable } from 'react-native';
import axios from 'axios';
import moment from 'moment';
import CustomAlert from "./Alert"
import CustomAlert2Way from "./Alert2Way"

import { BASE_URL } from '@env';
import tw from 'twrnc';

function Checklist({ subs, endpoint, headname, product_id, user }) {
  const [selectedSteps, setSelectedSteps] = useState([]);
  const currentDateTimeThailand = moment().format('DD-MM-YYYY HH:mm:ss');


  const handleSelectStep = (stepName) => {
    if (selectedSteps.includes(stepName)) {
      setSelectedSteps(selectedSteps.filter(s => s !== stepName));
    } else {
      setSelectedSteps([...selectedSteps, stepName]);
    }
  };

  const handleSubmit = async () => {
    const updateStepsData = {
      steps_to_update: selectedSteps,
    };
    try {
      const response = await axios.put(`${BASE_URL}/${endpoint}/${product_id}`, updateStepsData);
      console.log(`${BASE_URL}/${endpoint}/${product_id}`)
      console.log("handleSumit", endpoint)
    } catch (error) {
      console.error('Failed to update steps:', error);
      console.log(`${BASE_URL}/${endpoint}/${product_id}`)
    }
  };

  const handleSubmitend = async () => {
    const updateStepsData = {
      steps_to_update: selectedSteps,
    };
    try {
      const response = await axios.put(`${BASE_URL}/update_end/${product_id}/${currentDateTimeThailand}`, updateStepsData);
      console.log(`${BASE_URL}/update_end/${product_id}/${currentDateTimeThailand}`)
    } catch (error) {
      console.error('Failed to update steps end:', error);
      console.log(`${BASE_URL}/update_end/${product_id}/${currentDateTimeThailand}`)
    }
  };

  const Both = async () => {
    if (selectedSteps.length === 0) {
      console.log("No steps selected.");
      return;
    }
    const lastSelectedStepName = selectedSteps[selectedSteps.length - 1];
    const lastSelectedStepDetail = subs[lastSelectedStepName];
    if (lastSelectedStepDetail.time_start == "...") {
      console.log("time", lastSelectedStepDetail.time_start)
      showAlertend();
    } else {
      console.log("time", lastSelectedStepDetail.time_start)
      // console.log("log from Both:", lastSelectedStepName);
      setsAlertVisibleend(true);
    }
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const [addon, setAddon] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAddon((currentAddon) => (currentAddon === 100 ? 50 : 100));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const [alertVisible, setAlertVisible] = useState(false);
  const showAlert = () => setAlertVisible(true);
  const onClose = () => setAlertVisible(false);

  const [alertVisibleend, setAlertVisibleend] = useState(false);
  const showAlertend = () => setAlertVisibleend(true);
  const onCloseend = () => setAlertVisibleend(false);



  const handleSubmitstart = async () => {
    setsAlertVisible(true);
  };

  const Updatename = async () => {
    try {
      const reponse = await axios.post(`${BASE_URL}/update_name/${user.username}`)
    } catch (error) {
      console.log("Update name error", error)
      console.log(`${BASE_URL}/update_name/${user.username}`)
    }
  }

  const [isAlertVisible, setsAlertVisible] = useState(false);
  const handleClose = () => setAlertVisible(false);
  const handleContinue = async () => {
    console.log("Continued");
    const updateStepsData = {
      steps_to_update: selectedSteps,
    };
    try {
      const response = await axios.put(`${BASE_URL}/update_start/${product_id}/${currentDateTimeThailand}`, updateStepsData);
      console.log(`${BASE_URL}/update_start/${product_id}/testnewend`)
    } catch (error) {
      console.error('Failed to update steps:', error);
      console.log(`${BASE_URL}/update_start/${product_id}/testnewend`)
    }
    await Updatename();
    setsAlertVisible(false);
  };
  const handleCancel = () => {
    console.log("Cancelled");
    setsAlertVisible(false);
  };


  const [isAlertVisibleend, setsAlertVisibleend] = useState(false);
  const handleCloseend = () => setsAlertVisibleend(false);
  const handleContinueend = async () => {
    console.log("Continued");
    await handleSubmitend();
    await handleSubmit();
    setsAlertVisibleend(false);
  };
  const handleCancelend = () => {
    console.log("Cancelled");
    setsAlertVisibleend(false);
  };


  return (
    <View style={styles.container}>
      <CustomAlert
        visible={alertVisibleend}
        message="โปรดเริ่มงานนี้ก่อน!"
        onClose={onCloseend}
      />
      <CustomAlert
        visible={alertVisible}
        message="กำลังดำเนินการ"
        onClose={onClose}
      />
      <CustomAlert2Way
        visible={isAlertVisible}
        message="เริ่มงานตามขั้นตอนที่กำหนด?"
        onClose={handleClose} // Can be used to close the alert when the back button is pressed or modal is dismissed
        onContinue={handleContinue}
        onCancel={handleCancel}
      />
      <CustomAlert2Way
        visible={isAlertVisibleend}
        message="จบงานที่กำหนด?"
        onClose={handleCloseend} // Can be used to close the alert when the back button is pressed or modal is dismissed
        onContinue={handleContinueend}
        onCancel={handleCancelend}
      />
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
                <View style={tw`flex flex-row items-center`}>
                  <Text
                    style={{
                      textDecorationLine: selectedSteps.includes(stepName) ? 'line-through' : 'none',
                      color: selectedSteps.includes(stepName) ? 'red' : 'black',
                    }}
                  >
                    {stepName}
                  </Text>
                  {stepDetails.time_start === "..." ? null : (<TouchableOpacity onPress={showAlert} style={tw` m-2 h-[15px] w-[15px] rounded-full bg-yellow-400 opacity-${addon}`}></TouchableOpacity>)}
                </View>
              </TouchableOpacity>
            ) : null
          ))}
          <View style={styles.containbutton}>
            <TouchableOpacity style={tw`border-2 border-orange-400 w-[120px] h-[40px] items-center justify-center m-2 rounded `} onPress={Both}>
              <Text style={tw`text-white text-orange-500`}>จบงาน</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw` w-[120px] h-[40px] bg-orange-400 items-center justify-center m-2 rounded`} onPress={handleSubmitstart}>
              <Text style={tw`text-white`}>เริ่มงาน</Text>
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
