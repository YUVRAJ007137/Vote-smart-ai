# 🎯 VoteSmart AI – Complete Project Specification

**Interactive Learning Platform for Indian Elections**

---

## 📋 TABLE OF CONTENTS
1. [Project Overview](#project-overview)
2. [Part 1: Project Setup & Architecture](#part-1-project-setup--architecture)
3. [Part 2: Core Features Detailed Specifications](#part-2-core-features-detailed-specifications)
4. [Part 3: Gemini API Integration](#part-3-gemini-api-integration)
5. [Part 4: Bilingual Support](#part-4-bilingual-support-hindi--english)
6. [Part 5: India-Specific Enhancements](#part-5-india-specific-enhancements-for-winning)
7. [Part 6: Design & Styling Requirements](#part-6-design--styling-requirements)
8. [Part 7: Testing Checklist](#part-7-testing-checklist)
9. [Part 8: Deployment & Environment](#part-8-deployment--environment-variables)
10. [Part 9: Success Metrics](#part-9-success-metrics-for-winning)
11. [Part 10: README Template](#part-10-readme-template)
12. [Part 11: Final Submission Checklist](#part-11-final-checklist-for-submission)

---

## PROJECT OVERVIEW

### **What to Build**
A production-grade React application that teaches users about the **Indian election process** through an interactive, step-by-step learning journey with AI-powered explanations using Google Gemini API.

### **Key Differentiators**
- ✅ Guided learning flow (not just a chatbot)
- ✅ Interactive voting simulation
- ✅ Knowledge assessment (quiz)
- ✅ Bilingual support (Hindi + English)
- ✅ State-specific election information
- ✅ AI-powered explanations
- ✅ Mobile-first design
- ✅ Accessibility-first approach

### **Target Audience**
- Students (16-25 years old)
- First-time voters
- Indian citizens preparing for elections
- Civic education learners

---

# PART 1: PROJECT SETUP & ARCHITECTURE

## Tech Stack

```
Frontend Framework:    React 18+ (Functional Components + Hooks)
Styling:             Tailwind CSS + Custom CSS
AI Integration:      Google Gemini API (v1beta)
Icons:               Lucide React
State Management:    React Hooks (useState, useRef, useEffect, useReducer)
Build Tool:          Vite / Create React App
Hosting:             Vercel / Netlify
Environment:         Node 16+
```

## Folder Structure

```
votesmart-ai/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ProgressBar.jsx
│   │   ├── StepContainer.jsx
│   │   ├── AIChat.jsx
│   │   ├── LanguageSwitcher.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── steps/
│   │       ├── Step0-Introduction.jsx
│   │       ├── Step1-Eligibility.jsx
│   │       ├── Step2-Registration.jsx
│   │       ├── Step3-VotingProcess.jsx
│   │       ├── Step4-VotingSimulation.jsx
│   │       └── Step5-Quiz.jsx
│   ├── hooks/
│   │   ├── useGemini.js
│   │   ├── useLanguage.js
│   │   ├── useProgress.js
│   │   └── useLocalStorage.js
│   ├── utils/
│   │   ├── geminiClient.js
│   │   ├── translations.js
│   │   ├── stateData.js
│   │   └── constants.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── animations.css
│   ├── App.jsx
│   ├── App.css
│   └── index.jsx
├── .env.example
├── .gitignore
├── tailwind.config.js
├── package.json
├── vite.config.js
└── README.md
```

## Installation & Setup

```bash
# Create project
npm create vite@latest votesmart-ai -- --template react
cd votesmart-ai

# Install dependencies
npm install
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react

# Setup Tailwind
npx tailwindcss init -p

# Create .env file
cp .env.example .env

# Start development
npm run dev
```

## tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#FFF8F0',
          100: '#FFE9D5',
          200: '#FFCB99',
          500: '#FF9933',
          900: '#8B5A00',
        },
        indianGreen: {
          50: '#F0F9F6',
          100: '#D4F1E4',
          500: '#138808',
          900: '#0A5C1C',
        },
        indianBlue: {
          50: '#F0F4FF',
          100: '#D4E4FF',
          500: '#003478',
          900: '#001F47',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

---

# PART 2: CORE FEATURES DETAILED SPECIFICATIONS

## Feature 1: Guided Learning Flow (6 Steps)

### **Step 0: Introduction to Elections**

**Purpose**: Hook the user and explain why learning about elections matters.

**UI Layout**:
```
┌─────────────────────────────────────┐
│  Progress: Step 1 of 6  ████░░░░░   │
├─────────────────────────────────────┤
│                                     │
│   🗳️  What are Elections?           │
│                                     │
│   Elections are the foundation of   │
│   democracy! They allow every       │
│   citizen to have a voice in        │
│   choosing their leaders.           │
│                                     │
│   ┌─────────────────────────────┐   │
│   │  AI Explanation:            │   │
│   │  "Elections are a process..." │   │
│   └─────────────────────────────┘   │
│                                     │
│           [Start Learning →]        │
└─────────────────────────────────────┘
```

**Features**:
- Display main title: "What are Elections?"
- Show hero text explaining elections in simple language
- Animated ballot box icon or flag
- Call Gemini API on component mount:
  - **Prompt**: `"Explain what elections are and why they're important in a democracy in 2-3 sentences for a student."`
  - **Max Tokens**: 150
- Display Gemini response in highlighted box
- "Start Learning" button → advances to Step 1
- Full Hindi translation available

**Completion Logic**:
- Mark step complete when "Start Learning" is clicked
- Update progress bar to 16%

### **Step 1: Eligibility Check**

**Purpose**: Engage user with personalized information about their voting eligibility.

**UI Layout**:
```
┌──────────────────────────────────────┐
│  Progress: Step 2 of 6  ██████░░░░   │
├──────────────────────────────────────┤
│                                      │
│   ✓ Are You Eligible?                │
│                                      │
│   Enter your age:  [____]            │
│                                      │
│   Select your state:  [Dropdown ▼]   │
│                                      │
│   ┌──────────────────────────────┐   │
│   │ ✓ You are eligible to vote!  │   │
│   │   {state} - 45.5M voters      │   │
│   └──────────────────────────────┘   │
│                                      │
│   ┌──────────────────────────────┐   │
│   │  AI Explanation:             │   │
│   │  "To vote in India, you..." │   │
│   └──────────────────────────────┘   │
│                                      │
│  [← Back]  [Next Step →]             │
└──────────────────────────────────────┘
```

**Features**:
- **Age Input**: Number field (0-120)
  - Real-time validation
  - If >= 18: Green checkmark + "Eligible" message
  - If < 18: Yellow warning + "Will be eligible at 18"
  
- **State Dropdown**: All 28 Indian states/UTs
  - Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, Chhattisgarh, Goa, Gujarat, Haryana, Himachal Pradesh, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Punjab, Rajasthan, Sikkim, Tamil Nadu, Telangana, Tripura, Uttar Pradesh, Uttarakhand, West Bengal

- **Gemini Integration**:
  - **Prompt**: `"A {age}-year-old from {state} is checking voting eligibility. Explain the eligibility requirements in {state} in 2-3 sentences."`
  - **Max Tokens**: 150
  - Triggered on age input AND state selection

- **State-Specific Data Display**:
  - Show election commission link for that state
  - Display voter statistics (e.g., "{state} had 45.5M voters in 2024")
  - Direct link to state Electoral Office website

- **Animations**:
  - Smooth color transition when eligibility status changes
  - State data fades in on selection

**Completion Logic**:
- Mark step complete when: Age entered AND State selected
- Update progress bar to 33%

**Fallback Data**:
```javascript
const STATE_DATA = {
  'Andhra Pradesh': { voters: '45.5M', constituencies: 175, url: 'https://elections.ap.gov.in' },
  'Maharashtra': { voters: '78.8M', constituencies: 288, url: 'https://mahvoting.gov.in' },
  // ... 26 more states
};
```

### **Step 2: Registration & Voter ID**

**Purpose**: Guide users through the registration process with clear steps.

**UI Layout**:
```
┌──────────────────────────────────────┐
│  Progress: Step 3 of 6  █████████░░  │
├──────────────────────────────────────┤
│                                      │
│   📋 Voter Registration & Voter ID   │
│                                      │
│   ┌──────────────────────────────┐   │
│   │ 1️⃣ Check Eligibility         │   │
│   │   Must be citizen, 18+       │   │
│   └──────────────────────────────┘   │
│                                      │
│   ┌──────────────────────────────┐   │
│   │ 2️⃣ Apply Online/Offline      │   │
│   │   Visit eci.gov.in or office │   │
│   └──────────────────────────────┘   │
│                                      │
│   ┌──────────────────────────────┐   │
│   │ 3️⃣ Receive Voter ID          │   │
│   │   Get card in 5-7 days       │   │
│   └──────────────────────────────┘   │
│                                      │
│   🔗 [Register at eci.gov.in]       │
│   🔗 [Register at State Office]     │
│                                      │
│   ┌──────────────────────────────┐   │
│   │  AI Explanation:             │   │
│   │  "The registration process..." │   │
│   └──────────────────────────────┘   │
│                                      │
│  [← Back]  [Next Step →]             │
└──────────────────────────────────────┘
```

**Features**:
- **Numbered Steps** (1-3):
  1. Check Eligibility (citizen, 18+, resident)
  2. Apply Online/Offline (eci.gov.in or state office)
  3. Receive Voter ID (5-7 days by mail)

- **Visual Elements**:
  - Numbered circles (1️⃣ 2️⃣ 3️⃣)
  - Icons for each step
  - Color-coded cards (blue/purple theme)

- **Direct Links**:
  - "Register at eci.gov.in" button → https://www.eci.gov.in
  - "Register at State Electoral Office" button → Dynamic link based on Step 1 state selection

- **Gemini Integration**:
  - **Prompt**: `"Simplify the voter registration process in {state} for a first-time learner. Include steps to get a Voter ID. Max 3 sentences."`
  - **Max Tokens**: 200
  - Triggered on component mount

- **Animations**:
  - Numbered steps fade in with staggered delay (100ms, 200ms, 300ms)
  - Hover effects on step cards

**Completion Logic**:
- Auto-complete after 5 seconds of viewing
- OR manually click "Next Step"
- Update progress bar to 50%

### **Step 3: The Voting Process**

**Purpose**: Show the complete voting journey visually and sequentially.

**UI Layout**:
```
┌──────────────────────────────────────┐
│  Progress: Step 4 of 6  ███████████░ │
├──────────────────────────────────────┤
│                                      │
│   🏛️ The Voting Process             │
│                                      │
│   ┌──────────┬──────────┐           │
│   │ 🏛️       │ 🆔       │           │
│   │ Go to    │ Verify   │           │
│   │ Polling  │ Your     │           │
│   │ Booth    │ Identity │           │
│   └──────────┴──────────┘           │
│                                      │
│   ┌──────────┬──────────┐           │
│   │ 🖨️       │ ✅       │           │
│   │ Use EVM  │ Verify   │           │
│   │ Machine  │ w/ VVPAT │           │
│   └──────────┴──────────┘           │
│                                      │
│   ┌──────────────────────────────┐   │
│   │  AI Explanation:             │   │
│   │  "The voting process works..." │   │
│   └──────────────────────────────┘   │
│                                      │
│  [← Back]  [Next Step →]             │
└──────────────────────────────────────┘
```

**Features**:
- **4-Card Grid Layout**:
  ```
  Card 1: 🏛️ Go to Polling Booth
          → Find your assigned booth via SMS/website
  
  Card 2: 🆔 Verify Your Identity
          → Show voter ID or passport at booth
  
  Card 3: 🖨️ Use EVM Machine
          → Press button next to preferred candidate
  
  Card 4: ✅ Verify with VVPAT
          → Check paper slip confirms your vote
  ```

- **Visual Design**:
  - Large emoji icons (4x size)
  - Hover effects (scale + shadow)
  - Responsive grid (1 column on mobile, 2 on desktop)
  - Smooth entrance animations (staggered 100ms delays)

- **Gemini Integration**:
  - **Prompt**: `"Explain the step-by-step voting process used in Indian elections. Include details about polling booths, EVM machines, and VVPAT verification. Max 3 sentences."`
  - **Max Tokens**: 200
  - Triggered on component mount

- **Interactive Elements**:
  - On hover: Card lifts up, shadow deepens
  - On click: Show detailed explanation for that step
  - Keyboard navigation: Tab through cards

**Completion Logic**:
- Auto-complete after 5 seconds of viewing
- Update progress bar to 67%

### **Step 4: Interactive Voting Simulation**

**Purpose**: Let users experience casting a vote in an interactive way.

**UI Layout**:
```
┌──────────────────────────────────────┐
│  Progress: Step 5 of 6  ██████████░░ │
├──────────────────────────────────────┤
│                                      │
│   🗳️ Cast Your Vote                  │
│                                      │
│   Choose your preferred option:      │
│                                      │
│   ┌──────────────────────────────┐   │
│   │      Party A                 │   │
│   │   (Red Background)           │   │
│   │                              │   │
│   │      [Vote for Party A]      │   │
│   └──────────────────────────────┘   │
│                                      │
│   ┌──────────────────────────────┐   │
│   │      Party B                 │   │
│   │   (Blue Background)          │   │
│   │                              │   │
│   │      [Vote for Party B]      │   │
│   └──────────────────────────────┘   │
│                                      │
│   ┌──────────────────────────────┐   │
│   │   NOTA                       │   │
│   │ (None of the Above)          │   │
│   │                              │   │
│   │      [Vote NOTA]             │   │
│   └──────────────────────────────┘   │
│                                      │
│   ┌──────────────────────────────┐   │
│   │ ✓ Vote Recorded Successfully │   │
│   │   Your vote has been saved   │   │
│   │                              │   │
│   │   📝 AI Explanation:         │   │
│   │   "When you voted for..."    │   │
│   └──────────────────────────────┘   │
│                                      │
│  [← Back]  [Next Step →]             │
└──────────────────────────────────────┘
```

**Features**:
- **Party Selection Buttons** (3 options):
  1. Party A (Red theme)
  2. Party B (Blue theme)
  3. NOTA (Gray theme)

- **Button States**:
  - Default: Outlined, neutral colors
  - Hover: Scale up 1.05x, add shadow
  - Selected: Filled with bright color, golden ring border
  - Disabled: After vote cast, buttons become read-only

- **Success Message** (Conditional rendering):
  - Shows ONLY after user clicks a button
  - Large checkmark icon (✓)
  - Text: "✓ Vote Recorded Successfully!"
  - Animation: Fade in + confetti effect (CSS)

- **Gemini Integration**:
  - **Prompt**: `"A user just cast their vote for [Party A/B/NOTA]. Explain what happens next in the voting process and why their vote is important. Max 2 sentences."`
  - **Max Tokens**: 150
  - Triggered AFTER vote is selected
  - Display response in highlighted box

- **Animations**:
  - Confetti-style CSS animation on vote submission
  - Success message slides up from bottom
  - Party buttons have smooth color transitions
  - Loading spinner while Gemini response loads

**Completion Logic**:
- Mark step complete when any vote option is selected
- Update progress bar to 83%

### **Step 5: Knowledge Quiz**

**Purpose**: Test user's learning and provide AI-powered feedback.

**Quiz Questions** (3-5 MCQs):

```javascript
const quizQuestions = [
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
      options: ["Voter Verification & Paper Audit Trail", "Vote Verification Panel", "Voting Verification Audit Process", "Voter Verification And Transfer"],
      correctAnswer: 0,
      explanation: "VVPAT ensures transparency by printing a record of each vote cast."
    },
    hi: {
      question: "VVPAT का मतलब क्या है?",
      options: ["मतदाता सत्यापन और कागज़ ऑडिट ट्रेल", "वोट सत्यापन पैनल", "मतदान सत्यापन ऑडिट प्रक्रिया", "मतदाता सत्यापन और स्थानांतरण"],
      correctAnswer: 0,
      explanation: "VVPAT प्रत्येक वोट का प्रिंट रिकॉर्ड देकर पारदर्शिता सुनिश्चित करता है।"
    }
  },
  {
    en: {
      question: "How many states/UTs does India have?",
      options: ["25", "26", "28", "30"],
      correctAnswer: 2,
      explanation: "India has 28 states and 8 union territories as of 2024."
    },
    hi: {
      question: "भारत में कितने राज्य/केंद्र शासित प्रदेश हैं?",
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
```

**UI Layout**:
```
┌──────────────────────────────────────┐
│  Progress: Step 6 of 6  ███████████░ │
├──────────────────────────────────────┤
│                                      │
│   📝 Test Your Knowledge             │
│                                      │
│   Question 1 of 5                    │
│   ────────────────────────────────   │
│   What is the minimum age to vote?   │
│                                      │
│   ○ 16 years                         │
│   ○ 18 years                         │
│   ○ 21 years                         │
│   ○ 25 years                         │
│                                      │
│                [Submit Quiz]         │
│                                      │
│   ┌────────────────────────────────┐ │
│   │ 🏆 Score: 4/5 (80%)            │ │
│   │                                │ │
│   │ 🎉 Great Job!                  │ │
│   │ You understand the basics well │ │
│   │                                │ │
│   │ 📝 Feedback from AI:           │ │
│   │ "You did well overall..."      │ │
│   │                                │ │
│   │ ⭐ Badge Earned:               │ │
│   │    "Quiz Master"               │ │
│   └────────────────────────────────┘ │
│                                      │
│  [← Back]  [Complete Learning]       │
└──────────────────────────────────────┘
```

**Features**:
- **Quiz Display**:
  - Question number: "Question X of 5"
  - Radio buttons for each option
  - Progress as questions are answered
  - Visual feedback: Correct ✓, Incorrect ✗

- **Scoring System**:
  - Calculate score: (Correct Answers / Total Questions) × 100
  - Display percentage: "4/5 (80%)"
  - Show as large, bold number

- **Badge/Achievement System**:
  ```javascript
  const badges = {
    perfect: { name: "Election Expert", icon: "🏆", requirement: "Score 5/5" },
    excellent: { name: "Quiz Master", icon: "⭐", requirement: "Score 4/5" },
    good: { name: "Civic Champion", icon: "🎯", requirement: "Score 3/5" },
    learning: { name: "Learning Path", icon: "📚", requirement: "Score <3/5" }
  };
  ```

- **AI Feedback** (Gemini):
  - **Prompt**: `"A user scored {score}/{total} ({percentage}%) on a civic education quiz about Indian elections. Provide encouraging feedback, highlight what they did well, and suggest which topics they might review. Max 3 sentences. Be positive and motivating."`
  - **Max Tokens**: 200
  - Display in highlighted box below score

- **Radio Button Styling**:
  - Unselected: Gray outline
  - Hover: Light background
  - Selected: Filled with color
  - After submission: Correct answer highlighted in green, wrong answer in red

- **Animations**:
  - Questions fade in/out on navigation
  - Score reveals with confetti on final submission
  - Badge appears with bounce animation

**Completion Logic**:
- All 5 questions must be answered
- Click "Submit Quiz" to finalize
- Display results immediately
- Mark entire learning journey as complete
- Update progress bar to 100%

---

## Feature 2: AI Doubt Assistant (Chat)

### **Chat Interface**

**Trigger**:
- Floating button bottom-right corner
- Icon: Message circle (Lucide)
- Text: "Ask a Question"
- Always visible throughout the app

**Minimized State**:
```
        ┌─────────────────┐
        │ ? Ask a Question│
        └─────────────────┘
```

**Expanded State**:
```
┌────────────────────────────────┐
│ Election Expert Assistant   [X]│
├────────────────────────────────┤
│                                │
│ You: What is a voter ID?       │
│                                │
│ AI: A voter ID is an official  │
│ document issued by the ECI...  │
│                                │
│ You: How do I apply?           │
│                                │
│ AI: You can apply online...    │
│                                │
├────────────────────────────────┤
│ [Type your question...]      [→]│
└────────────────────────────────┘
```

**Features**:
- **Chat Header**:
  - Icon: 🤖 (Robot)
  - Title: "Election Expert Assistant"
  - Close button (X)

- **Message History**:
  - User messages: Right-aligned, blue background
  - AI messages: Left-aligned, gray background
  - Markdown rendering (if response contains bold, lists, etc.)
  - Timestamps optional

- **Input Field**:
  - Textarea with placeholder: "Ask a question about Indian elections..."
  - Send button with arrow icon
  - Auto-focus on chat open
  - Clear on send

- **Loading State**:
  - Typing indicator (animated dots)
  - "AI is typing..." text
  - Shows while waiting for Gemini response

**Gemini Integration**:
- **System Prompt**: 
  ```
  "You are an expert civic education assistant focused on explaining 
  the Indian election process in simple, unbiased, beginner-friendly language. 
  Keep responses to 2-3 sentences max. Answer only questions related to Indian 
  elections, voter registration, voting process, and election-related topics. 
  If a question is not related to elections, politely redirect: 
  'I'm specifically designed to help with questions about Indian elections. 
  Do you have any election-related questions?'"
  ```

- **User Prompt**: 
  ```javascript
  const userMessage = "..."; // User's question
  const systemPrompt = "..."; // See above
  const finalPrompt = `${systemPrompt}\n\nUser Question: ${userMessage}`;
  ```

- **API Call**:
  - Max tokens: 300
  - Temperature: 0.7 (balanced creativity & accuracy)
  - Timeout: 10 seconds

**Error Handling**:
- Network error: "Sorry, I couldn't fetch a response. Please try again."
- Timeout: "Response took too long. Please try a simpler question."
- Invalid response: "I didn't understand. Can you rephrase?"

**Features**:
- Message history persists during session
- Clear chat history button (optional)
- Responsive: Adapts to mobile screens
- Accessibility: Proper ARIA labels for screen readers

**Fallback Responses** (if API fails):

```javascript
const fallbackResponses = {
  voting: "To vote in India, you need to be a registered voter aged 18+. You can register on eci.gov.in.",
  eligibility: "You need to be an Indian citizen, at least 18 years old, and a resident of your constituency.",
  registration: "Visit eci.gov.in or your local electoral office to register as a voter. You'll receive your Voter ID by mail.",
  evm: "EVM (Electronic Voting Machine) is used to record votes digitally. You press a button next to your choice.",
  vvpat: "VVPAT prints a record of your vote to verify it was recorded correctly.",
  default: "That's a great question about Indian elections! I'm here to help. Can you be more specific?"
};
```

---

## Feature 3: Progress Indicator

### **Progress Bar (Top)**

```
┌─────────────────────────────────────────────┐
│ Step 1 of 6     ████████░░░░░░░░░░░░░░      │
│ Introduction                                 │
└─────────────────────────────────────────────┘
```

**Features**:
- Shows current step: "Step X of 6"
- Horizontal progress bar (CSS gradient)
- Current step title
- Filled portion increases with each completed step
- Color changes: Saffron → Green → Blue gradient

### **Step Indicator Dots**

```
1 → 2 → 3 → 4 → 5 → 6
●   ○   ○   ○   ○   ○
(Completed) (Current) (Upcoming)
```

**Features**:
- 6 circles representing each step
- Filled (●) for completed, outlined (○) for pending
- Current step highlighted with color
- Hover: Show step name as tooltip
- Click: Jump to completed steps (navigation)

### **Step Navigation Buttons**

```
[← Back]  [Next Step →]
```

**Features**:
- "Back" button: Disabled on Step 0, navigates to previous step
- "Next" button: Disabled if current step not complete, navigates to next step
- "Submit" button (Step 5 quiz): Only appears on quiz step
- Button styling: Primary color, hover effect

### **Completion Screen**

```
┌─────────────────────────────────────┐
│                                     │
│     🎉 Congratulations! 🎉          │
│                                     │
│   You've completed VoteSmart AI     │
│   Interactive Learning Journey      │
│                                     │
│   📊 Progress: 100%  ██████████    │
│                                     │
│   🏆 Achievements Unlocked:         │
│   ✓ Election Starter                │
│   ✓ Eligible Voter                  │
│   ✓ Quiz Master                     │
│                                     │
│   [📱 Share Achievement]            │
│   [🔄 Retake Quiz]                  │
│   [💬 Chat with AI]                 │
│                                     │
└─────────────────────────────────────┘
```

**Features**:
- Large celebration emoji (🎉)
- Completion message with percentage (100%)
- List of unlocked achievements/badges
- Buttons for next actions (Share, Retake, Chat)
- Option to email certificate

**Share Functionality**:
- WhatsApp: Share with message "I completed VoteSmart AI! Learn about Indian elections: [link]"
- Twitter: Tweet achievement with hashtags (#VoteSmart #IndianElections)
- Email: Send completion certificate
- Copy link: Direct link to app

---

# PART 3: GEMINI API INTEGRATION

## API Setup

### **Installation**

```bash
npm install @google/generative-ai
```

### **API Key Configuration**

**File: `.env.example`**
```
REACT_APP_GEMINI_API_KEY=your_api_key_here
REACT_APP_ENVIRONMENT=development
```

**File: `.env`** (Create locally, do NOT commit)
```
REACT_APP_GEMINI_API_KEY=AIzaSy...your_actual_key...
REACT_APP_ENVIRONMENT=production
```

### **Gemini Client Setup**

**File: `src/utils/geminiClient.js`**

```javascript
const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const MODEL = 'gemini-1.5-flash';
const ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models';

export const callGemini = async (userPrompt, systemPrompt = '') => {
  if (!API_KEY || API_KEY === 'your_api_key_here') {
    console.warn('Gemini API key not configured. Using fallback.');
    return getFallbackResponse(userPrompt);
  }

  try {
    const fullPrompt = systemPrompt 
      ? `${systemPrompt}\n\n${userPrompt}` 
      : userPrompt;

    const response = await fetch(
      `${ENDPOINT}/${MODEL}:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: fullPrompt }]
          }],
          generationConfig: {
            maxOutputTokens: 256,
            temperature: 0.7,
            topP: 0.95,
            topK: 40
          },
          safetySettings: [
            {
              category: 'HARM_CATEGORY_UNSPECIFIED',
              threshold: 'BLOCK_NONE'
            }
          ]
        })
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.contents || !data.contents[0]?.parts?.[0]?.text) {
      throw new Error('Invalid API response format');
    }

    return data.contents[0].parts[0].text;
  } catch (error) {
    console.error('Gemini API error:', error);
    return getFallbackResponse(userPrompt);
  }
};

const getFallbackResponse = (prompt) => {
  // Fallback responses for common questions
  const lowerPrompt = prompt.toLowerCase();
  
  if (lowerPrompt.includes('age') || lowerPrompt.includes('eligib')) {
    return 'To vote in India, you must be an Indian citizen, at least 18 years old, and registered in your constituency.';
  }
  if (lowerPrompt.includes('register') || lowerPrompt.includes('voter id')) {
    return 'Visit eci.gov.in or your local electoral office to register. You\'ll receive your Voter ID card by mail within 7-10 days.';
  }
  if (lowerPrompt.includes('evm')) {
    return 'EVM (Electronic Voting Machine) is used to record your vote. You press a button next to your choice, and the vote is recorded digitally.';
  }
  if (lowerPrompt.includes('vvpat')) {
    return 'VVPAT (Voter Verifiable Paper Audit Trail) prints a slip showing your vote. You can verify it matches what you selected.';
  }
  if (lowerPrompt.includes('vote') || lowerPrompt.includes('polling')) {
    return 'On election day, go to your assigned polling booth, verify your identity, cast your vote on the EVM, and verify with VVPAT.';
  }
  
  return 'That\'s a great question about Indian elections! Could you provide more details so I can help better?';
};
```

### **Custom Hook: useGemini**

**File: `src/hooks/useGemini.js`**

```javascript
import { useState } from 'react';
import { callGemini } from '../utils/geminiClient';

export const useGemini = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState('');

  const generateResponse = async (prompt, systemPrompt) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await callGemini(prompt, systemPrompt);
      setResponse(result);
      return result;
    } catch (err) {
      const errorMsg = 'Failed to generate response. Please try again.';
      setError(errorMsg);
      return errorMsg;
    } finally {
      setLoading(false);
    }
  };

  return { generateResponse, loading, error, response };
};
```

## API Calls Reference Table

| Step | Purpose | Prompt | Max Tokens | Trigger |
|------|---------|--------|-----------|---------|
| **0** | Introduction | "Explain what elections are and why they're important..." | 150 | Component mount |
| **1** | Eligibility | "Explain voter eligibility requirements in {state}..." | 150 | Age + State selected |
| **2** | Registration | "Simplify the voter registration process in {state}..." | 200 | Component mount |
| **3** | Voting Process | "Explain the step-by-step voting process..." | 200 | Component mount |
| **4** | Vote Feedback | "A user voted for {option}. Explain what happens next..." | 150 | Vote selected |
| **5** | Quiz Feedback | "User scored {score}/{total}. Provide feedback..." | 200 | Quiz submitted |
| **Chat** | Custom Q&A | User question with system prompt | 300 | User sends message |

## Rate Limiting & Caching

**File: `src/utils/cacheManager.js`**

```javascript
const responseCache = {};

export const getCachedResponse = (key) => {
  return responseCache[key] || null;
};

export const cacheResponse = (key, value) => {
  responseCache[key] = {
    value,
    timestamp: Date.now()
  };
};

export const isCacheExpired = (key, maxAge = 3600000) => { // 1 hour default
  const cached = responseCache[key];
  if (!cached) return true;
  return Date.now() - cached.timestamp > maxAge;
};
```

---

# PART 4: BILINGUAL SUPPORT (Hindi + English)

## Translation System

**File: `src/utils/translations.js`**

```javascript
export const translations = {
  en: {
    // General
    appTitle: 'VoteSmart AI – Interactive Learning',
    appSubtitle: 'Understand the Indian Election Process',
    language: 'Language',
    english: 'English',
    hindi: 'हिंदी',
    
    // Progress
    progressStep: 'Step {{currentStep}} of {{totalSteps}}',
    progressPercentage: '{{percentage}}%',
    
    // Navigation
    nextBtn: 'Next Step →',
    backBtn: '← Go Back',
    submitBtn: 'Submit Quiz',
    startBtn: 'Start Learning →',
    
    // Step 0
    step0Title: 'What are Elections?',
    step0Content: 'Elections are the foundation of democracy! They allow every citizen to have a voice in choosing their leaders.',
    
    // Step 1
    step1Title: 'Are You Eligible?',
    step1AgeLabel: 'Enter your age:',
    step1StateLabel: 'Select your state:',
    step1Eligible: 'You are eligible to vote! ✓',
    step1NotEligible: 'You will be eligible when you turn 18.',
    
    // Step 2
    step2Title: 'Voter Registration & ID',
    step2Step1: 'Check Eligibility',
    step2Step2: 'Apply Online or Offline',
    step2Step3: 'Receive Voter ID',
    
    // Step 3
    step3Title: 'The Voting Process',
    step3Step1: 'Go to Polling Booth',
    step3Step2: 'Verify Your Identity',
    step3Step3: 'Use EVM Machine',
    step3Step4: 'Verify with VVPAT',
    
    // Step 4
    step4Title: 'Cast Your Vote',
    step4Instruction: 'Choose your preferred option:',
    step4PartyA: 'Party A',
    step4PartyB: 'Party B',
    step4NOTA: 'NOTA (None of the Above)',
    step4Success: '✓ Vote Recorded Successfully!',
    
    // Step 5
    step5Title: 'Test Your Knowledge',
    step5QuestionCount: 'Question {{current}} of {{total}}',
    step5Score: 'Your Score',
    step5Perfect: 'Perfect! You\'re an election expert! 🎉',
    step5Great: 'Great job! You understand the basics well. 👍',
    step5Feedback: 'Good effort! Review the steps and try again.',
    
    // Quiz Badge
    badgeExpert: 'Election Expert',
    badgeMaster: 'Quiz Master',
    badgeChampion: 'Civic Champion',
    badgeLearning: 'Learning Path',
    
    // Chat
    chatTitle: 'Election Expert Assistant',
    chatPlaceholder: 'Ask a question about Indian elections...',
    chatAskBtn: 'Ask a Question',
    chatSendBtn: 'Send',
    chatTyping: 'AI is typing...',
    
    // Completion
    completionTitle: 'Congratulations! 🎉',
    completionMessage: 'You\'ve completed VoteSmart AI Interactive Learning Journey',
    completionShare: 'Share Achievement',
    completionRetake: 'Retake Quiz',
    completionChat: 'Chat with AI',
    
    // States
    states: [
      'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
      'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
      'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
      'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
      'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
      'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
    ]
  },
  
  hi: {
    // General
    appTitle: 'वोटस्मार्ट AI – इंटरैक्टिव शिक्षा',
    appSubtitle: 'भारतीय चुनाव प्रक्रिया को समझें',
    language: 'भाषा',
    english: 'English',
    hindi: 'हिंदी',
    
    // Progress
    progressStep: 'चरण {{currentStep}} में {{totalSteps}}',
    progressPercentage: '{{percentage}}%',
    
    // Navigation
    nextBtn: 'अगला चरण →',
    backBtn: '← वापस जाएं',
    submitBtn: 'जमा करें',
    startBtn: 'सीखना शुरू करें →',
    
    // Step 0
    step0Title: 'चुनाव क्या हैं?',
    step0Content: 'चुनाव लोकतंत्र की नींव हैं! वे हर नागरिक को अपने नेताओं को चुनने में आवाज़ दिलाते हैं।',
    
    // Step 1
    step1Title: 'क्या आप पात्र हैं?',
    step1AgeLabel: 'अपनी आयु दर्ज करें:',
    step1StateLabel: 'अपना राज्य चुनें:',
    step1Eligible: 'आप मतदान के लिए पात्र हैं! ✓',
    step1NotEligible: 'आप 18 साल की उम्र में पात्र होंगे।',
    
    // Step 2
    step2Title: 'मतदाता पंजीकरण और ID',
    step2Step1: 'पात्रता जांचें',
    step2Step2: 'ऑनलाइन या ऑफलाइन आवेदन करें',
    step2Step3: 'मतदाता ID प्राप्त करें',
    
    // Step 3
    step3Title: 'मतदान प्रक्रिया',
    step3Step1: 'पोलिंग स्टेशन जाएं',
    step3Step2: 'अपनी पहचान सत्यापित करें',
    step3Step3: 'EVM मशीन का उपयोग करें',
    step3Step4: 'VVPAT से सत्यापित करें',
    
    // Step 4
    step4Title: 'अपना वोट डालें',
    step4Instruction: 'अपने पसंदीदा विकल्प को चुनें:',
    step4PartyA: 'पार्टी A',
    step4PartyB: 'पार्टी B',
    step4NOTA: 'NOTA (उपरोक्त में से कोई नहीं)',
    step4Success: '✓ वोट सफलतापूर्वक दर्ज हुआ!',
    
    // Step 5
    step5Title: 'अपना ज्ञान परीक्षण करें',
    step5QuestionCount: 'प्रश्न {{current}} में {{total}}',
    step5Score: 'आपका स्कोर',
    step5Perfect: 'बिल्कुल सही! आप एक चुनाव विशेषज्ञ हैं! 🎉',
    step5Great: 'बहुत अच्छा! आप मूल बातें अच्छी तरह समझते हैं। 👍',
    step5Feedback: 'अच्छा प्रयास! चरणों की समीक्षा करें और फिर से कोशिश करें।',
    
    // Quiz Badge
    badgeExpert: 'चुनाव विशेषज्ञ',
    badgeMaster: 'क्विज़ मास्टर',
    badgeChampion: 'नागरिक चैंपियन',
    badgeLearning: 'सीखने का पथ',
    
    // Chat
    chatTitle: 'चुनाव विशेषज्ञ सहायक',
    chatPlaceholder: 'भारतीय चुनावों के बारे में कोई प्रश्न पूछें...',
    chatAskBtn: 'प्रश्न पूछें',
    chatSendBtn: 'भेजें',
    chatTyping: 'AI टाइप कर रहा है...',
    
    // Completion
    completionTitle: 'बधाई हो! 🎉',
    completionMessage: 'आपने वोटस्मार्ट AI इंटरैक्टिव लर्निंग यात्रा पूरी की है',
    completionShare: 'उपलब्धि साझा करें',
    completionRetake: 'क्विज़ दोबारा लें',
    completionChat: 'AI से चैट करें',
    
    // States (same in Hindi)
    states: [
      'आंध्र प्रदेश', 'अरुणाचल प्रदेश', 'असम', 'बिहार', 'छत्तीसगढ़',
      'गोवा', 'गुजरात', 'हरियाणा', 'हिमाचल प्रदेश', 'झारखंड',
      'कर्नाटक', 'केरल', 'मध्य प्रदेश', 'महाराष्ट्र', 'मणिपुर',
      'मेघालय', 'मिज़ोरम', 'नागालैंड', 'ओडिशा', 'पंजाब',
      'राजस्थान', 'सिक्किम', 'तमिलनाडु', 'तेलंगाना', 'त्रिपुरा',
      'उत्तर प्रदेश', 'उत्तराखंड', 'पश्चिम बंगाल'
    ]
  }
};

// Helper function with interpolation
export const t = (language, key, replacements = {}) => {
  let text = translations[language]?.[key] || key;
  
  Object.entries(replacements).forEach(([placeholder, value]) => {
    text = text.replace(`{{${placeholder}}}`, value);
  });
  
  return text;
};
```

## Language Context Hook

**File: `src/hooks/useLanguage.js`**

```javascript
import { useState, useEffect } from 'react';

export const useLanguage = () => {
  const [language, setLanguage] = useState(() => {
    // Check localStorage
    const saved = localStorage.getItem('votesmart_language');
    if (saved) return saved;
    
    // Check browser language
    const browserLang = navigator.language;
    return browserLang.startsWith('hi') ? 'hi' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('votesmart_language', language);
    document.documentElement.lang = language;
  }, [language]);

  return { language, setLanguage };
};
```

## Language Switcher Component

**File: `src/components/LanguageSwitcher.jsx`**

```javascript
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../utils/translations';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="px-3 py-2 rounded-lg border-2 border-saffron-500 bg-white text-gray-800 font-semibold cursor-pointer hover:bg-saffron-50 transition"
      >
        <option value="en">🇮🇳 English</option>
        <option value="hi">🇮🇳 हिंदी</option>
      </select>
    </div>
  );
};
```

---

# PART 5: INDIA-SPECIFIC ENHANCEMENTS (For Winning)

## Enhancement 1: State-Wise Election Facts

**File: `src/utils/stateData.js`**

```javascript
export const STATE_DATA = {
  'Andhra Pradesh': {
    totalVoters: '45.5 Million',
    constituencies: 175,
    electoralCommission: 'https://elections.ap.gov.in',
    lastElection: 2024,
    turnout: 62.2,
    funFact: 'Andhra Pradesh has the world\'s first fully electronic voting system.',
  },
  'Maharashtra': {
    totalVoters: '78.8 Million',
    constituencies: 288,
    electoralCommission: 'https://mahvoting.gov.in',
    lastElection: 2024,
    turnout: 61.5,
    funFact: 'Maharashtra elections directly influence national politics due to large population.',
  },
  'Uttar Pradesh': {
    totalVoters: '139.2 Million',
    constituencies: 403,
    electoralCommission: 'https://election.up.nic.in',
    lastElection: 2024,
    turnout: 59.8,
    funFact: 'UP is the most populous state and sends the maximum MPs to Parliament.',
  },
  // ... Add all 28 states
};

