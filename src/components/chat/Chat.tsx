import * as React from "react"
import './Chat.scss'
import 'xp.css/dist/XP.css'
import { useEffect, useRef, useState } from "react"
import updown from '../images/small-up-down.png'
import invite from '../images/invite.png'
import sendfiles from '../images/send.png'
import video from '../images/video.png'
import voice from '../images/voice.png'
import activities from '../images/activities.png'
import games from '../images/games.png'
import logo from '../images/logo.png'
import smallblock from '../images/small-block.png'
import smallpaint from '../images/small-paint.png'
import pfp from '../images/msnpfp.png'
import expand from '../images/expand-left.png'
import letter from '../images/letter.png'
import smile from '../images/happy.png'
import voiceclip from '../images/voice-clip.png'
import wink from '../images/wink.png'
import mountain from '../images/mountain.png'
import gift from '../images/gift.png'
import nudge from '../images/nudge.png'
import paint from '../images/paint.png'
import xpIcon from '../images/winxp-semwiz.png'


const chatContent: string[] = [
  'Janelle says: Yesterday, a woman walked into the boutique and had requested for her pants to be altered',
  'She was slightly past middle-aged and talkative, using this Tuesday afternoon to take care of errands long overdue',
  'My <i>abuela</i> sat across her sewing table and was trimming excess thread off of a blouse she had just tailored', 
  'Snipping off imperfections in preparation for the ironing board',
  'The boutique was uncharacteristically quiet',
  'The midday rush had just ended and the frenzy of white collared workers looking for quick alterations cleared off upon the end of their lunch hour',
  '...save for that lady',
  '',
  'To make up for the quiet, the lady began peppering my <i>abuela</i> with questions about me',

  'The Lady says: <i>What\’s she doing this summer?</i>',
  '<i>What grade is she in?</i>',
  '<i>What exam did she take?</i>',
  '<i>Is it the IBs?</i>',
  '<i>What grade did she get?</i>',

  'Janelle says: My <i>abuela</i> answered as best she could',
  'I was going to be a senior.', 
  'I got a 43.',
  'I\’m going off to Laos this summer to build eco-bungalows as a World Volunteer, but I\’d spend the time I had left at home working for some pocket money. Her unfaltering grin pushed past the stuttering against a language foreign to her tongue',
  'She was prideful with her answers',
  'The lady smiled, astonished',

  'The Lady says: <i>What a brilliant girl!</i>',
  '<i>You must be proud of her.</i>',
  '<i>Do you know what university she wants to go to? Perhaps the major she wants to take?</i>',

  'Janelle says: My <i>abuela</i> paused',
  'She held onto her measuring tape as she motioned me over to answer the lady’s questions in her place',

  'Abuela says: <i>Hija! Come here quickly, the lady is asking you something.</i>',
  '<i>She speaks too softly for my old ears, and it’s making it hard for me to focus on my job.</i>',

  'Janelle says: I knew otherwise, but didn’t press on',
  'I presented myself between my abuela and the lady now situated on top of the wooden step stool',
  'I’m not sure what university I’d like to attend, but I’d certainly like to major in fashion design, ma’am.',
  'I want to be a designer.',

  'The Lady says: <i>You must be very talented!</i>',
  '<i>I see that you take after your grandmother.</i>',

  'Janelle says: The lady beamed',
  'I thanked her, but my <i>abuela</i> looked at me curiously',
  'She asked me to translate what I had just said in Spanish for her',
  'So she could understand what I said I wanted to pursue',
  'I sat down and pulled my phone out to put the word through Google Translate',

  'Google Translate says: Diseño',

  'Janelle says: The lady beamed',
  'Reading under her breath',
  'My <i>abuela</i> read the word slowly',
  'She pointed with a finger',
  'Roughed up by nearly six decades of being a seamstress',
  'Her hands developed carpal tunnel from the use of scissors',
  'Pins and needles rendered her fingers scarred and cracked',
  'Years of pressing down on her sewing machine’s foot pedal left her feet calloused and hard',
  'She looked at me and smiled simply',

  'Abuela says: <i>I wanted to do that.</i>',

  'Janelle says: She had wanted to study fashion and become a designer',
  'Before she became an <i>abuela</i> and a mother',
  'Before she was a seamstress',
  'Before she had left her country, her language, her family',
  '<i>Everything.</i>',
  'I imagined that six decades ago in Venezuela',
  'My 16-year-old grandmother had sat down in front of a sewing machine',
  'Much like the one she owns now',
  'The universe and all of its contents lay in front of her',
  'And she grasped with a hand for it',
  'Her hands soft',
  'Before they hugged her parents and siblings goodbye',
  'Before they bore a wedding ring',
  'Before they held four children',
  'And raised eight grandchildren',
  'Before they held pins and needles',
  'Thread and thimbles',
  'Soft.',
  'She was brilliant and beautiful',
  'She, too, was at the top of her class and attained full marks',
  'One of the most eligible bachelorettes that had men across her province swooning',
  'Incredibly fashionable from the remnants of her youth in photographs',
  'I took in no surprise that she, too, would have dabbled in the idea of creating art out of nothing',
  'I wonder if in another lifetime',
  'My <i>abuela</i> became a renowned designer who worked with various stars and marvelled at all of their beauty as they bore her creations down the red carpet',
  'Instead',
  'She passed it up gambling on a better life in Hong Kong',
  'Letting go of her dream of the stars for her children and kin to live a life she couldn’t',
  'All part of the immigrant dream',
  'I wonder what went through her mind when she read what it meant',
  'Sadness? Melancholy?',
  'Without another word',
  'She looked back to the lady’s legs and took measurements of her inseam',
  'Perhaps part of being an immigrant is to leave your own dreams behind',
  'To make space for a future where your children could harness theirs',
  'I don’t know if I could do what they have done for me',
  'Here she was',
  'Scrunched over ready to work on another article of clothing',
  'Her hands were calloused and cracked as she absentmindedly nibbled at the end of a pin looking for a spot in the pant leg to settle into',
  'The tape measure held firmly between her fingertips as she scribbled digits of measurements onto a spare piece of paper',
  'Her pin cushion punctured and worn from decades of use',
  'She repaired and altered garments for a living so her children and kin could design the future of their dreams',
  '<i>Diseño</i>',
  'So I could fashion the life I wanted',
  'So I could hold the universe in my hands',
  'Soft.'
]

