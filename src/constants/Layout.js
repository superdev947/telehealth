import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export const LAYOUT = {
  window: {
    width,
    height,
  },
  fontSize3: width*0.025,
  fontSize1: width*0.03,
  fontSize2: width*0.035,
  fontSize5: width*0.04,
  fontSize4: width*0.045,
  fontSize7: width*0.05,
  fontSize6: width*0.06,
  fontSize8: width*0.07,
  fontSize9: width*0.08,
  isSmallDevice: width < 375,
  LATITUDE : 0.0,
  LONGITUDE : 0.0,
  LATITUDE_DELTA : 0.1,
  LONGITUDE_DELTA : 0.1,
  options: { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  logo: require('../assets/logos.png'),
  icon: require('../assets/icon.png'),
  
  exam: require('../assets/exam.png'),
  shield: require('../assets/shield.png'),
  AppointmentAvatar: require('../assets/AppointmentAvatar.png'),
  firstButton:[
    {
      title:'Doctors',
      desc:'Book Appointment',
      image: require('../assets/Doctors.png'),
      position:{x:15.4, y:30.3}
    },
    {
      title:'Diagnostics',
      desc:'Test & health checkup',
      image: require('../assets/Diagnostics.png'),
      position:{x:-20, y:-70}
    },
    {
      title:'Hospitals',
      desc:'Search Top Hospitals',
      image: require('../assets/Hospitals.png'),
      position:{x:-20, y:50}
    },
    {
      title:'Pharmacy',
      desc:'Order medicines',
      image: require('../assets/Pharmacy.png'),
      position:{x:20, y:-50}
    },
    {
      title:'Insurance',
      desc:'Protect yourself',
      image: require('../assets/Insurance.png'),
      position:{x:30, y:-90}
    },
    {
      title:'eConsultation',
      desc:'Get Tele consult wit',
      image: require('../assets/eConsultation.png'),
      position:{x:-90, y:-50}
    },
  ],

  RecentlyVisitedDoc:[
    {
      name:'John Smith',
      desc:'Geenral Physician',
      image: require('../assets/Doctors.png'),
    },
    {
      name:'Daya Chitanis',
      desc:'Cardiologist',
      image: require('../assets/Diagnostics.png'),
    },
    {
      name:'John Smith',
      desc:'Geenral Physician',
      image: require('../assets/Hospitals.png'),
    },
  ],

  ConsultSpecialized:[
    {
      name:'Cardiology',
      desc:'340 Specialist',
      image: require('../assets/Cardiology.png'),
    },
    {
      name:'Pediatrician',
      desc:'450 Specialist',
      image: require('../assets/Pediatrician.png'),
    },
    {
      name:'Homeopathy',
      desc:'450 Specialist',
      image: require('../assets/Homeopathy.png'),
    },
    {
      name:'General Physician',
      desc:'350 Specialist',
      image: require('../assets/GeneralPhysician.png'),
    },
    {
      name:'Kidney Issues',
      desc:'350 Specialist',
      image: require('../assets/KidneyIssues.png'),
    },
    {
      name:'Mental Wellness',
      desc:'50 Specialist',
      image: require('../assets/MentalWellness.png'),
    },
    {
      name:'Digestive',
      desc:'145 Specialist',
      image: require('../assets/Digestive.png'),
    },
    {
      name:'Cancer',
      desc:'34 Specialist',
      image: require('../assets/Cancer.png'),
    },
    {
      name:'Surgery',
      desc:'54 Specialist',
      image: require('../assets/Surgery.png'),
    },
    {
      name:'Dental Care',
      desc:'34 Specialist',
      image: require('../assets/DentalCare.png'),
    },
  ],
  
  HealthArticles:[
    {
      text:'Simple steps to maintain a healthy heart for all ages',
      date:'12 Jun 2020',
      image: require('../assets/HealthArticles.png'),
    },
    {
      text:"Superfoods you must incorporate in your family's daily diet",
      date:"11 Jun 2020",
      image: require('../assets/HealthArticles.png'),
    },
    {
      text:"Simple steps to maintain a healthy heart for all ages",
      date:"12 Jun 2020",
      image: require('../assets/HealthArticles.png'),
    },
    {
      text:"Superfoods you must incorporate in your family's daily diet",
      date:"11 Jun 2020",
      image: require('../assets/HealthArticles.png'),
    }
  ],

  OtherServices:[
    {
      name:'Hospital Locator',
      image: require('../assets/HospitalLocator.png'),
    },
    {
      name:'BMI Calculator',
      image: require('../assets/BMICalculator.png'),
    },
    {
      name:'Stress Index',
      image: require('../assets/StressIndex.png'),
    },
  ],

  AppointmentList:[
    {
      name:'Dr. Adaora Azubuike',
      type:'Cardiologist',
      address:'14 yrs Experience, Janakpuri',
      amount:'₹500 Consultation Fees',
      point:'4.5',
      review:'56 Reviews',
      status:'Availability',
      date:'Today 10 AM',
      image: require('../assets/AppointmentAvatar.png'),
    },
    {
      name:'Dr. Matthew Lina',
      type:'Cardiologist',
      address:'14 yrs Experience, Janakpuri',
      amount:'₹500 Consultation Fees',
      point:'4.8',
      review:'56 Reviews',
      status:'Availability',
      date:'Today 10 AM',
      image: require('../assets/AppointmentAvatar.png'),
    },
    {
      name:'Dr. Adaora Azubuike',
      type:'Cardiologist',
      address:'14 yrs Experience, Janakpuri',
      amount:'₹500 Consultation Fees',
      point:'4.5',
      review:'56 Reviews',
      status:'Availability',
      date:'Today 10 AM',
      image: require('../assets/AppointmentAvatar.png'),
    },
    {
      name:'Dr. Adaora Azubuike',
      type:'Cardiologist',
      address:'14 yrs Experience, Janakpuri',
      amount:'₹500 Consultation Fees',
      point:'4.5',
      review:'56 Reviews',
      status:'Availability',
      date:'Today 10 AM',
      image: require('../assets/AppointmentAvatar.png'),
    },
    {
      name:'Dr. Adaora Azubuike',
      type:'Cardiologist',
      address:'14 yrs Experience, Janakpuri',
      amount:'₹500 Consultation Fees',
      point:'4.5',
      review:'56 Reviews',
      status:'Availability',
      date:'Today 10 AM',
      image: require('../assets/AppointmentAvatar.png'),
    },
    {
      name:'Dr. Adaora Azubuike',
      type:'Cardiologist',
      address:'14 yrs Experience, Janakpuri',
      amount:'₹500 Consultation Fees',
      point:'4.5',
      review:'56 Reviews',
      status:'Availability',
      date:'Today 10 AM',
      image: require('../assets/AppointmentAvatar.png'),
    },
  ],
};