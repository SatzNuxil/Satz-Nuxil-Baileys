'use strict';

let baileysPromise;
let messageBuilderPromise;

async function loadBaileys() {
    if (!baileysPromise) {
        baileysPromise = import('../lib/index.js');
    }

    if (!messageBuilderPromise) {
        messageBuilderPromise = import('../src/MessageBuilder/index.js');
    }

    const [baileys, MB] = await Promise.all([
        baileysPromise,
        messageBuilderPromise
    ]);

    return {
        ...baileys,
        MB
    };
}

async function createSocket(...args) {
    const baileys = await loadBaileys();
    return baileys.default(...args);
}

module.exports = {
    loadBaileys,
    createSocket
};
