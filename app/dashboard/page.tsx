import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center bg-blue-300 text-slate-100">
      <p className="text-red-800">Dashboard Page</p>
      <Link href="/dashboard/customers">Go to Customer Page</Link>
      <Link href="/dashboard/invoices">Go to Invoices Page</Link>
    </div>
  );
}
