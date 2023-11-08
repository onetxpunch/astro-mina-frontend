import { useState } from "react";

export const Connect = () => {
  const [to, setTo] = useState<string>();
  const [amount, setAmount] = useState<string>();
  const [connectData, setConnectData] = useState<string[]>();
  const tryConnect = async () => {
    try {
      let data = await window.mina.requestAccounts();
      if (data) setConnectData(data);
    } catch (err) {
      console.log(`tryConnect err`, err);
    }
  };

  return (
    <>
      {connectData ? (
        <>
          <div className="p-4 text-lg bg-pink-400 rounded-lg hover:bg-pink-300 hover:cursor-pointer">
            Connected: {connectData[0]}
          </div>
          <div className="flex flex-col">
            <div>Amount</div>
            <input
              className="p-4 text-lg text-black"
              type="text"
              value={amount}
              onInput={(e) => {
                setAmount(e.currentTarget.value);
              }}
            />
            <div>To</div>
            <input
              className="p-4 text-lg text-black"
              type="text"
              value={to}
              onInput={(e) => {
                setTo(e.currentTarget.value);
              }}
            />
            <div
              className="p-4 mt-2 text-lg bg-pink-400 rounded-lg hover:bg-pink-300 hover:cursor-pointer"
              onClick={tryConnect}
            >
              Transfer with Auro
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="instructions">
            To get started, open the directory <code>src/pages</code> in your
            project.
            <br />
          </p>
          <div
            className="p-4 text-lg bg-pink-400 rounded-lg hover:bg-pink-300 hover:cursor-pointer"
            onClick={tryConnect}
          >
            Connect
          </div>
        </>
      )}
    </>
  );
};

export default Connect;