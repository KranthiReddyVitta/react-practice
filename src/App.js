import "./App.css";
import Login from "./components/Context/Login";
import LoginStatus from "./components/Context/LoginStatus";
import LogOut from "./components/Context/LogOut";
import OuterButton from "./components/forwardRef/OuterButton";
import HocClick from "./components/higerorder/hocClick";
import HocHover from "./components/higerorder/hocHover";
import LifeCycle from "./components/lifeCycle/LifeCycle";
import PickList from "./components/picklist/PickList";
import Profile from "./components/redux-example/Profile";
import Timer from "./components/redux-example/Timer";
import TimerControls from "./components/redux-example/TimerControls";
import ClickCounter from "./components/renderProps/ClickCounter";
import Counter from "./components/renderProps/Counter";
import HoverCounter from "./components/renderProps/HoverCounter";
import CartReducer from "./components/UseReducerEx/CartReducer";
//import MultiselectDemo from "./pages/MultiselectDemo";
import RuleDetails from "./pages/RuleDetails";
import AuthProvider from "./store/AuthProvider";

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
      <PickList data={data} input={input} />
      <LifeCycle data="Input data" />
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <Timer />
      <TimerControls />
      <Profile />
      <HocClick />
      <HocHover />
      <OuterButton />
      <AuthProvider>
        <LoginStatus />
        <Login />
        <LogOut />
      </AuthProvider>
      <CartReducer/>
    </>
  );
}

export default App;
