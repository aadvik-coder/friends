var nof_array = [];
function submit(){
    var name1 = document.getElementById("nof1").value;
    var name2 = document.getElementById("nof2").value;
    var name3 = document.getElementById("nof3").value;
    var name4 = document.getElementById("nof4").value;

    nof_array.push(name1);
    nof_array.push(name2);
    nof_array.push(name3);
    nof_array.push(name4);

    console.log(nof_array);

    document.getElementById("display_name").innerHTML = nof_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting(){
    nof_array.sort();
    console.log(nof_array);
    document.getElementById("display_name").innerHTML = nof_array;
}