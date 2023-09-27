// sendSuccess.innerHTML = "Terima Kasih! Data anda telah kami terima. Silahkan tunggu beberapa saat." +
//         "Apabila sales belum menghubungi 1x24 jam setelah anda mengirimkan data" +
//         "Silahkan input ulang data."; 

// const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// * validate nama
function validateName() {
    // var nameValue = document.getElementById("your-name").value;
    let nameValue = document.forms["contact-form"]["your-name"].value;

    if (nameValue == "" ) {
        // document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong!";
        document.getElementById("error-name").innerText = "Nama tidak boleh kosong!";
        return false;
    }

    return true;
}


// * validate email
function validateEmail() {
    // var emailValue = document.getElementById("email").value;
    let emailValue = document.forms["contact-form"]["email"].value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailValue == ""){
        // document.getElementById("error-email").innerHTML = "Email tidak boleh kosong!";
        document.getElementById("error-email").innerText = "Email tidak boleh kosong!";
        return false;
    } else if (!emailRegex.test(emailValue)) {
        // document.getElementById("error-email").innerHTML = "Email tidak valid!";
        document.getElementById("error-email").innerText = "Email tidak valid!";
        return false;
    }

    return true;
}


// * validasi interest (not required)
function validateInterest() {
    // var interestValue = document.getElementById("interest").value;
    let interestValue = document.forms["contact-form"]["interest"].value;

    // * not requred
    return true;
}

function removeError() {
    var errorName = document.getElementById("error-name");
    var errorEmail = document.getElementById("error-email");
    var errorInterest = document.getElementById("error-interest");

    // errorName.innerHTML = "";
    // errorEmail.innerHTML = "";
    // errorInterest.innerHTML = "";

    errorName.innerText = "";
    errorEmail.innerText = "";
    errorInterest.innerText = "";    

    return true;
}

function removeValue() {
    let nameValue = document.forms["contact-form"]["your-name"];
    let emailValue = document.forms["contact-form"]["email"];
    let interestValue = document.forms["contact-form"]["interest"];

    nameValue.innerText = "";
    emailValue.innerText = "";
    interestValue.innerText = "";
}


// ! validasi form
function validateForm() {
    removeError();

    var nameValid = validateName();
    var emailValid = validateEmail();
    var interestValid = validateInterest();

    // cek semua validasi
    if (nameValid && emailValid && interestValid) {
        showSuccessOverlay();
    }

    return false;
}

function showSuccessOverlay() {
    var sendSuccess = document.getElementById("send-success");
    // sendSuccess.innerHTML = "Terima Kasih! Data anda telah kami terima. Silahkan tunggu beberapa saat." +
    //                         " Apabila sales belum menghubungi 1x24 jam setelah anda mengirimkan data" +
    //                         " Silahkan input ulang data."; 
    sendSuccess.innerText = "Terima Kasih! Data anda telah kami terima. Silahkan tunggu beberapa saat." +
                            " Apabila sales belum menghubungi 1x24 jam setelah anda mengirimkan data" +
                            " Silahkan input ulang data."; 

    var successOverlay = document.getElementById("success-overlay");
    successOverlay.style.display = "flex";

    document.getElementById("close-button").addEventListener("click", function() {
        successOverlay.style.display = "none";
    });
}

// ??validation form tambahan tapi bugged
// document.getElementById("send-button").addEventListener("click", function() {
//     removeError();

//     var nameValid = validateName();
//     var emailValid = validateEmail();
//     var interestValid = validateInterest();

//     if (nameValid && emailValid && interestValid) {
//         removeError();
//         removeValue()
//         showSuccessOverlay();
//     }
    
// });



// ! ===== slider image =======
var slideIndexContentLeft = 1;
var slideIndexTopPackage = 1;
var slideIndexButtomPackage = 1;
var intervalID;

showDivsContentLeft(slideIndexContentLeft);
// showDivsTopPackage(slideIndexTopPackage);

var mobilePixels = window.matchMedia("(max-width: 600px)");

mobilePixels.addEventListener("change", sliderMobile)
sliderMobile(mobilePixels);


// ! jalankan slider jika width dibawah 600px untuk mobile
function sliderMobile(mobilePixels) {
    if (mobilePixels.matches) {
        showDivsTopPackage(slideIndexTopPackage);
        showDivsBottomPackage(slideIndexButtomPackage)

        // * mulai interval jika belum berjalan
        if (!intervalID){
            intervalID = setInterval(() => {
                plusDivsPackage(1);
            }, 2000);
        }
    } else {
        resetDivsPackage();

        // * hentikan interval jika sedang berjalan
        if (intervalID) {
            clearInterval(intervalID);
            intervalID = null;      // * atur kembali interval jadi null
        }
    }
}

// ! auto slider content left
setInterval(() => {
    plusDivsContentLeft(1);
}, 3000);


function plusDivsContentLeft(n) {
    showDivsContentLeft(slideIndexContentLeft += n);
}

function plusDivsPackage(n) {
    showDivsTopPackage(slideIndexTopPackage += n);
    showDivsBottomPackage(slideIndexButtomPackage += n);
}


// * content left
function showDivsContentLeft(n) {
    var x = document.getElementsByClassName("content__left");
    if (n > x.length) {slideIndexContentLeft = 1;}
    if (n < 1) {slideIndexContentLeft = x.length;}

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndexContentLeft - 1].style.display = "flex";
}

// * top Package
function showDivsTopPackage(n) {
    var x = document.getElementsByClassName("top-package");
    if (n > x.length) {slideIndexTopPackage = 1;}
    if (n < 1) {slideIndexTopPackage = x.length;}

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndexTopPackage - 1].style.display = "flex";
}

// * bottom Package
function showDivsBottomPackage(n) {
    var x = document.getElementsByClassName("bottom-package");
    if (n > x.length) {slideIndexButtomPackage = 1;}
    if (n < 1) {slideIndexButtomPackage = x.length;}

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndexButtomPackage - 1].style.display = "flex";
}

function resetDivsPackage() {
    var packagePoint = document.getElementsByClassName("package__point-container")

    for (let i = 0; i < packagePoint.length; i++) {
        packagePoint[i].style.display = "flex";
    }
}









