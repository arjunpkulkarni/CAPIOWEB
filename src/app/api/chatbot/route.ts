import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful assistant for a tattoo shop. Only answer questions related to tattoos, artists, booking, pricing, and aftercare. If asked about anything else, politely decline.',
        },
        ...messages,
      ],
    });

    const responseContent = completion.choices[0].message.content;
    return NextResponse.json({ content: responseContent });
  } catch (error) {
    console.error('Error in chatbot API route:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
