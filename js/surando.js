
var select_random = (size) => { //generates random value between one and entered number
    return Math.floor(Math.random() * size) + 1; //return positive integer
}

/**
 * 
 * @param {total pupulation} count 
 * @param {required sample size} size 
 * @returns sampling interval as an integer
 */
var sampling_interval = (count, size) => {
    return Math.floor(count / size);
}

/**
 * 
 * @param {Household Identification} householeID 
 * @param {Number of available valid respondents} valid_respondents 
 * @returns random value from E4C static Kish Grid
 */
var kish_e4c = (householeID, valid_respondents) => {

}

var make_kish = (rows, cols) => {
    var grid = [];
    for (i = 0; i < rows; i++) {
        var row = [];
        for (c = 1; c <= cols; c++) {
            row.push(select_random(c));
        }
        grid.push(row);
    }
    return grid;
}

var make_row = (row) => {
    var tr = document.createElement('tr');
    row.forEach(v => {
        var td = document.createElement('td');
        td.innerText = v;
        tr.appendChild(td);
    });
    return tr;
}

var draw_kish = (grid) => {

    console.log(grid.length);

    var table = document.querySelector('#kish');
    table.innerHTML = "";
    grid.forEach(row => {
        table.appendChild(make_row(row));
    });



}