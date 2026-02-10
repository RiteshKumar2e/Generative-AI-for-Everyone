const AIService = require('../services/ai.service');

exports.generateText = async (req, res) => {
    try {
        const { prompt, systemPrompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ success: false, message: 'Prompt is required' });
        }

        const result = await AIService.generateText(prompt, systemPrompt);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.generateCode = async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ success: false, message: 'Prompt is required' });
        }

        const result = await AIService.generateCode(prompt);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.handleMultimodal = async (req, res) => {
    try {
        const { prompt, imageData } = req.body;
        if (!prompt || !imageData) {
            return res.status(400).json({ success: false, message: 'Prompt and imageData are required' });
        }

        const result = await AIService.multimodalTask(prompt, imageData);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
