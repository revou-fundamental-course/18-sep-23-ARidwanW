// sendSuccess.innerHTML = "Terima Kasih! Data anda telah kami terima. Silahkan tunggu beberapa saat." +
//         "Apabila sales belum menghubungi 1x24 jam setelah anda mengirimkan data" +
//         "Silahkan input ulang data."; 

// const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// * validate nama
function validateName() {
    // var nameValue = document.getElementById("your-name").value;
    const nameValue = document.forms["contact-form"]["your-name"].value;

    if (nameValue === "" ) {
        document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong!";
        return false;
    }

    return true;
}


// * validate email
function validateEmail() {
    // var emailValue = document.getElementById("email").value;
    const emailValue = document.forms["contact-form"]["email"].value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailValue === ""){
        document.getElementById("error-email").innerHTML = "Email tidak boleh kosong!";
        return false;
    } else if (!emailRegex.test(emailValue)) {
        document.getElementById("error-email").innerHTML = "Email tidak valid!";
        return false;
    }

    return true;
}


// * validasi interest (not required)
function validateInterest() {
    // var interestValue = document.getElementById("interest").value;
    const interestValue = document.forms["contact-form"]["interest"].value;

    // * not requred
    return true;
}

function removeError() {
    var errorName = document.getElementById("error-name");
    var errorEmail = document.getElementById("error-email");
    var errorInterest = document.getElementById("error-interest");

    errorName.innerHTML = "";
    errorEmail.innerHTML = "";
    errorInterest.innerHTML = "";

    return true;
}

function removeValue() {
    const nameValue = document.forms["contact-form"]["your-name"].value;
    const emailValue = document.forms["contact-form"]["email"].value;
    const interestValue = document.forms["contact-form"]["interest"].value;

    nameValue.innerHTML = "";
    emailValue.innerHTML = "";
    interestValue.innerHTML = "";
}


// ! validasi form
function validateForm() {
    removeError();

    var nameValid = validateName();
    var emailValid = validateEmail();
    var interestValid = validateInterest();

    // return nameValid && emailValid && interestValid;

    // cek semua validasi
    if (nameValid && emailValid && interestValid) {
        showSuccessOverlay();
    }

    return false;
}

function showSuccessOverlay() {
    var sendSuccess = document.getElementById("send-success");
    sendSuccess.innerHTML = "Terima Kasih! Data anda telah kami terima. Silahkan tunggu beberapa saat." +
                            " Apabila sales belum menghubungi 1x24 jam setelah anda mengirimkan data" +
                            " Silahkan input ulang data."; 

    var successOverlay = document.getElementById("success-overlay");
    successOverlay.style.display = "flex";

    document.getElementById("close-button").addEventListener("click", function() {
        successOverlay.style.display = "none";
    });
}



// ! slider image
var slideIndex = 1;
// showDivsContentLeft(slideIndex);
// showDivsImage(slideIndex);
// showDivsTag(slideIndex);
// showDivsCustomer(slideIndex);
// showDivsJob(slideIndex);
// showDivsTopPackage(slideIndex);
// showDivsBottomPackage(slideIndex);

function plusDivs(n) {
    showDivsPackage(slideIndex += n);
    // showDivsImage(slideIndex += n);
    // showDivsTag(slideIndex += n);
    // showDivsCustomer(slideIndex += n);
    // showDivsJob(slideIndex += n);
}

// * content left
function showDivsContentLeft(n) {
    var x = document.getElementsByClassName("content__left");
    if (n > x.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = x.length;}

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";
}

// * Package
function showDivsPackage(n) {
    var x = document.getElementsByClassName("slider-image");
    if (n > x.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = x.length;}

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";
}

// * image
function showDivsImage(n) {
    var x = document.getElementsByClassName("slider-image");
    if (n > x.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = x.length;}

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";
}

// * Tag
function showDivsTag(n) {
    var x = document.getElementsByClassName("slider-tag");
    if (n > x.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = x.length;}

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";
}

// * Customer
function showDivsCustomer(n) {
    var x = document.getElementsByClassName("slider-customer");
    if (n > x.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = x.length;}

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";
}

// * Job
function showDivsJob(n) {
    var x = document.getElementsByClassName("slider-job");
    if (n > x.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = x.length;}

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";
}

// * BottomPackage
function showDivsBottomPackage(n) {
    var x = document.getElementsByClassName("slider-job");
    if (n > x.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = x.length;}

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";
}

// * TopPackage
function showDivsTopPackage(n) {
    var x = document.getElementsByClassName("slider-job");
    if (n > x.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = x.length;}

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";
}






