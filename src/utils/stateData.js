export const STATE_DATA = {
  'Andhra Pradesh': { totalVoters: '40.8M', constituencies: 175, url: 'https://elections.ap.gov.in', turnout: '80.4%', funFact: 'Andhra Pradesh state assembly has 175 constituencies.' },
  'Arunachal Pradesh': { totalVoters: '0.8M', constituencies: 60, url: 'https://ceoarunachal.nic.in', turnout: '82.1%', funFact: 'Known as the Land of the Dawn-Lit Mountains.' },
  'Assam': { totalVoters: '23.7M', constituencies: 126, url: 'https://ceoassam.nic.in', turnout: '81.5%', funFact: 'Assam is known for its tea and one-horned rhinoceros.' },
  'Bihar': { totalVoters: '76.4M', constituencies: 243, url: 'https://ceobihar.nic.in', turnout: '57.3%', funFact: 'Bihar has a rich history dating back to the Mauryan Empire.' },
  'Chhattisgarh': { totalVoters: '20.4M', constituencies: 90, url: 'https://ceochhattisgarh.nic.in', turnout: '76.6%', funFact: 'Famous for its waterfalls and temples.' },
  'Goa': { totalVoters: '1.1M', constituencies: 40, url: 'https://ceogoa.nic.in', turnout: '79.6%', funFact: 'Smallest state in India by area.' },
  'Gujarat': { totalVoters: '49.1M', constituencies: 182, url: 'https://ceo.gujarat.gov.in', turnout: '64.3%', funFact: 'Longest coastline in India.' },
  'Haryana': { totalVoters: '19.5M', constituencies: 90, url: 'https://ceoharyana.gov.in', turnout: '68.3%', funFact: 'Historically known as the birthplace of Hinduism.' },
  'Himachal Pradesh': { totalVoters: '5.5M', constituencies: 68, url: 'https://ceohimachal.nic.in', turnout: '72.4%', funFact: 'Famous for its Himalayan landscapes.' },
  'Jharkhand': { totalVoters: '24.5M', constituencies: 81, url: 'https://ceo.jharkhand.gov.in', turnout: '66.8%', funFact: 'Rich in mineral resources like coal and iron ore.' },
  'Karnataka': { totalVoters: '52.1M', constituencies: 224, url: 'https://ceokarnataka.kar.nic.in', turnout: '73.1%', funFact: 'Bengaluru is the IT hub of India.' },
  'Kerala': { totalVoters: '27.4M', constituencies: 140, url: 'https://ceo.kerala.gov.in', turnout: '71.2%', funFact: 'Highest literacy rate in India.' },
  'Madhya Pradesh': { totalVoters: '55.3M', constituencies: 230, url: 'https://ceomadhyapradesh.nic.in', turnout: '77.8%', funFact: 'Known as the "Heart of India".' },
  'Maharashtra': { totalVoters: '91.1M', constituencies: 288, url: 'https://ceo.maharashtra.gov.in', turnout: '61.4%', funFact: 'Second most populous state in India.' },
  'Manipur': { totalVoters: '2.0M', constituencies: 60, url: 'https://ceomanipur.nic.in', turnout: '79.3%', funFact: 'Birthplace of modern polo.' },
  'Meghalaya': { totalVoters: '2.1M', constituencies: 60, url: 'https://ceomeghalaya.nic.in', turnout: '86.7%', funFact: 'Known as the "Abode of Clouds".' },
  'Mizoram': { totalVoters: '0.8M', constituencies: 40, url: 'https://ceo.mizoram.gov.in', turnout: '80.6%', funFact: 'High literacy rate, second only to Kerala.' },
  'Nagaland': { totalVoters: '1.3M', constituencies: 60, url: 'https://ceonagaland.nic.in', turnout: '83.5%', funFact: 'Home to the famous Hornbill Festival.' },
  'Odisha': { totalVoters: '32.9M', constituencies: 147, url: 'https://ceoorissa.nic.in', turnout: '73.2%', funFact: 'Known for its ancient temples and classical dance.' },
  'Punjab': { totalVoters: '21.4M', constituencies: 117, url: 'https://ceopunjab.gov.in', turnout: '71.9%', funFact: 'The land of five rivers.' },
  'Rajasthan': { totalVoters: '51.4M', constituencies: 200, url: 'https://ceorajasthan.nic.in', turnout: '74.6%', funFact: 'Largest state in India by area.' },
  'Sikkim': { totalVoters: '0.4M', constituencies: 32, url: 'https://ceosikkim.nic.in', turnout: '81.4%', funFact: 'First fully organic state in India.' },
  'Tamil Nadu': { totalVoters: '62.3M', constituencies: 234, url: 'https://elections.tn.gov.in', turnout: '72.8%', funFact: 'Known for its Dravidian-style Hindu temples.' },
  'Telangana': { totalVoters: '31.7M', constituencies: 119, url: 'https://ceotelangana.nic.in', turnout: '73.3%', funFact: 'The newest state of India, formed in 2014.' },
  'Tripura': { totalVoters: '2.8M', constituencies: 60, url: 'https://ceotripura.nic.in', turnout: '87.7%', funFact: 'Home to the magnificent Ujjayanta Palace.' },
  'Uttar Pradesh': { totalVoters: '150.2M', constituencies: 403, url: 'https://ceouttarpradesh.nic.in', turnout: '59.2%', funFact: 'Most populous state in India.' },
  'Uttarakhand': { totalVoters: '8.2M', constituencies: 70, url: 'https://ceo.uk.gov.in', turnout: '65.3%', funFact: 'Known as "Devbhumi" (Land of the Gods).' },
  'West Bengal': { totalVoters: '73.2M', constituencies: 294, url: 'https://ceowestbengal.nic.in', turnout: '81.7%', funFact: 'Famous for the Sundarbans mangrove forest.' }
};

export const getStateFact = (state) => {
  return STATE_DATA[state] || {
    totalVoters: 'N/A',
    constituencies: 'N/A',
    url: 'https://www.eci.gov.in',
    turnout: 'N/A',
    funFact: 'Select a state to learn more.'
  };
};
