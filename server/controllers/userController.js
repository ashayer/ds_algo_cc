import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import mongoose from "mongoose";

export const signin = async (req, res) => {
    
    const {email, password} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(!existingUser) return res.status(404).json({message: "User doesn't exist"});
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) return  res.status(400).json({message: "Invalid credentials"});
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: "7d"});
        res.status(200).json({result: existingUser, token});
    } catch (error) {
        res.status(500).json({message: "Something went wrong."});
    }
}

export const signup = async (req, res) => {

    const {firstName, lastName, email, password, confirmPassword} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(404).json({message: "User already exists."});
        if(password !== confirmPassword) return res.status(400).json({message: "Passwords don't match"});
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({email, password:hashedPassword, name: `${firstName} ${lastName}`, points:0});
        const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: "7d"});
        res.status(200).json({result: result, token});
    } catch (error) {
        res.status(500).json({message: "Something went wrong."});
    }
}


export const updatePoints = async (req, res) => {

    const {id} = req.params;
    const newPoints = req.body;
    const updatedPoints = await User.findByIdAndUpdate(id,  newPoints);
    res.json(updatedPoints);
    

};

export const getPoints = async (req, res) => {
    const {id} = req.params;

    try {
        const points = await User.findById(id);
        res.status(200).json(points);


    } catch (error) {
        res.status(404).json({message: error.message});        
    }
    

};