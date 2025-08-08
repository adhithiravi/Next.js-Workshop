// app/checkout/actions.ts
'use server';

import { redirect } from 'next/navigation';

export async function submitOrder(formData: FormData) {
  // parse the cart items from the form
  const items = JSON.parse(formData.get('items') as string);

  // — simulate saving to a database —
  console.log('Order received:', items);
  // await saveOrderToDb(items);

  // redirect into your confirmation page
  redirect('/checkout/confirmation');
}
