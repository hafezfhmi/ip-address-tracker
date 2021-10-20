import React, { useContext, useState } from 'react';
import sendRequest from '../Services/getLocation';

const InputDataContext = React.createContext();

export function UseinputDataContext() {
  return useContext(InputDataContext);
}

export const InputDataProvider = (props) => {
  const [ip, setIp] = useState('');
  const [data, setData] = useState({
    ip: '-',
    location: '-',
    timezone: '-',
    isp: '-',
    lat: '51.505',
    lng: '-0.09',
  });

  const submitHandler = (event) => {
    event.preventDefault();
    sendRequest().then((data) => setData(data));
  };

  const inputHandler = (event) => {
    setIp(event.target.value);
  };

  return (
    <InputDataContext.Provider
      value={{ submitHandler, inputHandler, ip, data }}
    >
      {props.children}
    </InputDataContext.Provider>
  );
};
