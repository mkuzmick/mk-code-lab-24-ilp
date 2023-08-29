import { NextResponse } from 'next/server'
const imageFolder = ""

export async function GET(request: Request) {
    console.log("received a request at ", (new Date()).getTime())
    return NextResponse.json({ ts: (new Date()).getTime()})
}


 
export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()
 
  return NextResponse.json({ data })
}