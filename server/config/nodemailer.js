import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    // host: "smtp-relay.brevo.com",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service: 'gmail', // Use 'gmail' or your SMTP service
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export default transporter;