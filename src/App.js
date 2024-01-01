// Component bản chất là một function return về một JSX mô tả giao diện sẽ được hiển thị

// import Welcome from "./1_Component/Welcome";
import Databiding from "./2_DataBinding/Databiding";
import ConditionalRendering from "./3_ConditionalRendering/ConditionalRendering";
import Home from "./BT_HomeLayout/Home";
import Shop from "./BT_ShopLayout/Shop";

// JSX: JavaScript + XML, cho phép viết HTML trong JavaScript
function App() {
  return (
  <div>
    <ConditionalRendering/>
  </div>
  )
}

export default App;
