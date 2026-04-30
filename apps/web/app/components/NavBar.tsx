import { Link } from "react-router";
import logo from "../../../../assets/icon.svg";

export function NavBar() {
  return (
    <header className="border-b border-[#F5A623]/20 bg-[#1C1F26]">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link className="inline-flex items-center gap-3" to="/">
          <img
            alt="CodePharos"
            className="h-10 w-10 rounded-lg"
            src={logo}
          />
          <span className="hidden text-lg font-semibold text-[#FDE8C8] sm:inline">
            CodePharos
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link className="text-sm font-medium text-[#E8E0D4] hover:text-[#F5A623]" to="/posts">
            Posts
          </Link>
          <Link
            className="rounded-md bg-[#F5A623] px-3 py-2 text-sm font-medium text-[#1C1F26] hover:bg-[#FDE8C8]"
            to="/register"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
