import aws from "aws-sdk";
import dotenv from "dotenv";
import multer from "multer";
import multerS3 from "multer-s3";
dotenv.config();

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY,
  region: "ap-northeast-2",
});

console.log(process.env.AWS_ACCESS_ID);

const upload = multer({
  storage: multerS3({
    s3,
    bucket: "infectsoul",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});
export const uploadMiddleware = upload.array("file", 10);

export const uploadController = (req, res) => {
  const { files } = req;
  const location = files.map((obj) => obj.location);
  res.json({ location });
};
