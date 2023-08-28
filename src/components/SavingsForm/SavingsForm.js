import classes from "./SavingsForm.module.css"

export default function SavingsForm(props) {


    const onSubmit = event => {
        event.preventDefault()
        props.onSavingsFormSubmit(props.userInput)
    }

    const onReset = () => {
        props.onReset()
    }

    const onInputChange = (input, value) => {
        // duration
        // expected-return
        // yearly-contribution
        // current-savings
        props.setUserInput(prevState => {
            return {
                ...prevState,
                [input]: +value,
            }
        })
    }

    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <div className={classes.inputGroup}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        onChange={(event) =>
                            onInputChange("current-savings", event.target.value)}
                        value={props.userInput["current-savings"]}
                        type="number"
                        id="current-savings"/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        onChange={(event) =>
                            onInputChange("yearly-contribution", event.target.value)}
                        value={props.userInput["yearly-contribution"]}
                        type="number"
                        id="yearly-contribution"/>
                </p>
            </div>
            <div className={classes.inputGroup}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        onChange={(event) =>
                            onInputChange("expected-return", event.target.value)}
                        value={props.userInput["expected-return"]}
                        type="number"
                        id="expected-return"/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        onChange={(event) =>
                            onInputChange("duration", event.target.value)}
                        value={props.userInput.duration}
                        type="number"
                        id="duration"/>
                </p>
            </div>
            <p className={classes.actions}>
                <button onClick={onReset} type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
}
