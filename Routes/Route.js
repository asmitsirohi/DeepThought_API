const express = require("express");
const getData = require("../utils/getData");
const validateType = require("../utils/validateType");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "Api is running." });
});

router.get("/:type", async (req, res) => {
  try {
    const type = req.params.type;

    const isValid = validateType(type);

    let data;

    if (isValid) {
      data = await getData(type);
    } else {
      data = "Please enter valid endpoint.";
    }

    res.status(200).json({ response: data });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong.", error });
  }
});

module.exports = router;
