import { useActionState } from "react";
import z from "zod";

async function fakeSendToServer(data) {
    await (new Promise((resolve) => setTimeout(resolve, 1_000)));
    console.log('Donnée envoyé !');
}

const contactSchemaValidation = z.object({
    email: z.email('Votre email est invalide'),
    comment: z.string()
                .max(1_000, 'Votre commentaire est trop long !')
                .min(1, 'Un commentaire est requis'),
    condition: z.literal('on').transform((val) => true)
});

async function contactAction(prevState, formData) {
    const contentFormData = Object.fromEntries(formData.entries());
    const { data, error, success } = z.safeParse(contactSchemaValidation, contentFormData);

    if (!success) {
        return {
            message: 'Erreur dans le formulaire !',

            error: z.treeifyError(error).properties,
            form: contentFormData
        };
    }

    await fakeSendToServer(data);
    
    return {
        message: 'Demande envoyé !',
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
                {state.error.email && <span>{state.error.email.errors.join(', ')}</span>}
            </div>
            <div>
                <label htmlFor="input-comment">Commentaire : </label>
                <textarea id="input-comment" name="comment" defaultValue={state.form.comment} />
                {state.error.comment && <span>{state.error.comment.errors.join(', ')}</span>}
            </div>
            <div>
                <input id="input-condition" type="checkbox" name="condition" />
                {' '}
                <label htmlFor="input-condition">Veuillez accepter les conditions général du site.</label>
                {' '}
                {state.error.condition && <span>{state.error.condition.errors.join(', ')}</span>}
            </div>
            <div>
                <button type="submit" disabled={isPending}>Envoyer</button>
                {' '}
                {state.message && <span>{state.message}</span>}
            </div>
        </form>
    );
}