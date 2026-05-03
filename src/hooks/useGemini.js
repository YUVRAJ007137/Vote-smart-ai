import { useState, useCallback } from 'react';
import { callGemini } from '../utils/geminiClient';

export const useGemini = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState('');

  const generateResponse = useCallback(async (prompt, systemPrompt, maxTokens) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await callGemini(prompt, systemPrompt, maxTokens);
      setResponse(result);
      return result;
    } catch (err) {
      const errorMsg = 'Failed to generate response. Please try again.';
      setError(errorMsg);
      return errorMsg;
    } finally {
      setLoading(false);
    }
  }, []);

  return { generateResponse, loading, error, response, setResponse };
};
