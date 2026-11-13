'use strict';

let baileysPromise;

const MB = import('../src/MessageBuilder/index.js');

async function loadBaileys() {
    if (!baileysPromise) {
        baileysPromise = import('../lib/index.js');
    }

    const [baileys, messageBuilder] = await Promise.all([
        baileysPromise,
        MB
    ]);

    return {
        ...baileys,
        MB: messageBuilder
    };
}

async function createSocket(...args) {
    const baileys = await loadBaileys();
    return baileys.default(...args);
}

module.exports = {
    loadBaileys,
    createSocket,
    MB
};
