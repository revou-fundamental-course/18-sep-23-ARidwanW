// sendSuccess.innerHTML = "Terima Kasih! Data anda telah kami terima. Silahkan tunggu beberapa saat." +
//         "Apabila sales belum menghubungi 1x24 jam setelah anda mengirimkan data" +
//         "Silahkan input ulang data."; 

function validateForm() {
    const name = document.forms["contact-form"]["your-name"].value;
    const email = document.forms["contact-form"]["email"].value;

    var errorName = document.getElementById("error-name");
    var errorEmail = document.getElementById("error-email");
    var sendSuccess = document.getElementById("send-success");
    var tag = true;

    removeError(errorName, errorEmail);

    if (name == "") {
        errorName.innerHTML = "Nama tidak boleh kosong!"
        tag = false;
    } else if (email == "") {
        errorEmail.innerHTML = "Email tidak boleh kosong!"
        tag = false;
    }

    if (!validateEmail(email)) {
        errorEmail.innerHTML = "Email tidak valid!"
        return false
    }

    if (tag) {
        showSuccessOverlay(sendSuccess);
    }

    return tag
}

function removeError (errorName, errorEmail) {
    if (errorName){
        errorName.innerHTML = "";
    }

    if (errorEmail) {
        errorEmail.innerHTML = "";
    }
}

function validateEmail(email) {
    // ! Regex definition
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // ! Cocoklogi regex
    return emailRegex.test(email);
}

function showSuccessOverlay(sendSuccess) {
    sendSuccess.innerHTML = "Terima Kasih! Data anda telah kami terima. Silahkan tunggu beberapa saat." +
                            "Apabila sales belum menghubungi 1x24 jam setelah anda mengirimkan data" +
                            "Silahkan input ulang data."; 

    document.getElementById("success-overlay").style.display = "flex";

    document.getElementById("close-button").addEventListener("click", closeSuccessOverlay)
}

function closeSuccessOverlay() {
    document.getElementById("success-overlay").style.display = "none";
}


// ! send button click 
document.forms["contact-form"].addEventListener("submit", function(e) {
    if (!validateForm()) {
        e.preventDefault();     // ! Mencegah pengiriman form jika validasi gagal
    }
})