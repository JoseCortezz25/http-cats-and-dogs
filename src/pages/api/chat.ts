import { openai } from '@ai-sdk/openai';
import { convertToCoreMessages, streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// export async function POST(req: Request) {

// }

import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request }) => {

  if (request.headers.get('Content-Type') === 'application/json') {
    const formData = await request.json()
    const name = formData.name
    return new Response(
      JSON.stringify({
        message: 'Your name was: ' + name,
      }),
      {
        status: 200,
      }
    )
  }
  return new Response(null, { status: 400 })
  // const { messages } = await req.json();

  // const result = await streamText({
  //   model: openai('gpt-4-turbo'),
  //   system: 'You are a helpful assistant.',
  //   messages: convertToCoreMessages(messages),
  // });

  // return result.toDataStreamResponse();
  // return new Response(
  //   JSON.stringify({
  //     greeting: 'Hola',
  //   }),
  // )
}