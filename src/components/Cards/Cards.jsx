import "../../styles/Cards.scss";
import CardsItem from "./CardsItem";
import Stories from "./Stories/Stories";
import comments from "../../data/comments";
function Cards() {
   return (
      <div className="cards">
         <Stories/>
         <CardsItem 
         accountName="sasuke"
         storyBorder={true}
         image="https://picsum.photos/800/900"
         comments={comments.commentsOne}
         likedByText="sakura"
         likedByNumber="666"
         hours="10"
         />
         <CardsItem 
         accountName="obito"
         storyBorder={true}
         image="https://picsum.photos/800"
         comments={comments.commentsTwo}
         likedByText="rin.nohara"
         likedByNumber="7777"
         hours="8"
         />
         <CardsItem 
         accountName="hinata"
         storyBorder={true}
         image="https://picsum.photos/800/1000"
         comments={comments.commentsThree}
         likedByText="naruto"
         likedByNumber="900"
         hours="5"
         />
      </div>
   )
}
export default Cards;