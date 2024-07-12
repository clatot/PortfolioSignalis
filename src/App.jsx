import Background from "./componants/Background/Background";
import Header from "./componants/Header/Header";
import Items from "./componants/Items/Items";
import Lightbox from "./componants/Lightbox/Lightbox";

function App() {
  return (
    <div className="overflow-hidden bg-black text-white pokemon-font tracking-widest w-screen h-screen flex flex-col justify-center relative">
      {/* Background */}
      <div className="absolute inset-0">
        <Background />
      </div>

      {/* Lightbox */}
      <Lightbox />

      {/* Main Page */}
      <div className="h-full flex justify-between sm:flex-col-reverse h-3/4 px-8 sm:px-0 sm:items-center sm:overflow-y-auto sm:pb-16">
        <Items />
        <Header />
      </div>
    </div>
  );
}

export default App;
