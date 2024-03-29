// Component bản chất là một function return về một JSX mô tả giao diện sẽ được hiển thị

// import Welcome from "./1_Component/Welcome";
import Memo from "./10_Memo/Memo";
import Ref from "./11_Ref/Ref";
import UseReducer from "./12_Hooks/UseReducer";
import Redux from "./14_Redux/Redux";
import Databiding from "./2_DataBinding/Databiding";
import ConditionalRendering from "./3_ConditionalRendering/ConditionalRendering";
import List from "./4_List/List";
import Event from "./5_Event/Event";
import Style from "./6_Style/Style";
import State from "./7_State/State";
import Props from "./8_Props/Props";
import Effect from "./9_Effect/Effect";
import BauCua from "./BT_BauCua/BauCua";
import Home from "./BT_HomeLayout/Home";
import SelectCar from "./BT_SelectCar/SelectCar";
import ShoeShop from "./BT_ShoeShop/ShoeShop";
import Shop from "./BT_ShopLayout/Shop";
import ShoppingCart from "./BT_ShoppingCart/ShoppingCart";
import UserManagement from "./BT_UserManagement/UserManagement";



// JSX: JavaScript + XML, cho phép viết HTML trong JavaScript
function App() {
  return (
  <div>
    <BauCua/>
  </div>
  )
}

export default App;
