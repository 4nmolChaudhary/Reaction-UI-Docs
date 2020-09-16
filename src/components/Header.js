import React from "react";
import Logo from "../components/Logo";
import { Link } from "gatsby";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <Logo width={150} />
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="https://github.com/4nmolChaudhary/Reaction" className="link">
          <svg xmlns="http://www.w3.org/2000/svg" width="27.106" height="26.429" viewBox="0 0 27.106 26.429">
            <path id="github" d="M9.066,29.281c0,.109-.126.2-.284.2-.18.016-.306-.071-.306-.2,0-.109.126-.2.284-.2C8.924,29.067,9.066,29.155,9.066,29.281Zm-1.7-.246c-.038.109.071.235.235.268a.256.256,0,0,0,.339-.109c.033-.109-.071-.235-.235-.284a.281.281,0,0,0-.339.126Zm2.416-.093c-.158.038-.268.142-.251.268.016.109.158.18.322.142s.268-.142.251-.251S9.941,28.925,9.782,28.942ZM13.378,8A13.1,13.1,0,0,0,0,21.335,13.7,13.7,0,0,0,9.263,34.407c.7.126.945-.306.945-.661,0-.339-.016-2.208-.016-3.355,0,0-3.825.82-4.629-1.629,0,0-.623-1.59-1.519-2,0,0-1.251-.858.087-.842a2.885,2.885,0,0,1,2.109,1.41,2.889,2.889,0,0,0,3.984,1.142A3.037,3.037,0,0,1,11.1,26.63c-3.055-.339-6.137-.781-6.137-6.039a4.142,4.142,0,0,1,1.29-3.219,5.163,5.163,0,0,1,.142-3.711c1.142-.355,3.771,1.476,3.771,1.476a12.91,12.91,0,0,1,6.864,0S19.657,13.3,20.8,13.662a5.161,5.161,0,0,1,.142,3.711,4.248,4.248,0,0,1,1.41,3.219c0,5.274-3.219,5.694-6.274,6.039a3.232,3.232,0,0,1,.929,2.536c0,1.842-.016,4.121-.016,4.569,0,.355.251.787.945.661a13.575,13.575,0,0,0,9.17-13.061A13.4,13.4,0,0,0,13.378,8ZM5.312,26.849c-.071.055-.055.18.038.284.087.087.213.126.284.055.071-.055.055-.18-.038-.284C5.509,26.816,5.383,26.778,5.312,26.849Zm-.59-.443c-.038.071.016.158.126.213a.163.163,0,0,0,.235-.038c.038-.071-.016-.158-.126-.213C4.847,26.335,4.76,26.351,4.722,26.406Zm1.771,1.946c-.087.071-.055.235.071.339.126.126.284.142.355.055.071-.071.038-.235-.071-.339C6.727,28.28,6.563,28.264,6.492,28.352Zm-.623-.8c-.087.055-.087.2,0,.322s.235.18.306.126a.249.249,0,0,0,0-.339c-.077-.126-.219-.18-.306-.109Z" transform="translate(0 -8)" />
          </svg>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
