import "./App.css";
import PickList from "./components/picklist/PickList";
//import MultiselectDemo from "./pages/MultiselectDemo";
import RuleDetails from "./pages/RuleDetails";

function App() {
  const data = Array.from({ length: 10 }).map((item, index) => {
    return { id: index + 1, name: `Item ${index}` };
  });
  const input = [2, 3, 4];
  return (
    // <MultiselectDemo/>
    <>
      {/* <MultiselectDemo /> */}
      <RuleDetails />
      <PickList data={data} input={input}/>
    </>
  );
}

export default App;
