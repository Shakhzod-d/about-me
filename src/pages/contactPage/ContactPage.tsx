import { Contact, ContactInner, Title, ContactLeft, Input, Label, Form, TextArea, Button } from './ContactPage-styles'
import { SendOutlined } from '@ant-design/icons'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { message, Space } from 'antd';

const serviceId: string = 'service_7qosrul';
const templateId: string = 'template_z47bssf';
const publicKey: string = 'vQqCZPHbS2V__yZL0'


interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_name: 'Samandar',
      message: data.message
    }
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (data) => {
          if (data.status === 200) {
            messageApi.open({
              type: 'success',
              content: 'This is a success message',
            });
          }
        }
      ).catch(() => messageApi.open({
        type: 'error',
        content: 'This is an error message',
      }))
    reset()
  };
  return (
    <Contact>
      {contextHolder}
      <ContactInner id='contact'>
        <ContactLeft>
          <Title>Got a project in <span>mind?</span></Title>
        </ContactLeft>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', marginBottom: '24px' }}>
            <div>
              <Label htmlFor='name'>Your name</Label>
              <Input style={{ border: errors.name ? '2px solid #d63031' : 'none' }} type='text' {...register('name', { required: true })} id='name' placeholder='Name' />
            </div>
            <div>
              <Label htmlFor='email'>Your email</Label>
              <Input style={{ border: errors.email ? '2px solid #d63031' : 'none' }} type='text' {...register('email', {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email format',
                },
              })} id='email' placeholder='Email' />
            </div>
          </div>
          <div >
            <Label htmlFor='messsage'>Your message</Label>
            <TextArea style={{ border: errors.message ? '2px solid #d63031' : 'none' }} id='message' {...register('message')} placeholder='Message'></TextArea>
          </div>
          <Button type="submit">Send Message   <SendOutlined style={{ fontSize: '20px', rotate: '-45deg' }} /></Button>
        </Form>
      </ContactInner>
    </Contact>
  )
}

export default ContactPage