export const getStateFact = (state) => {
  return STATE_DATA[state] || {
    totalVoters: 'N/A',
    constituencies: 'N/A',
    electoralCommission: '#',
    lastElection: 2024,
    turnout: 'N/A',
    funFact: 'Discover election facts about this state!',
  };
};
```

## Enhancement 2: Live ECI Links

**File: `src/utils/eciLinks.js`**

```javascript
export const NATIONAL_LINKS = {
  eciMain: 'https://www.eci.gov.in',
  voterRegistration: 'https://www.eci.gov.in/voter/voter-list',
  downloadForms: 'https://www.eci.gov.in/administrative-setup/form/',
  trackStatus: 'https://www.eci.gov.in/voter/find-application-status',
  newsAlerts: 'https://www.eci.gov.in/news/',
};

export const STATE_LINKS = {
  'Andhra Pradesh': 'https://elections.ap.gov.in',
  'Arunachal Pradesh': 'https://elections.arunachal.nic.in',
  'Assam': 'https://elections.assam.nic.in',
  'Bihar': 'https://elections.bih.nic.in',
  'Chhattisgarh': 'https://elections.cg.nic.in',
  // ... all states
};

export const getStateEciLink = (state) => {
  return STATE_LINKS[state] || NATIONAL_LINKS.eciMain;
};
```

## Enhancement 3: Interactive India Map

```html
<!-- Optional: Add interactive India map showing election status by state -->
<svg viewBox="0 0 800 600" className="w-full h-auto">
  <!-- India state boundaries SVG -->
  <!-- Color states based on user's state selection -->
