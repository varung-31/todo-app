interface ListItemTask {
    text: string,
    isComplete? : boolean
}

interface ListItemState {
    text: string,
    interimText: string,
    isComplete: boolean,
    isInEditableMode: boolean
}

interface AddTaskState {
    text: string
}

interface AddTaskProps {

}
