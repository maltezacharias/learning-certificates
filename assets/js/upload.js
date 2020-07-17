import courses from './mockData/courses'

document.addEventListener("DOMContentLoaded", () => {
  // dynamically populate course names
  let courseNameSelectElement = document.getElementById("course_name");
  courses.forEach(course => {
    let courseoption = document.createElement("option");
    courseoption.value = course.course_number;
    courseoption.text = course.course_name;
    courseNameSelectElement.appendChild(courseoption);
  })

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

