// ===================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it all equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===================================

var tableArray = [
    {
        "customerName": "Yura Hooman",
        "customerEmail": "yuHuman@example.com",
        "phoneNumber": "000-555-4350",
        "customerID": "yuHuman"
    },
    {
        "customerName": "Someone Something",
        "customerEmail": "somethingOne@example.com",
        "phoneNumber": "000-555-3791",
        "customerID": "somethingOne"
    },
    {
        "customerName": "Ima Bot",
        "customerEmail": "roboto@example.com",
        "phoneNumber": "000-555-3691",
        "customerID": "roboto"
    },
    {
        "customerName": "Ur Ex",
        "customerEmail": "urEx@example.com",
        "phoneNumber": "000-555-4269",
        "customerID": "urEx"
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;