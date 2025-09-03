import { inter, abel, dynaPuff, indieFlower } from "../../public/fonts/font";
import Button from "../components/button";
import { routes } from "../routes/routes";

export default function Home() {
  return (
    <div className="main-container">
      <div className="title">
        <h1 className={inter.className}>Portafolio</h1>
      </div>
      <div className="btn-container">
        <Button text="dev0" className={inter.className} id="btn-shape" href={routes[1].href} />
        <Button text="dev1" className={abel.className} id="btn-shape" href={routes[2].href} />
        <Button text="dev2" className={dynaPuff.className} id="btn-shape" href={routes[3].href} />
        <Button text="dev3" className={indieFlower.className} id="btn-shape" href={routes[4].href} />
      </div>
    </div>
  );
}