</svg>
```

## Enhancement 4: Real Election Statistics

**File: `src/utils/electionStats.js`**

```javascript
export const ELECTION_STATS_2024 = {
  totalVoters: '970.85 Million',
  totalTurnout: 65.48,
  womenVoters: 468.89, // in millions
  maleVoters: 501.96,
  totalParliamentarySeats: 543,
  totalAssemblySeats: 4103,
  electionDuration: '44 days',
  numberOf Phases: 7,
  electronicVotingMachinesUsed: 1.7, // in millions
};

export const getElectionHighlight = () => {
  return `In the 2024 Indian elections, ${ELECTION_STATS_2024.totalVoters} people were eligible to vote, 
  with a turnout of ${ELECTION_STATS_2024.totalTurnout}%. This made it one of the largest democratic exercises 
  in the world!`;
};
```

## Enhancement 5: Gamification & Badges System

**File: `src/utils/achievements.js`**

```javascript
export const ACHIEVEMENTS = {
  electionStarter: {
    id: 'starter',
    name: 'Election Starter',
    description: 'Complete the introduction step',
    icon: '🌟',
    condition: (progress) => progress.step >= 0,
    earnedAt: 'Step 0',
  },
  eligibleVoter: {
    id: 'eligible',
    name: 'Eligible Voter',
    description: 'Complete the eligibility check',
    icon: '✓',
    condition: (progress) => progress.step >= 1 && progress.userAge >= 18,
    earnedAt: 'Step 1',
  },
  registeredCitizen: {
    id: 'registered',
    name: 'Registered Citizen',
    description: 'Complete voter registration step',
    icon: '📋',
    condition: (progress) => progress.step >= 2,
    earnedAt: 'Step 2',
  },
  votingExpert: {
    id: 'votingExpert',
    name: 'Voting Expert',
    description: 'Understand the complete voting process',
    icon: '🗳️',
    condition: (progress) => progress.step >= 3,
    earnedAt: 'Step 3',
  },
  simulationMaster: {
    id: 'simulationMaster',
    name: 'Simulation Master',
    description: 'Cast your vote in the simulation',
    icon: '⚡',
    condition: (progress) => progress.step >= 4 && progress.voteSelected,
    earnedAt: 'Step 4',
  },
  electionExpert: {
    id: 'expert',
    name: 'Election Expert',
    description: 'Score 5/5 on the knowledge quiz',
    icon: '🏆',
    condition: (quiz) => quiz.score === 5,
    earnedAt: 'Step 5',
  },
  quizMaster: {
    id: 'quizMaster',
    name: 'Quiz Master',
    description: 'Score 4/5 on the knowledge quiz',
    icon: '⭐',
    condition: (quiz) => quiz.score >= 4,
    earnedAt: 'Step 5',
  },
  civicChampion: {
    id: 'civicChampion',
    name: 'Civic Champion',
    description: 'Score 3/5 on the knowledge quiz',
    icon: '🎯',
    condition: (quiz) => quiz.score >= 3,
    earnedAt: 'Step 5',
  },
  communityHelper: {
    id: 'helper',
    name: 'Community Helper',
    description: 'Ask 5+ questions in the AI chat',
    icon: '💬',
    condition: (chat) => chat.messageCount >= 5,
    earnedAt: 'Throughout',
  },
  completionMaster: {
    id: 'completion',
    name: 'Completion Master',
    description: 'Complete the entire learning journey',
    icon: '🎉',
    condition: (progress) => progress.step === 5 && progress.quizSubmitted,
    earnedAt: 'Final',
  },
};

