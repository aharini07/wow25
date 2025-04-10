import { useState, useEffect } from 'react'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import atriumLogo from "./assets/atrium_logo.png";
import DebateLogo from "./assets/DU_Logo-removebg-preview[1].png";
import BookwormsLogo from "./assets/bookworms_logo.png";
import wowLogo from "./assets/wowlogo-removebg-preview.png";
import backgroundImage from './assets/Wow25_bg.png';
import REC from "./assets/REC (1).png";
// import atrium1 from "./assets/Pres_atr.jpeg";
// import atrium2 from "./assets/Vp_atr.png";
// import atrium3 from "./assets/sec_atr.jpeg";
// import atrium4 from "./assets/ed_atr.jpeg";
// import atrium5 from "./assets/Em_atr.png";
// import atrium6 from "./assets/designer_atr.png";
// import atrium7 from "./assets/editor in chief_atr.png"
// import atrium8 from "./assets/PRO_atr.jpeg"
// import bw1 from "./assets/pres_bw.jpeg";
// import bw2 from "./assets/vp_bw.png";
// import bw3 from "./assets/secretary_bw.png";
// import bw4 from "./assets/design_pro_bw.png";
// import bw5 from "./assets/em_pr_bw.png";
// import bw6 from "./assets/Treasurer_bw.png";
// import du1 from "./assets/pres_du.png";
// import du2 from "./assets/vp_du.png";
// import du3 from "./assets/sec_du.png";
// import du4 from "./assets/pro_du.png";
// import du5 from "./assets/em_du.png";
// import du6 from "./assets/designer_du.png";
// import ducore from "./assets/du_cor.png";
// import atriumcore from "./assets/atr_cor.png";




