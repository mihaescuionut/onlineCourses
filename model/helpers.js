let container = document.querySelector('.container');


function setHome(){

    container.innerHTML = `
    
        <header class="hdr">


            <h1>SchoolAcademy</h1>
            <button class="course-login">LOGIN</button>

        </header>    



    <section class="main">
            
        
        <h1>De ce se alegi SchoolAcademy?</h1>

        <img class="img img1" src="/images/int_icon-removebg-preview.png">

        <h2>Interesant si usor de inteles</h4>
        <h4>Lecțiile video și testele sunt interesante, pe înțelesul tuturor și în conformitate cu programa școlară.</h6>


        <img class="img img2" src="/images/watch_icon-removebg-preview.png">
        <h2>Inveti rapid</h2>
        <h4>O lecție video durează în medie 8 minute, iar tu poți alege viteza de derulare așa cum îți place: mai repede sau mai lent.</h4>


        <img class="img img3" src="/images/mobile_icon-removebg-preview.png">


        <h2>Disponibil și pentru versiunea mobilă</h2>
        <h4>Poți folosi Eduboom oricând și oriunde, de pe computer, tabletă sau telefon.</h4>


        <button class="toCourse">CURSURI</button>
    
    
    
    
    </section>




    <footer class="ftr">

        
        <p>Mihaescu Ionut-Alexandru &copy All rights reserved!</p>
        

    </footer>
        
    
    `

    let student={
        id: 10,
        nume: 'Cosmin',
        email: 'cosmin@yahoo.com',
        varsta: 25,
        password: 'Cosmin'
    }


    let toCourse = document.querySelector('.toCourse');
    let courseLogin = document.querySelector('.course-login');
    


    toCourse.addEventListener('click', ()=>{

        
        setCourses(student);
    })

    courseLogin.addEventListener('click', ()=>{

        setLogin();
    })



}


function setCourses(student){

    container.innerHTML = `

    <header class="hdr">


        <h1>SchoolAcademy</h1>
        <button class="course-login">LOGIN</button>

    </header>



    <section class="course-section">


    <section class="filters">
            

        <section>

            <input class="inscr" type="radio" value="inscris" name="filter">
            <label for="inscris">Cursuri la care sunteti inscris</label>
        </section>


        <section>
            <input class="all" type="radio" value="toate" name="filter">
            <label for="toate">Toate cursurile</label>
        </section>



    </section>


    <section class="allCourses">
        <section class="curs curs1">

            <h1>MATEMATICA</h1>

            <p>Programul de pregatire se adresează copiilor din clasa a VIII-a care se pregatesc anul acesta pentru examenul de evaluare nationala, cât și celor care își doresc o pregatire mai avansată, pentru olimpiada de matematică.
            Programul a fost structurat in trei module: M1, M2 si M3</p>

            <button class="enrol enrol1">INSCRIE-TE</button>

        </section>

        <section class="curs curs2">

            <h1>WEB DEVELOPMENT</h1>

            <p>Indiferent de experienta sau studiile anterioare, Cursurile de Programare Atelierele ILBAH te vor ajuta sa iti indeplinesti visul de a lucra in domeniul IT, ca Programator. La finalul cursurilor devii Front-End Developer, Back-End Developer, sau chiar Full-Stack Developer (in cazul in care alegi sa urmezi ambele module). Vei deprinde cunostinte solide si aptitudini care te vor ajuta sa te dezvolti in cariera!</p>

            <button class="enrol enrol2">INSCRIE-TE</button>
        </section>


        <section class="curs curs3">

            <h1>ENGLEZA</h1>

            <p>Indiferent de nivelul tău, lucrăm pentru a dezvolta aptitudini de înţelegere a limbii vorbite şi scrise şi de exprimare (orală şi în scris), pentru ca tu să poţi desfăşura orice tip de activitate cât mai bine şi în engleză. Combinăm tot ceea ce este bun din metodele tradiţionale (lucrul pe baza textelor, prezentarea şi exerciţii pentru consolidarea gramaticii şi a vocabularului) cu tehnici moderne (lucrul pe baza pozelor, cântecelor, scurtelor fragmente video), asigurând elementul de colaborare şi de distracţie prin organizarea clasei în perechi şi în echipe.</p>

            <button class="enrol enrol3">INSCRIE-TE</button>
        </section>


        <section class="curs curs4">

            <h1>FRANCEZA</h1>

            <p> Acest curs de franceză generală conține un program care îmbină perfect activitățile de înțelegere și exprimare orală și scrisă cu studiul gramaticii, vocabular sau noțiuni de     cultură franceză.

            Pentru a da prioritate unui proces de învățare cât mai eficient, predarea se face exclusiv în limba franceză.
                
            Totul se realizează pornind de la câteva elemente esențiale: o pedagogie activă compusă din manuale publicate de editurile din Franța, grupe cu efective limitate, o echipă de profesori români și francezi specializați în predarea limbii franceze ca limbă straină.
            </p>

            <button class="enrol enrol4">INSCRIE-TE</button>
        </section>


        <section class="curs curs5">

            <h1>JAVASCRIPT</h1>

            <p>In cadrul cursului nostru vei invata tot ce trebuie sa stii pentru a dezvolta proiecte si APLICATII WEB axate pe user experience(UI/UX design) folosind unul dintre cele mai populare limbaje de scripting object-oriented, prototype-based - Javascript. SchoolAcademy vine in intampinarea acestor nevoi si ofera cursuri de Javscript cu o metodologie unica de studiu. Vei invata de la traineri cu experienta acumulata in proiecte de amploare. Vei invata sa creezi concepte de User Interface pentru aplicatii responsive orientate pe web.</p>

            <button class="enrol enrol5">INSCRIE-TE</button>
        </section>
    </section>




    <footer class="ftr">

    
        <p>Mihaescu Ionut-Alexandru &copy All rights reserved!</p>
    

    </footer>

    `

    

    let courseLogin = document.querySelector('.course-login');
    let curs = document.querySelector('.allCourses');
    let inscris = document.querySelector('.inscr');
    let all = document.querySelector('.all');

    courseLogin.addEventListener('click', ()=>{

        setLogin();
    })

    curs.addEventListener('click', (e)=>{




        let obj = e.target;

        if(obj.classList.contains("enrol")){


            let par=obj.parentNode;

            let copil=par.children[0];

            let course = cursuri.filter(e => e.nume.toLowerCase() == copil.textContent.toLowerCase());

            console.log(course);

            let enrol={
                id:randomId(),
                idStudent: student.id,
                idCurs: course[0].id
        
            }

            enlorments.push(enrol);



            console.log(enrol);
        }



    })

    all.addEventListener('click', ()=>{

        setCourses(student);


    })

    inscris.addEventListener('click', ()=>{

     if(inscris.checked == true){

        let vect = allEnroledCoursesById(student.id);

        populateCourses(vect);

     }

    })
}


