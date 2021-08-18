import background from "./../images/Background.png";
import userpic from "./../images/Userpic.png";
import logo_gold from "./../images/Logo_gold.png";
import Group1 from "./../images/Group1.png";
import Group2 from "./../images/Group2.png";
import Group3 from "./../images/Group3.png";
import Group from "./Group.jsx";
import Article1 from "./../images/Article_1.png";
import Article2 from "./../images/Article_2.png";
import Article3 from "./../images/Article_3.png";
import Article from "./Article.jsx";
import textstyles from "./../styles/text.module.css";
import styles from "./../styles/SideBlock.module.css";
import classNames from "classnames";

function SideContentBlock() {
  let groups = [
    { img: Group1, groupname: "Moscow State Linguistical University" },
    { img: Group2, groupname: "Digital freelancers group" },
    { img: Group3, groupname: "Interaction design association" },
  ];

  let hashtags = [
    "work",
    "business",
    "hr",
    "userinterface",
    "digital",
    "userexperience",
    "ux",
    "ui",
    "freelance",
  ];

  let articles = [
    { img: Article1, name: "How I make cool designs?", viewers: 6340 },
    { img: Article2, name: "Advices for young HR-manage", viewers: 8123 },
    { img: Article3, name: "A little about usability testing", viewers: 3912 },
  ];
  return (
    <>
      <div className={classNames(styles.user__info, styles.content__block)}>
        <img src={background} alt="" />
        <img src={userpic} alt="" className={styles.user__info_content} />
        <div className={classNames(styles.user__info_content, styles.info__text)}>
          <span className={textstyles.middle + " " + textstyles.bold}>
            Dmitry Kargaev
            <img src={logo_gold} alt="" />
          </span>
          <span className={textstyles.xsmall}>
            Freelance UX/UI designer, 80+ projects in web design, mobile apps
            (iOS & android) and creative projects. Open to offers.
          </span>
        </div>
      </div>
      <div className={classNames(styles.content__block, styles.new_article)}>
        <button className={classNames(styles.new_article__button, textstyles.small, textstyles.uppercase)}>
          write new article
        </button>
      </div>
      <div className={classNames(styles.content__block, styles.groups)}>
        <div
          className={classNames(
            styles.header,
            textstyles.small,
            textstyles.bold,
            textstyles.uppercase
          )}
        >
          my groups<span className={classNames(styles.edit, textstyles.blue)}>edit list</span>
        </div>
        <div className={styles.groups__list}>
          {groups.map((element) => {
            return <Group params={element} />;
          })}
        </div>
        <div
          className={classNames(
            styles.footer,
            textstyles.small,
            textstyles.bold,
            textstyles.uppercase,
            textstyles.blue
          )}
        >
          show all(8)
        </div>
      </div>
      <div className={classNames(styles.content__block, styles.hashtags)}>
        <div
          className={classNames(
            styles.header,
            textstyles.small,
            textstyles.bold,
            textstyles.uppercase
          )}
        >
          followed hashtags
        </div>
        <div className={styles.hashtag__control}>
          {hashtags.map((element) => {
            return (
              <div className={classNames(styles.hashtag, textstyles.small)}>
                {"#" + element}
              </div>
            );
          })}
        </div>
      </div>
      <div className={classNames(styles.content__block, styles.articles)}>
        <div
          className={classNames(
            styles.header,
            textstyles.small,
            textstyles.bold,
            textstyles.uppercase
          )}
        >
          Trending articles
        </div>
        <div className={styles.articles__list}>
          {articles.map((element) => {
            return <Article params={element} />;
          })}
        </div>
      </div>
    </>
  );
}

export default SideContentBlock;
