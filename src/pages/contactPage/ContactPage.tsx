import { Contact, ContactInner, Title, ContactLeft, Input, Label, Form, TextArea, Button } from './ContactPage-styles'
import { SendOutlined } from '@ant-design/icons'
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data); // Handle form submission
  };
  return (
    <Contact>
      <ContactInner>
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