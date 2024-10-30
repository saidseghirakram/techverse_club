import emailjs from "emailjs-com";

type Response = {
    status: number;
    message: string;
  };
  
  export async function mailSender(formData: HTMLFormElement | null): Promise<Response> {
    try {
      const emailResponse = await emailjs.sendForm(
        import.meta.env.VITE_API_SERVICE_ID,
        import.meta.env.VITE_API_TEMPLATE_ID,
        formData as HTMLFormElement,
        import.meta.env.VITE_API_PUBLIC_KEY
      );
  
      console.log("SUCCESS!", emailResponse.status, emailResponse.text);
  
      return {
        status: emailResponse.status,
        message: "Message sent successfully!",
      };
    } catch (err) {
      console.log("FAILED...", err);
  
      return {
        status: 500,
        message: "Error sending message.",
      };
    }
  }
  