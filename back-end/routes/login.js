const bcrypt = require("bcrypt");
const Joi = require("joi");
const express = require("express");
const genAuthToken = require("../utils/genAuthToken");
const { User } = require("../models/user");

const router = express.Router();

router.post("/");
