import Header from "./components/Header/Header";
import SavingsForm from "./components/SavingsForm/SavingsForm";
import {useState} from "react";
import SavingsTable from "./components/SavingsTable/SavingsTable";

const initialState = {
    "current-savings": 0,
    "yearly-contribution": 200,
    "expected-return": 10,
    duration: 10,
}

function App() {
    const calculateHandler = (userInput) => {
        const yearlyData = []; // per-year results

        let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
        const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
        const expectedReturn = +userInput['expected-return'] / 100;
        const duration = +userInput['duration'];

        // The below code calculates yearly results (total savings, interest etc.)
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                // feel free to change the shape of the data pushed to the array!
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
        }

        setYearlySavings((yearlyData))
    };

    const [userInput, setUserInput] = useState(initialState)

    const [yearlySavings, setYearlySavings] = useState([]);

    const onResetForm = () => {
        setUserInput(initialState)
    }

    return (
        <div>
            <Header/>

            <SavingsForm
                onSavingsFormSubmit={calculateHandler}
                userInput={userInput}
                setUserInput={setUserInput}
                onReset={onResetForm}
            />

            {yearlySavings.length > 0 ? (
                <SavingsTable yearlySavings={yearlySavings} initialInvestment={userInput["current-savings"]}/>
            ) : (
                <p>No data present. Please fill out the form above</p>
            )}
        </div>
    );
}

export default App;
