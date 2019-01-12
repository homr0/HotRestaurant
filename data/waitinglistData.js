// ==================
// DATA
// Below data will hold all of the waitlist tables.
// We return all table groups except the first five tables.
// ==================

module.exports = (tables) => {
    if(tables.length > 5) return tables.slice(5);
    return [];
}