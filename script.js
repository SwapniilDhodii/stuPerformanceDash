// ==============================
// SUBJECT NAMES
// ==============================

const subjects = [
    "Java",
    "Python",
    "DBMS",
    "Web Development",
    "Mathematics"
];


// ==============================
// INITIAL MARKS
// ==============================

let marks = [
    85,
    90,
    78,
    88,
    82
];


// ==============================
// CREATE CHART
// ==============================

const ctx =
    document.getElementById("marksChart");


const marksChart = new Chart(ctx, {

    type: "bar",

    data: {

        labels: subjects,

        datasets: [

            {

                label: "Marks",

                data: marks,

                borderWidth: 1

            }

        ]

    },


    options: {

        responsive: true,

        scales: {

            y: {

                beginAtZero: true,

                max: 100,

                title: {

                    display: true,

                    text: "Marks"

                }

            }

        }

    }

});


// ==============================
// UPDATE FUNCTION
// ==============================

function updateData() {


    // Get student name

    let name =
        document.getElementById(
            "studentName"
        ).value;


    // Get marks

    let java =
        Number(
            document.getElementById("java").value
        );


    let python =
        Number(
            document.getElementById("python").value
        );


    let dbms =
        Number(
            document.getElementById("dbms").value
        );


    let web =
        Number(
            document.getElementById("web").value
        );


    let maths =
        Number(
            document.getElementById("maths").value
        );


    // Store marks

    marks = [
        java,
        python,
        dbms,
        web,
        maths
    ];


    // ==========================
    // CHECK MARKS
    // ==========================

    for (let i = 0; i < marks.length; i++) {

        if (marks[i] < 0 || marks[i] > 100) {

            alert(
                "Marks must be between 0 and 100"
            );

            return;
        }

    }


    // ==========================
    // CALCULATE TOTAL
    // ==========================

    let total = 0;


    for (let i = 0; i < marks.length; i++) {

        total =
            total + marks[i];

    }


    // ==========================
    // CALCULATE AVERAGE
    // ==========================

    let average =
        total / marks.length;


    // ==========================
    // FIND HIGHEST MARKS
    // ==========================

    let highest =
        Math.max(...marks);


    // ==========================
    // DISPLAY NAME
    // ==========================

    document.getElementById(
        "nameDisplay"
    ).innerText = name;


    // ==========================
    // DISPLAY AVERAGE
    // ==========================

    document.getElementById(
        "average"
    ).innerText =
        average.toFixed(2);


    // ==========================
    // DISPLAY HIGHEST
    // ==========================

    document.getElementById(
        "highest"
    ).innerText =
        highest;


    // ==========================
    // UPDATE CHART
    // ==========================

    marksChart.data.datasets[0].data =
        marks;


    marksChart.update();

}