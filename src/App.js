import { useState } from "react";
import Steps from "./steps";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


function App() {
	let [step, setStep] = useState(1);
	let [isOpen, setIsOpen] = useState(true);

	// using a callback function to set the state
	function handlePrevious(){
		step > 1 && setStep((s) => s - 1);

	}

	// calling setStep twice to skip a step
	function handleNext(){
		if (step < messages.length){
			setStep((s) => s + 1);
			// setStep((s) => s + 1);
		} 
	}

	return (
		<>
			<button className="close"
					onClick={() => setIsOpen(!isOpen)}
			>&times;</button>

			{
				isOpen && (
					<Steps step={step}
					handleNext={handleNext}
					handlePrevious={handlePrevious}
					messages={messages} />
				)
			}
			
		</>
	)
}

export default App;
