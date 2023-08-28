import classes from "./SavingsTable.module.css"
import {formatter} from "../../util/util"

export default function SavingsTable(props) {
    return (
        <table className={classes.savingsTable}>
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {props.yearlySavings.map(savings => {
                return (
                    <tr key={savings.year}>
                        <td>{savings.year}</td>
                        <td>{formatter.format(savings.savingsEndOfYear)}</td>
                        <td>{formatter.format(savings.yearlyInterest)}</td>
                        <td>{formatter.format(savings.savingsEndOfYear - props.initialInvestment - savings.yearlyContribution * savings.year)}</td>
                        <td>{formatter.format(props.initialInvestment + savings.yearlyContribution * savings.year)}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}
