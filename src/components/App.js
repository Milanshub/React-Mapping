import Entry from "./Entry";
import emojipedia from "../emojipedia";

// Before we uas the arrow function 
// function createEmoji(emoji){
//   return <Entry 
//   key={emoji.id}
//   emoji={emoji.emoji} 
//   name={emoji.name}
//   meaning={emoji.meaning}
//    />
// }


//Below arrow function is used, instead of the above function. 
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary"> {emojipedia.map(emoji =>  (
      <Entry 
          key={emoji.id}
          emoji={emoji.emoji} 
          name={emoji.name}
          meaning={emoji.meaning}
        />
        ))}

      
      </dl>
    </div>

  );
}

export default App;
