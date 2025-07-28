import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface Attachment {
  filename: string;
  content: Buffer;
}

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY || 're_dj66UL7t_EtWeuJptqJCH1LqGYgezaRrQ');

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const placement = formData.get('placement') as string;
    const width = formData.get('width') as string;
    const height = formData.get('height') as string;
    const description = formData.get('description') as string;
    const files = formData.getAll('files') as File[];

    let attachments: Attachment[] = [];
    if (files && files.length > 0) {
        attachments = await Promise.all(files.map(async (file) => {
            const buffer = await file.arrayBuffer();
            return {
                filename: file.name,
                content: Buffer.from(buffer),
            };
        }));
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Must be a verified domain on Resend
      to: 'capio.tattoo.studio@gmail.com', // Your email address
      subject: `New Tattoo Inquiry from ${name}`,
      html: `
        <h1>New Tattoo Inquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Placement:</strong> ${placement}</p>
        <p><strong>Size:</strong> ${width}" x ${height}"</p>
        <p><strong>Description:</strong></p>
        <p>${description}</p>
      `,
      attachments: attachments,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    let errorMessage = 'An unknown error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
} 