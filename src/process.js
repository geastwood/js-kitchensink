console.log(process);
var i;
for (i in process.env) {
    console.log(i, process[i]);
}
