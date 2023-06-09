const express = require('express');

let courses = [
    {
        courseName: "Introduction to Artificial Intelligence",
        instructor: "Dr. Alan Smith",
        department: "Computer Science",
        credits: 3,
        schedule: "MWF 10:00 AM - 11:30 AM",
        img: ""
    },
    {
        courseName: "Advanced Calculus",
        instructor: "Prof. Jennifer Davis",
        department: "Mathematics",
        credits: 4,
        schedule: "TTH 1:00 PM - 2:30 PM",
        img: ""
    },
    {
        courseName: "Introduction to Psychology",
        instructor: "Dr. Sarah Thompson",
        department: "Psychology",
        credits: 3,
        schedule: "MWF 2:00 PM - 3:30 PM",
        img: ""
    },
    {
        courseName: "World History: 20th Century",
        instructor: "Prof. Michael Johnson",
        department: "History",
        credits: 3,
        schedule: "TTH 9:00 AM - 10:30 AM",
        img: ""
    },
    {
        courseName: "Introduction to Sociology",
        instructor: "Dr. Emily Roberts",
        department: "Sociology",
        credits: 3,
        schedule: "MWF 11:00 AM - 12:30 PM",
        img: ""
    },
    {
        courseName: "Introduction to Business Management",
        instructor: "Prof. David Brown",
        department: "Business",
        credits: 3,
        schedule: "TTH 10:00 AM - 11:30 AM",
        img: ""
    },
    {
        courseName: "Creative Writing Workshop",
        instructor: "Prof. Rachel Adams",
        department: "English",
        credits: 3,
        schedule: "MWF 9:00 AM - 10:30 AM",
        img: ""
    },
    {
        courseName: "Principles of Physics",
        instructor: "Dr. John Wilson",
        department: "Physics",
        credits: 4,
        schedule: "MWF 1:00 PM - 2:30 PM",
        img: ""
    },
    {
        courseName: "Introduction to Political Science",
        instructor: "Prof. Jessica Turner",
        department: "Political Science",
        credits: 3,
        schedule: "TTH 11:00 AM - 12:30 PM",
        img: ""
    },
    {
        courseName: "Digital Marketing Strategies",
        instructor: "Prof. Mark Anderson",
        department: "Marketing",
        credits: 3,
        schedule: "MWF 11:00 AM - 12:30 PM",
        img: ""
    },
    {
        courseName: "Introduction to Economics",
        instructor: "Dr. Samantha Collins",
        department: "Economics",
        credits: 3,
        schedule: "TTH 2:00 PM - 3:30 PM",
        img: ""
    },
    {
        courseName: "Environmental Science",
        instructor: "Prof. Daniel Clark",
        department: "Environmental Science",
        credits: 4,
        schedule: "MWF 10:00 AM - 11:30 AM",
        img: ""
    },
    {
        courseName: "Introduction to Linguistics",
        instructor: "Dr. Olivia Roberts",
        department: "Linguistics",
        credits: 3,
        schedule: "TTH 1:00 PM - 2:30 PM",
        img: ""
    },
    {
        courseName: "Introduction to Art History",
        instructor: "Prof. Benjamin Green",
        department: "Art History",
        credits: 3,
        schedule: "MWF 2:00 PM - 3:30 PM",
        img: ""
    },
    {
        courseName: "Introduction to Anthropology",
        instructor: "Dr. Laura Martinez",
        department: "Anthropology",
        credits: 3,
        schedule: "TTH 9:00 AM - 10:30 AM",
        img: ""
    }
];

const app = express();
// GET courses/anthropology 202

app.get('/', (req, res) => {
    res.json(courses)
});


app.get('/courses/random', (req, res) => {
    let randomIndex = Math.floor(Math.random()*courses.length); 
    // random number 0-14
    let course = courses[randomIndex]
    if (course) {
        res.json(course);
    } else {
        res.status(404).send("No course with this name");
    }
});

app.get('/courses/:courseNameParam', (req, res) => {
    let course = courses.find((obj) =>{
        if (obj.courseName === req.params.courseNameParam) {
            return true
        }
    })
    if (course) {
        res.json(course);
    } else {
        res.status(404).send("No course with this name");
    }
})




app.listen(4001, () => {
    console.log("running on 4001");
})