import React from "react";
import ReactDOM from 'react-dom';
import ListItem from "./ListItem";

class AddTask extends React.Component<AddTaskProps, AddTaskState> {
    constructor(props: AddTaskProps) {
        super(props);
        this.state = {
            text: ''
        };
    }

    addTask() {
        let todoDivTag = document.getElementById("incomplete-tasks");
        let todoUnorderedListTag = todoDivTag?.getElementsByTagName("ul").item(0);

        // create a dummy div tag and render the list element inside it
        let dummyDiv = document.createElement("div");
        ReactDOM.render(<ListItem text={this.state.text} />, dummyDiv);

        // pull out the rendered child as Node and append to to-do list
        todoUnorderedListTag?.appendChild(dummyDiv.childNodes.item(0));

        // don't forget to change state of the input element
        this.setState({text: ''});
    }

    render() {
        return (
            <div id="add-task">
                <h3>ADD TASK</h3>
                <input type="text" value={this.state.text}
                       onChange={event => this.setState({text: event.target.value})} />
                <button type="button" className="add-button" onClick={() => this.addTask()}>Add</button>
            </div>
        );
    }
}

export default AddTask;
