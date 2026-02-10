const { Groq } = require('groq-sdk');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');

dotenv.config();

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const AIService = {
    /**
     * Generates text content using Groq as primary and Gemini as fallback.
     */
    generateText: async (prompt, systemPrompt = '') => {
        try {
            console.log('Attempting generation with Groq...');
            const completion = await groq.chat.completions.create({
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: prompt }
                ],
                model: 'llama3-8b-8192', // Fast and efficient
            });
            return {
                success: true,
                provider: 'groq',
                content: completion.choices[0]?.message?.content || '',
            };
        } catch (error) {
            console.error('Groq Error, falling back to Gemini:', error.message);
            try {
                const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
                const result = await model.generateContent(systemPrompt + '\n' + prompt);
                const response = await result.response;
                return {
                    success: true,
                    provider: 'gemini',
                    content: response.text(),
                };
            } catch (geminiError) {
                console.error('Gemini Fallback Error:', geminiError.message);
                throw new Error('All AI providers failed');
            }
        }
    },

    /**
     * Handles multimodal tasks (Image analysis, etc.) - Gemini is better here.
     */
    multimodalTask: async (prompt, imageData) => {
        try {
            const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
            const result = await model.generateContent([prompt, imageData]);
            const response = await result.response;
            return {
                success: true,
                provider: 'gemini',
                content: response.text(),
            };
        } catch (error) {
            console.error('Multimodal Task Error:', error.message);
            throw error;
        }
    },

    /**
     * Code generation - Groq primary
     */
    generateCode: async (prompt) => {
        return await AIService.generateText(prompt, 'You are an expert software engineer. Provide high-quality, production-ready code snippets.');
    }
};

module.exports = AIService;
