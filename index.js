"use strict";
exports.__esModule = true;
var md5_1 = require("md5");
var PasswordHasher = /** @class */ (function () {
    function PasswordHasher(options) {
        if (options === void 0) { options = { salt: 20, rounds: 15 }; }
        this.salt = options.salt || 20;
        this.rounds = options.rounds || 15;
    }
    PasswordHasher.prototype.hashPass = function (rawPassword) {
        var hashed = (0, md5_1["default"])(rawPassword + this.salt);
        for (var i = 0; i <= this.rounds; i++) {
            hashed = (0, md5_1["default"])(hashed);
        }
        return "".concat(this.salt, "$").concat(this.rounds, "$").concat(hashed);
    };
    PasswordHasher.prototype.compare = function (rawPassword, hashedPassword) {
        try {
            var _a = hashedPassword.split("$"), salt = _a[0], rounds = _a[1], expectedHashed = _a[2];
            var hashedRawPassword = this.hashPass(rawPassword);
            return expectedHashed === hashedRawPassword;
        }
        catch (error) {
            throw Error(error.message);
        }
    };
    return PasswordHasher;
}());
exports["default"] = PasswordHasher;
