module.exports = function(config) {
    console.log('Integrations run', config)

    const urlEmitter = (url) => {
        if (url === 'https://www.evolv.ai/') {
            evolv.emit('checkout');
        }
    }

    evolv.on('context.value.changed', function (key, value) {
        if (key === 'web.url') {
            urlEmitter(value);
        }
    });
};