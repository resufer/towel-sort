module.exports = function towelSort(m) {
    let result = [];
    if (!m) return result;
    for (let i = 0; i < m.length; i++) {
        if (i === 0 || i % 2 === 0) {
            result.push(...m[i]);
        } else result.push(...m[i].reverse());
    }
    return result;
};
