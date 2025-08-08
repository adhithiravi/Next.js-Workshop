// app/checkout/OrderFormServer.tsx
import { cookies } from 'next/headers';
import { submitOrder } from './actions';
import SubmitButton from '../components/SubmitButton';

export default async function OrderFormServer() {
  const cookieStore = await cookies();
  const raw = cookieStore.get('cart')?.value ?? '[]';
  const items = JSON.parse(decodeURIComponent(raw));

  const total = items.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  return (
    <form action={submitOrder} className="space-y-4">
      {items.map((item: any) => (
        <div key={item.id} className="flex justify-between">
          <span>{item.name} x {item.quantity}</span>
          <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}

      <input
        type="hidden"
        name="items"
        value={JSON.stringify(items)}
      />

      <div className="flex justify-between font-semibold text-lg">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>

      {/* this is the client-only button */}
      <SubmitButton total={total} />
    </form>
  );
}