export const getUnlockedAchievements = (userProgress, quizResults, chatStats) => {
  return Object.values(ACHIEVEMENTS).filter(achievement => {
    if (achievement.id === 'expert' || achievement.id.includes('quiz') || achievement.id === 'civicChampion') {
      return achievement.condition(quizResults);
    }
    if (achievement.id === 'helper') {
      return achievement.condition(chatStats);
    }
    return achievement.condition(userProgress);
  });
};
```

## Enhancement 6: Digital Certificate Generation

**File: `src/components/CompletionCertificate.jsx`**

```javascript
import React from 'react';

export const CompletionCertificate = ({ userName, completionDate, score }) => {
  const handleDownloadPDF = () => {
    // Use jsPDF library to generate PDF
    const doc = new jsPDF();
    doc.setFont('Courier', 'bold');
    doc.setFontSize(24);
    doc.text('🇮🇳 VoteSmart AI Certificate', 105, 40, { align: 'center' });
    
    doc.setFontSize(14);
    doc.text(`This certifies that`, 105, 80, { align: 'center' });
    doc.setFont('Courier', 'bold');
    doc.setFontSize(18);
    doc.text(userName || 'A Learner', 105, 100, { align: 'center' });
    
    doc.setFont('Courier', 'normal');
    doc.setFontSize(12);
    doc.text(`has successfully completed the`, 105, 130, { align: 'center' });
    doc.text(`VoteSmart AI Interactive Learning Journey`, 105, 145, { align: 'center' });
    doc.text(`and demonstrated knowledge of the Indian Election Process`, 105, 160, { align: 'center' });
    
    doc.text(`Score: ${score}/5`, 105, 190, { align: 'center' });
    doc.text(`Date: ${completionDate}`, 105, 210, { align: 'center' });
    
    doc.save('VoteSmart_Certificate.pdf');
  };

  return (
    <div className="border-4 border-saffron-500 bg-gradient-to-br from-saffron-50 to-green-50 p-12 rounded-lg text-center">
      <h1 className="text-4xl font-bold text-saffron-900 mb-8">🇮🇳 VoteSmart AI Certificate</h1>
      
      <p className="text-lg text-gray-700 mb-4">This certifies that</p>
      <p className="text-3xl font-bold text-saffron-700 mb-6">You</p>
      
      <p className="text-lg text-gray-700 mb-2">have successfully completed the</p>
      <p className="text-2xl font-bold text-indianBlue-700 mb-6">VoteSmart AI Interactive Learning Journey</p>
      
      <p className="text-gray-700 mb-4">and demonstrated knowledge of the Indian Election Process</p>
      
      <div className="bg-white border-2 border-saffron-300 rounded p-4 my-6">
        <p className="text-xl font-bold">Score: {score}/5</p>
        <p className="text-gray-600">{new Date().toLocaleDateString()}</p>
      </div>
      
      <button
        onClick={handleDownloadPDF}
        className="mt-6 px-6 py-3 bg-saffron-500 text-white font-bold rounded-lg hover:bg-saffron-600 transition"
      >
        📥 Download Certificate
      </button>
    </div>
  );
};
```

## Enhancement 7: Sharing Features

**File: `src/components/ShareButtons.jsx`**

```javascript
import React from 'react';

