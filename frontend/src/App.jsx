import './App.css'
import {useState} from "react";
import SendButton from "./components/UI/SendButton.jsx";
import InputField from "./components/UI/InputField.jsx";
import ApplicationTitle from "./components/UI/ApplicationTitle.jsx";
import Quote from "./components/UI/Quote.jsx";
import axios from "axios";
import ErrorMessage from "./components/UI/ErrorMessage.jsx";
import {SpinnerCircular} from "spinners-react";

function App() {

    const [prompt, setPrompt] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    const [slogan, setSlogan] = useState()

    const handleClick = async () => {
        if(prompt === undefined || prompt === "") {
            setError("Please enter a programming language or technology.");
            return;
        }
        else{
            setLoading(true);
            setError('');
            try {
                const res = await axios.post("http://localhost:5000/api/generate", {
                    tech : prompt,
                });
                setSlogan(res.data.slogan);
            }catch(error){
                console.error("Błąd:", error);
                setSlogan("Błąd podczas generowania sloganu");
            }
            setLoading(false);
        }
        
    }

    console.log(slogan)

  return (
      <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="flex-1 flex flex-col justify-end items-center mb-40">
              <ApplicationTitle/>
          </div>
          <div className="flex-1 flex flex-col justify-start items-center">
              <div className="flex flex-row gap-4">
                  <InputField setPrompt={setPrompt}/>
                  <SendButton onClick={handleClick} text="Generate Quote"/>
              </div>
          </div>
          {error && <ErrorMessage error={error} />}
          <div className="flex-1 flex flex-col justify-end items-center mt-20">
              {!loading? <Quote text={slogan ? slogan : null}/> : <SpinnerCircular/>}
          </div>
      </div>
  )
}

export default App;
