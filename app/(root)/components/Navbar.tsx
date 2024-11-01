
import { auth, signIn, signOut } from "@/auth";

import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-5 text-black ">
          <Link className="" href="/">
            <Image src="/logo.jpeg" alt="logo" width={80} height={60}></Image>
          </Link>
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create </span>
              </Link>

              <button onClick={signOut}>
                <span>Logout</span>
              </button>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name} </span>
              </Link>
            </>
          ) : (
            <button onClick={() => signIn({ provider: "github" })}>
              <span>Login</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
