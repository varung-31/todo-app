interface ListItemTask {
    text: string,
    isComplete? : boolean
}

interface ListItemState {
    text: string,
    isComplete: boolean,
    isInEditableMode: boolean
}

interface AddTaskState {
    text: string
}

interface AddTaskProps {

}
