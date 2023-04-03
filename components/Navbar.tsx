import Link from "next/link";
import React from "react";
import { Button } from "./Button";
import { HiMenuAlt1 } from "react-icons/hi";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

export interface DropdownMenuProps {
  children: React.ReactNode;
}

const DropdownMenu = ({ children }: DropdownMenuProps) => (
  <ul className="p-2 bg-white z-10">{children}</ul>
);

export const Navbar = () => {
  return (
    <div className="navbar bg-dark px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
            <HiMenuAlt1 className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56"
          >
            <li tabIndex={0}>
              <a className="justify-between">
                Pelayanan
                <MdOutlineKeyboardArrowRight className="fill-current h-6 w-6" />
              </a>
              <DropdownMenu>
                <li>
                  <Link href="/sewa">Sewa Alkes</Link>
                </li>
                <li>
                  <Link href="/pre-order">PO Alkes</Link>
                </li>
                <li>
                  <Link href="/konsultasi">Konsultasi Online</Link>
                </li>
              </DropdownMenu>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Event
                <MdOutlineKeyboardArrowRight className="fill-current h-6 w-6" />
              </a>
              <DropdownMenu>
                <li>
                  <a>Event GBM</a>
                </li>
                <li>
                  <a>Event Partnership</a>
                </li>
              </DropdownMenu>
            </li>
            <li>
              <a>Informasi</a>
            </li>
            <li>
              <a>Artikel</a>
            </li>
            <li>
              <a>Tentang Kami</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Sign up/Log in
                <MdOutlineKeyboardArrowRight className="fill-current h-6 w-6" />
              </a>
              <DropdownMenu>
                <li>
                  <Link href="/register">Sign up</Link>
                </li>
                <li>
                  <Link href="/login">Log in</Link>
                </li>
              </DropdownMenu>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-white" href="/">
          GBM Undip
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <a className="text-white">
              Pelayanan
              <MdOutlineKeyboardArrowDown className="fill-current h-5 w-5" />
            </a>
            <DropdownMenu>
              <li>
                <Link href="/sewa">Sewa Alkes</Link>
              </li>
              <li>
                <Link href="/pre-order">PO Alkes</Link>
              </li>
              <li>
                <Link href="/konsultasi">Konsultasi Online</Link>
              </li>
            </DropdownMenu>
          </li>
          <li tabIndex={0}>
            <a className="text-white">
              Event
              <MdOutlineKeyboardArrowDown className="fill-current h-5 w-5" />
            </a>
            <DropdownMenu>
              <li>
                <a>Event GBM</a>
              </li>
              <li>
                <a>Event Partnership</a>
              </li>
            </DropdownMenu>
          </li>
          <li>
            <a className="text-white">Informasi</a>
          </li>
          <li>
            <a className="text-white">Artikel</a>
          </li>
          <li>
            <a className="text-white">Tentang Kami</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex lg:gap-2">
        <Link href="/register">
          <Button content="Sign up" className="btn-secondary" />
        </Link>
        <Link href="/login">
          <Button content="Log in" />
        </Link>
      </div>
    </div>
  );
};
