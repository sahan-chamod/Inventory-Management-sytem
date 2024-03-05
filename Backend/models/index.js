const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/Inventory-management-system";

function main() {
    mongoose.connect(uri).then(() => {
        console.log("Connected to MongoDB successfully");
    }).catch((err) => {
        console.log("Error connecting to MongoDB:", err);
    });
}

module.exports = { main };
