import { auth, provider } from "../firebase.config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import "../styles/Auth.css"
import Chatters from "../chatters.png"
import Google from "../icons8-google-240.png"

const cookies = new Cookies();

export const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="auth min-h-screen max-h-fit flex justify-center flex-row items-center">
       <div className="left"> <h2 className="welcome mobseen flex justify-center items-center">Welcome To{" "}<span className="flick">ChatRoom</span></h2>
      <h3 className="subtitle mobseen">&quot;Because spending time here is definitely more <br /> exciting than napping. Probably.&quot;</h3>
      <img className="chatimg" src={Chatters} alt="" /></div>
    
      <div className="container right flex flex-col"> <h2 className="welcome compseen flex ">Welcome To<span className="flick">ChatRoom</span></h2>
      <h3 className="subtitle compseen">&quot;Because spending time here is definitely more <br /> exciting than napping. Probably.&quot;</h3>
      <button name="btn" className="btn btnlogin" onClick={signInWithGoogle}> Sign In With <img className="h-10 w-10" src={Google} alt="" /> </button></div>
     
    </div>
  );
};