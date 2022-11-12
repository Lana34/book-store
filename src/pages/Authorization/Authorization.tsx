import { AuthForm } from "../../components/AuthForm/AuthForm";
import { useState } from "react";
import "./authorization.css";

export const Authorization = () => {
  const [activeTab, setActiveTab] = useState("signIn");

  return (
    <div className="authForm__wrapper">
      <div className="authForm__tabs">
        <div
          className={
            activeTab === "signIn" ? "authForm__tab activeTab" : "authForm__tab"
          }
          onClick={() => setActiveTab("signIn")}
        >
          sign in
        </div>
        <div
          onClick={() => setActiveTab("signUp")}
          className={
            activeTab === "signUp" ? "authForm__tab activeTab" : "authForm__tab"
          }
        >
          sign up
        </div>
      </div>
      <AuthForm activeTab={activeTab} />
    </div>
  );
};
