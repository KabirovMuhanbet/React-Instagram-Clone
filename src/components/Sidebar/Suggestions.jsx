import "../../styles/Suggestions.scss";
import SuggestionsProfile from './SuggestionsProfile';
function Suggestions(){
   return (
      <div className="suggestions">
         <div className="titleContainer">
            <span className="sidebar_title">Рекомендации для вас</span>
            <a className="sidebar_all" href="/">Все</a>
         </div>
         <SuggestionsProfile />
         <SuggestionsProfile />
         <SuggestionsProfile />
         <SuggestionsProfile />
         <SuggestionsProfile />
         <SuggestionsProfile />
      </div>
   )
}
export default Suggestions;