import "./styles.css";
import Logo from "/components/Logo.js";
import Video from "/components/Video.js";
import App1 from "/signupform/App1.js";
import App2 from "/sidedesc/App2.js";

export default function App() {
  return (
    <div className="container-fluid">
      <Logo />
      <div class="mt-5 mx-auto ddoa">
        <App1 class="ditem a" />
        <App2 class="ditem b" />
      </div>
    </div>
  );
}
