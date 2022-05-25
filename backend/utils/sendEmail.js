
const nodemailer= require('nodemailer');




const sendEmail=(options,res)=>{
  return new Promise((res,rej)=>{

 

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
     
        auth: {
          user: process.env.SMTP_EMAIL,

          pass: process.env.SMTP_PASSWORD
        }
      });
      const message={
          from:`${process.env.SMTP_FROM_NAME} < ${process.env.SMTP_FROM_EMAIL}`,
          to: options.email,
          subject:options.subject,
          text:options.message
      }
      transport.sendMail(message,(err,succ)=>{
        if (err){
            rej(err)
        }else{
          res(succ)
        }
      })
    })

}


module.exports=sendEmail