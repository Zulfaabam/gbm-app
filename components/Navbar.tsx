import Link from "next/link";
import React from "react";
import { Button } from "./Button";

export const Navbar = () => {
  return (
    <div className="navbar bg-dark px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56"
          >
            <li tabIndex={0}>
              <a className="justify-between">
                Pelayanan
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-white">
                <li>
                  <a>Sewa Alkes</a>
                </li>
                <li>
                  <a>PO Alkes</a>
                </li>
                <li>
                  <a>Konsultasi Online</a>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Event
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-white">
                <li>
                  <a>Event GBM</a>
                </li>
                <li>
                  <a>Event Partnership</a>
                </li>
              </ul>
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
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-white">
                <li>
                  <Link href="/register">Sign up</Link>
                </li>
                <li>
                  <Link href="/login">Log in</Link>
                </li>
              </ul>
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
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-white">
              <li>
                <a>Sewa Alkes</a>
              </li>
              <li>
                <a>PO Alkes</a>
              </li>
              <li>
                <a>Konsultasi Online</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a className="text-white">
              Pelayanan
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-white">
              <li>
                <a>Event GBM</a>
              </li>
              <li>
                <a>Event Partnership</a>
              </li>
            </ul>
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
