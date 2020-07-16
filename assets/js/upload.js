// upload.js

// let courses = JSON.parse(courses_raw);

document.addEventListener("DOMContentLoaded", () => {
  // dynamically populate course names
  let course_name_select = document.querySelector("#course_name");
  for (let i=0; i < courses.length; i++) {
    let courseoption = document.createElement("option");
    courseoption.value = courses[i].course_number;
    courseoption.text = courses[i].course_name;
    course_name_select.appendChild(courseoption);
  }

  // dynamically populate lecture names for chosen course
  let lecture_name_select = document.querySelector('#lecture_name');
  course_name_select.addEventListener("change", function() {
    let selected_course = this.value;
    while (lecture_name_select.firstChild) {
      lecture_name_select.removeChild(lecture_name_select.firstChild);
    }
    for (let j=0; j < courses[this.value].lectures.length; j++) {
      let lectureoption = document.createElement("option");
      lectureoption.value = courses[this.value].lectures[j].lecture_id;
      lectureoption.text = courses[this.value].lectures[j].lecture_name;
      lecture_name_select.appendChild(lectureoption);
    }

  });
});

let courses = [
  {
    "course_id": "AMSP",
    "course_name": "Allgemeinmedizinische Sprechstunde",
    "course_number": "0",
    "lectures": [
      {
        "lecture_id": "AMSP1",
        "lecture_name": "Allgemeinmed 1",
        "lecture_date": "2020-04-01"
      },
      {
        "lecture_id": "AMSP2",
        "lecture_name": "Allgemeinmed 2",
        "lecture_date": "2020-04-02"
      },
      {
          "lecture_id": "AMSP3",
          "lecture_name": "Allgemeinmed 3",
          "lecture_date": "2020-04-03"
        },
    ]
  },
  {
    "course_id": "ACSU",
    "course_name": "Alumni-Club Students Skill Update",
    "course_number": "1",
    "lectures": [
      {
        "lecture_id": "ACSU1",
        "lecture_name": "Skill 1",
        "lecture_date": "2020-04-01"
      },
      {
        "lecture_id": "ACSU2",
        "lecture_name": "Skill 2",
        "lecture_date": "2020-04-02"
      },
      {
          "lecture_id": "ACSU3",
          "lecture_name": "Skill 3",
          "lecture_date": "2020-04-03"
        },
    ]
  },
  {
    "course_id": "DLT",
    "course_name": "Distance Learning Tertialfälle",
    "course_number": "2",
    "lectures": [
      {
        "lecture_id": "DLT1",
        "lecture_name": "Tertialfälle 1",
        "lecture_date": "2020-04-01"
      },
      {
        "lecture_id": "DLT2",
        "lecture_name": "Tertialfälle 2",
        "lecture_date": "2020-04-02"
      },
      {
          "lecture_id": "DLT3",
          "lecture_name": "Tertialfälle 3",
          "lecture_date": "2020-04-03"
        },
    ]
  },
  {
    "course_id": "GMM",
    "course_name": "Good Medical Morning",
    "course_number": "3",
    "lectures": [
      {
        "lecture_id": "GMM1",
        "lecture_name": "GMM 1",
        "lecture_date": "2020-04-01"
      },
      {
        "lecture_id": "GMM2",
        "lecture_name": "GMM 2",
        "lecture_date": "2020-04-02"
      },
      {
          "lecture_id": "GMM3",
          "lecture_name": "GMM 3",
          "lecture_date": "2020-04-03"
        },
    ]
  },
  {
    "course_id": "IFK",
    "course_name": "Interdisziplinäre Fallkonferenz 20S",
    "course_number": "4",
    "lectures": [
      {
        "lecture_id": "IFK1",
        "lecture_name": "IFK 1",
        "lecture_date": "2020-04-01"
      },
      {
        "lecture_id": "IFK2",
        "lecture_name": "IFK 2",
        "lecture_date": "2020-04-02"
      },
      {
          "lecture_id": "IFK3",
          "lecture_name": "Thema 3",
          "lecture_date": "2020-04-03"
        },
    ]
  },
  {
    "course_id": "KPSY",
    "course_name": "Konsil Psychiatrie",
    "course_number": "5",
    "lectures": [
      {
        "lecture_id": "KPSY1",
        "lecture_name": "Psych 1",
        "lecture_date": "2020-04-01"
      },
      {
        "lecture_id": "KPSY2",
        "lecture_name": "Psych 2",
        "lecture_date": "2020-04-02"
      },
      {
          "lecture_id": "KPSY3",
          "lecture_name": "Psych 3",
          "lecture_date": "2020-04-03"
        },
    ]
  },
  {
    "course_id": "ANAT",
    "course_name": "Living Anatomy",
    "course_number": "6",
    "lectures": [
      {
        "lecture_id": "ANAT1",
        "lecture_name": "Anatomy 1",
        "lecture_date": "2020-04-01"
      },
      {
        "lecture_id": "ANAT2",
        "lecture_name": "Anatomy 2",
        "lecture_date": "2020-04-02"
      },
      {
          "lecture_id": "ANAT3",
          "lecture_name": "Anatomy 3",
          "lecture_date": "2020-04-03"
        },
    ]
  },
  {
    "course_id": "NEUR",
    "course_name": "Neurokonsil",
    "course_number": "7",
    "lectures": [
      {
        "lecture_id": "NEUR1",
        "lecture_name": "Neurokonsil 1",
        "lecture_date": "2020-04-01"
      },
      {
        "lecture_id": "NEUR2",
        "lecture_name": "Neurokonsil 2",
        "lecture_date": "2020-04-02"
      },
      {
          "lecture_id": "NEUR3",
          "lecture_name": "Neurokonsil 3",
          "lecture_date": "2020-04-03"
        },
    ]
  },
  {
  "course_id": "RTM",
  "course_name": "Radiologisches Team-Meeting",
  "course_number": "8",
  "lectures": [
    {
      "lecture_id": "RTM1",
      "lecture_name": "Radio 1",
      "lecture_date": "2020-04-01"
    },
    {
      "lecture_id": "RTM2",
      "lecture_name": "Radio 2",
      "lecture_date": "2020-04-02"
    },
    {
        "lecture_id": "RTM3",
        "lecture_name": "Radio 3",
        "lecture_date": "2020-04-03"
      },
  ]
},
{
    "course_id": "TACL",
    "course_name": "Talk aus der Alumni Club Lounge",
    "course_number": "9",
    "lectures": [
      {
        "lecture_id": "TACL1",
        "lecture_name": "Medizingeschichte mit Dr. C.",
        "lecture_date": "2020-04-01"
      },
      {
        "lecture_id": "TACL2",
        "lecture_name": "Medizin und Ethik mit Dr. Martin R.",
        "lecture_date": "2020-04-02"
      },
      {
          "lecture_id": "TACL3",
          "lecture_name": "Medizin, Umwelt und Klima mit Dr. A. V.",
          "lecture_date": "2020-04-03"
        },
    ]
  },
  {
    "course_id": "WAMB",
    "course_name": "Webambulanz",
    "course_number": "10",
    "lectures": [
      {
        "lecture_id": "WAMB1",
        "lecture_name": "Web 1",
        "lecture_date": "2020-04-01"
      },
      {
        "lecture_id": "WAMB2",
        "lecture_name": "Web 2",
        "lecture_date": "2020-04-02"
      },
      {
          "lecture_id": "WAMB3",
          "lecture_name": "Web 3",
          "lecture_date": "2020-04-03"
        },
    ]
  }
];