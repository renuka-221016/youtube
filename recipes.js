// =======================
// 1. VARIABLES
// =======================

// const (cannot change)
const userName = "Renuka";

// let (can change)
let coins = 50;
let discount = 0;

// Display variables
document.getElementById("welcomeMsg").innerText = "Welcome " + userName;
document.getElementById("coins").innerText = coins;

// console log
console.log("User:", userName);
console.log("Coins:", coins);

// const reassignment test
try {
    userName = "New Name"; // will give error
} catch (e) {
    console.log("Const cannot be reassigned");
}

// =======================
// 3. OBJECT
// =======================

let recipe = {
    name: "Hyderabadi Biryani",
    price: 30,
    status: "Locked",

    // =======================
    // 4. METHOD
    // =======================
    unlock: function () {
        if (coins >= this.price) {
            coins -= this.price;
            this.status = "Unlocked";
            return "Recipe Unlocked!";
        } else {
            return "Not enough coins!";
        }
    },

    applyDiscount: function (value) {
        this.price = this.price - value;
        return this.price;
    }
};

// Display object data
document.getElementById("recipeName").innerText = recipe.name;
document.getElementById("price").innerText = recipe.price;
document.getElementById("status").innerText = recipe.status;

// dot notation
console.log(recipe.name);

// bracket notation
console.log(recipe["price"]);

// =======================
// 2. FUNCTIONS
// =======================

// Function Declaration
function updateCoinsDisplay() {
    document.getElementById("coins").innerText = coins;
}

// Function Expression
const showMessage = function (msg) {
    document.getElementById("output").innerText = msg;
};

// Arrow Function
const calculateFinalPrice = (price, discount) => {
    return price - discount;
};

// Function with parameters + return
function addCoins(amount) {
    coins += amount;
    return coins;
}

// =======================
// 5. POPUPS
// =======================

// Buy Coins
document.getElementById("buyCoinsBtn").addEventListener("click", function () {
    let amount = prompt("Enter coins to buy:");

    if (amount) {
        amount = Number(amount);

        if (confirm("Are you sure to buy " + amount + " coins?")) {
            addCoins(amount);
            updateCoinsDisplay();
            alert("Coins added successfully!");
        }
    }
});

// =======================
// 6. EVENTS
// =======================

// Unlock recipe (click event)
document.getElementById("unlockBtn").addEventListener("click", function () {

    let result = recipe.unlock(); // method call

    updateCoinsDisplay();
    document.getElementById("status").innerText = recipe.status;

    showMessage(result);
});

// Discount button
document.getElementById("discountBtn").addEventListener("click", function () {

    let value = prompt("Enter discount amount:");

    if (value) {
        let newPrice = recipe.applyDiscount(Number(value));
        document.getElementById("price").innerText = newPrice;

        alert("Discount applied!");
    }
});

// Input event (live search)
document.getElementById("searchInput").addEventListener("input", function () {
    let text = this.value.toLowerCase();

    if (recipe.name.toLowerCase().includes(text)) {
        document.getElementById("recipeCard").style.display = "block";
    } else {
        document.getElementById("recipeCard").style.display = "none";
    }
});

// Mouseover event (style change)
document.getElementById("recipeCard").addEventListener("mouseover", function () {
    this.style.border = "2px solid orange";
});

document.getElementById("recipeCard").addEventListener("mouseout", function () {
    this.style.border = "none";
});