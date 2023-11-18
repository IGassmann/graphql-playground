import { NextResponse } from 'next/server';

export const runtime = 'edge'

export async function POST(request: Request) {
  if (!process.env.RAILWAY_API_URL) throw new Error('Missing RAILWAY_API_URL')
  if (!process.env.RAILWAY_API_TOKEN) throw new Error('Missing RAILWAY_API_TOKEN')

  const body = await request.json()

  const response = await fetch(process.env.RAILWAY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.RAILWAY_API_TOKEN}`,
    },
    body: JSON.stringify(body),
  })

  const data = await response.json()

  return NextResponse.json(data)
}