export const ShareButtons = ({ userName, score, totalQuestions }) => {
  const appUrl = 'https://votesmart-ai.vercel.app';
  const message = `I just completed VoteSmart AI and scored ${score}/${totalQuestions} on the Indian Elections quiz! 🇮🇳\n\nLearn about the Indian election process: ${appUrl}`;

  const handleWhatsAppShare = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  };

  const handleTwitterShare = () => {
    const tweet = `I just completed @VoteSmart_AI and learned about Indian elections! Score: ${score}/${totalQuestions} 🇮🇳\n\n#VoteSmart #IndianElections #Civics\n\n${appUrl}`;
    const encodedTweet = encodeURIComponent(tweet);
    window.open(`https://twitter.com/intent/tweet?text=${encodedTweet}`, '_blank');
  };

  const handleEmailShare = () => {
    const subject = 'Check out VoteSmart AI - Interactive Learning!';
    const body = message;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(appUrl);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <button
        onClick={handleWhatsAppShare}
        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        💬 Share on WhatsApp
      </button>
      
      <button
        onClick={handleTwitterShare}
        className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
      >
        𝕏 Share on Twitter
      </button>
      
      <button
        onClick={handleEmailShare}
        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
      >
        📧 Share via Email
      </button>
      
      <button
        onClick={handleCopyLink}
        className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        🔗 Copy Link
      </button>
    </div>
  );
};
```

---

# PART 6: DESIGN & STYLING REQUIREMENTS

## Color Palette

```css
:root {
  /* Indian Flag Colors */
  --saffron: #FF9933;
  --saffron-light: #FFE9D5;
  --saffron-dark: #8B5A00;
  
  --green: #138808;
  --green-light: #D4F1E4;
  --green-dark: #0A5C1C;
  
  --blue: #003478;
  --blue-light: #D4E4FF;
  --blue-dark: #001F47;
  
  /* Neutral */
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-600: #4B5563;
  --gray-800: #1F2937;
  --gray-900: #111827;
  
  /* Status Colors */
  --success: #10B981;
  --warning: #F59E0B;
  --error: #EF4444;
  --info: #3B82F6;
}
```

## Typography

```css
/* Display Font: Playfair Display */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');

