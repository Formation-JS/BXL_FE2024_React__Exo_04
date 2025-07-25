import { nanoid } from "nanoid";
import { useState } from "react";

/**
 * Correction de l'exo 02 - Calcul de la superficie avec des composants contrôlé !
 */
export default function SuperficieCalculatorV1() {

    const [roomName, setRoomName] = useState('');
    const [roomLength, setRoomLength] = useState('');
    const [roomWidth, setRoomWidth] = useState('');
    const [rooms, setRooms] = useState([]);

    const handleNumberInput = (e, setValue) => {
        if(isNaN(e.target.value) || parseFloat(e.target.value) < 0)
            return;

        setValue(e.target.value);
    }

    const handleAddRoom = (e) => {
        e.preventDefault();

        const roomInserted = {
            id: nanoid(),
            name: roomName,
            area: parseFloat(roomLength) * parseFloat(roomWidth)
        };
        setRooms(rooms => [...rooms, roomInserted]);
    }

    const totalArea = rooms.reduce((acc, current) => acc + current.area, 0);

    return (
        <>
            <h3>Ajouter une piece : </h3>
            <form onSubmit={handleAddRoom}>
                <div>
                    <label htmlFor="input-room-name">Nom : </label>
                    <input id="input-room-name" type="text"
                        value={roomName} onChange={e => setRoomName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="input-room-length">Longeur (m) : </label>
                    <input id="input-room-length" type="text"
                        value={roomLength} onChange={e => handleNumberInput(e, setRoomLength)} />
                </div>
                <div>
                    <label htmlFor="input-room-width">Largeur (m) : </label>
                    <input id="input-room-width" type="text"
                        value={roomWidth} onChange={e => handleNumberInput(e, setRoomWidth)} />
                </div>
                <div>
                    <button type="submit">Ajouter</button>
                </div>
            </form>
            <h3>Liste des pieces :</h3>
            <ul>
                {rooms.map(room => (
                    <li key={room.id}>{room.name} → {room.area}m²</li>
                ))}
            </ul>
            <p>Superficie total : {totalArea}m²</p>
        </>
    );
}