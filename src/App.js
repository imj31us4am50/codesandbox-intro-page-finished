import "./styles.css";
import Logo from "/components/Logo.js";
import App1 from "/signupform/App1.js";
import App2 from "/sidedesc/App2.js";
import Extra from "/components/Extra.js";

export default function App() {
  return (
    <div className="container-fluid">
      <Logo />
      <div className="mt-5 mx-auto ddoa">
        <App1 className="ditem a" />
        <App2 className="ditem b" />
      </div>
      <Extra />
    </div>
  );
}