/* Body Font: Inter */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Font Sizes */
h1 { font-size: 2.25rem; font-family: 'Playfair Display'; font-weight: 800; }
h2 { font-size: 1.875rem; font-family: 'Playfair Display'; font-weight: 700; }
h3 { font-size: 1.5rem; font-family: 'Inter'; font-weight: 700; }
body { font-size: 1rem; font-family: 'Inter'; font-weight: 400; line-height: 1.6; }
small { font-size: 0.875rem; }
```

## Key Styling Classes (Tailwind)

```css
/* Cards */
.card { @apply rounded-xl border-2 border-saffron-200 bg-white shadow-lg; }
.card-primary { @apply bg-gradient-to-br from-saffron-50 to-saffron-100; }
.card-success { @apply bg-gradient-to-br from-green-50 to-green-100; }

/* Buttons */
.btn { @apply px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105; }
.btn-primary { @apply bg-saffron-500 text-white hover:bg-saffron-600; }
.btn-secondary { @apply bg-gray-200 text-gray-800 hover:bg-gray-300; }

/* Progress */
.progress-bar { @apply h-2 bg-gray-200 rounded-full overflow-hidden; }
.progress-fill { @apply h-full bg-gradient-to-r from-saffron-500 to-green-500; }

/* Step Container */
.step-container { @apply min-h-screen flex flex-col items-center justify-center px-4 py-12; }
```

## Animations

```css
@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes confetti {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-slide-in { animation: slideIn 0.5s ease-out; }
.animate-fade-in { animation: fadeIn 0.3s ease-in; }
.animate-confetti { animation: confetti 2s ease-out forwards; }
```

## Dark Mode Support

```javascript
// In App.jsx or main component
const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem('votesmart-darkmode') === 'true' ||
         window.matchMedia('(prefers-color-scheme: dark)').matches;
});

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('votesmart-darkmode', darkMode);
}, [darkMode]);
```

---

# PART 7: TESTING CHECKLIST

## Functional Testing

- [ ] All 6 steps load without errors
- [ ] Age validation works (>=18 logic)
- [ ] State dropdown has all 28 states
- [ ] Gemini API returns valid responses
- [ ] Quiz calculates score correctly
- [ ] Chat stores message history during session
- [ ] Progress bar updates accurately
- [ ] Language toggle switches all visible text
- [ ] Back button disabled on Step 0
- [ ] Next button disabled if step incomplete
- [ ] "Start Learning" button advances to Step 1
- [ ] Vote selection triggers success message
- [ ] Quiz submission shows results
- [ ] Chat can be opened/closed

## API Testing

- [ ] Gemini API calls don't exceed rate limits (60/min)
- [ ] Error responses handled with fallback text
- [ ] API timeout set to 10 seconds
- [ ] Network errors display friendly message
- [ ] Response time < 3 seconds (99% of time)
- [ ] API key not exposed in client code

## UX/UI Testing

- [ ] All buttons are clickable and responsive
- [ ] Forms validate before submission
- [ ] No console errors or warnings
- [ ] Smooth navigation between steps
- [ ] Animations are smooth (60fps)
- [ ] Loading states are visible
- [ ] Success messages are celebratory
- [ ] Chat messages don't overlap
- [ ] Progress indicator is visible at all times
- [ ] Mobile responsive (320px, 375px, 768px, 1024px viewports)

## Accessibility Testing

- [ ] WAVE audit: 0 errors, 0 contrast errors
- [ ] Keyboard navigation works (Tab through all elements)
- [ ] Screen reader tested (NVDA/JAWS): All text readable
- [ ] Color contrast ≥ 4.5:1 (WCAG AA)
- [ ] Focus indicators visible on all interactive elements
- [ ] Form labels properly associated
- [ ] Alternative text for all images/icons
- [ ] No flashing content (< 3x per second)

## Performance Testing

- [ ] Lighthouse Score: 90+ (All metrics)
- [ ] First Contentful Paint: < 2 seconds
- [ ] Time to Interactive: < 5 seconds
- [ ] Cumulative Layout Shift: < 0.1
- [ ] Images optimized and lazy-loaded
- [ ] JavaScript bundle < 300KB (gzipped)
- [ ] CSS bundle < 100KB (gzipped)

## Cross-Browser Testing

- [ ] Chrome/Edge (Latest)
- [ ] Firefox (Latest)
- [ ] Safari (Latest)
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iOS)

## Localization Testing

- [ ] Hindi text displays correctly
- [ ] Right-to-left support (if needed in future)
- [ ] Date formats localized
- [ ] Number formats localized
- [ ] All UI elements in both languages

---

# PART 8: DEPLOYMENT & ENVIRONMENT VARIABLES

## Environment Variables

**File: `.env.example`**

```env
# Gemini API
REACT_APP_GEMINI_API_KEY=your_api_key_here

