const path = require("path");
const Jimp = require("jimp");
const fs = require("fs/promises");
const { User } = require("../../models/user");

const avatarsDir = path.resolve("public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;
  const image = await Jimp.read(tempUpload);
  image.resize(250, 250);
  image.writeAsync(tempUpload);
  const resultUpload = path.join(avatarsDir, filename);
  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({ avatarURL });
};

module.exports = {
  updateAvatar,
};