const Chat = () => {

  const generateUUID = (): string => {
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);
    randomBytes[6] = (randomBytes[6] & 0x0f) | 0x40; // Set version 4
    randomBytes[8] = (randomBytes[8] & 0x3f) | 0x80; // Set variant to RFC4122
  
    const hex = Array.from(randomBytes)
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
  
    return [
      hex.substr(0, 8),
      hex.substr(8, 4),
      hex.substr(12, 4),
      hex.substr(16, 4),
      hex.substr(20, 12),
    ].join('-');
  }

  const [items, setItems] = useState<string[]>([]);
  const [showDialog, setShowDialog] = useState(false);

  const handleSendAttempt = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setShowDialog(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      setShowDialog(true);
    }
  };

  const closeDialog = () => setShowDialog(false);
  const divRef = useRef<HTMLDivElement>(null);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);

  useEffect(()=> {
    const calculateReadingTime = (text: string) => {
      const readingSpeed = 100
      const wordCount = text.trim().split(/\s+/).length;
      const readingTime = wordCount / readingSpeed * 36000
      return readingTime;
    }
    
    const renderComponents = async () => {
      for (let i = 0; i < chatContent.length; i++) {
        let speaker = chatContent[i];
        setItems(prevItems => [...prevItems, speaker]);
        await new Promise(resolve => setTimeout(resolve, calculateReadingTime(speaker)));
      }
    };
    renderComponents()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = divRef.current;
        const isAtBottom = scrollTop + clientHeight === scrollHeight;
        setIsScrolledToBottom(isAtBottom);
      }
    };

    if (divRef.current) {
      divRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (divRef.current) {
        divRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (divRef.current && isScrolledToBottom) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  });

  return (
    <>
    <div className="Chat">
      <div className="Chat__container">
        <div className="Chat__toolbar">
          <div className="Chat__smallcircle">
            <img src={updown} className="Chat__updown"></img>
          </div>
          <div className="Chat__iconcontainer">
            <img src={invite}/>
            <div>Invite</div>
          </div>
          <div className="Chat__iconcontainer">
            <img src={sendfiles}/>
            <div>Send Files</div>
          </div>
          <div className="Chat__iconcontainer">
            <img src={video}/>
            <div>Video</div>
          </div>
          <div className="Chat__iconcontainer">
            <img src={voice} style={{height: "29px"}}></img>
            <div>Voice</div>
          </div>
          <div className="Chat__iconcontainer">
            <img src={activities}/>
            <div>Activities</div>
          </div>
          <div className="Chat__iconcontainer">
            <img src={games}/>
            <div>Games</div>
          </div>
        </div>
        <div className="Chat__toolbarleft"/>
        <div className="Chat__toolbarcenter">
          <img src={logo} style={{width: "45px", height:"16.51px", marginTop: "2px"}}/>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div className="Chat__smallcircle" style={{display: 'flex', flexDirection: 'row'}}>
              <img src={smallblock} className="Chat__updown"/>
            </div>
            <div className="Chat__smallcircle" style={{display: 'flex', flexDirection: 'row'}}>
              <img src={smallpaint} className="Chat__updown"/>
            </div>
          </div>
        </div>
        <div className="Chat__toolbarright"/>
        <div className="Chat__toolbarend"/>
      </div>
      <div style={{display: 'flex', width: "100%", marginTop: '12px'}}>
        <div className="Chat__boxcontainer">
          <div className="Chat__subject">
            To:&nbsp;
            <strong>
              {`you (me2you)`}
            </strong>
          </div>
          <div className="Chat__history" ref={divRef}>
            {items?.map((line) => {
              let temp = line
              let name = ''
              if(line.startsWith('Janelle says: ')) {
                name = 'Janelle'
                temp = temp.replace('Janelle says: ', '')
              }
              else if(line.startsWith('The Lady says: ')) {
                name = 'The Lady'
                temp = temp.replace('The Lady says: ', '')
              }
              else if(line.startsWith('Abuela says: ')) {
                name = 'Abuela'
                temp = temp.replace('Abuela says: ', '')
              }
              else if(line.startsWith('Google Translate says:')) {
                return(<div style={{textAlign: 'center', color: '#B6B6B6'}}><br/>{line}<br/><br/><br/></div>)
              }
              return(
                <>
                  {
                    name ? (
                    <>  
                      <div style={{color: `${name==='Janelle' ? '#3c57ab' : name==='The Lady' ? '#F16925' : '#00a359'}`}} key={generateUUID()}>
                        <strong>{name} says:</strong>
                      </div> 
                      <div key={generateUUID()}>
                        <div dangerouslySetInnerHTML={{ __html: temp}} key={generateUUID()} style={{marginLeft: '12px'}}></div>
                        <br/>
                      </div>
                    </>
                  ) : (
                  <div key={generateUUID()}>
                    <div dangerouslySetInnerHTML={{ __html: temp}} key={generateUUID()} style={{marginLeft: '12px'}}></div>
                    <br/>
                  </div>
                )
                  }
                </>
              )
            })}
          </div>
        </div>
        <div className="Chat__pfpcontainer">
          <img className="Chat__pfp" src={pfp}/>
          <img src={expand} style={{position: 'absolute', left: '101%', top: '4px'}}/>
        </div>
      </div>
      <div style={{display: 'flex', width: "100%", marginTop: '12px'}}>
        <div className="Chat__chatcontainer">
          <div className="Chat__actions">
            <img src={letter} className="Chat__actionimg"/>
            <img src={smile} className="Chat__actionimg"/>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <img src={voiceclip} className="Chat__actionimg" style={{marginRight: "4px"}}/>
              <div style={{fontSize: "12px"}}>
                Voice Clip
              </div>
            </div>
            <img src={wink} className="Chat__actionimg"/>
            <img src={mountain} className="Chat__actionimg"/>
            <img src={gift} className="Chat__actionimg"/>
            <img src={nudge} style={{height: "20px", width: "30px"}}/>

          </div>
          <div className="Chat__typearea">
            <textarea onKeyDown={handleKeyDown} placeholder="Type a message..." />
            <div className="Chat__buttons">
              <button onClick={handleSendAttempt}>Send</button>
            </div>
          </div>
          <div className="Chat__tabs">
            <div className="Chat__tabelement">
              <img src={paint} style={{height: "14px", width: "14px"}}/>
            </div>
            <div className="Chat__tabelement" style={{backgroundColor: "white"}}>
              <img src={letter} style={{height: "14px", width: "14px"}}/>
            </div>
          </div>
        </div>
        <div className="Chat__pfpcontainer">
          <img className="Chat__pfp" src={pfp}/>
          <img src={expand} style={{position: 'absolute', left: '101%', top: '4px'}}/>
        </div>
      </div>
    </div>
    {showDialog && (
      <>
        <div style={{position: 'fixed', left: 0, top: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 9998}} onClick={closeDialog} />
        <div className="window" style={{position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999, width: '320px'}}>
          <div className="title-bar">
            <div className="title-bar-text">
              Warning
            </div>
            <div className="title-bar-controls">
              <button aria-label="Close" onClick={closeDialog}></button>
            </div>
          </div>
          <div className="window-body">
            <div style={{display: 'flex', alignItems: 'center'}}>
              <img src={xpIcon} alt="Windows XP icon" style={{width: "32px", height: "32px", marginRight: "8px"}}/>
              <p style={{margin: 0}}>You are not part of this conversation!</p>
            </div>
            <section className="field-row" style={{justifyContent: 'flex-end', marginTop: '12px'}}>
              <button onClick={closeDialog}>OK</button>
            </section>
          </div>
        </div>
      </>
    )}
    </>
  )
}

export default Chat