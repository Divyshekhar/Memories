import postMessage from "../models/postMessages.js";
export const getPosts = async (req, res) => {
    try {
        const postMessages = await postMessage.find();
        res.status(200).json(postMessages);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createPost = async (req, res) => {
    const { tite, message, creator, selectedFile, tags } = req.body;
    const newPost = new postMessage({ tite, message, creator, selectedFile, tags });
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}