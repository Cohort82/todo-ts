import {useRef, useState} from "react";

interface TaskProps {
    children: string;
    position: number;
    remove: (index: number) => void;
    edit: (index: number, value: string) => void;
}

const Task = ({children, remove, position, edit}: TaskProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const textId = useRef<HTMLTextAreaElement>(null);

    console.log(`Task rendered: ${children}, position: ${position}`);

    const handleClickEdit = () => {
        setIsEditing(true);
    }

    const handleClickRemove = () => {
        remove(position);
    }

    const handleClickSave = () => {
        edit(position, textId.current!.value);
        setIsEditing(false);
    }

    if (isEditing) {
        return (
            <div className={'box'}>
                <textarea ref={textId} defaultValue={children}></textarea>
                <button onClick={handleClickSave} className={'btn success'}>Save</button>
            </div>
        )
    } else {
        return (
            <div className={'box'}>
                <div>{children}</div>
                <button onClick={handleClickEdit} className={'btn light'}>Edit</button>
                <button onClick={handleClickRemove} className={'btn red'}>Remove</button>
            </div>
        )
    }
}

export default Task;