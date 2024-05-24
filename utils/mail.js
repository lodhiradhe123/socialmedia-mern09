const nodemailer = require("nodemailer");

const sendmail = async (res, user, url) => {
    try {
        const transport = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: "dhanesh1296@gmail.com",
                pass: "kfduexvqcauznvvy",
            },
        });

        const mailoptions = {
            from: "<Social Media Private Limited>",
            to: user.email,
            subject: "User Reset Password",
            text: "",
            html: `<a href=${url}>Reset Password Link</a>`,
        };

        transport.sendMail(mailoptions, async (err, info) => {
            if (err) res.send(err);
            console.log(info);

            user.resetPasswordToken = 1;
            await user.save();

            res.send(
                `<h1 style="text-align:center; margin-top: 20px; color: tomato;">Check Inbox/Spam</h1>`
            );
        });
    } catch (error) {
        res.send(error);
    }
};

module.exports = sendmail;
