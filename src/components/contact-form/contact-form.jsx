import { useActionState } from "react";

async function fakeSendToServer(data) {
    await (new Promise((resolve) => setTimeout(resolve, 1_000)));
    console.log('Donnée envoyé !');
}

async function contactAction(prevState, formData) {
    console.log(Object.fromEntries(formData.entries()));
    
    return prevState;
}

const initialState = {
    message: null,
    form: {
        email: null,
        comment: null,
    },
    error: {
        email: null,
        comment: null,
        condition: null
    }
};

export default function ContactForm() {

    const [state, handleForm, isPending] = useActionState(contactAction, initialState);

    return (
        <form action={handleForm}>
            <div>
                <label htmlFor="input-email">Email : </label>
                <input id="input-email" type="text" name="email" defaultValue={state.form.email} />
                {state.error.email && <span>{state.error.email}</span>}
            </div>
            <div>
                <label htmlFor="input-comment">Commentaire : </label>
                <textarea id="input-comment" name="comment" defaultValue={state.form.comment} />
                {state.error.comment && <span>{state.error.comment}</span>}
            </div>
            <div>
                <input id="input-condition" type="checkbox" name="condition" />
                <label htmlFor="input-condition">Veuillez accepter les conditions général du site.</label>
                {state.error.condition && <span>{state.error.condition}</span>}
            </div>
            <div>
                <button type="submit">Envoyer</button>
                {' '}
                {state.message && <span>{state.message}</span>}
            </div>
        </form>
    );
}