import Link from "next/link";
import React, { useState } from "react";
import MyButton from "./MyButton";
import { HiMenuAlt1 } from "react-icons/hi";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { User } from "firebase/auth";
import UserProfileModal from "./modals/UserProfileModal";
import logOut from "@/firebase/auth/signout";
import { useRouter } from "next/router";
import { Avatar } from "@mui/material";
import { useSnackbar } from "notistack";
import MyOrderModal from "./modals/MyOrderModal";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const DropdownMenu: React.FC = ({ children }) => (
  <ul className="p-2 bg-white z-10">{children}</ul>
);

interface NavbarProps {
  user: User | null;
}

export const Navbar = ({ user }: NavbarProps) => {
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [openOrderModal, setOpenOrderModal] = useState(false);

  function handleOpenProfileModal() {
    setOpenProfileModal(true);
  }

  function handleCloseProfileModal() {
    setOpenProfileModal(false);
  }

  function handleOpenOrderModal() {
    setOpenOrderModal(true);
  }

  function handleCloseOrderModal() {
    setOpenOrderModal(false);
  }

  async function handleSignOut() {
    const { res, error } = await logOut();

    if (error) {
      return enqueueSnackbar(
        error instanceof Error ? error.toString() : "Sign Out gagal!",
        { variant: "error" }
      );
    }

    cookies.remove("auth-token");

    enqueueSnackbar("Anda telah keluar", { variant: "info" });
    router.push("/login");
  }

  return (
    <div className="navbar bg-dark px-2 sm:px-4 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
            <HiMenuAlt1 className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-44 sm:w-56"
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
              <Link href="/company-profile">Tentang kami</Link>
            </li>
            {user ? (
              <li tabIndex={0}>
                <a className="justify-between">
                  {user.displayName || user.email}
                  <MdOutlineKeyboardArrowRight className="fill-current h-6 w-6" />
                </a>
                <DropdownMenu>
                  <li>
                    <MyButton
                      content="Profil saya"
                      className="capitalize"
                      onClick={handleOpenProfileModal}
                    />
                  </li>
                  <li>
                    <MyButton
                      content="Pesanan saya"
                      className="capitalize"
                      onClick={handleOpenOrderModal}
                    />
                  </li>
                  <li>
                    <MyButton
                      content="Sign out"
                      className="capitalize"
                      onClick={handleSignOut}
                    />
                  </li>
                </DropdownMenu>
              </li>
            ) : (
              <li tabIndex={0}>
                <a className="justify-between">
                  Bergabung
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
            )}
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
            <Link href="/company-profile" className="text-white">
              Tentang kami
            </Link>
          </li>
        </ul>
      </div>
      {user ? (
        <div className="navbar-end hidden lg:flex lg:gap-2">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <a className="text-white flex gap-2">
                <Avatar
                  src={user.photoURL || ""}
                  alt={`${user.displayName} photo`}
                  className="w-10 h-10"
                />
                <p>{user.displayName || user.email}</p>
              </a>
              <DropdownMenu>
                <li>
                  <MyButton
                    content="Profil saya"
                    className="capitalize"
                    onClick={handleOpenProfileModal}
                  />
                </li>
                <li>
                  <MyButton
                    content="Pesanan saya"
                    className="capitalize"
                    onClick={handleOpenOrderModal}
                  />
                </li>
                <li>
                  <MyButton
                    content="Sign out"
                    className="capitalize"
                    onClick={handleSignOut}
                  />
                </li>
              </DropdownMenu>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-end hidden lg:flex lg:gap-2">
          <Link href="/register">
            <MyButton content="Sign up" className="btn-secondary" />
          </Link>
          <Link href="/login">
            <MyButton content="Log in" />
          </Link>
        </div>
      )}
      {openProfileModal ? (
        <UserProfileModal
          open={openProfileModal}
          onClose={handleCloseProfileModal}
        />
      ) : null}
      {openOrderModal ? (
        <MyOrderModal open={openOrderModal} onClose={handleCloseOrderModal} />
      ) : null}
    </div>
  );
};
