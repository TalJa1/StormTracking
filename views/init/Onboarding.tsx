/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import OnboardingComponent from '../../components/init/OnboardingComponent';
import {centerAll, vh, vw} from '../../services/styleSheet';
import {locationIcon} from '../../assets/svgXml';
import {OnboardingInterfaceProps} from '../../services/typeProps';
import {saveData} from '../../services/storage';

const Onboarding = () => {
  const [isBoarding, setIsBoarding] = useState(false);
  const [step, setStep] = useState(0.3);
  const [isNext, setIsNext] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    goal: '',
    location: 'Hoan kiem, Hanoi',
  });

  useEffect(() => {
    saveData('userInforStorage', formData);
  }, [formData]);

  const getStepComponent = (): React.ReactNode => {
    switch (step) {
      case 0.3:
        return (
          <GetNameView
            setIsNext={setIsNext}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 0.6:
        return (
          <GetAgeView
            setIsNext={setIsNext}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 1:
        return (
          <WelcomeView
            setIsNext={setIsNext}
            formData={formData}
            setFormData={setFormData}
          />
        );
    }
  };

  return (
    <>
      {isBoarding === false ? (
        <SafeAreaView style={[styles.container, {backgroundColor: 'white'}]}>
          <ScrollView contentContainerStyle={{flex: 1}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: vw(5),
              }}>
              <Image source={require('../../assets/login/login.png')} />
              <TouchableOpacity
                style={[
                  {
                    position: 'absolute',
                    bottom: vh(5),
                    backgroundColor: '#293056',
                    width: vw(90),
                    borderRadius: 44,
                    paddingVertical: vh(1.5),
                  },
                  centerAll,
                ]}
                onPress={() => setIsBoarding(true)}>
                <Text
                  style={{color: '#FCFCFC', fontSize: 20, fontWeight: '700'}}>
                  Get started
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      ) : (
        <OnboardingComponent
          setStep={setStep}
          step={step}
          title={
            step < 0.7
              ? "Before jumping in, let's know each orther"
              : `Welcome ${formData.name}`
          }
          description={step === 1 ? 'Choose a location to start' : null}
          ui={getStepComponent()}
          isNext={isNext}
        />
      )}
    </>
  );
};

const WelcomeView: React.FC<OnboardingInterfaceProps> = ({
  formData,
  setFormData,
  setIsNext,
}) => {
  const [recommendLocation, setRecommendLocation] = useState([
    'Hon Gai, Ha Long',
    'Ngo Quyen, Hai Phong',
    'Vu Ban, Nam Dinh',
    'Que Vo, Bac Ninh',
    'District 1, TP HCM',
  ]);

  const handleLocationPress = (index: number) => {
    setFormData({...formData, location: recommendLocation[index]});
    setRecommendLocation(prevLocations => {
      const newLocations = [...prevLocations];
      newLocations.splice(index, 1)[0];
      newLocations.splice(index, 0, formData.location);
      return newLocations;
    });
  };

  useEffect(() => {
    if (formData.location.length > 0) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  }, [formData.location, setIsNext]);

  return (
    <View style={{rowGap: vh(2)}}>
      <View style={{rowGap: vh(1)}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {locationIcon(vw(5), vw(5))}
          <Text style={styles.titleColor}> Your location</Text>
        </View>
        <View
          style={{
            backgroundColor: '#3E3792',
            paddingVertical: vh(1.5),
            paddingHorizontal: vw(5),
            borderRadius: 8,
          }}>
          <Text style={{color: '#FCFCFC', fontWeight: 500}}>
            {formData.location}
          </Text>
        </View>
      </View>
      <View style={{rowGap: vh(1)}}>
        <Text style={styles.titleColor}>Recommend for you</Text>
        {recommendLocation.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => handleLocationPress(index)}
              key={index}
              style={{
                paddingVertical: vh(1.5),
                paddingHorizontal: vw(5),
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#6E778B',
              }}>
              <Text style={{color: '#6E778B', fontWeight: '500'}}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const GetAgeView: React.FC<OnboardingInterfaceProps> = ({
  setIsNext,
  formData,
  setFormData,
}) => {
  useEffect(() => {
    if (formData.age.length > 0) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  }, [formData.age, setIsNext]);

  return (
    <View style={[centerAll, {rowGap: vh(2)}]}>
      <Text style={{color: '#1D2939', fontWeight: '700', fontSize: 24}}>
        Your Age
      </Text>
      <TextInput
        placeholder="Type here"
        placeholderTextColor={'#6E778B'}
        value={formData.age}
        keyboardType="number-pad"
        onChangeText={text => setFormData({...formData, age: text})}
        style={{
          borderWidth: 1,
          borderColor: '#CCCED5',
          width: '100%',
          borderRadius: 8,
          textAlign: 'center',
          color: '#3E3792',
          fontSize: 18,
          fontWeight: '700',
        }}
      />
    </View>
  );
};

const GetNameView: React.FC<OnboardingInterfaceProps> = ({
  setIsNext,
  formData,
  setFormData,
}) => {
  useEffect(() => {
    if (formData.name.length > 0) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  }, [formData.name, setIsNext]);

  return (
    <View style={[centerAll, {rowGap: vh(2)}]}>
      <Text style={{color: '#1D2939', fontWeight: '700', fontSize: 24}}>
        Your name
      </Text>
      <TextInput
        placeholder="Type here"
        placeholderTextColor={'#6E778B'}
        value={formData.name}
        onChangeText={text => setFormData({...formData, name: text})}
        style={{
          borderWidth: 1,
          borderColor: '#CCCED5',
          width: '100%',
          borderRadius: 8,
          textAlign: 'center',
          color: '#3E3792',
          fontSize: 18,
          fontWeight: '700',
        }}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  titleColor: {color: '#4C4C4C', fontSize: 16, fontWeight: '700'},
});
