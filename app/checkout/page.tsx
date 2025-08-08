// app/checkout/page.tsx  ← Server Component
import OrderFormServer from './OrderFormServer';

export default function CheckoutPage() {
	return (
		<main className="max-w-xl mx-auto p-8">
			<h1 className="text-3xl font-bold mb-6">Checkout</h1>
			<OrderFormServer />
		</main>
	);
}
