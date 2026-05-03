export const quizQuestions = [
  {
    en: {
      question: "What is the minimum age to vote in India?",
      options: ["16 years", "18 years", "21 years", "25 years"],
      correctAnswer: 1,
      explanation: "Indian citizens aged 18 and above have the right to vote."
    },
    hi: {
      question: "भारत में वोट देने की न्यूनतम आयु क्या है?",
      options: ["16 वर्ष", "18 वर्ष", "21 वर्ष", "25 वर्ष"],
      correctAnswer: 1,
      explanation: "18 वर्ष और उससे अधिक आयु के भारतीय नागरिकों को वोट देने का अधिकार है।"
    }
  },
  {
    en: {
      question: "What does EVM stand for?",
      options: ["Electronic Voting Machine", "Electronic Vote Monitor", "Electric Voting Module", "E-Vote Manager"],
      correctAnswer: 0,
      explanation: "EVM (Electronic Voting Machine) is used to record votes digitally."
    },
    hi: {
      question: "EVM का मतलब क्या है?",
      options: ["इलेक्ट्रॉनिक वोटिंग मशीन", "इलेक्ट्रॉनिक वोट मॉनिटर", "इलेक्ट्रिक वोटिंग मॉड्यूल", "ई-वोट मैनेजर"],
      correctAnswer: 0,
      explanation: "EVM (Electronic Voting Machine) का उपयोग वोट को डिजिटली दर्ज करने के लिए किया जाता है।"
    }
  },
  {
    en: {
      question: "What does VVPAT stand for?",
      options: ["Voter Verification & Paper Audit Trail", "Vote Verification Panel", "Voting Verification Audit Process", "Voter Verifiable Paper Audit Trail"],
      correctAnswer: 3,
      explanation: "VVPAT ensures transparency by printing a record of each vote cast."
    },
    hi: {
      question: "VVPAT का मतलब क्या है?",
      options: ["मतदाता सत्यापन और कागज़ ऑडिट ट्रेल", "वोट सत्यापन पैनल", "मतदान सत्यापन ऑडिट प्रक्रिया", "वोटर वेरिफिएबल पेपर ऑडिट ट्रेल"],
      correctAnswer: 3,
      explanation: "VVPAT प्रत्येक वोट का प्रिंट रिकॉर्ड देकर पारदर्शिता सुनिश्चित करता है।"
    }
  },
  {
    en: {
      question: "How many states does India have?",
      options: ["25", "26", "28", "30"],
      correctAnswer: 2,
      explanation: "India has 28 states and 8 union territories as of 2024."
    },
    hi: {
      question: "भारत में कितने राज्य हैं?",
      options: ["25", "26", "28", "30"],
      correctAnswer: 2,
      explanation: "2024 तक भारत में 28 राज्य और 8 केंद्र शासित प्रदेश हैं।"
    }
  },
  {
    en: {
      question: "What organization conducts elections in India?",
      options: ["Ministry of Law", "Election Commission of India", "Parliament", "Supreme Court"],
      correctAnswer: 1,
      explanation: "The Election Commission of India is the constitutional authority responsible for conducting elections."
    },
    hi: {
      question: "भारत में चुनाव कौन सा संगठन आयोजित करता है?",
      options: ["कानून मंत्रालय", "भारत निर्वाचन आयोग", "संसद", "सर्वोच्च न्यायालय"],
      correctAnswer: 1,
      explanation: "भारत निर्वाचन आयोग चुनाव आयोजित करने के लिए संवैधानिक रूप से जिम्मेदार है।"
    }
  }
];

export const badges = {
  perfect: { id: 'expert', nameEn: "Election Expert", nameHi: "चुनाव विशेषज्ञ", icon: "🏆", requirement: "Score 5/5" },
  excellent: { id: 'quizMaster', nameEn: "Quiz Master", nameHi: "क्विज़ मास्टर", icon: "⭐", requirement: "Score 4/5" },
  good: { id: 'civicChampion', nameEn: "Civic Champion", nameHi: "नागरिक चैंपियन", icon: "🎯", requirement: "Score 3/5" },
  learning: { id: 'learning', nameEn: "Learning Path", nameHi: "सीखने का पथ", icon: "📚", requirement: "Score <3/5" }
};
