import Follower from "./componants/Follower/Follower";
import Header from "./componants/Header/Header";
import Items from "./componants/Items/Items";
import { NavigationProvider } from "./contexts/NavigationContext";

function App() {
  return (
    <NavigationProvider>
      <div className="overflow-hidden bg-black text-white w-screen h-screen flex flex-col justify-center relative">
        <div className="absolute inset-0">
          <img
            src="./src/assets/Background.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-between h-3/4 px-8">
          <Items />
          <Follower />
          <Header />
        </div>
      </div>
    </NavigationProvider>
  );
}

export default App;
