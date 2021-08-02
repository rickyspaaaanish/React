import MainContentBlock from './MainContentBlock';
import photo1 from './Photo.png'

function MainContent() {
  let blocksInfo = [];
  blocksInfo[0] = {header: 'Ted Bell, Annette Nguyen and Cody Hawkins liked this', userpic: photo1, username: 'Theresa Steward', userpos: 'iOS developer', contenttypes: ['text'], 
  content: 'What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? ' +
  'What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles ' +
  '(not a drop of magical blood in their veins)', likes: 42, comments: 9}


  return <><div className='center__content-block'>
    <MainContentBlock blocksInfo={blocksInfo}/>
  </div>
    <div className='side__content-block'></div></>;
}

export default MainContent;