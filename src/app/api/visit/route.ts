import { NextResponse } from 'next/server';
import Redis from 'ioredis';

// Connexion à Redis
const redis = new Redis(process.env.REDIS_URL as string);

export async function GET() {
  try {
    const count = await redis.incr('visitor_count');
    return NextResponse.json({ success: true, count });
  } catch (error) {
    console.error("Erreur KV:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}