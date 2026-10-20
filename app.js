const RESUME_BUTTON = document.getElementById("resume_button");
const NAME = "Dyllon";
const INTRO = document.getElementById("introduction");
var downloadCount = 1;
var hasDownloadedResume = false;
var softForm = document.getElementById("software-form");
var langForm = document.getElementById("language-form");

// projects data
var projTitles = ['Alice_in_Wonderland']
// project descriptions
var projDscr = ['An interactive scene from Alice in Wonderland (2010) made with inkle.']
// project deadlines
var projTime = ['10-30-26']

// education data
var education = [
    // itnstitute, award, duration, date of completion
    {inst: 'Westwood High School', award: 'High School Diploma', 
        dur: 'Four Years', doc: 'May 2024'},
    {inst: 'Dassault Systèmes', award: 'Certificate for Mechanical Design', 
        dur: 'One Year', doc: 'May 2022'},
    {inst: 'Northern Arizona University', award: 'Bachelor of Science in Immersive Media and Games', 
        dur: 'Four Years', doc: 'Expected May 2028'},
    {inst: 'Northern Arizona University', award: 'Minor in Psychology',
        dur: 'Four Years', doc: 'Expected May 2028'}
]

main();

function main(){
    showGreeting(NAME);
    createProjs();
    createEduTable();
}


function createEduTable(){
    // create table parent
    var table = document.createElement('table');
    table.className = "table table-striped";
    // creat table head
    var thead = document.createElement('thead');
    var trow = document.createElement('tr');
    trow.appendChild(document.createElement('th scope="col"').textContent = "Institution");
    trow.appendChild(document.createElement('th scope="col"').textContent = "Awarded");
    trow.appendChild(document.createElement('th scope="col"').textContent = "Duration");
    trow.appendChild(document.createElement('th scope="col"').textContent = "Date of Completion");
    thead.appendChild(trow);
    table.appendChild(thead);
    document.getElementById('table').appendChild(table);

}

function createProjs(){
    var proj = document.querySelectorAll('#projects .card');
    // iterate to dynamically create projects text
    for(let i = 0; i < proj.length; i++){
        var cur_status = ""
        var cur = proj[i].querySelector('.card-body');
        cur.querySelector('.proj-title').textContent = projTitles[i];
        cur.querySelector('.proj-dscr').textContent = projDscr[i];
        if(daysUntilDeadline(projTime[i]) >= 0){
            cur_status = "Ongoing";
        } else{
            cur_status = "Completed";
        }
        cur.querySelector('.proj-time').textContent = 'Deadline: ' 
            + projTime[i] + '\n' + cur_status;
    }
}

RESUME_BUTTON.addEventListener("click", function() {
    if(!hasDownloadedResume)
    {
        alert("Dyllon Smith's resume is downloaded successfully!");
    }
    hasDownloadedResume = true;
    updateDownloadCount();
});

function updateDownloadCount(){
    var plural = "s"
    if (downloadCount === 1){
        plural = ""
    }
    document.querySelector('#resume .downloaded').textContent = "Downloaded "
        + downloadCount + " time" + plural + ".";
    downloadCount++;
}

function showGreeting(name)
{
    INTRO.textContent = "Hello, my name is " + name +
        "! Welcome to my portfolio!";
}

function daysUntilDeadline(endDate) {
    // Create Date object for the current date
    let currentDate = new Date();

    // Create Date object for the end date
    let end = new Date(endDate);

    // Calculate time difference in milliseconds
    let timeDifference = end - currentDate;

    // Convert milliseconds to days and use Math.ceil to avoid fractional days
    let daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return daysDifference;
}




function addSoftware(){
    var x = softForm.elements['software-name'].value
    if (x === "") {
        alert("Skill must be filled out");
        return false;
    }
    var li = document.createElement('li');
    li.className = "list-group-item";
    li.textContent = x;
    var ul = document.getElementById('soft-ul');
    ul.appendChild(li);
    softForm.elements['software-name'].value = ""
}

softForm.addEventListener('submit', function(event){
    // Stop the page from reloading
    event.preventDefault();
});

function addLanguage(){
    var x = langForm.elements['language-name'].value
    if (x === "") {
        alert("Skill must be filled out");
        return false;
    }
    var li = document.createElement('li');
    li.className = "list-group-item";
    li.textContent = x;
    var ul = document.getElementById('lang-ul');
    ul.appendChild(li);
    langForm.elements['language-name'].value = ""
}

langForm.addEventListener('submit', function(event){
    // Stop the page from reloading
    event.preventDefault();
});