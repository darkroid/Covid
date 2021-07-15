let YesButton = document.getElementById('YesBotton');
let NoSureButton = document.getElementById('NotSureBotton');
let NoButton = document.getElementById('NoBotton');
let message = document.getElementById('message');
let h1message = document.getElementById('h1message');


//เต็ม 91 แต้ม 
//เขียว 0-14 ไม่ต้องกักตัวเอง แต่ระวังตามปรกติ 
//เหลือง 15-24 เฝ้าระวัง ให้เตือนคนรอบข้าง อาจติด แต่ไม่รุนแรง
//ส้ม 25-34 อาการกลุ่มไข้หวัดใหญ่ กักตัว ตรวจหาเชื้อด่วน
//แดง 35+  ติดเชื้อ อาการรุนแรง ต้องเข้า ร.พ.ทันที
var CovidPoint = 0 ;
var CovidNum = 0 ;

var CovidEd = 0;


function UPDATE (Num){
if(Num!=null){
    if(Num === 0){
        h1message.innerHTML = "ไอแห้ง (ไม่มีเสมหะ)";
        if(CovidEd === 0){CovidPoint += 0};
        if(CovidEd === 1){CovidPoint += (9/2)};
        if(CovidEd === 2){CovidPoint += 9};
    }
    if(Num === 1){
        h1message.innerHTML = "อ่อนล้า (ไม่มีแรง)";
        if(CovidEd === 0){CovidPoint += 0};
        if(CovidEd === 1){CovidPoint += (8/2)};
        if(CovidEd === 2){CovidPoint += 8};
    }
    if(Num === 2){
        h1message.innerHTML = "ไม่ได้กลิ่น (เบื่ออาหาร)";
        if(CovidEd === 0){CovidPoint += 0};
        if(CovidEd === 1){CovidPoint += (8/2)};
        if(CovidEd === 2){CovidPoint += 8};
    }
    if(Num === 3){
        h1message.innerHTML = "ปวดหัว";
        if(CovidEd === 0){CovidPoint += 0};
        if(CovidEd === 1){CovidPoint += (7/2)};
        if(CovidEd === 2){CovidPoint += 7};
    }
    if(Num === 4){
        h1message.innerHTML = "ปวดเมื่อยตามตัว";
        if(CovidEd === 0){CovidPoint += 0};
        if(CovidEd === 1){CovidPoint += (7/2)};
        if(CovidEd === 2){CovidPoint += 7};
    }
    if(Num === 5){
        h1message.innerHTML = "เจ็บคอ";
        if(CovidEd === 0){CovidPoint += 0};
        if(CovidEd === 1){CovidPoint += (6/2)};
        if(CovidEd === 2){CovidPoint += 6};
    }
    if(Num === 6){
        h1message.innerHTML = "ท้องเสีย";
        if(CovidEd === 0){CovidPoint += 0};
        if(CovidEd === 1){CovidPoint += (6/2)};
        if(CovidEd === 2){CovidPoint += 6};
    }
    if(Num === 7){
        h1message.innerHTML = "ตาแดง";
        if(CovidEd === 0){CovidPoint += 0};
        if(CovidEd === 1){CovidPoint += (6/2)};
        if(CovidEd === 2){CovidPoint += 6};
    }
    if(Num === 8){
        h1message.innerHTML = "มีผื่น หรือสีเล็บเปลี่ยน";
        if(CovidEd === 0){CovidPoint += 0};
        if(CovidEd === 1){CovidPoint += (6/2)};
        if(CovidEd === 2){CovidPoint += 6};
    }
    if(Num === 9){
        h1message.innerHTML = "อาเจียน";
        if(CovidEd === 0){CovidPoint += 0};
        if(CovidEd === 1){CovidPoint += (6/2)};
        if(CovidEd === 2){CovidPoint += 6};
    }

    if(Num === 10){
        h1message.innerHTML = "หอบ";
        if(CovidEd === 0){CovidPoint += 0};
        if(CovidEd === 1){CovidPoint += (8/2)};
        if(CovidEd === 2){CovidPoint += 8};
    }
    if(Num === 11){
        h1message.innerHTML = "ตรวจเสร็จเรียบร้อย" ;
        
        if(CovidEd === 0){CovidPoint += 0};
        if(CovidEd === 1){CovidPoint += (14/2)};
        if(CovidEd === 2){CovidPoint += 14};
    }
    if(Num ===11){
        AllTo()
        
    }
}
    
    message.innerHTML = CovidPoint;
}

function AllTo(){
    setTimeout(function(){
        if(CovidPoint>=0||covidPoint<15){h1message.innerHTML = "ไม่ต้องกักตัวเอง แต่ระวังตามปรกติ";}
        if(CovidPoint>=15||covidPoint<25){h1message.innerHTML = "เฝ้าระวัง ให้เตือนคนรอบข้าง อาจติด แต่ไม่รุนแรง";}
        if(CovidPoint>=25||covidPoint<35){h1message.innerHTML = "อาการกลุ่มไข้หวัดใหญ่ กักตัว ตรวจหาเชื้อด่วน";}
        if(CovidPoint>34){h1message.innerHTML = "ติดเชื้อ อาการรุนแรง ต้องเข้า ร.พ.ทันที";}
    },1000);
}

function YesMessage(){
    if(CovidNum<12){
        CovidEd = 2;   
        UPDATE(CovidNum);
        CovidNum += 1;
    }
}
function NoSureMessage(){
    if(CovidNum<12){
        CovidEd = 1;   
        UPDATE(CovidNum);
        CovidNum += 1;
    }
}
function NoMessage(){
    if(CovidNum<12){
        CovidEd = 0;   
        UPDATE(CovidNum);
        CovidNum += 1;
    }
}

YesButton.addEventListener('click',YesMessage);
NoSureButton.addEventListener('click',NoSureMessage);
NoButton.addEventListener('click',NoMessage);
