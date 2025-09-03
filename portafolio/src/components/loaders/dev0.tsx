// src/components/loaders/Dev0.tsx
import '../../styles/loaders/dev0.css';
import { dynaPuff } from "../../../public/fonts/font";

export default function LoaderDev0() {
  return (
    <div className="loader">
      <div className={`logo ${dynaPuff.className}`}>D</div>
    </div>
  );
}
