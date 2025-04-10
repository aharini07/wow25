import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CarouselComponent from './CarouselComponent'; // Ensure this is correctly imported
import App from "./App";
import atrium1 from "./assets/Pres_atr.jpeg";
import atrium2 from "./assets/Vp_atr.png";
import atrium3 from "./assets/sec_atr.jpeg";
import atrium4 from "./assets/ed_atr.jpeg";
import atrium5 from "./assets/Em_atr.png";
import atrium6 from "./assets/designer_atr.png";
import atrium7 from "./assets/editor in chief_atr.png";
import atrium8 from "./assets/PRO_atr.jpeg";
import bw1 from "./assets/pres_bw.jpeg";
import bw2 from "./assets/vp_bw.png";
import bw3 from "./assets/secretary_bw.png";
import bw4 from "./assets/design_pro_bw.png";
import bw5 from "./assets/em_pr_bw.png";
import bw6 from "./assets/Treasurer_bw.png";
import du1 from "./assets/pres_du.png";
import du2 from "./assets/vp_du.png";
import du3 from "./assets/sec_du.png";
import du4 from "./assets/pro_du.png";
import du5 from "./assets/em_du.png";
import du6 from "./assets/designer_du.png";
import ducore from "./assets/du_cor.png";
import atriumcore from "./assets/atr_cor.png";

const Core = () => {
  const [atriumCoreIndex, setAtriumCoreIndex] = useState(0);
  const [debateCoreIndex, setDebateCoreIndex] = useState(0);
  const [bookwormsCoreIndex, setBookwormsCoreIndex] = useState(0);

  const atriumCore = [
    { title: "Atrium Coordinator", img: atriumcore, text: "Dr. ALAMELU G" },
    { title: "President", img: atrium1, text: "JAHNAVI V" },
    { title: "Vice President", img: atrium2, text: "SWETHA V" },
    { title: "Secretary & Editor", img: atrium3, text: "HARINI A" },
    { title: "PRO", img: atrium8, text: "HARSHA S P" },
    { title: "Editor-in-chief", img: atrium7, text: "CHRISTABEL JOHANNAH B" },
    { title: "Editor", img: atrium4, text: "PRAVEENA K M" },
    { title: "Event Manager", img: atrium5, text: "LOKESH RAJ C" },
    { title: "DESIGNER", img: atrium6, text: "SIVAMANI R" },
  ];

  const debateCore = [
    { title: "Debate Union Coordinator", img: ducore, text: "Mrs. JANET G" },
    { title: "President", img: du1, text: "LAKSHMI MOHAN" },
    { title: "Vice President", img: du2, text: "RAGHAVAN B" },
    { title: "Secretary", img: du3, text: "MAHIMA SEKAR" },
    { title: "PRO", img: du4, text: "MADHUMITHA R" },
    { title: "Event Manager", img: du5, text: "BHAVYASREE VELLANKI" },
    { title: "Designer", img: du6, text: "AASHISH MATHEW" },
  ];

  const bookwormsCore = [
    { title: "Bookworms Coordinator", img: atriumcore, text: "Dr. ALAMELU G" },
    { title: "President", img: bw1, text: "SHIYAMALA DEVI" },
    { title: "Vice President", img: bw2, text: "G SOWMYALAKSHMI." },
    { title: "Secretary", img: bw3, text: "K SHRINIDHI" },
    { title: "Designer & PRO", img: bw4, text: "K VANMATHI" },
    { title: "Event Manager & PRO", img: bw5, text: "M YAMINI" },
    { title: "Treasurer & Editor", img: bw6, text: "P SWETHA" },
  ];

  return (
    <div className="core-section">
      <h2 className="atrium-core-subheading">ATRIUM CORE</h2>
      <div className="carousel-container">
        <div className="atrium-carousel">
          <CarouselComponent
            data={atriumCore}
            index={atriumCoreIndex}
            setIndex={setAtriumCoreIndex}
          />
        </div>
      </div>

      <h2 className="atrium-core-subheading">DEBATE CORE</h2>
      <div className="carousel-container">
        <div className="atrium-carousel">
          <CarouselComponent
            data={debateCore}
            index={debateCoreIndex}
            setIndex={setDebateCoreIndex}
          />
        </div>
      </div>

      <h2 className="atrium-core-subheading">BOOKWORMS CORE</h2>
      <div className="carousel-container">
        <div className="atrium-carousel">
          <CarouselComponent
            data={bookwormsCore}
            index={bookwormsCoreIndex}
            setIndex={setBookwormsCoreIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default Core;
