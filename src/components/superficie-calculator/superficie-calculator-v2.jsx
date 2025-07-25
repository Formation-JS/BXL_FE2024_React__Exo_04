/**
 * Correction de l'exo 05 - Calcul de la superficie avec les actions du formulaire !
 */
export default function SuperficieCalculatorV2() {


    // const totalArea = rooms.reduce((acc, current) => acc + current.area, 0);

    return (
        <>
            <h3>Ajouter une piece : </h3>
            <form>
                <div>
                    <label htmlFor="input-room-name">Nom : </label>
                    <input id="input-room-name" type="text"
                        />
                </div>
                <div>
                    <label htmlFor="input-room-length">Longeur (m) : </label>
                    <input id="input-room-length" type="text"
                         />
                </div>
                <div>
                    <label htmlFor="input-room-width">Largeur (m) : </label>
                    <input id="input-room-width" type="text"
                         />
                </div>
                <div>
                    <button type="submit">Ajouter</button>
                </div>
            </form>
            <h3>Liste des pieces :</h3>
            {/* <ul>
                {rooms.map(room => (
                    <li key={room.id}>{room.name} → {room.area}m²</li>
                ))}
            </ul> */}
            {/* <p>Superficie total : {totalArea}m²</p> */}
        </>
    );
}