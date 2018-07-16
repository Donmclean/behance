export const openExternalLink = (href, e) => {
    e && e.preventDefault();

    const hasLinkPrefix = RegExp('https?://*','g').test(href) || RegExp('^//*','g').test(href);
    const resolvedExternalLink = hasLinkPrefix ? href : `//${href}`;

    const newWindow = window.open(resolvedExternalLink, '_blank');
    newWindow.opener = null;
}

export const getOnlySuccessfulPromises = (promises) => {
    return Promise.all(promises.map(p => p.catch(e => "FAIL_TOKEN")))
        .then(values => values.filter(v => v !== "FAIL_TOKEN"));
}