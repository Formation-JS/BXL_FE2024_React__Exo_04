
export function getCurrencyName(currencyCode) {
    return new Intl.NumberFormat("fr-be", {
            style: "currency",
            currency: currencyCode,
            currencyDisplay: 'name'
        })
        .formatToParts(1)
        .find(elem => elem.type === 'currency')
        .value;
}