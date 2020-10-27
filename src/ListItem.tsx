import React from "react";
import "./ListItem.css";

class ListItem extends React.Component<ListItemTask, ListItemState> {
    constructor(props: ListItemTask) {
        super(props);
        this.state = {
            text: this.props.text,
            isComplete: this.props.isComplete !== undefined ? this.props.isComplete : false,
            isInEditableMode: false
        };
    }

    renderChildBasedOnEditable(text: string) {
        if (this.state.isInEditableMode) {
            return <input type="text" defaultValue={text} onChange={event => {
                this.setState({text: event.target.value});
            }} />
        }
        return <label>{text}</label>;
    }

    toggleTaskStatus(event: React.MouseEvent) {
        let parentListTag = event.currentTarget.parentElement;
        if (this.state.isComplete) {    // move from completed section to to-do section
            let completedUnorderedListTag = parentListTag?.parentElement;
            if (parentListTag != null) {
                // remove from completed task section
                completedUnorderedListTag?.removeChild(parentListTag);

                // add to to-do task section
                let todoDivTag = document.getElementById("incomplete-tasks");
                let todoUnorderedListTag = todoDivTag?.getElementsByTagName("ul").item(0);
                todoUnorderedListTag?.appendChild(parentListTag);
            }
        } else {    // move from to-do section to completed section
            let todoUnorderedListTag = parentListTag?.parentElement;
            if (parentListTag != null) {
                // remove from to-do task section
                todoUnorderedListTag?.removeChild(parentListTag);

                // add to completed task section
                let completedDivTag = document.getElementById("complete-tasks");
                let completedUnorderedListTag = completedDivTag?.getElementsByTagName("ul").item(0);
                completedUnorderedListTag?.appendChild(parentListTag);
            }
        }

        // don't forget to toggle state
        this.setState({isComplete: !this.state.isComplete});
    }

    editTask() {
        this.setState({isInEditableMode: !this.state.isInEditableMode});
    }

    deleteTask(event: React.MouseEvent) {
        let parentListTag = event.currentTarget.parentElement?.parentElement;
        let parentUnorderedListTag = parentListTag?.parentElement;
        if (parentListTag != null) {
            parentUnorderedListTag?.removeChild(parentListTag);
        }
    }

    render() {
        return (
            <li>
                <input type="checkbox" checked={this.state.isComplete}
                       onClick={(event) => this.toggleTaskStatus(event)}/>
                {this.renderChildBasedOnEditable(this.state.text)}
                <div className="button-group">
                    <button className="edit-button" onClick={() => this.editTask()}>Edit</button>
                    <button className="delete-button"
                            onClick={(event) => this.deleteTask(event)}>Remove</button>
                </div>
            </li>
        );
    }
}

export default ListItem;
