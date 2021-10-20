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
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    // regex to check if there's a letter (means that it's a dns)
    let dnsRegex = /[A-Za-z]/;

    // Send as ip as dns if true and otherwise
    if (dnsRegex.test(ip)) {
      sendRequest('', ip)
        .then((data) => setData(data))
        .catch((error) => {
          if (error.response) {
            setError(true);
            setErrorMessage(error.response.data.messages);
            console.log(error.response.data.messages);
          } else if (error.request) {
            setError(true);
            setErrorMessage('Disable adblock');
            console.log('Disable adblock');
          }
        });
    } else {
      sendRequest(ip, '')
        .then((data) => setData(data))
        .catch((error) => {
          if (error.response) {
            setError(true);
            setErrorMessage(error.response.data.messages);
            console.log(error.response.data.messages);
          } else if (error.request) {
            setError(true);
            setErrorMessage('Disable adblock');
            console.log('Disable adblock');
          }
        });
    }
  };

  const inputHandler = (event) => {
    setIp(event.target.value);
  };

  const changeErrorHandler = (event) => {
    event.preventDefault();
    setError((prevState) => !prevState);
  };

  return (
    <InputDataContext.Provider
      value={{
        submitHandler,
        inputHandler,
        ip,
        data,
        error,
        errorMessage,
        changeErrorHandler,
      }}
    >
      {props.children}
    </InputDataContext.Provider>
  );
};
