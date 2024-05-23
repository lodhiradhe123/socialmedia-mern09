const nodemailer = require("nodemailer");

const sendmail = async (res, email, user) => {
    try {
        const url = `http://localhost:3000/forget-password/${user._id}`;

        const transport = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: "dhanesh1296@gmail.com",
                pass: "kfduexvqcauznvvy",
            },
        });

        const mailOptions = {
            from: "Social Media Private Ltd. <social@media.pvt.ltd>",
            to: email,
            subject: "Password Reset Link",
            text: "Do not share this link to anyone",
            html: `<a href="${url}">Reset Password Link</a>`,
        };

        transport.sendMail(mailOptions, async (err, info) => {
            if (err) return res.send(err);
            console.log(info);

            user.resetPasswordToken = 1;
            await user.save();

            res.send(
                `<h1 class="text-5xl text-center mt-5 bg-red-300">Check your inbox/spam.</h1>`
            );
        });
    } catch (error) {
        res.send(error);
    }
};

module.exports = sendmail;
