const express = require('express');
const mongoose = require('mongoose');
const { title } = require('process');
const TimeTables = require('../models/TimeTablesSchema.js');


const createTimeTables = async (req, res) => {
    const timetables = req.body;

    const newDetail = new TimeTables(timetables)
    console.log("saved data", newDetail);
    try {
        await newDetail.save();

        res.status(201).json({ newDetail });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
const getTimeTableByID = async (req, res) => {
    const { id } = req.params;

    try {
        const details = await TimeTables.findById(id);

        res.status(200).json(details);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const getTimeTables = async (req, res) => {
    try {
        const details = await TimeTables.find();

        res.status(200).json(details);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}





const UpdateTimeTables = async (req, res) => {
    const { id } = req.params;
    const { Bus_ID,Route,Start_Time,End_Time,Bus_Number } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No accept with id: ${id}`);

    const updatedDetails = {Bus_ID:Bus_ID,Route:Route,Start_Time:Start_Time,End_Time:End_Time,Bus_Number:Bus_Number , _id: id };

    await TimeTables.findByIdAndUpdate(id, updatedDetails, { new: true });

    res.json(updatedDetails);
}
const RemoveTimeTables = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);
  
    await TimeTables.findByIdAndRemove(id);
  
    res.json({ message: "Timetable deleted successfully." });
  };

module.exports = { getTimeTables, getTimeTableByID, createTimeTables, UpdateTimeTables, RemoveTimeTables };