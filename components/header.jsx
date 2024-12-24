import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";

const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src={"/logo2.png"}
            width={200}
            height={56}
            alt="logo"
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div>
          <Link href="/project/create">
            <Button variant="destructive" className="items-center flex gap-2">
              <PenBox size={18}/>
              <span>Create Project</span>
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
