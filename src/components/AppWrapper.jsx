import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";

import Cookies from "universal-cookie";
import Logo from "../headerlogo.svg"
const cookies = new Cookies();

export const AppWrapper = ({ children, isAuth, setIsAuth, setIsInChat }) => {
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setIsInChat(false);
  };

  return (
    <><div className="navbar bg-base-100 fixed top-0 z-50 h-10">
      <div className="navbar-start">
      <a href="/" className="btn btn-ghost text-xl">CHATROOM <svg className="headlogo" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="295.000000pt" height="412.000000pt" viewBox="0 0 295.000000 412.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,412.000000) scale(0.100000,-0.100000)"
fill="currentColor" stroke="currentColor" width="8" height="8">
<path d="M1355 4019 c-339 -49 -667 -222 -901 -472 -90 -97 -209 -271 -260
-381 -57 -124 -111 -303 -130 -427 -25 -173 -15 -406 24 -559 73 -285 202
-515 404 -721 209 -214 494 -364 806 -425 48 -9 89 -19 92 -21 3 -3 7 -206 10
-453 5 -433 6 -450 26 -476 46 -62 116 -90 180 -73 41 12 74 42 529 474 197
187 415 393 484 458 153 144 173 173 168 243 -4 60 -32 105 -81 128 -40 19
-122 21 -152 3 -12 -7 -198 -178 -414 -382 -215 -203 -396 -371 -401 -373 -5
-2 -9 23 -10 55 -11 579 -13 617 -37 651 -37 51 -74 64 -202 73 -63 4 -139 12
-169 18 -69 14 -222 66 -286 98 -299 150 -536 439 -623 761 -24 90 -26 112
-26 302 0 190 2 212 27 305 55 205 159 379 321 540 166 164 310 246 551 311
l100 27 652 6 c641 6 652 6 680 27 94 70 98 191 7 260 l-37 29 -636 1 c-350 1
-663 -2 -696 -7z"/>
<path d="M1010 2669 c-32 -13 -88 -66 -107 -103 -25 -49 -21 -136 11 -190 57
-97 186 -132 274 -74 67 45 96 91 100 163 6 90 -31 155 -110 196 -41 21 -125
25 -168 8z"/>
<path d="M1695 2663 c-74 -39 -115 -105 -115 -188 0 -124 133 -229 249 -195
98 28 170 127 157 215 -10 78 -58 144 -123 171 -43 19 -131 17 -168 -3z"/>
<path d="M2400 2669 c-32 -13 -88 -66 -107 -103 -22 -43 -19 -134 6 -184 56
-109 209 -139 306 -60 117 97 92 284 -47 343 -42 17 -120 19 -158 4z"/>
</g>
</svg></a>
      </div>
      <div className="navbar-end">
      <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">
    Theme
    
  </div>
  <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Forest" value="forest"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
  </ul>
</div>
        
      
        {isAuth && (
          <div className="sign-out w-full flex justify-end">
            <button className="btn btn-error" onClick={signUserOut}> Sign Out</button>
          </div>
        )}
      </div>
    </div><div>{children}</div></>
      
  );
};
