document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('sem1').value = ""
    document.getElementById('sem2').value = ""
    document.getElementById('sem3').value = ""
    document.getElementById('sem4').value = ""
    document.getElementById('sem5').value = ""
    document.getElementById('sem6').value = ""
    document.getElementById('sem7').value = ""
    document.getElementById('sem8').value = ""
    document.getElementById('result').innerText = ""
})

let msg = document.getElementById('result')
document.getElementById('calculate').addEventListener('click', function() {
    let sem1 = Number(document.getElementById('sem1').value.trim())
    let sem2 = Number(document.getElementById('sem2').value.trim())
    let sem3 = Number(document.getElementById('sem3').value.trim())
    let sem4 = Number(document.getElementById('sem4').value.trim())
    let sem5 = Number(document.getElementById('sem5').value.trim())
    let sem6 = Number(document.getElementById('sem6').value.trim())
    let sem7 = Number(document.getElementById('sem7').value.trim())
    let sem8 = Number(document.getElementById('sem8').value.trim())
    if(sem1 == ""){
        msg.innerText = " * minimum 1st semester gpa needed"
    }
    else if(sem1>10 || sem2>10 || sem3>10 || sem4>10 || sem5>10 || sem6>10 || sem7>10 || sem8>10 ){
        msg.innerText = " gpa should be below or equal to 10"
    }
    else if(sem1<0 || sem2<0 || sem3<0 || sem4<0 || sem5<0 || sem6<0 || sem7<0 || sem8<0 ){
        msg.innerText = " gpa should be above 0"
    }
    else if(sem1!="" && sem2!="" && sem3!="" && sem4!="" && sem5!="" && sem6!="" && sem7!="" && sem8!=""){
        let result = sem1 + sem2 + sem3 + sem4 + sem5 + sem6 + sem7 +sem8;
        result/=8;
        msg.innerText = `Your CGPA is ${result} `
    }
    else if(sem1!="" && sem2!="" && sem3!="" && sem4!="" && sem5!="" && sem6!="" && sem7!=""){
        let result = sem1 + sem2 + sem3 + sem4 + sem5 + sem6 + sem7;
        result/=7;
        msg.innerText = `Your CGPA is ${result} `
    }
    else if(sem1!="" && sem2!="" && sem3!="" && sem4!="" && sem5!="" && sem6!=""){
        let result = sem1 + sem2 + sem3 + sem4 + sem5 + sem6;
        result/=6;
        msg.innerText = `Your CGPA is ${result} `
    }
    else if(sem1!="" && sem2!="" && sem3!="" && sem4!="" && sem5!=""){
        let result = sem1 + sem2 + sem3 + sem4 + sem5;
        result/=5;
        msg.innerText = `Your CGPA is ${result} `
    }
    else if(sem1!="" && sem2!="" && sem3!="" && sem4!=""){
        let result = sem1 + sem2 + sem3 + sem4;
        result/=4;
        msg.innerText = `Your CGPA is ${result} `
    }
    else if(sem1!="" && sem2!="" && sem3!=""){
        let result = sem1 + sem2 + sem3;
        result/=3;
        msg.innerText = `Your CGPA is ${result} `
    }
    else if(sem1!="" && sem2!=""){
        let result = sem1 + sem2;
        result/=2;
        msg.innerText = `Your CGPA is ${result} `
    }
    else if(sem1!=""){
        let result = sem1;
        result/=1;
        msg.innerText = `Your CGPA is ${result} `
    }
})