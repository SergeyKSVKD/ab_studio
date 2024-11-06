import { Html } from "@react-email/html"
import { Text } from "@react-email/text"
import { Section } from "@react-email/section"
import { Container } from "@react-email/container"

type EmailType = {
  name: string,
  phone: string,
  mail: string,
  date: string,
}

export function WelcomeEmail(props: EmailType) {
  const {
    name,
    phone,
    mail,
    date,
  } = props

  return (
    <Html>
      <Section style={main}>
        <Section style={{
          textAlign: 'center',
          fontSize: '56px',
          fontWeight: "500",
          color: `white`,
          padding: '60px 0px',
        }}>AB_studio</Section>
        <Container style={container}>
          <Text style={{
            fontSize: "32px",
            lineHeight: "1.3",
            fontWeight: "700",
            color: "#484848",
            textAlign: 'start',
          }}>Запрос от пользователя {date}</Text>
          <Text style={{
            lineHeight: "1.4",
            color: "#484848",
            fontSize: '24px',
            textAlign: 'start',
          }}>Имя пользователя:</Text>
          <Text style={{
            fontSize: "32px",
            lineHeight: "1.3",
            fontWeight: "700",
            color: "#484848",
            textAlign: 'start',
          }}>{name}</Text>
          <Text style={{
            lineHeight: "1.4",
            color: "#484848",
            fontSize: '24px',
            textAlign: 'start',
          }}>Телефон для обратной связи:</Text>
          <Text style={{
            fontSize: "32px",
            lineHeight: "1.3",
            fontWeight: "700",
            color: "#484848",
            textAlign: 'start',
          }}>{phone}</Text>
          <Text style={{
            lineHeight: "1.4",
            color: "#484848",
            fontSize: '24px',
            textAlign: 'start',
          }}>Адрес электронной почты:</Text>
          <Text style={{
            fontSize: "32px",
            lineHeight: "1.3",
            fontWeight: "700",
            color: "#484848",
            textAlign: 'start',
          }}>{mail}</Text>
        </Container>
      </Section>
    </Html>
  )
}

// Styles for the email template
const main = {
  backgroundColor: 'black',
  height: '100%',
  width: '720px',
  paddingBottom: '40px',
}

const container = {
  // margin: "0 auto",
  padding: "20px 20px 48px",
  width: "720px",
  minHeight: '440px',
  maxHeight: '1920px',
  backgroundColor: '#fff',
  borderRadius: '20px',
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'start',
  justifyItems: 'start',
}