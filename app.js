function display(val){
    document.getElementById("result").value+=val;

}
function solv(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}

