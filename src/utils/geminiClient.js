const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL = 'gemini-flash-latest';
const ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models';

// Simple in-memory cache
const responseCache = new Map();

export const callGemini = async (userPrompt, systemPrompt = '', maxTokens = 256) => {
  // Check cache first
  const cacheKey = `${userPrompt}-${systemPrompt}`;
  if (responseCache.has(cacheKey)) {
    const cached = responseCache.get(cacheKey);
    if (Date.now() - cached.timestamp < 3600000) { // 1 hour cache
      return cached.value;
    }
  }

  if (!API_KEY || API_KEY === 'your_api_key_here') {
    console.warn('Gemini API key not configured. Using fallback.');
    return getFallbackResponse(userPrompt);
  }

  try {
    const fullPrompt = systemPrompt
      ? `${systemPrompt}\n\n${userPrompt}`
      : userPrompt;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    const response = await fetch(
      `${ENDPOINT}/${MODEL}:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [{
            parts: [{ text: fullPrompt }]
          }],
          generationConfig: {
            maxOutputTokens: maxTokens,
            temperature: 0.7,
            topP: 0.95,
            topK: 40
          },
          safetySettings: [
            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }
          ]
        })
      }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.candidates || !data.candidates[0]?.content?.parts?.[0]?.text) {
      throw new Error('Invalid API response format');
    }

    const text = data.candidates[0].content.parts[0].text;

    // Cache successful response
    responseCache.set(cacheKey, { value: text, timestamp: Date.now() });

    return text;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Gemini API timeout');
      return 'Response took too long. Please try a simpler question.';
    }
    console.error('Gemini API error:', error);
    return getFallbackResponse(userPrompt);
  }
};

const getFallbackResponse = (prompt) => {
  const lowerPrompt = prompt.toLowerCase();

  if (lowerPrompt.includes('election') && (lowerPrompt.includes('what') || lowerPrompt.includes('explain'))) {
    return 'Elections are the cornerstone of democracy, where citizens choose their representatives through a structured voting process. In India, the Election Commission oversees free and fair elections at national, state, and local levels, making it the world\'s largest democratic exercise.';
  }
  if (lowerPrompt.includes('age') || lowerPrompt.includes('eligib')) {
    return 'To vote in India, you must be an Indian citizen, at least 18 years old on the qualifying date, and registered in your constituency. You should not be disqualified under any law relating to corrupt practices and election offences.';
  }
  if (lowerPrompt.includes('register') || lowerPrompt.includes('voter id')) {
    return 'To register as a voter, visit the Election Commission website (eci.gov.in) or your local Electoral Registration Office. Fill out Form 6 with your details and supporting documents. Your Voter ID (EPIC) card will be delivered within 7-10 working days after verification.';
  }
  if (lowerPrompt.includes('evm')) {
    return 'The Electronic Voting Machine (EVM) is a portable electronic device used to record votes. It has a ballot unit where candidate names and symbols are displayed, and voters press the button next to their preferred candidate. EVMs are tamper-proof and have been used in India since 1999.';
  }
  if (lowerPrompt.includes('vvpat')) {
    return 'VVPAT (Voter Verifiable Paper Audit Trail) is an independent verification system attached to EVMs. After you cast your vote, it prints a small paper slip showing the candidate name and symbol, visible for 7 seconds, ensuring transparency and voter confidence.';
  }
  if (lowerPrompt.includes('vote') || lowerPrompt.includes('polling') || lowerPrompt.includes('cast')) {
    return 'On election day, visit your assigned polling booth with a valid ID. After identity verification, you\'ll receive a slip and proceed to the voting compartment. Press the button on the EVM next to your chosen candidate, verify with VVPAT, and your vote is recorded securely.';
  }
  if (lowerPrompt.includes('score') || lowerPrompt.includes('quiz') || lowerPrompt.includes('feedback')) {
    return 'Great effort on the quiz! Understanding the Indian election process is crucial for every citizen. Keep learning about your rights and responsibilities as a voter to strengthen our democracy.';
  }
  if (lowerPrompt.includes('nota')) {
    return 'NOTA (None of the Above) was introduced in 2013 by the Supreme Court of India. It allows voters to express disapproval of all candidates. While NOTA votes don\'t affect election results directly, a high NOTA count sends a strong message about candidate quality.';
  }

  return 'That\'s a great question about Indian elections! The Election Commission of India (ECI) is the constitutional authority responsible for administering elections. Could you provide more details so I can help better?';
};
