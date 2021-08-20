import MainContentBlock from "./MainContentBlock";
import SideContentBlock from "./SideContentBlock";
import photo1 from "./../images/Photo1.png";
import photo2 from "./../images/Photo2.png";
import photo3 from "./../images/Photo3.png";
import photo4 from "./../images/Photo4.png";
import rectangle3 from "./../images/Rectangle 3.png";
import { nanoid } from "nanoid";

function MainContent() {
  let blocksInfo = [
    {
      id: nanoid(),
      header: "Ted Bell, Annette Nguyen and Cody Hawkins liked this",
      userpic: photo1,
      username: "Theresa Steward",
      userpos: "iOS developer",
      text:
        "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry " +
        "went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins)",
      likes: 42,
      liked: false,
      comments: 9,
    },
    {
      id: nanoid(),
      header: "Audrey Alexander comment this",
      userpic: photo2,
      username: "Kyle Fisher",
      userpos: "Product designer at Commandor Corp.",
      text: "How’s your day going, guys?",
      photo: rectangle3,
      likes: 12,
      liked: false,
      comments: 3,
    },
    {
      id: nanoid(),
      header: "High rated post from your feed",
      userpic: photo3,
      username: "Brandon Wilson",
      userpos: "Senior UX designer",
      text: "There is some new guidelines for iOS",
      files: [
        {
          filename: "iOS 11 guidelines for UX/UI designers",
          filetype: "PDF file",
          filesize: "324 kb",
        },
        {
          filename: "iOS 11 guidelines for developers",
          filetype: "PDF file",
          filesize: "245 kb",
        },
      ],
      likes: 89,
      liked: false,
      comments: 7,
    },
    {
      id: nanoid(),
      header: "First post from Audrey Alexander",
      userpic: photo4,
      username: "Audrey Alexander",
      userpos: "Team lead at Google",
      text:
        "The bun runs along the road and meets a wolf. «Little bun, little bun, I want to eat you!» says the wolf. «I ran away from Grandfather, I ran away from Grandmother, " +
        "I ran away from the hare. And I can run away from you, grey wolf!» says the bun and runs away.",
      likes: 10,
      liked: false,
      comments: 0,
    },
  ];
  
  if(!localStorage.getItem("posts")){
    localStorage.setItem("posts", JSON.stringify(blocksInfo));
  }
  
  return (
    <>
      <div className="center__content-block">
        <MainContentBlock blocksInfo={JSON.parse(localStorage.getItem("posts"))} />
      </div>
      <div className="side__content-block">
        <SideContentBlock />
      </div>
    </>
  );
}

export default MainContent;
