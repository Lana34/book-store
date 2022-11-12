import { useState } from "react";
import { setUser } from "../../store/userStore/userSlise";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { PagesNames } from "../../constants/pagesNames/pagesNames";
import "./authForm.css";

interface IPropsForm {
  activeTab: string;
}

export const AuthForm = ({ activeTab }: IPropsForm) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpStatus, setSignUpStatus] = useState("");
  const [signInStatus, setSignInStatus] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({ email: user.email, id: user.uid, token: user.refreshToken })
        );
        navigate(PagesNames.MAIN_PAGE);
      })
      .catch(() => setSignInStatus("Something went wrong..."));
  };

  const handleSignUp = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({ email: user.email, id: user.uid, token: user.refreshToken })
        );
        setSignUpStatus("Account successfully registered");
      })
      .catch(() => setSignUpStatus("Something went wrong..."));
  };

  return (
    <form className="authForm">
      <p className="authForm__inputName">
        <label htmlFor="email">Email</label>
      </p>
      <input
        className="authForm__email"
        type="email"
        id="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="authForm__inputName">
        <label htmlFor="password">Password</label>
      </p>
      <input
        className="authForm__password"
        type="password"
        id="password"
        placeholder="Your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {signUpStatus && activeTab === "signUp" ? (
        <p className="authForm__status">{signUpStatus}</p>
      ) : (
        <></>
      )}

      {signInStatus && activeTab === "signIn" ? (
        <p className="authForm__status">{signInStatus}</p>
      ) : (
        <></>
      )}

      {activeTab === "signIn" ? (
        <button
          type="button"
          className="authForm__button"
          onClick={() => handleSignIn(email, password)}
        >
          sign in
        </button>
      ) : (
        <button
          type="button"
          className="authForm__button"
          onClick={() => handleSignUp(email, password)}
        >
          sign up
        </button>
      )}
    </form>
  );
};