import { FaInstagram } from "react-icons/fa"; // Importing icons at top
const eventDetails = {
  "TREASURE AMONG US": {
    title: "Treasure Among Us",
    
    description: 
    `
  <strong>Unearth. Outplay. Succeed!</strong><br/><br/>

  Treasure Among Us offers two captivating rounds of mystery and strategy:<br/><br/>

  <strong>Round 1:</strong><br/>
  <ul>
    <li>Participants tackle thrilling tasks while impostors lurk among them.</li>
    <li>Outsmart and survive!</li>
  </ul>

  <strong>Final Round:</strong><br/>
  <ul>
    <li>Winners of Round 1 enter a high-stakes treasure hunt.</li>
    <li>Race to find the key to the final battle royale!</li>
  </ul>

   An adrenaline-fueled journey of camaraderie and triumph, where every victory proves your courage and cunning.<br/><br/>

  <strong>Rules:</strong>
  <ol>
    <li>This is an individual event.</li>
    <li>Participants must complete tasks to decode clues and locate the treasure.</li>
    <li>Impostors will act as barricades and mislead others.</li>
    <li>Profanity of any kind will lead to disqualification.</li>
    <li>Judging criteria: speed, decoding skills, and identifying impostors.</li>
    <li>Top 3 players move on to the final round and battle to find the hidden treasure.</li>
  </ol>

  <strong>Contact:</strong><br/>
  • HARINI A– +91 94447 60709<br/>
  • PRAVEENA K M  – +91 76959 64213
  `,
  registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfDuD3lvZeO1prysI0zs3wv4FOVSMbtXIBHsUlLF8U_mGJxHQ/viewform"
},
  "MYSTERY ROOM": {
  title: "Mystery Room",
  description: `
    <p><strong>Get locked in a room full of riddles and puzzles. Solve them to escape!</strong></p>

    <p>Greetings from <strong>REC Atrium, REC Debating Union</strong> and <strong>Bookworms REC Atrium</strong>!<br/>
    Welcome to <strong>War of Words'25</strong>!</p>

    <p>Step into the captivating world of the Mystery Room, where literature comes alive in a symphony of knowledge and creativity. 
    Embark on a thrilling journey through the pages of classic novels and modern masterpieces as you navigate a labyrinth of puzzles and riddles.</p>

    <p>Decipher cryptic messages hidden within literary quotes, engage in mind-bending mini-games, and unlock hidden compartments brimming with tantalizing clues. 
    Immerse yourself in a tapestry of words and imagination, where every twist and turn leads you closer to unlocking the secrets of the literary realm.</p>

    <p>Will you emerge triumphant, having unraveled the enigmatic mysteries that await within? 
    Only the most astute and cunning wordsmiths will prevail in this unforgettable escape challenge.</p>

    <p><strong>Guidelines:</strong><br/>
    • This is a team event, and each team must consist of 2 to 4 members.<br/>
    • All participants are required to maintain decorum throughout the event.<br/>
    • Teams must complete tasks using hints provided within the room. They may request an additional hint at any point during the game, but this will result in a point deduction.<br/>
    • Tasks may include decoding ciphers, solving riddles, analyzing character motivations, and piecing together storylines.<br/>
    • This is a timed event.</p>

    <p><strong>For any queries, kindly contact the coordinators:</strong><br/>
    Jahnavi V - +91 72002 57535<br/>
    Swetha V - +91 97890 55528</p>
  `,
  registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSe7U77SQa0sOqSjYd-cIARl1VI6yxXqmseqmCp6El0e0XS7cw/viewform"
},

  "ADZAP": {
    title: "Adzap",
    description: `
    <p><strong>Showcase your marketing creativity by selling bizarre products with a twist.</strong><br/>
    Ignite impact, claim victory, reign.</p>

    <p>
  Adzap is not just an event — it's a high-stakes advertising showdown where storytelling meets strategy. A discerning jury panel will present participants with on-the-spot topics, and they must quickly persuade them to invest in their product.
</p>

<p>
  Within our dynamic space, creativity flows boundlessly, and innovation flourishes at every turn. Participants don’t passively watch; they actively shape unforgettable brand narratives that resonate and inspire.
</p>

<p>
  This event is all about quick thinking, spontaneous creativity, and persuasive communication. Participants must pitch their product’s unique selling proposition in the most compelling way — be it through quirky jingles, mini skits, or dramatic role-plays.
</p>

<p>
  The jury — composed of industry professionals — will judge based on clarity, originality, entertainment, and how convincingly the product is sold.
</p>

<h5>📜 Guidelines:</h5>
<ol>
  <li>Each team should consist of <strong>3 to 5 members</strong>.</li>
  <li><strong>Topics are given on the spot</strong>, with <strong>20 minutes</strong> provided for preparation.</li>
  <li>Each team must deliver a <strong>4-minute pitch</strong> live on stage.</li>
  <li>Exceeding the time limit may result in <strong>disqualification</strong> at the judges’ discretion.</li>
  <li>Teams may use various creative formats including <strong>role-play, skits, jingles, speeches</strong>, etc.</li>
  <li><strong>Props</strong> and visual aids are allowed and encouraged.</li>
</ol>

<h5>🎯 Judging Criteria:</h5>
<ul>
  <li>Creativity & originality</li>
  <li>Quick thinking & adaptability</li>
  <li> Communication & persuasion skills</li>
  <li> Performance quality</li>
  <li> Overall impact of the pitch</li>
</ul>

    <p><strong>Contact:</strong><br/>
    Lokesh Raj C - +91 86107 27035<br/>
    Harsha SP - +91 95000 41269
    </p>
  `,
  registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSds88Vpmt9Cg0sZwpRe8On0v4u2YKfVY5GkULa_tHWSVTczmw/viewform"
},
  "TALES AND TRIALS": {
  title: "Tales and Trials",
  description: `
    <p><strong>Tales and Trials</strong><br/>
    An interactive literary challenge designed to test <em>teamwork</em>, <em>creativity</em>, and a shared <strong>love for books</strong>.</p>

    <p><strong>Event Format:</strong></p>
    <ol>
      <li><strong>Blind Book Selection:</strong> Teams choose books without knowing their titles to add an exciting element of surprise.</li>
      <li><strong>Bingo-style Challenge:</strong> A game of strategy and luck helps teams retain books through clever plays and interactions.</li>
      <li><strong>Creative Engagement:</strong> Teams creatively interact with the books they’ve retained through activities like storytelling, dramatization, or reviews.</li>
    </ol>

    <p>The winning team is chosen based on:<br/>
    • Number of books retained<br/>
    • Creativity of engagement<br/>
    • Team synergy</p>

    <p>This fun-filled adventure promotes <strong>inclusivity</strong>, <strong>team bonding</strong>, and a deeper appreciation for literature—perfectly aligning with our club’s mission.</p>
    <p> <strong>Contact</strong><br/>
    M Yamini – +91 79041 91120<br/>
    Shiyamala Devi – +91 91089 88059</p>
  `,
  registerLink: "https://docs.google.com/forms/d/1O3wKQXEm0r1ObPB-1H9dHI31Q6Yfyngh_4EnsOV9xXY/edit"
},

  "THESPIANS CHRONICLES": {
  title: "Thespians Chronicles",
  description: `
    <p>A theatrical showdown of dramatic skits and performance art.</p>

    <p>
      In this team event, performers will creatively blend storylines from ancient English literature and Shakespearean classics, such as 
      <em>Macbeth, King Lear, Hamlet, Romeo and Juliet, The Canterbury Tales, Beowulf,</em> and <em>The Faerie Queene</em>, into a single, captivating plot. 
      They will mix characters and themes from these legendary tales to create something new and exciting.
    </p>

    <p>
      Using their creativity, the team will surprise the audience with unexpected twists and connections. 
      The final performance will offer a unique experience, drawing from timeless stories of power, justice, and human nature.
    </p>

    <h5>Guidelines:</h5>
    <ol>
      <li>Each team must consist of <strong>2–3 members</strong>.</li>
      <li><strong>All members</strong> must actively participate in the performance.</li>
      <li><strong>Time limit:</strong> 5 minutes.</li>
      <li>Teams are encouraged to <strong>create a new storyline</strong>, blending plots or characters.</li>
      <li>Dialogue can be original, but should reflect the <strong>tone and language of the source texts</strong>.</li>
    </ol>

    <h5> Judging Criteria:</h5>
    <ul>
      <li> Creativity and originality</li>
      <li>Story coherence and blending of sources</li>
      <li> Performance and expression</li>
      <li> Stage usage & visual appeal</li>
      <li> Audience engagement</li>
    </ul>

    <h5> Contact:</h5>
    <p>
      Christabel Johannah – +91 94450 57316<br />
      Srisivamani R – +91 90476 38038
    </p>
  `,
  registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSd8F3Y4VPFy9-e9fhWNwjW2UgbSkuVMsH7ql5YYw-Y3kKs_qw/viewform"
},

  "WoW DEBATE": {
  title: "WoW Debate",
  description: `
    <p><strong>Test your oratory and reasoning skills</strong> in intense one-on-one debates.<br/>
    <em>Speak. Sway. Prevail.</em></p>

    <p>
  At <strong>WoW'25</strong>, <strong>WoW Debate</strong> challenges participants to step into the shoes of polished debaters, engaging in structured debates that test their <em>teamwork, critical thinking</em>, and <em>persuasive communication</em> skills. This event emphasizes <strong>confidence, clarity</strong>, and a mastery of formal argumentation as participants craft well-reasoned arguments, deliver powerful rebuttals, and navigate dynamic discourse within a structured parliamentary format.
</p>

<h5>📜 Rules:</h5>
<ol>
  <li>Each team must consist of two members.</li>
  <li>The debate will primarily follow the <strong>British Parliamentary format</strong>.</li>
  <li><strong>Motions</strong> will be provided on the spot, with a designated preparation time before the debate begins.</li>
  <li>Participants must maintain decorum and refrain from using <strong>unparliamentary language</strong> at all times.</li>
  <li>The <strong>judges’ decision is final and binding</strong>; no appeals or disputes will be entertained.</li>
</ol>


    <p> <strong>Contact</strong><br/>
    Lakshmi Mohan – +91 94425 22245<br/>
    Mahima Sekar – +91 63740 97576</p>
  `,
  registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScK3tsYfIqILz2T5CatBMEVzvND2gVTxFm3T6CoabtiHIzCMQ/viewform"
},

  "LAWYER UP": {
  title: "Lawyer Up",
  description: `
    <p><strong>Step into the shoes of a lawyer.</strong><br/>
    Argue your case and win the courtroom drama.<br/>
    <em>Debate. Defend. Deliver Justice.</em></p>

    <p>
  In this solo challenge, participants will be presented with the intricacies of a crime scene. Thinking swiftly on their feet, they must adeptly advocate for their client's innocence, crafting a compelling defense strategy.
</p>

<h5>Rules:</h5>
<ol>
  <li>Two participants will be given a case file in which the crime scene and forensic details will be described.</li>
  <li>Each person will be assigned a suspect, and your task will be to act as a lawyer and try to prove your client's innocence to the jury.</li>
  <li>Each person is given a time limit of <strong>2.5 minutes</strong> to prove the case (<strong>1.5 + 1 minute</strong>).</li>
  <li>Each participant will be judged based on <em>eloquence, persuasiveness, relevance, creativity</em>, and the use of <strong>legal jargon</strong>.</li>
  <li><strong>New witnesses</strong> cannot be introduced by the lawyers.</li>
  <li>The <strong>judge</strong> can bring in new characters, evidence, or change facts to <em>stress test</em> the lawyers.</li>
  <li>The usage of <strong>slurs</strong> or being disrespectful towards the participant will <strong>not be tolerated</strong>.</li>
</ol>

    <p> <strong>Contact</strong><br/>
    Raghavan B – +91 80560 12018<br/>
    Madhumitha R – +91 91761 92231</p>
  `,
  registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSc4-7_ZgYj39CsjQv3WHb6bA0msVfROsImQNQD4XKZJEIUKxg/viewform"
},

  "SHIPWRECK": {
  title: "Shipwreck",
  description: `
    <p><strong>Survival Showdown: Sink or Swim.</strong><br/>
    Shipwreck is a game where players, as shipwreck survivors, strategically persuade the captain for a life jacket to escape a sinking ship, managing alliances and conflicting motives.</p>

    <h5>Rules:</h5>
<ol>
  <li>Roles will be assigned on the spot, so be ready to think on your feet and adapt quickly.</li>
  <li>Participants are expected to maintain proper decorum, respecting fellow contestants and keeping the competition engaging yet respectful.</li>
  <li>Each participant will have a fixed time limit, so manage your arguments wisely!</li>
  <li>The judge has the freedom to throw in unexpected questions or challenges, so stay sharp and be prepared to improvise.</li>
  <li>Any form of misconduct, unfair play, or disrespect will lead to immediate disqualification. Keep it fair and fun!</li>
  <li>The judge’s decision is final!</li>
</ol>


    <p> <strong>Contact</strong><br/>
    Madhumitha R– +91 91761 92231<br/>
    Bhavyasree V – +91 70102 87390</p>
  `,
  registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScY7dWGUoHA6h7uIFRWEwASa9eG4gpxLysDkWwe64h9JsLDFg/viewform"
},

 "OPEN MIC": {
  title: "Open Mic",
  description: `
    <p><strong>🎤 Open Mic – Say It Like You Mean It!</strong></p>

    <p>Got a story that'll make us cry? A joke that'll make us question your sanity? A poem that rhymes sometimes? Or maybe just a burning desire to grab a mic and say, “Hey, listen to me!” – whatever it is, <strong>Open Mic is your stage!</strong></p>

    <p>Whether you're a stand-up comedian in the making, a dramatic storyteller, a bathroom singer with stage dreams, or just someone with opinions, this is your chance to shine (or crash spectacularly — we applaud both).</p>

    <p><strong>Just you, a mic, and a room full of people waiting to be entertained.</strong></p>

    <p>So bring your talent, your quirks, your awkward charm – and let the spotlight find you!</p>

    <p><strong> Event Rules:</strong><br/>
    1. Each performer gets <strong>5 minutes</strong> on stage.<br/>
    2. No profanity, hate speech, or offensive remarks.<br/>
    3. Perform any act, but keep it appropriate.<br/>
    4. Respect all performers – no heckling or disturbances.<br/>
    5. Violations may result in performance stoppage.</p>

    <p><em>Your stage. Your mic. Your words.</em> Let your talent shine!</p>

    <p>Whether it's a poem, a punchline, or a power ballad – <strong>the stage is yours</strong> to conquer! 🎶</p>

    <p><strong> Contact:</strong><br/>
    Aashish V – +91 93846 89454<br/>
    Mahima Sekar – +91 63740 97576</p>
  `,
  registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfo1hcIfUlshydxbGGXLXRUqYmhyMgZFOoO69CXQhpy0rZsxQ/viewform"
}
,

 "POETRY WRITING ": {
  title: "Poetry Writing",
  description: `
    <h4>Recatrium Presents: Fiction Meets Reality – A Poetry Writing Challenge</h4>

<p>
  <strong>Unleash your imagination.</strong><br />
  What if your favorite fictional character could solve a modern issue? 
</p>

<p>
  Unleash your inner poet! Let your words bloom in <strong>WoW’25</strong> as fiction collides with reality in the most poetic way!
</p>

<p>
  Join <strong>Recatrium’s Poetry Writing Event</strong> and craft a powerful piece that reimagines your beloved fictional characters as problem-solvers in today’s world. ✨️
</p>

<h5>Event Details:</h5>
<ul>
  <li><strong>Open to:</strong> All college students</li>
  <li><strong>Word Limit:</strong> 500 words</li>
  <li><strong>Deadline:</strong> April 18, 2025</li>
</ul>

<h5>Submission Guidelines:</h5>
<p>
  Send your entries to: <a href="mailto:edboard.atrium@rajalakshmi.edu.in">edboard.atrium@rajalakshmi.edu.in</a><br />
  Please include the following details in your email:
</p>
<ul>
  <li>Name</li>
  <li>Department</li>
  <li>College Name</li>
  <li>Year</li>
</ul>

<p>
   Let your poem be the spark that inspires change!
</p>


    <p><strong>Contact</strong><br/>
    Christabel Johannah – +91 94450 57316<br/>
    Praveena K M – +91 76959 64213</p>
  `
},

  "TAG IT WITH STYLE": {
  title: "Tag it with Style",
  description: `
    <p><strong>Design. Create. Inspire.</strong><br/>
    Tag It with Style is an <strong>online event</strong> where participants design bookmarks inspired by different book genres like <em>mystery, fantasy, romance, sci-fi, and horror</em>.</p>

    <p>Participants will create unique bookmark designs and share them online.<br/>
    Entries will be judged based on:<br/>
    -  Creativity<br/>
    -  Originality<br/>
    -  Genre relevance<br/>
    -  Presentation</p>

    <p>🏆 Prizes will be awarded for the best designs!</p>

    <p>This fun event encourages <strong>artistic expression</strong> and a love for reading,<br/>
    bringing book lovers together in a creative way. 💫</p>
    <p> <strong>Contact</strong><br/>
    G Sowmyalakshmi – +91 70108 24704<br/>
    K VANMATHI – +91 70108 24704</p>
  `,
}

  }

