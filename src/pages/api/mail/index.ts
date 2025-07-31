import type { APIRoute } from 'astro';
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

async function sendEmail(body: { fullName: string; email: string; message: string }) {
  const { fullName, email, message } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['luiseducol13@gmail.com'],
      subject: `New message from ${fullName}`,
      html: `<p><strong>From:</strong> ${fullName} (${email})</p><p>${message}</p>`,
    });

    if (error) {
      console.error("Error sending email:", error);
      throw new Error(error.message);
    }

    console.log("Email sent successfully:", data);
    return data;
  } catch (error: any) {
    console.error("Error sending email:", error);
    throw new Error(error.message);
  }
}
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    console.log(body);
    await sendEmail(body); 
    return new Response(JSON.stringify({ success: true, data: "mail" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error: any) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500, 
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}