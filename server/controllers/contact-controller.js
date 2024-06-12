const nodemailer = require('nodemailer');
const Contact = require('../models/contact-model');

const transporter = nodemailer.createTransport({
    service: 'Gmail', // or any other email service
    auth: {
        user: 'dhetvi2005@gmail.com', // replace with your email
        pass: 'fhlo aktx bhqr ause' // replace with your email password or an app-specific password
    }
});

const handleContactForm = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const newContact = new Contact({ name, email, phone, message });
        const savedContact = await newContact.save();

        // Send autoresponse email
        const mailOptions = {
            from: 'dhetvi2005@gmail.com',
            to: email,
            subject: 'Thank you for contacting us!',
            text: `Hello ${name},\n\nThank you for your message! We will get back to you soon.\n\nBest regards,\nCODERSDANE`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.json(savedContact);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = handleContactForm;


// const Contact = require('../models/contact-model');

// const handleContactForm = async (req, res) => {
//     try {
//         const { name, email, phone, message } = req.body;
//         const newContact = new Contact({ name, email, phone, message });
//         const savedContact = await newContact.save();
//         res.json(savedContact);
//     } catch (error) {
//         res.json({ error: error.message });
//     }
// };

// module.exports = handleContactForm ;

