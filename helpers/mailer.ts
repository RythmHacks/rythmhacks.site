import nodemailer from 'nodemailer';
import User from '@/models/user';
import bcrypt from 'bcryptjs';

export const sendEmail = async({email, emailType, userId}) => {
    try {
        const hashedtoken = await bcrypt.hash(userId.toString(), 10)

       
        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, 
                {verificationToken: hashedtoken, verificationExpires: Date.now() + 3600000});
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, 
                {resetPasswordToken: hashedtoken, resetPasswordExpires: Date.now() + 3600000});
        }

        // Looking to send emails in production? Check out our Email API/SMTP product!
        // Looking to send emails in production? Check out our Email API/SMTP product!
        const transport = nodemailer.createTransport({
          host: "sandbox.smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: "f0d044bf91e238",
            pass: "cc17117c974eeb"
          }
        });

        const mailOptions = {
            from: "",
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedtoken}">
            here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy paste link in your browser: <br>${process.env.DOMAIN}/verifyemail?token=${hashedtoken}</br></p>`
        }

        const mailresponse = await transport.sendMail(mailOptions);
        return mailresponse;

    } catch (error) {
        throw new Error("Error sending email");
    }
}