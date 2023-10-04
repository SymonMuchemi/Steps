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

	function handlePrevious(){
		step > 1 && setStep(step -= 1)

	}

	function handleNext(){
		step < 3 && setStep(step += 1);

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