;


function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);

  const handleEventClick = (eventName) => {
    setSelectedEvent(eventName);
    setShowEventModal(true);
  };
   // to store the clicked event

  const [hovered, setHovered] = useState(false);
  const [hoveredBox, setHoveredBox] = useState(null);
 
  
  const [atriumCoreIndex, setAtriumCoreIndex] = useState(0);
  
  useEffect(() => {
    document.body.style.overflow = showEventModal ? 'hidden' : 'auto';
  }, [showEventModal]);

  const logos = [
    { src: DebateLogo, message: "Welcome to Debate Union" },
    { src: atriumLogo, message: "Welcome to Atrium" },
    { src: BookwormsLogo, message: "Welcome to Bookworms." }
  ];

  const messages = {
    1: "War of Words (WoW) is the inter-collegiate annual literary fest of Rajalakshmi Engineering College organized jointly by REC Atrium, the literary club of the college, REC Debating Union, the debating society of the college and REC Bookworms club of the college. WoW’25, an extravaganza that celebrates English literature and creativity, will provide a platform for students across disciplines to exhibit their oratory skills, debating flair, and literary prowess through numerous events. The event WoW’25 is planned to be conducted on 21st April 2025.",
    2: "Rajalakshmi Engineering College, Rajalakshmi Nagar, Thandalam, Chennai - 602 105.",
    3: "Monday 21st April,2025",
  };
  
  const sections = [["ABOUT","WHERE?", "WHEN?"]];
  
    // const atriumCore = [
    //   {
    //     title: "Atrium Coordinator",
    //     img: atriumcore,
    //     text: "Dr. ALAMELU G"
    //   },
    //   {
    //     title: "President",
    //     img: atrium1,
    //     text: "JAHNAVI V"
    //   },
    //   {
    //     title: "Vice President",
    //     img: atrium2,
    //     text: "SWETHA V"
    //   },
    //   {
    //     title: "Secretary & Editor",
    //     img: atrium3,
    //     text: "HARINI A"
    //   },
    //   {
    //     title: "PRO",
    //     img: atrium8,
    //     text: "HARSHA S P"
    //   },
    //   {
    //     title: "Editor-in-chief",
    //     img: atrium7,
    //     text: "CHRISTABEL JOHANNAH B"
    //   },
    //   {
    //     title: "Editor",
    //     img: atrium4,
    //     text: "PRAVEENA K M"
    //   },
    //   {
    //     title: "Event Manager",
    //     img: atrium5,
    //     text: "LOKESH RAJ C"
    //   },
    //   {
    //     title: "DESIGNER",
    //     img: atrium6,
    //     text: "SIVAMANI R"
    //   },
    //   // Add the rest...
    // ];
    // const debateCore = [
    //   {
    //     title: "Debate Union Coordinator",
    //     img: ducore,
    //     text: "Mrs. JANET G"
    //   },
    //   {
    //     title: "President",
    //     img: du1,
    //     text: "LAKSHMI MOHAN"
    //   },
    //   {
    //     title: "Vice President",
    //     img: du2,
    //     text: "RAGHAVAN B "
    //   },
    //   {
    //     title: "Secretary",
    //     img: du3,
    //     text: "MAHIMA SEKAR"
    //   },
    //   {
    //     title: "PRO",
    //     img: du4,
    //     text: "MADHUMITHA R"
    //   },
    //   {
    //     title: "Event Manager",
    //     img: du5,
    //     text: "BHAVYASREE VELLANKI"
    //   },
    //   {
    //     title: "Designer",
    //     img: du6,
    //     text: "AASHISH MATHEW"
    //   },
      
    //   // Add the rest...
    // ];
    // const bookwormsCore = [
    //   {
    //     title: "Bookworms Coordinator",
    //     img: atriumcore,
    //     text: "Dr. ALAMELU G"
    //   },
    //   {
    //     title: "President",
    //     img: bw1,
    //     text: "SHIYAMALA DEVI"
    //   },
    //   {
    //     title: "Vice President",
    //     img: bw2,
    //     text: "G SOWMYALAKSHMI."
    //   },
    //   {
    //     title: "Secretary",
    //     img: bw3,
    //     text: "K SHRINIDHI"
    //   },
    //   {
    //     title: "Designer & PRO",
    //     img: bw4,
    //     text: "K VANMATHI"
    //   },
    //   {
    //     title: "Event Manager & PRO",
    //     img: bw5,
    //     text: "M YAMINI"
    //   },
    //   {
    //     title: "Treasurer & Editor",
    //     img: bw6,
    //     text: "P SWETHA"
    //   },
    //   // Add the rest...
    // ];
  
  return (
    <>
    <div
      className="app-container"
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '2rem',
        overflowX: 'hidden'
      }}
    >
      <div
  className="header-container"
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  <div className={`wow-header`}>
    <img src={REC} alt="REC" className="REC-LOGO" />
  </div>
