import React, {Component} from 'react';
import {DateRangePicker} from 'react-dates';
import logo from './logo.svg';
import './App.css';
import 'react-dates/lib/css/_datepicker.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null
        };
    }
    onDatesChange({ startDate, endDate }) {
        this.setState({ startDate, endDate });
        if(endDate!=null){
            console.log(startDate+', '+endDate);
        }

    }
    onFocusChange(focusedInput) {
        this.setState({ focusedInput });
        //console.log(this.state.startDate);
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <DateRangePicker
                    focused={true}
                    withFullScreenPortal={true}
                    numberOfMonths={2}
                    orientation={"vertical"}
                    withFullScreenPortal={false}
                    isOutsideRange={() => false}
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    onDatesChange={this.onDatesChange.bind(this)} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange.bind(this)} // PropTypes.func.isRequired,
                />
            </div>
        );
    }
}

export default App;
