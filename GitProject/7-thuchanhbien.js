let diemLy;
let diemHoa;
let diemSinh;
diemLy = prompt('Nhập điểm Lý');
diemHoa = prompt('Nhập điểm Hoá');
diemSinh = prompt('Nhập điểm Sinh');
let l = parseInt(diemLy);
let h = parseInt(diemHoa);
let s = parseInt(diemSinh);
let tongdiem = (l+h+s);
let diemtrungbinh = (tongdiem/3);
document.write('Tổng điểm là = '+tongdiem);

document.write('Điểm trung bình là = '+diemtrungbinh);


