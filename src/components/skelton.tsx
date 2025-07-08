"use client";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import "../style/skelton.css";
import { FaSun, FaMoon } from "react-icons/fa";

type Props = {
  data: {
    geistSans: NextFontWithVariable;
    geistMono: NextFontWithVariable;
    children: ReactNode;
  };
};

export default function Skelton({ data }: Props) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  function onClickMoonIcon() {
    setIsDark(!isDark);
  }

  return (
    <body className={`${data.geistSans.variable} ${data.geistMono.variable}`}>
      <div className="skelton-wrapper">
        <div className="tag-header-wrapper">
          <div className="header-mode">
            <header className="">
              <h1>Expense Tracker</h1>
            </header>
            <div onClick={onClickMoonIcon} className="theme-icon">
              <FaSun
                className={`icon fa-sun ${isDark ? "hidden" : "visible"}`}
              />
              <FaMoon
                className={`icon fa-moon ${isDark ? "visible" : "hidden"}`}
              />
            </div>
          </div>
          <div className="tabs-wrapper">
            <Link href="/">Home</Link>
            <Link href="/analytics">Analytics View</Link>
          </div>
        </div>
        <div> {data.children}</div>
      </div>
    </body>
  );
}