# App Configuration
REACT_APP_ENVIRONMENT=production
REACT_APP_VERSION=1.0.0
REACT_APP_APP_NAME=VoteSmart AI
REACT_APP_APP_URL=https://votesmart-ai.vercel.app

# Analytics (Optional)
REACT_APP_GOOGLE_ANALYTICS_ID=G_XXXXXXXXXX
```

## Deployment on Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial VoteSmart AI commit"
git branch -M main
git remote add origin https://github.com/yourusername/votesmart-ai.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com
2. Click "Import Project"
3. Select your GitHub repository
4. Add environment variables:
   - `REACT_APP_GEMINI_API_KEY`: Your Gemini API key
5. Click "Deploy"
6. Custom domain: Add your `.in` domain

### Alternative: Netlify

```bash
npm run build
# Drag & drop 'dist' folder to Netlify
# Or: npm install -g netlify-cli && netlify deploy
```

## Security Considerations

### API Key Protection

```javascript
// ❌ BAD - Exposes API key in client code
fetch(`...?key=${process.env.REACT_APP_GEMINI_API_KEY}`)

// ✅ GOOD - Use Vercel serverless function
async function callGemini(prompt) {
  const response = await fetch('/api/generateResponse', {
    method: 'POST',
    body: JSON.stringify({ prompt })
  });
  return response.json();
}
```

**File: `api/generateResponse.js` (Vercel Serverless)**

```javascript
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return res.status(200).json({ text });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Failed to generate response' });
  }
}
```

---

# PART 9: SUCCESS METRICS (For Winning)

Track these to demonstrate impact:

| Metric | Target | Measurement |
|--------|--------|-------------|
| **User Completion Rate** | 85%+ | % reaching Step 5 |
| **Quiz Accuracy** | 70%+ avg | Average quiz score |
| **Chat Engagement** | 60%+ users | % asking questions |
| **Mobile Traffic** | 70%+ | Mobile vs desktop visits |
| **Average Session Time** | 8-12 mins | Time spent in app |
| **Return Rate** | 30%+ | Repeat visitors |
| **Lighthouse Score** | 95+ | Performance + Accessibility |
| **API Response Time** | < 2 secs | Gemini API average |
| **Zero Console Errors** | 100% | Error-free experience |
| **Accessibility Score** | 95+ | WCAG compliance |

---

# PART 10: README TEMPLATE

```markdown
# 🇮🇳 VoteSmart AI – Interactive Learning Platform

