import { NextResponse } from 'next/server';

export const runtime = 'edge'

export async function POST(request: Request) {
  if (!process.env.API_URL) throw new Error('Missing API_URL')

  const body = await request.json()

  const response = await fetch(process.env.API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await response.json()

  return NextResponse.json(data)
}
