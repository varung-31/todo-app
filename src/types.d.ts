interface ListItemTask {
    text: string,
    isComplete? : boolean
}

interface ListItemState {
    text: string,
    isComplete: boolean,
    isInEditableMode: boolean
}
