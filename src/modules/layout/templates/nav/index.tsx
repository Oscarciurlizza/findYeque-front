"use client";

import AuthButtons from "@modules/layout/components/auth-buttons";
import Logo from "@modules/layout/components/logo";
import SearchInput from "@modules/layout/components/search-input";
import UserDropdown from "@modules/layout/components/user-dropdown";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="p-4 border-b border-black">
      <div className="container mx-auto flex justify-between items-center">
        <section>
          <Logo />
        </section>

        {/* Search Bar Section */}
        {pathname == "/" && (
          <section>
            <SearchInput />
          </section>
        )}

        {/* User Dropdown Section */}
        <section>
          <UserDropdown />
          {
            // <AuthButtons />
          }
        </section>
      </div>
    </nav>
  );
}
