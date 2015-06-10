function localStorageTest1(){
    var name = document.getElementById("name").value;
    localStorage.setItem("userName",name);
    document.getElementById('message').innerHTML="Welcome "+localStorage.getItem("userName");
}
function localStorageTest2(){
    document.getElementById('message').innerHTML="Welcome back "+localStorage.getItem("userName");
}

function localStorageTest3(){
    var tool1 = document.getElementById("tool1").value;
    var tool2 = document.getElementById("tool2").value;
    var tool3 = document.getElementById("tool3").value;
    var tool4 = document.getElementById("tool4").value;
    var tool5 = document.getElementById("tool5").value;
    var tools = [tool1,tool2,tool3,tool4,tool5];
    localStorage.setItem("toolBox",tools);
    document.getElementById('toolList').innerHTML="Saved toolbox.";
}
function localStorageTest4(){
    document.getElementById('toolList').innerHTML="Your toolbox: \n"+localStorage.getItem("toolBox");
}

function localStorageTest5(){
    var job = [];
    job[0] = document.getElementById("job1").value;
    job[1] = document.getElementById("job2").value;
    job[2] = document.getElementById("job3").value;
    job[3] = document.getElementById("job4").value;
    job[4] = document.getElementById("job5").value;
    var joblist=JSON.stringify(job);
    localStorage.setItem("jobList",joblist);
    document.getElementById('jobList').innerHTML="Saved job list.";
}
function localStorageTest6(){
    document.getElementById('jobList').innerHTML="Your jobs: \n"+localStorage.getItem("jobList");
}