const express = require('express');
const mongoose = require('mongoose');
const { title } = require('process');
const UserAccount = require('../models/UserAccountSchema.js');



const getUserAccount = async (req, res) => {
    try {
        const details = await UserAccount.find();

        res.status(200).json(details);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const getUserAccountByID = async (req, res) => {
    const { id } = req.params;

    try {
        const details = await UserAccount.findById(id);

        res.status(200).json(details);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const createUserAccount = async (req, res) => {
    const useraccount = req.body;

    const newDetail = new UserAccount(useraccount)
    console.log("saved data", newDetail);
    try {
        await newDetail.save();

        res.status(201).json({ newDetail });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const UpdateUserAccount = async (req, res) => {
    const { id } = req.params;
    const { First_Name,Last_Name,NIC,Email,Contact,Address } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No accept with id: ${id}`);

    const updatedDetails = {First_Name:First_Name,Last_Name:Last_Name,NIC:NIC,Email:Email,Contact:Contact,Address:Address , _id: id };

    await UserAccount.findByIdAndUpdate(id, updatedDetails, { new: true });

    res.json(updatedDetails);
}

const RemoveUserAccount = async (req, res) => {
    const { id } = req.params;

    let data = await UserAccount.findByIdAndRemove(id);

    res.json({data:data, msg:"delete success"});
}

module.exports = { getUserAccount, getUserAccountByID, createUserAccount, UpdateUserAccount, RemoveUserAccount };