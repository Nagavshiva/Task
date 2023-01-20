function buildProperties(time, earning) {
    let output = "";
    let theatres = 0;
    let pubs = 0;
    while (time >= 5 && earning >= 1500) {
        theatres++;
        time -= 5;
        earning -= 1500;
    }
    while (time >= 4 && earning >= 1000) {
        pubs++;
        time -= 4;
        earning -= 1000;
    }
    output += "T " + theatres + " ";
    output += "P " + pubs + " ";
    output += "C 0";
   return output;
}
console.log(buildProperties(13,16500));