A modern, interactive React application that teaches the Indian election process through guided learning with AI-powered explanations.

## ✨ Features

✅ **6-Step Guided Learning Journey**
- Introduction to elections
- Personalized eligibility check
- Voter registration process
- Interactive voting simulation
- Knowledge assessment quiz
- Real-time progress tracking

✅ **AI-Powered Explanations**
- Google Gemini API integration
- Context-aware responses
- Personalized feedback
- 24/7 doubt assistant

✅ **Bilingual Support**
- English & Hindi
- Seamless language switching
- Full localization support

✅ **Gamification & Badges**
- Earn achievements
- Track progress
- Celebrate milestones
- Downloadable certificates

✅ **Mobile-Optimized**
- Responsive design (all devices)
- Touch-friendly interface
- Fast load times
- Offline fallbacks

✅ **Accessibility-First**
- WCAG AA compliant
- Screen reader support
- Keyboard navigation
- High contrast mode

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/votesmart-ai.git
cd votesmart-ai

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Add your REACT_APP_GEMINI_API_KEY to .env

# Start development server
npm run dev
```

Visit http://localhost:5173 to see the app.

### Build for Production

```bash
npm run build
npm run preview
```

## 📚 Tech Stack

- **Frontend**: React 18 + Hooks
- **Styling**: Tailwind CSS
- **AI**: Google Gemini API (v1beta)
- **Icons**: Lucide React
- **Build**: Vite
- **Deployment**: Vercel

## 🎓 How It Works

1. **Start Learning**: User begins the guided journey
2. **Eligibility Check**: Enter age and state to get personalized info
3. **Learn**: Interactive step-by-step lessons about Indian elections
4. **Practice**: Cast a vote in the simulation
5. **Test**: Take a quiz to assess learning
6. **Celebrate**: Earn badges and download certificate

## 🤖 AI Features

- **Personalized Explanations**: Gemini generates context-aware explanations for each user
- **Doubt Assistant**: 24/7 chat support for election-related questions
- **Feedback**: AI-powered quiz feedback and recommendations

## 🌍 India-Specific Enhancements

- State-wise election statistics
- Direct links to Electoral Commission of India
- Real 2024 election data
- Hindi language support
- Local state information

## 📊 Key Metrics

- 85%+ user completion rate
- 70%+ average quiz score
- 95+ Lighthouse score
- < 2 second API response time
- WCAG AA accessibility certified

## 🔐 Security

- API key protected (serverless functions)
- No sensitive data stored locally
- HTTPS enforced
- Rate limiting implemented

## 📝 License

MIT License - see LICENSE file for details

## 🤝 Contributing

Contributions welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact & Support

- **Issues**: GitHub Issues
- **Email**: support@votesmart.ai
- **Website**: https://votesmart-ai.vercel.app

## 🙏 Acknowledgments

- Google Generative AI (Gemini)
- Election Commission of India
- Tailwind CSS
- React Community

---

**Made with ❤️ to promote civic education in India**
```

---

# PART 11: FINAL CHECKLIST FOR SUBMISSION

### Code Quality
- [ ] All code is clean, modular, and well-commented
- [ ] No console.log() statements in production
- [ ] No commented-out code
- [ ] Consistent code formatting (use Prettier)
- [ ] No TypeScript errors (if using TS)
- [ ] All variables properly named

### Documentation
- [ ] README with setup instructions
- [ ] ARCHITECTURE.md explaining structure
- [ ] API_INTEGRATION.md for Gemini setup
- [ ] CONTRIBUTING.md for developers
- [ ] LICENSE file included (MIT)
- [ ] Comments on complex functions

### Functionality
- [ ] All 6 steps work perfectly
- [ ] Gemini API integrated & tested
- [ ] Bilingual support (EN + HI)
- [ ] Chat assistant functional
- [ ] Quiz working with feedback
- [ ] Progress tracking accurate
- [ ] No missing features

### Performance
- [ ] Lighthouse score: 90+ (all metrics)
- [ ] Page load time: < 3 seconds
- [ ] Smooth animations (60fps)
- [ ] Optimized images
- [ ] Minified CSS/JS
- [ ] Lazy loading implemented

### Accessibility
- [ ] WAVE audit passed (0 errors)
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast ✓ (4.5:1+)
- [ ] Focus indicators visible
- [ ] ARIA labels added

### Responsiveness
- [ ] Mobile (320px): Perfect
- [ ] Tablet (768px): Perfect
- [ ] Desktop (1024px+): Perfect
- [ ] All touch targets ≥ 48px
- [ ] No horizontal scroll

### Testing
- [ ] Tested on 3+ browsers
- [ ] Tested on Android & iOS
- [ ] No console errors
- [ ] All functions tested
- [ ] Edge cases handled

### Deployment
- [ ] Deployed to live URL
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Environment variables set
- [ ] API key secure (serverless)
- [ ] CI/CD configured (optional)

### Submission Package
- [ ] GitHub repository public
- [ ] Clean commit history
- [ ] Demo video (2-3 min)
- [ ] Project description
- [ ] Screenshots/GIFs
- [ ] Deployment URL
- [ ] README prominent

### Demo Video Includes
- [ ] App walkthrough (all 6 steps)
- [ ] Gemini AI in action
- [ ] Chat assistant demo
- [ ] Quiz completion
- [ ] Mobile responsiveness
- [ ] Badge achievement
- [ ] Certificate generation

### Extra Features (Bonus Points)
- [ ] Dark mode toggle
- [ ] Share functionality
- [ ] Analytics integration
- [ ] Offline mode
- [ ] PDF certificate download
- [ ] Performance metrics
- [ ] Error boundaries
- [ ] PWA support

---

**🎉 You're all set! This comprehensive prompt covers everything needed to build a world-class VoteSmart AI application that will stand out in any competition!**

**Next Steps:**
1. Get your Gemini API key from https://makersuite.google.com
2. Clone a React template or create with `npm create vite`
3. Follow the folder structure provided
4. Implement features one by one
5. Test thoroughly
6. Deploy on Vercel
7. Submit with confidence! 🚀

---

*Last Updated: 2026*
*Version: 1.0*
