function changeImage1() {
    var material=document.getElementById('material');
    var img = document.getElementById('targetImage');
    var year=document.getElementById('year')
    if(year.value!=0){
    if(material.value=='All')
    img.src = 'YearAll.png';
    else img.src='SingleYear.png';
}
}

document.getElementById('allYear').addEventListener('click', function(event) {
    event.preventDefault();
    changeImage1();
});
function changeImage2() {
    var month1=document.getElementById('mon1');
    var month2=document.getElementById('mon2');
    var img = document.getElementById('targetImage');
    if(month1.value!='Month1' && month2.value!='Month2' &&month1.value!=month2.value)
    img.src = 'twoMonths.png';
}
document.getElementById('twoMonths').addEventListener('click', function(event) {
    event.preventDefault();
    changeImage2();
});
function clearImage(){
    var img = document.getElementById('targetImage');
    img.src="";
    document.getElementById('material').value="Coal";
    document.getElementById('year').value="0";
    document.getElementById('mon1').value="Month1";
    document.getElementById('mon2').value="Month2";
}
document.getElementById('clear').addEventListener('click', function(event) {
    event.preventDefault();
    clearImage();
});