</div>

      <div className="content-container">
        <div className="logos-wrapper">
          {logos.map((logo, index) => (
            <LogoBubble key={index} src={logo.src} message={logo.message} />
          ))}
        </div>

        <div
  className="wow-container"
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  <div className={`wow-transition-box ${hovered ? "hovered" : ""}`}>
    <img src={wowLogo} alt="WOW Logo" className="wow-logo" />
    {hovered && (
      <div className="wow-text-box">
        <h1 className="fw-bold wow-text m-0">WAR OF WORDS 2025</h1>
      </div>
    )}
  </div>
</div>


        <div className="scroll-boxes">
          {sections.map((row, rowIndex) => (
            <div key={rowIndex} className="row-box full-width">
              {row.map((text, index) => (
                <div key={index} className="box-container large-box">
                  {text && (
                    <div
                      className="box"
                      onClick={() => setHoveredBox(rowIndex * 3 + index + 1)}
                    >
                      {text}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="register-container">
  <a href="" target="_blank" className="register-btn">Register By Clicking The Below Events</a>
</div>

{showEventModal && selectedEvent && (
  <div className="modal-backdrop active" onClick={() => setShowEventModal(false)}>
    <div className="carousel-modal" onClick={(e) => e.stopPropagation()}>

      {/* Title and plain description */}
      <div className="carousel-message-box">
        <h3 className="fw-bold">{eventDetails[selectedEvent]?.title}</h3>
        <a 
    href={eventDetails[selectedEvent].registerLink} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="register-button"
  >
    Register Now 🚀
  </a>

      {/* 💡 Rich HTML description (like rules, HTML tags, etc.) */}
      <div className="event-description-container">
        <div dangerouslySetInnerHTML={{ __html: eventDetails[selectedEvent]?.description }} />
      </div>
      </div>
    </div>
  </div>
)}

        <h2 className="events-heading">WoW 2025 EVENTS </h2>
        <div className="events-section">
        <div className="event-card" onClick={() => handleEventClick("TREASURE AMONG US")}>
  TREASURE AMONG US
  
</div>

<div className="event-card" onClick={() => handleEventClick("MYSTERY ROOM")}>
  MYSTERY ROOM
</div>

<div className="event-card" onClick={() => handleEventClick("ADZAP")}>
  ADZAP
</div>

<div className="event-card" onClick={() => handleEventClick("TALES AND TRIALS")}>
  TALES AND TRIALS
</div>

<div className="event-card" onClick={() => handleEventClick("THESPIANS CHRONICLES")}>
  THESPIANS CHRONICLES
</div>

<div className="event-card" onClick={() => handleEventClick("WoW DEBATE")}>
  WoW DEBATE
</div>

<div className="event-card" onClick={() => handleEventClick("LAWYER UP")}>
  LAWYER UP
</div>

<div className="event-card" onClick={() => handleEventClick("SHIPWRECK")}>
  SHIPWRECK
</div>

<div className="event-card" onClick={() => handleEventClick("OPEN MIC")}>
  OPEN MIC
</div>
<div className="event-card" onClick={() => handleEventClick("POETRY WRITING")}>
  POETRY WRITING
</div>
<div className="event-card" onClick={() => handleEventClick("TAG IT WITH STYLE")}>
  TAG IT WITH STYLE
</div>
</div>

<a href="https://www.rectransport.com/" className="bubble-button" target="_blank">
  Find Transport Details Here !!!
</a>


        {/* <h2 className="atrium-core-subheading">ATRIUM CORE</h2> */}
        



        
      </div>

      


      {hoveredBox !== null && (
        <div className="overlay" onClick={() => setHoveredBox(null)}>
          <div className="overlay-content">{messages[hoveredBox]}</div>
        </div>
      )}
    </div>

    <footer className="footer mt-5 py-4 bg-dark text-white text-center w-100">
    <div className="footer-bottom bg-dark text-white py-5">
  <div className="container">
    <div className="row text-center text-md-start">
      <div className="col-md-4 mb-4">
        <h5 className="fw-bold mb-3">Organizing Committee</h5>
        <p className="mb-1"><strong>Jahnavi V</strong></p>
        <p><strong>+91 72002 57535</strong></p>
        <p className="mb-1"><strong>Lakshmi Mohan</strong></p>
        <p><strong>+91 94425 22245</strong></p>
        <p className="mb-1"><strong>Shiyamala Devi</strong></p>
        <p><strong>+91 91089 88059</strong></p>
      </div>
      <div className="col-md-4 mb-4">
        <h5 className="fw-bold mb-3">Faculty Coordinators</h5>
        <p className="mb-1"><strong>Dr. Alamelu G</strong></p>
        <p><strong>Atrium Coordinator</strong></p>
        <p className="mb-1"><strong>Mrs. Janet G</strong></p>
        <p><strong>Debating Union Coordinator</strong></p>
      </div>
      <div className="col-md-4">
        <h5 className="fw-bold mb-3">Follow Our Clubs</h5>
        <p className="mb-2">
          <strong>Atrium:</strong><br />
          <a href="https://www.instagram.com/recatrium/" target="_blank" rel="noopener noreferrer" className="me-3 text-white">
            <FaInstagram size={24} />
          </a>
          
        </p>
        <p className="mb-2">
          <strong>Debating Union:</strong><br />
          <a href="https://www.instagram.com/recdebate/" target="_blank" rel="noopener noreferrer" className="me-3 text-white">
            <FaInstagram size={24} />
          </a>
        </p>
        <p className="mb-0">
          <strong>Bookworms REC Atrium:</strong><br />
          <a href="https://www.instagram.com/bookworms_atrium_rec/" target="_blank" rel="noopener noreferrer" className="me-3 text-white">
            <FaInstagram size={24} />
          </a>
        </p>
       
      </div>
       <p className="mb-0">
          <strong>Website Created By: </strong><br />
          <p>HARINI A   CSE III YEAR</p>
          
        </p>
    </div>
  </div>
</div>
    </footer>
    </>
  );
}

function LogoBubble({ src, message }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="logo-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="logo-bubble">
        <img src={src} alt="Logo" className="logo-img" />
      </div>
      {hovered && <div className="logo-message">{message}</div>}
    </div>
  );
}

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide(prev => prev + 1);
  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  };

  return (
    <div className="carousel-message-box with-image">
    <h3 className="fw-bold">Debate Clash</h3>
    <p>This event features intense one-on-one debates on trending topics. Be ready to clash with words!</p>
    </div>
  

  );
}

function CarouselComponent({ data, index, setIndex }) {
  const currentItem = data[index];

  return (
    <div className="single-card-carousel-container">
      <button className="carousel-arrow left" onClick={() => setIndex(prev => Math.max(prev - 1, 0))}>
        &#8592;
      </button>
      <div className="carousel-card-wrapper">
  <div className="carousel-card-single fade-slide" key={currentItem.title}>
    <img src={currentItem.img} alt={currentItem.title} className="carousel-card-img" />
    <div className="carousel-card-text">
      <p className="carousel-card-title">{currentItem.title}</p>
      <p className="carousel-card-desc">{currentItem.text}</p>
    </div>
  </div>
</div>

      <button className="carousel-arrow right" onClick={() => setIndex(prev => Math.min(prev + 1, data.length - 1))}>
        &#8594;
      </button>
    </div>
  );
}


export default App;