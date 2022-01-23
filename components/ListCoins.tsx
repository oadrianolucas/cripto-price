import { useEffect, useState } from "react";
import Axios from 'axios'
export default function ListCoins() {
  const [listOfCoins, setListOfCoins] = useState<any[]>([])
  const [search, setSearch] = useState('')

  useEffect(() =>{
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (res) =>{
        setListOfCoins(res.data.coins)
    })
  },[]) 

  const filter = listOfCoins.filter((coin)=>{
    return coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  })

  return (
  <div>
    <form>
      <input className="border rounded p-2 mb-3 w-full" placeholder="Bitcoin..."
      onChange={
          (event => {setSearch(event.target.value)})
        }/>
    </form>
    <div className="overflow-x-auto w-full">
      <table className="mx-auto w-full whitespace-nowrap divide-y overflow-hidden">
        <thead>
          <tr className="text-left">
            <th>Name</th>
            <th>Price</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filter.map(coin =>{
            const price = coin.price.toLocaleString('en-IN', {maximumSignificantDigits: 3})
            const volume = coin.volume
          return (
            <tr key={coin.id}>
              <td className="flex items-center space-x-3"><img className="w-10 h-10 p-1" 
                src={coin.icon}/> {coin.name} ({coin.symbol})</td>
              <td>${price}</td>
              {volume <0 ? (
                <td>${volume.toLocaleString()}</td>
              ) : (<td>${volume}0</td>)
              }
            </tr>
          )
          })}
        </tbody>
      </table>
    </div>
  </div>
  );
}

