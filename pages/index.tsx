import ListCoins from "../components/ListCoins"
import StyleMode from "../components/StyleMode"
import {GiMoneyStack} from "react-icons/gi"
export default function Home() {
  return (
    <div className="m-4">
       <div className="flex items-center space-x-3 mb-3 block md:hidden">
          <h1 className="text-2xl font-bold">CoinPrice</h1>
          <GiMoneyStack className="h-8 w-8"/>
      </div>
    <div className="flex flex-row">
      <div className="basis-1/4  p-2 hidden md:block">
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold">CoinPrice</h1>
          <GiMoneyStack className="h-8 w-8"/>
        </div>
        </div>
      <div className="basis-1/2">
        <ListCoins />
      </div>
      <div className="basis-1/4 p-2 mx-2">
        <StyleMode />
      </div>
    </div>
    </div>
  );
}