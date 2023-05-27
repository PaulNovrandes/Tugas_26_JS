var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

// console.log(data[0]);
// console.log(isFinite(data[0]));
// console.log(isFinite(data[1]));
// console.log(isFinite(data[2]));
// console.log(isFinite(data[3]));
// console.log(isFinite(data[4]));
// console.log(isFinite(data[5]));
// console.log(isFinite(data[6]));
// console.log(isFinite(data[7]));
// console.log(isFinite(data[8]));
// console.log(isFinite(data[9]));
// console.log(isFinite(data[10]));


function cekData(){
  for (var i = 0; i < data.length; i++) {
    // console.log(isFinite(data[i]));

    if (isFinite(data[i]) === true) {
      console.log("Angka", data[i], "Not Infinity");
    }
  }

}

cekData();
