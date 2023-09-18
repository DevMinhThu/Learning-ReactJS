import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Images } from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

console.log(Images.logo);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* LOGO */}
        <img src={Images.Logo} alt="Tiktok" />

        {/* SEARCH */}
        <div className={cx("search")}>
          <input placeholder="Search account and video" spellCheck={false} />
          <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        {/* ACTION */}
        <div className={cx("action")}></div>
      </div>
    </header>
  );
}

export default Header;