function setLogin(){
    
    container.innerHTML = `
    
    <header class="hdr">


    <h1>SchoolAcademy</h1>
    <h3>Cursurile tale, aici!</h3>

</header>



<section class="main-login">



    <section class="logIn">
        <h2> LOGIN </h2>


        <p> Email Address:</p>
        <input type="text" class="mail">

        <p> Password:</p>
        <input type="password" class="pass">


        <button class="LogInBtn">LOG IN</button>
    </section>



    <footer class="ftr">

    
        <p>Mihaescu Ionut-Alexandru &copy All rights reserved!</p>
        

    </footer>

    `

    let mail = document.querySelector('.mail');
    let pass = document.querySelector('.pass');
    let logInBtn = document.querySelector('.LogInBtn');

    logInBtn.addEventListener('click', () => {

        if(corectLogIn(studenti, mail.value, pass.value)){

            setCourses(studenti);

        }else{

            alert('Mail sau parola gresite');
            
        
        }

        

    })
}

function populateCourses(arr){

    let text = "";

    let allCourses = document.querySelector('.allCourses');




    let curs1 = document.querySelector('.curs');

   

    arr.forEach(e => {
        
        text+= `
        
            
            <section class="curs curs1 ">

                <h1>${e.nume}</h1>

                <p>${e.about}</p>

                <button class="unsub">DEZABONARE</button> 

            </section>
            
        
        
        `

    })



    allCourses.addEventListener('click', (e)=>{


      

        let object = e.target;

        if(object.classList.contains("unsub")){


            let parent = object.parentNode;
            let child = parent.children[0];

            let cours = cursuri.filter(e => e.nume.toLowerCase() == child.textContent.toLowerCase());

            console.log(child.textContent);

            

            
           

        }
   
    })






    allCourses.innerHTML = text;
}



//functie ce returneaza  un array toate idCurs  unui student



function allStudentsEnrollments(id){
    let arr=[];

    enlorments.forEach((e)=>{


         if(e.idStudent==id){

             arr.push(e.idCurs)
         }
    })

    return arr;
    
}


function allCoursesById(arr){

    let select=[];
    cursuri.forEach((e)=>{
          if(arr.includes(e.id)){
            select.push(e);
          }
    })

    return select;

}



function allEnroledCoursesById(idStudent){

    let arr=allStudentsEnrollments(idStudent);

    return allCoursesById(arr);
}


//functie ce genreaza un id unic de enrolment

function randomId(){

    let arrId=enlorments.map(e=>e.id);
    let id= Math.floor(Math.random()*100);

    while(arrId.includes(id)==true){
        id = Math.floor(Math.random()*100);
          
        
    }
    return id;
}


//functie ce sterge un element dintr-un array

function deleteEnrolment(idPers,idCurs){

    let arr=[];

    for(let i=0;i<enlorments.length;i++){

           if(enlorments[i].idCurs!=idCurs&&idPers!=enlorments[i].idStudent){

              arr.push(enlorments[i]);
           }
    }

    enlorments=[...arr];

}


//todo functie ce primeste ca parametru numele cursului si returneaza cursul

function courseName(name){

    let arr = [];

    for(let i = 0; i<cursuri.length; i++){

        if(cursuri[i].nume == name){

            arr.push(cursuri[i]);
        }
    }

    return arr;
}


//functie ce returneaza daca valorile dintr-un element al vectorului sunt introduse corect ------- LOGIN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


function corectLogIn(arr, value1, value2){

    let data = [];
    

    for(let i = 0; i<arr.length; i++){

        if(arr[i].value1 == arr[i].email && arr[i].value2 == arr[i].password){

            data.push(arr[i]);
        }
    }

   return data;
}