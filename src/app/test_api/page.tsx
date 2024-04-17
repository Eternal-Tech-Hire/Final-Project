import Link from "next/link";

export default function Home() {



  return (
    <>
      <main>
      <h1 className="font-bold">LINK TESTING API</h1>
      <h2>Authetication</h2>
      <div className="flex gap-2">
        <Link className="btn" href="/test_api/login">Login</Link>
        <Link className="btn btn-warning" href="/test_api/register">Register</Link>        
      </div>

      <h2>Ticket</h2>
      <div className="flex gap-2">
        <Link className="btn" href="/test_api/ticket">Ticket (ADD/SHOW ALL)</Link>
      </div>


      <h2>Event</h2>
      <div className="flex gap-2">
        <Link className="btn bg-red-600" href="/test_api/event">Event (ADD/SHOW ALL)</Link>
      </div>

      <h2>Category</h2>
      <div className="flex gap-2">
        <Link className="btn bg-blue-200" href="/test_api/category">Category (ADD/SHOW ALL)</Link>
      </div>

      <h2>Company</h2>
      <div className="flex gap-2">
        <Link className="btn bg-green-500" href="/test_api/company">Company (ADD/SHOW ALL)</Link>
      </div>

      </main>
    </>
  );
}
