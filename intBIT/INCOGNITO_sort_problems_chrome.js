let times = document.querySelectorAll('.time_to_solve')
let problems = document.getElementsByClassName('locked problem_title')

let times_problems = []
for (let i = 0; i < times.length; i++) {
    times_problems.push([ parseInt(times[i].innerText), problems[i].innerText ])
}

sortedAns = times_problems.sort(function(a, b){return a[0] - b[0]});

let output = "";
for (let i = 0; i < sortedAns.length; i++) {
    // console.log(sortedAns[i]);
    output += sortedAns[i] + "\n";
}

console.log(output)