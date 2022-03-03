module.exports = {
  bindTrailingArgs(fn, ...boundArgs) {
    return (...args) => fn(...args, ...boundArgs);
  },
};
