// Mulch Calculator

function calculate() {
    document.mulchForm.cubicYards.value = (document.mulchForm.length.value / 3) * (document.mulchForm.width.value / 3) * (document.mulchForm.depth.value / 36);
}
runningtotal = 0

function add() {
    total = (document.mulchForm.length.value / 3) * (document.mulchForm.width.value / 3) * (document.mulchForm.depth.value / 36);
    document.getElementById("list").innerHTML += document.mulchForm.length.value + "x" + document.mulchForm.width.value + "x" + document.mulchForm.depth.value + "=" + total + "<br>"
    runningtotal += total
    document.getElementById("total").innerHTML = "total = " + runningtotal
    document.mulchForm.length.value = ""
    document.mulchForm.width.value = ""
    document.mulchForm.depth.value = ""
}

// End of Mulch Calculator
//