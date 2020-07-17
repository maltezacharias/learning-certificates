import courses from './mockData/courses'

document.addEventListener("DOMContentLoaded", () => {
  // dynamically populate course names
  let courseNameSelectElement = document.getElementById("course_name");
  courses.forEach(course => {
    let courseOption = document.createElement("option");
    courseOption.value = course.course_number;
    courseOption.text = course.course_name;
    courseNameSelectElement.appendChild(courseOption);
  })

  // dynamically populate lecture names for chosen course
  let lectureNameSelectElement = document.getElementById("lecture_name");
  courseNameSelectElement.addEventListener("change", function() {
    let selectedCourse = this.value;
    while (lectureNameSelectElement.firstChild) {
      lectureNameSelectElement.removeChild(lectureNameSelectElement.firstChild);
    }
    courses[selectedCourse].lectures.forEach(lecture => {
      let lectureOption = document.createElement("option");
      lectureOption.value = lecture.lecture_id;
      lectureOption.text = lecture.lecture_name; 
      lectureNameSelectElement.appendChild(lectureOption);
    });
  });
});