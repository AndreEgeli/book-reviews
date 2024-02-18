import Link from 'next/link';
import { BookText } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="bg-transparent py-2 fixed w-full z-10 top-0 text-white">
      <div className="container flex items-center justify-start px-6">
        <div data-tip="Home">
          <Link href="/">
            <BookText className="cursor-pointer text-black bg-transparent hover:bg-white hover:bg-opacity-20" />
          </Link>
        </div>
        <Link
          className={` cursor-pointer text-black bg-transparent hover:bg-white hover:bg-opacity-20 ml-4 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background`}
          href="/books"
        >
          See Books
        </Link>
        <Link
          className={`cursor-pointer text-black bg-transparent hover:bg-white hover:bg-opacity-20 ml-auto whitespace-nowrap rounded-md text-sm font-medium ring-offset-background`}
          href="/sign-in"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
