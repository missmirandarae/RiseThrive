export default function PaymentSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="rounded-2xl bg-white p-10 shadow-xl text-center">
        <h1 className="text-5xl font-bold text-green-600">
          🎉 Payment Successful
        </h1>

        <p className="mt-4 text-lg">
          Thank you! Your payment has been received.
        </p>
      </div>
    </main>
  );
}