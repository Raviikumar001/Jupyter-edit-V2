import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
     
     Click <Link href="/documents/123">
     <span className="text-blue-300 underline">
     here
     </span>
     
     </Link> to got to document id
    </div>
  );
}
