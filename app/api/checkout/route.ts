// app/api/checkout/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const body = await request.json();
	console.log('Order received:', body);
	// — simulate saving to a database —
	// await saveOrderToDb(body);

	return NextResponse.json({ success: true });
}
