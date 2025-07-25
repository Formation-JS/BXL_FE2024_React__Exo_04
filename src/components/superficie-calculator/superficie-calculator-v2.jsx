import { useActionState } from "react";
import z from "zod";
import { nanoid } from "nanoid";

const calculatorSchemaValidation = z.object({
    name: z.string().min(1),
    length: z.coerce.number().positive(),
    width: z.coerce.number().positive()
});

async function calculatorAction(prevState, formData) {
    const formContent = Object.fromEntries(formData.entries());
    const { data, success, error } = await z.safeParseAsync(calculatorSchemaValidation, formContent);

    if(!success) {
        return {
            ...prevState,
            form: formContent,
            errorMessage: 'Données invalides (╯°□°）╯︵ ┻━┻'
        }
    }

    const roomInserted = {
        id: nanoid(),
        name: data.name,
        area: data.length * data.width
    }

    return {
        form: null,
        errorMessage: null,
        rooms: [...prevState.rooms, roomInserted]
    }
};

const initialState = {
    form: null,
    errorMessage: null,
    rooms: []
};

/**
 * Correction de l'exo 05 - Calcul de la superficie avec les actions du formulaire !
 */
export default function SuperficieCalculatorV2() {

    const [state, handleCalculatorForm] = useActionState(calculatorAction, initialState)

    const totalArea = state.rooms.reduce((acc, current) => acc + current.area, 0);

    return (
        <>
            <h3>Ajouter une piece : </h3>
            <form action={handleCalculatorForm}>
                <div>
                    <label htmlFor="input-room-name">Nom : </label>
                    <input id="input-room-name" type="text" 
                        name="name" defaultValue={state.form?.name} />
                </div>
                <div>
                    <label htmlFor="input-room-length">Longeur (m) : </label>
                    <input id="input-room-length" type="text" 
                        name="length" defaultValue={state.form?.length} />
                </div>
                <div>
                    <label htmlFor="input-room-width">Largeur (m) : </label>
                    <input id="input-room-width" type="text" 
                        name="width" defaultValue={state.form?.width} />
                </div>
                <div>
                    <button type="submit">Ajouter</button>
                    {' '}
                    {state.errorMessage && (
                        <span>{state.errorMessage}</span>
                    )}
                </div>
            </form>
            <h3>Liste des pieces :</h3>
            <ul>
                {state.rooms.map(room => (
                    <li key={room.id}> • {room.name} → {room.area}m²</li>
                ))}
            </ul>
            <p>Superficie total : {totalArea}m²</p>
        </>
    );
}