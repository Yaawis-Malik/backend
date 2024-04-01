import mongoose from "mongoose";
import Client from "../Models/client.model.js";

export const getClient = async (req, res) => {
    try {
        const clientMessage = await Client.find();
        console.log('clientMessage');

        res.status(200).json(clientMessage);
    } catch (error) {
        res.status(401).json({ messsage: error.messsage })

        
    }
};

export const getClientById = async (req, res) => {
    try {
        const clientId = req.params.id;
        console.log(clientId) // Get client ID from URL parameters
        const clientinfo = await Client.findById(clientId);
        if (!clientinfo) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json(clientinfo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createClient = async (req, res) => {
    
    try {
        const { file } = req;
        if (!file) {
          return res.status(400).json({ error: 'No file uploaded' });
        }
    
        const client = req.body;
        const newClient = new Client({...client, files: file.filename});

        await newClient.save();
        res.status(201).json(newClient);
    } catch (error) {
        res.status(409).json({ messsage: error.messsage });
    }

};


export const updateClient = async (req, res) => {
    const { id: _id } = req.params;
    console.log({id:_id})
;    const client = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no client of this id');

    const updateClient = await Client.findByIdAndUpdate(_id, {...client, _id}, {new: true});

    res.json(updateClient);

};


export const deleteClient = async (req, res) => {
    const { id: _id } = req.params;

    await Client.findByIdAndDelete(_id);

    res.json({messsage: 'Client is deleted'});
};
