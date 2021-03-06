import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
// import { adjectives, nouns } from "./words";
// import nodemailer from "nodemailer";
// import mg from "nodemailer-mailgun-transport";

// export const generateSecret = () => {
//   const randomNumber = Math.floor(Math.random() * adjectives.length);
//   return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
// };

// const sendMail = (email) => {
//   const auth = {
//     auth: {
//       api_key: process.env.MAILGUN_API_KEY,
//       domain: process.env.MAILGUN_DOMAIN,
//     },
//   };
//   const nodemailerMailgun = nodemailer.createTransport(mg(auth));
//   return nodemailerMailgun.sendMail(email);
// };

// export const sendSecretMail = (secret, adress) => {
//   const email = {
//     from: "joon500006@gmail.com",
//     to: adress,
//     subject: `${adress.split("@")[0]}님, '쉐어플랜' 비밀번호 변경 안내입니다.`,
//     html: `안녕하세요. '쉐어플랜'에서 알려드립니다.<br/>
//     비밀번호 분실로 인하여 비밀번호 변경을 요청하였습니다.<br/>
//     만약 본인이 요청한 것이 아니라면 비밀번호 도용 위험이 있으니,<br/>
//     어플설정에 들어가셔서 비밀번호 변경 부탁드리며
//     기타 문의사항은 연락주시기 바랍니다.<br/>
//     <br/>
//     아래 진한색의 비밀키를 복사 후 '쉐어플랜' 어플리케이션에서 입력 바랍니다. <br/>
//      <strong>${secret}</strong>`,
//   };
//   return sendMail(email);
// };

export const generateToken = (id) => jwt.sign({ id }, process.env.SECRET);
