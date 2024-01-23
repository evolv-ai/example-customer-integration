module.exports = function(config) {
    console.log('Integrations run', config)

    const webUrl = "web.url";
    const urlEmitter = (event, key, url) => {
        if (key === webUrl) {
            if (url === "https://www.evolv.ai/") {
                evolv.client.emit("checkout");
            }
        }
    };

    urlEmitter("init", webUrl, evolv.context.get(webUrl));
    evolv.client.on("context.value.added", urlEmitter);
    evolv.client.on("context.value.changed", urlEmitter);
};