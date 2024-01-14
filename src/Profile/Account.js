import { useState, useEffect } from "react";
import Account from "./Test";

function Display() {
  const [info, setInfo] = useState();

  useEffect(() => {
    fetch('https://swifdropp.onrender.com/api/v1/company//details/6581527dc96a438562098fef')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setInfo(data);
      })
      .catch((error) => {
        console.error("Error fetching data:");
      });
  }, []);

  return (
    <>
      {info && (
        <Account
          company={info.Companyname}
          email={info.email}
          phoneNumber={info.phoneNumber}
          city={info.city}
          address={info.address}
          state={info.state}
          postal={info.code}
        />
      )}
    </>
  );
}
export default Display
