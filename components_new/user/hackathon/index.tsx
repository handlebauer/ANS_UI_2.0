import { useAns } from "ans-for-all";
import { Title } from "../components/reusables";
import { Res } from "../../../src/types";
import { Divider } from "../components/reusables";

// Example component
export function ANSIdentitiesManager({ props }: { props: Res }) {
  // const { address, walletConnected } = useAns();
  const { ANS, ENS, AVVY } = props;

  const NotSet = (text: string) => (
    <span className="text-gray-500 flex items-center">
      Not set 
      <button className="ml-2 rounded-full w-6 h-6 bg-gray-900/90 text-white tooltip tooltip-info" data-tip={text}>?</button>
    </span>
  )

  return (
    <div className="mb-8">
      <Title>Identities</Title>
      <div className="grid grid-cols-2 gap-y-3 mt-2">
        <span className="text-pink-600">ANS</span>
        <span className="text-primary">{ANS.currentLabel || NotSet("impossible...")}</span>
        <span className="text-purple-600">ENS</span>
        <span className="text-primary">{ENS || NotSet("The user has not connected their Ethereum domain")}</span>
        <span className="text-red-700">AVVY</span>
        <span className="text-primary">{AVVY || NotSet("The user has not connected their Avax domain")}</span>
      </div>
    </div>
  )
}

export function Poaps({ props }: { props: Res }) {
  const { POAPS } = props;

  return (
    <>
      <h1 className="text-xl font-medium flex w-full">POAPS</h1>
      <div className="mt-4 flex gap-x-6 carousel">
        {POAPS.map((p, i) => (
          <div key={i} className="carousel-item">
            <label className="flex items-center cursor-pointer modal-button" htmlFor="my-modal-4">
              <img src={p.event.image_url} className="w-32 h-32" />
            </label>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer backdrop-blur-md">
              <label className="modal-box relative" htmlFor="">
                <div className="flex flex-col items-center">
                  <img src={p.event.image_url} className="w-40 h-40 mt-4 mb-8" />
                </div>
                <div className="flex flex-col gap-y-2 text-center">
                  <div className="font-semibold">{p.event.name}</div>
                  <div className="">Obtained on {p.event.start_date} </div>
                  <div><a href={p.event.event_url} className="link-primary after:content-['_↗']">{p.event.event_url}</a></div>
                </div>
              </label>
            </label>
          </div>
        ))}
      </div>
      <Divider />
    </>
  )
}