import { useState } from "react";

/** 
* This is a custom hook that can be used to submit a form and simulate an API call 
* It uses Math.random() to simulate a random success or failure, with 50% chance of each 
*/
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data
    })
      .then(setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      }))
      .catch((e) =>  {
      console.log(e);
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })}
      );

  return { isLoading, response, submit };
}
}
export default useSubmit;