import { useState, useEffect } from 'react';
import './TypingAnimation.css'; // Make sure to create this CSS file

function LittleResume() {
  return (
    <div className='resume-container'>
      <h2>About me</h2>
      <p>
        I am Tom Durand-Gasselin.
        Passionate about computer science and more precisely cybersecurity, I help business build complex project.
        As of 5 years of engineering school Epita, I learned to be polivalent in various domain.
        Although my main job is cybersecurity engineer and all its themes, I have experience in DevSecOps and as a fullstack software developper.
        From making your website to designing the network of your compagny via administrating your servers, I am like a swiss army knife.
        I can come on site (Paris and neighbourhood) or remote, let's make something special together.
      </p>
    </div>
  );
}

function Presentation() {
  const name = "Tom DG, ";
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const texts = ["Cybersecurity engineer", "Code auditor", "DevSecOps", "Full Stack Software Developer"];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (index < texts[textIndex].length) {
        setTimeout(() => {
          setText(text + texts[textIndex].charAt(index));
          setIndex(index + 1);
        }, 75); // Typing speed
      } else if (textIndex < texts.length - 1) {
        // Wait some time after the full text is typed out and then move to the next text
        setTimeout(() => {
          setText('');
          setIndex(0);
          setTextIndex(textIndex + 1); // Move to the next text in the array
        }, 2000); // Delay before starting the next text
      } else {
        // Reset to the first text after the last text is typed out
        setTimeout(() => {
          setText('');
          setIndex(0);
          setTextIndex(0); // Reset to the first text in the array
        }, 2000); // Delay before restarting the cycle
      }
    }, [index, text, texts, textIndex]);

  return (
    <>
      <div className='presentation-text'>
      <h1>Helping Business to Grow</h1>
        <div className="typing-container">
            <div className="typing-animation">
                {name}{text}
                <span className="cursor"></span>
            </div>
        </div>
        <LittleResume />
      </div>
      
    </>
  );
}

export default Presentation;