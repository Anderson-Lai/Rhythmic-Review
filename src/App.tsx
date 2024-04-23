import Members from "./members/members";
import Links from "./links/links";
import Description from "./description/description";

function App() {
  return (
    <div className="row">
      <Description />
      <Links />
      <Members />
    </div>
  );
}

export default App;
