"use server"

import { Resend } from 'resend';

const resend = new Resend("re_hW1yEY7V_Jj8GQbxgqMsBYJvKnsGtvV3p");

export const sendEmail = async (name: string, email: string, message: string) => {

    const emailres = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'akshayamohan.2401@gmail.com',
        subject: 'Message from Website',
        html: `<p><p>Name: ${name}<p> <p>Email ID: ${email} </p> <p>Message: ${message}</p></p>`
      });



    if(!emailres){
        return {error: "Something went wrong! Try Again"}
    }
    return {success: "Message Sent"}
}