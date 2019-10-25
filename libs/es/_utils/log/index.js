export default (...info) => {
    /* istanbul ignore next */
    return function decorator(target, key, descriptor) {
        /* istanbul ignore next */
        const original = descriptor.value;
        /* istanbul ignore next */
        if (typeof original === 'function') {
            descriptor.value = function (...args) {
                let me = this;
                /* istanbul ignore next */
                if (me.debug) {
                    console.log(info[0] + '='.repeat(50), `${args}`);
                    console.info(me.eventSource);
                    console.log('='.repeat(50));
                }
                return original.apply(this, args);
            };
        }
        /* istanbul ignore next */
        return descriptor;
    };
};
//# sourceMappingURL=index.js.map