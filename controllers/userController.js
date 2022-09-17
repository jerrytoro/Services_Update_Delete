const fs = require("fs");
const User = require("../models/User");
const catchAsync = require("../utils/catchAsync");

exports.getAllUsers = catchAsync(async (req, res) => {
    const users = await User.find();
    res.status(200).json({
        status: "success",
        timeOfRequest: req.requestTime,
        results: users.length,
        data: {
            users,
        },
    });
});

exports.addUser = catchAsync(async (req, res) => {
    const newUser = await User.create(req.body);
    res.status(200).json({
        status: "success",
        data: {
            user: newUser,
        },
    });
});

exports.getUserById = catchAsync(async (req, res) => {
    const foundUser = await User.findById(req.params.id);
    if (foundUser) {
        res.status(200).json({
            status: "success",
            data: {
                user: foundUser,
            },
        });
    } else {
        res.status(404).json({
            status: "not found",
        });
    }
});

exports.putUser = catchAsync(async (req, res) => {
    const foundUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (foundUser) {
        res.status(200).json({
            status: "updated",
            data: {
                user: foundUser,
            },
        });
    } else {
        res.status(404).json({
            status: "not found",
        });
    }
});

exports.deleteUser = catchAsync(async (req, res) => {
    const foundUser = await User.findByIdAndRemove(req.params.id);
    if (foundUser) {
        res.status(200).json({
            status: "delete",
            data: {
                user: foundUser,
            },
        });
    } else {
        res.status(404).json({
            status: "not found",
        });
    }
});