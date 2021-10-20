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

    // regex to check if there's a letter (means that it's a dns)
    let dnsRegex = /[A-Za-z]/;

    // Send as ip as dns if true and otherwise
    if (dnsRegex.test(ip)) {
      sendRequest('', ip).then((data) => setData(data));
    } else {
      sendRequest(ip, '').then((data) => setData(data));
    }
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
