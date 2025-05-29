import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const sendEmail = async (formData: FormData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: 'priyeshsingh571@gmail.com',
      subject: `New Demo Request from ${formData.name}`,
      message: `
New Demo Request Details:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}

---
This message was sent from the Trackway website contact form.
      `,
    };

    const response = await emailjs.send(
      'service_wlewsun',
      'template_hf8uex1',
      templateParams,
      'PPccQvFwY-vfKl1Ps'
    );

    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}; 