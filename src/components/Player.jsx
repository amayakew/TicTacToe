import { useState } from "react";

export default function Player ({initialName, symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const handleEditName = () => {
        setIsEditing((editing) => !editing);
    };

    const handleNameChange = (event) => {
        setPlayerName(event.target.value);
    };

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let buttonState = "Edit";
    
    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} onChange={handleNameChange} required/>;
        buttonState = "Save";
    };

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditName}>{buttonState}</button>
        </li>
    );
};