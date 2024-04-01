import mongoose from "mongoose";
import User from "../Models/user.model.js";

export const getUser = async (req, res) => {
    try {
        const userMessage = await User.find();
        console.log('userMessage');

        res.status(200).json(userMessage);
    } catch (error) {
        res.status(401).json({ messsage: error.messsage })

        
    }
};

export const createUser = async (req, res) => {
    const user = req.body;

    const newUser = new User(user);

    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ messsage: error.messsage });
    }

};


export const updateUser = async (req, res) => {
    const { id: _id } = req.params;
    const user = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no user of this id');

    const updateUser = await User.findByIdAndUpdate(_id, {...user, _id}, {new: true});

    res.json(updateUser);

};


export const deleteUser = async (req, res) => {
    const { id: _id } = req.params;

    await User.findByIdAndDelete(_id);

    res.json({messsage: 'post is deleted'});
};

