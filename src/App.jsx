import Background from "./componants/Background/Background";
import Follower from "./componants/Follower/Follower";
import Header from "./componants/Header/Header";
import Items from "./componants/Items/Items";
import Lightbox from "./componants/Lightbox/Lightbox";

function App() {
  return (
    <div className="overflow-hidden bg-black text-white pokemon-font w-screen h-screen flex flex-col justify-center relative">
      {/* Background */}
      <div className="absolute inset-0">
        <Background />
      </div>

      {/* Lightbox */}
      <Lightbox />

      {/* Main Page */}
      <div className="flex justify-between h-3/4 px-8">
        <Items />
        <Header />
      </div>
    </div>
  );
}

export default App;
