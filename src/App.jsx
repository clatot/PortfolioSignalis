import Follower from "./componants/Follower/Follower";
import Header from "./componants/Header/Header";
import Lists from "./componants/Items/Items";

function App() {
  return (
    <div className="overflow-hidden bg-black text-white w-screen h-screen flex flex-col justify-center">
      <div className="grid grid-cols-4 h-3/4 bg-slate-500">
        <Lists />
        <Follower />
        <Header />
      </div>
    </div>
  );
}

export default App;
