import { useState } from "react";

export const Connect = () => {
  const [connectData, setConnectData] = useState();
  const tryConnect = async () => {
    try {
      let data = await window.mina.requestAccounts();
      if (data) setConnectData(data);
    } catch (err) {
      console.log(`tryConnect err`, err);
    }
  };

  return connectData ? (
    <div>{JSON.stringify(connectData)}</div>
  ) : (
    <div onClick={tryConnect}>Connect</div>
  );
};

export default Connect;
