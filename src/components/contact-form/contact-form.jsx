async function fakeSendToServer(data) {
    await (new Promise((resolve) => setTimeout(resolve, 1_000)));
    console.log('Donnée envoyé !');
}

export default function ContactForm() {

    return (
        <form>
            <div>
                <label htmlFor="input-email">Email : </label>
                <input id="input-email" type="email" />
            </div>
            <div>
                <label htmlFor="input-comment">Commentaire : </label>
                <textarea id="input-comment" name=""></textarea>
            </div>
            <div>
                <input id="input-condition" type="checkbox" />
                <label htmlFor="input-condition">Veuillez accepter les conditions général du site.</label>
            </div>
            <div>
                <button type="submit">Envoyer</button>
            </div>
        </form>
    )
}