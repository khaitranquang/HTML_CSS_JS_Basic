/**
 * Created by Tran Quang Khai on 8/12/2017.
 */

var divDangKi = document.getElementById("div_dang_ki");
var divDangNhap = document.getElementById("div_dang_nhap");

var tabDangKi = document.getElementById("dangki");
var tabDangNhap = document.getElementById("dangnhap");

// Su kien khi nhan vao tab Dang Ki
function onDangKi() {
    //Hien thi tab dang ki, an tab Dang Nhap
    divDangKi.style.display = "block";
    divDangNhap.style.display = "none";

    tabDangKi.style.background = "#ecc80d";
    tabDangNhap.style.background = "#a3a3a3";
}

//Su kien khi nhan vao tab Dang nhap
function onDangNhap() {
    divDangKi.style.display = "none";
    divDangNhap.style.display = "block";

    tabDangKi.style.background = "#a3a3a3";
    tabDangNhap.style.background = "#ecc80d";
}

// Kiem tra combo Box nghe nghiep da duoc lua chon  chua?
// function cbIsSelected() {
//     var job = document.getElementById("job");
//     if (job.selectedIndex == 0){
//         job.
//     }
// }

//Kiem tra xem textField co trong khong?
function textFieldIsEmpty(name) {
    var textField =  document.forms["formDangKi"][name];

    if (textField.value == ""){
        textField.style.border = "solid 2px red";
        return true;
    }
    else {
        textField.style.border = "2px inset";
        return false;
    }
}

//Kiem tra do dai truong text ten tai khoan va mat khau co do dai tu 4-30 ki tu
function testLength(form, name, minLength, maxLength) {
    var text = document.forms[form][name].value;

    if(text.length < minLength || text.length > maxLength) return false;
    else return true;
}

//Kiem tra truong du lieu tuoi nhap vao co la so khong?
function ageIsNumber(ageString) {
    var reg = new RegExp('^[0-9]+$');
    if (ageString.match(reg)) return true;
    else return false;

}

//Kiem tra tuoi tu tren 18 tro len
function testAge() {
    var ageString = document.forms["formDangKi"]["input_Age"].value;

    if(ageIsNumber(ageString)){     //Neu tuoi nhap vao la so
        // test xem tuoi co la so nguyen khong?
        if(ageString == parseInt(ageString)){
            if(parseInt(ageString) < 18) {
                return false;
            }
            else return true;
        }
        else return false;
    }
    else return false;

}

//Kiem tra dinh dang Email nhap vao co ho le khong?
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// Kiem tra cac truong du lieu nhap text co de trong khong?
function checkAllText() {
    var pThongBao = document.getElementById("pThongBao");
    var job = document.getElementById("job");
    var radNam = document.getElementById("radNam");
    var radNu = document.getElementById("radNu");

    var test_Name  = textFieldIsEmpty("input_Name");
    var test_Pass  = textFieldIsEmpty("input_Password");
    var test_Email = textFieldIsEmpty("input_Email");
    var test_Age   = textFieldIsEmpty("input_Age");

    textFieldIsEmpty("input_Name");
    textFieldIsEmpty("input_Password");
    textFieldIsEmpty("input_Email");
    textFieldIsEmpty("input_Age");

    if(test_Name || test_Age || test_Email || test_Pass){
        pThongBao.style.display = "block";
        pThongBao.innerHTML = "Hãy nhập đủ các trường dữ liệu";
        return false;
    }
    else if (job.selectedIndex == 0){
        pThongBao.style.display = "block";
        pThongBao.innerHTML = "Vui lòng chọn nghề nghiệp";
        return false;
    }
    else if ((!radNam.checked) && (!radNu.checked) ){
        pThongBao.style.display = "block";
        pThongBao.innerHTML = "Vui lòng chọn giới tính";
        return false;
    }

    else if(!testLength("formDangKi", "input_Name", 4, 30) || !testLength("formDangKi", "input_Password", 4, 30)){
        pThongBao.style.display = "block";
        pThongBao.innerHTML = "Vui lòng kiểm tra lại độ dài tài khoản hoặc mật khẩu <br> " +
                              "Độ dài tài khoản và mật khẩu phải từ 4 - 30 kí tự";
        return false;
    }

    else if(!testAge()){
        pThongBao.style.display = "block";
        pThongBao.innerHTML = "Kiểm tra lại tuổi <br>" + "Đây là Website chỉ dành cho 18 tuổi trở lên... <br>" + "WARNING 18+";
        return false;
    }

    else if (!validateEmail(document.forms["formDangKi"]["input_Email"].value)) {
        pThongBao.style.display = "block";
        pThongBao.innerHTML = "Vui lòng kiểm tra lại định dạng email";
        return false;
    }

    else{
        //alert("OK");
        pThongBao.style.display = "none";
        return true;
    }
}

//Test All Condition of formDangKi
function test() {
    return checkAllText();
}


//Demo Test formDangNhap
function testDangNhap() {
    var status = document.getElementById("pStatusDangNhap");

    if (!testLength("formDangNhap", "output_Name", 4, 30) || !testLength("formDangNhap", "output_Password", 4, 30)){
        status.style.display = "block";
        status.innerHTML = "Kiểm tra lại tài khoản hoặc mật khẩu";
        return false;
    }
    else{
        status.style.display = "none";
        alert("OK");
        return true;
    }
}