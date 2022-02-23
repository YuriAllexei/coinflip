import LoginButton from "../../Components/login/login_button";

import "../Sign/login.css";

function Login({ sign, setSign }) {
  return (
    <div>
      <div>
        <div>
          <div className="one">
            <h1 className="texto space welcome">Welcome to Wanortu Casino!</h1>
          </div>
        </div>
        <div>
          <div className="two">
            <div className="centerBut">
              <LoginButton className="log" setSignIn={setSign} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
