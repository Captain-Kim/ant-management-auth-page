const encodedAuthCode = "emtmbHNrZGxhZWt3amQ=";

function toBase64UTF8(str) {
    return btoa(
        new TextEncoder().encode(str).reduce((acc, byte) => acc + String.fromCharCode(byte), "")
    );
}

document.getElementById("auth-button").addEventListener("click", verifyAuthCode);
document.getElementById("auth-code").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        verifyAuthCode();
    }
});

function verifyAuthCode() {
    const inputCode = document.getElementById("auth-code").value.trim().replace(/\s+/g, "");
    if (toBase64UTF8(inputCode) === encodedAuthCode) {
        document.getElementById("manager-link").click();
    } else {
        alert("인증 실패. 다시 시도하세요.");
        document.getElementById("auth-code").value = "";
    }
}
