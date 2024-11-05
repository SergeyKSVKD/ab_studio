import { NextResponse } from "next/server";
const nodemailer = require("nodemailer")
import { render } from '@react-email/render';
import { WelcomeEmail } from '../../../emails/EmailTemplate'

async function sendMail(data: any) {
  const name = data?.name
  const phone = data?.phone
  const mail = data?.mail
  const date = data?.date

  const formattedBody = await render(WelcomeEmail({
    name,
    phone,
    mail,
    date,
  }));

  const transporter = nodemailer.createTransport({
    host: 'mail.samgtu.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'questionnaire@samgtu.ru',
      pass: '89uH5RTvgD',
    }
  })

  return await transporter.sendMail({
    from: 'questionnaire@samgtu.ru',
    to: 'questionnaire@samgtu.ru',
    subject: `Заявка с сайта от пользователя ${name}`,
    html: formattedBody,
  })
}

export async function POST(request: Request) {
  const body = await request.json()

  try {
    const r2 = await sendMail({ ...body })
    if (r2?.messageId) {
      return NextResponse.json({ status: 'Сообщение успешно отправлено' });
    } else {
      return NextResponse.json({ status: "Сообщение не отправлено" })
    }
  } catch (error: any) {
    return NextResponse.json({ status: `error`, message: `${error.message}` })
  }
}