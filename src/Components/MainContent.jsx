import MainContentBlock from './MainContentBlock';
import SideContentBlock from './SideContentBlock';
import photo1 from './Photo1.png'
import photo2 from './Photo2.png'
import photo3 from './Photo3.png'
import photo4 from './Photo4.png'
import rectangle3 from './Rectangle 3.png'

function MainContent() {
  let blocksInfo = [
  {header: 'Ted Bell, Annette Nguyen and Cody Hawkins liked this', userpic: photo1, username: 'Theresa Steward', userpos: 'iOS developer', contenttypes: ['text'], 
  text: 'What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? ' +
  'What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles ' +
  '(not a drop of magical blood in their veins)', likes: 42, comments: 9}, 
  {header: 'Audrey Alexander comment this', userpic: photo2, username: 'Kyle Fisher', userpos: 'Product designer at Commandor Corp.', 
  contenttypes: ['text', 'photo'], text: 'How’s your day going, guys?', photo: rectangle3, likes: 12, comments: 3},
  {header: 'High rated post from your feed', userpic: photo3, 
  username: 'Brandon Wilson', userpos: 'Senior UX designer', contenttypes: ['text', 'files'], text: 'There is some new guidelines for iOS', files: 
  [{filename: 'iOS 11 guidelines for UX/UI designers', filetype: 'PDF file', filesize: '324 kb'}, 
  {filename:  'iOS 11 guidelines for developers',  filetype: 'PDF file', filesize: '245 kb'}], likes: 89, comments: 7},
  {header: 'First post from Audrey Alexander', userpic: photo4, 
  username: 'Audrey Alexander', userpos: 'Team lead at Google', contenttypes: ['text'], text: 'The bun runs along the road and meets a wolf. «Little bun, little bun, '+
  'I want to eat you!» says the wolf. «I ran away from Grandfather, I ran away from Grandmother, I ran away from the hare. And I can run away from you, grey wolf!» '+
  'says the bun and runs away.', likes: 10, comments: 0}];


  return <><div className='center__content-block'>
    <MainContentBlock blocksInfo={blocksInfo}/>
  </div>
    <div className='side__content-block'>
    <SideContentBlock/></div></>;
}

export default MainContent;