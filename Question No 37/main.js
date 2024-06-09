function tshirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love coding"; }
    console.log("Making a T-shirt of size \"".concat(size, "\" with message \"").concat(message, "\" print on it"));
}
tshirt();
tshirt("medium");
tshirt("small", "I love mom");
