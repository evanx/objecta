
const ex = {
    get: (object, key) => {
        if (typeof key !== 'string') {
            throw new Error(`Expected an string for property name`);
        }
        if (typeof object !== 'object') {
            throw new Error(`Expected an object for property '${key}'`);
        }
        return object[key];
    },
    ensure: (object, key) => {
        const value = ex.get(object, key);
        if (value === undefined) {
            throw new Error(`Expected property '${key}'`);
        }
        return value;
    },
    has: (object, key) => {
        const value = ex.get(object, key);
        if (value === undefined) {
            return false;
        }
        return true;
    },
    hasType: (object, key, type) => {
        if (typeof type !== 'string') {
            throw new Error(`Expected a type specification for '${key}'`);
        }
        const value = ex.get(object, key);
        if (value === undefined) {
            return false;
        }
        if (typeof value !== type) {
            throw new Error(`Expected type '${type}' for '${key}'`);
        }
        return true;
    },
    ensureBoolean: (object, key) => {
        const value = ex.ensure(object, key);
        if (typeof value !== 'boolean') {
            throw new Error(`Expected boolean'${key}'`);
        }
        return value;
    },
    hasFunction: (object, key) => {
        return ex.hasType(object, key, 'function');
    },
    ensureFunction: (object, key) => {
        const value = ex.ensure(object, key);
        if (typeof value !== 'function') {
            throw new Error(`Expected boolean'${key}'`);
        }
    }
}

module.exports = ex;
