import nodemailer from "nodemailer";

async function sendEmail({ to, cc, bcc, subject, html, attachments = [] } = {}) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.gmail,
            pass: process.env.gmailPass,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    /*
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.gmail, // generated ethereal user
            pass: process.env.gmailPass, // generated ethereal password
        },
    });
*/
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `"Ice creame Super Man" <${process.env.gmail}>`, // sender address
        to ,
        cc,
        bcc,
        subject,
        html,
        attachments
    });

 
    return info.rejected.length ? false : true
}



export default sendEmail