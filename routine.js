document.addEventListener("DOMContentLoaded", function() {
    const data = {
        "page": 1,
        "total": 776,
        "records": 2327,
        "rows": [
            {
                "cell": [
                    "1",
                    "ACT201",
                    "FINANCIAL ACCOUNTING",
                    "01",
                    24,
                    "BRAC BUSINESS SCHOOL",
                    "BBS",
                    "Mr. Saif Hossain",
                    "SHO",
                    "24-12-2024",
                    "RA Day 1 (24-12-2024)(02:00 PM-04:00 PM)",
                    "02:00 PM-03:20 PM",
                    null,
                    "02:00 PM-03:20 PM",
                    null,
                    null,
                    null,
                    null
                ]
            },
            {
                "cell": [
                    "2",
                    "ACT201",
                    "FINANCIAL ACCOUNTING",
                    "02",
                    33,
                    "BRAC BUSINESS SCHOOL",
                    "BBS",
                    "Tausif Bari",
                    "TBR",
                    "24-12-2024",
                    "RA Day 1 (24-12-2024)(02:00 PM-04:00 PM)",
                    null,
                    "03:30 PM-04:50 PM",
                    null,
                    "03:30 PM-04:50 PM",
                    null,
                    null,
                    null
                ]
            },
            {
                "cell": [
                    "3",
                    "ACT201",
                    "FINANCIAL ACCOUNTING",
                    "03",
                    33,
                    "BRAC BUSINESS SCHOOL",
                    "BBS",
                    "Md Arif H Mazumder",
                    "AFZ",
                    "24-12-2024",
                    "RA Day 1 (24-12-2024)(02:00 PM-04:00 PM)",
                    null,
                    null,
                    null,
                    null,
                    "03:30 PM-04:50 PM",
                    null,
                    "03:30 PM-04:50 PM"
                ]
            }
        ],
        "totalEntry": 0,
        "marksNotEntry": 2327
    };

    const courseSelect = document.getElementById('course-select');
    const sectionSelect = document.getElementById('section-select');
    const routineTable = document.getElementById('routine-table');

    // Populate course dropdown
    const courses = {};
    data.rows.forEach(row => {
        const [serial, courseCode, courseName] = row.cell;
        if (!courses[courseCode]) {
            courses[courseCode] = courseName;
        }
    });

    Object.keys(courses).forEach(courseCode => {
        const option = document.createElement('option');
        option.value = courseCode;
        option.textContent = `${courseCode} - ${courses[courseCode]}`;
        courseSelect.appendChild(option);
    });

    courseSelect.addEventListener('change', function() {
        sectionSelect.innerHTML = '<option value="">--Select Section--</option>'; // Reset sections
        sectionSelect.disabled = true;
        const selectedCourse = courseSelect.value;
        if (selectedCourse) {
            const sections = data.rows.filter(row => row.cell[1] === selectedCourse).map(row => row.cell[3]);
            sections.forEach(section => {
                const option = document.createElement('option');
                option.value = section;
                option.textContent = `Section ${section}`;
                sectionSelect.appendChild(option);
            });
            sectionSelect.disabled = false;
        }
    });

    sectionSelect.addEventListener('change', function() {
        const selectedCourse = courseSelect.value;
        const selectedSection = sectionSelect.value;
        if (selectedCourse && selectedSection) {
            // Clear previous routine
            routineTable.querySelectorAll('td').forEach(td => td.textContent = '');

            // Find the selected course and section
            const selectedRow = data.rows.find(row => row.cell[1] === selectedCourse && row.cell[3] === selectedSection);

            if (selectedRow) {
                const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const times = ['08:00-09:20', '09:30-10:50', '11:00-12:20', '12:30-01:50', '02:00-03:20', '03:30-04:50'];

                // Fill the routine based on the data
                selectedRow.cell.slice(11, 18).forEach((timeSlot, index) => {
                    if (timeSlot) {
                        const timeIndex = times.indexOf(timeSlot);
                        if (timeIndex > -1) {
                            const dayCell = routineTable.querySelectorAll('tr')[timeIndex].querySelectorAll('td')[index + 1];
                            dayCell.textContent = `${selectedCourse} - Sec ${selectedSection}`;
                        }
                    }
                });
            }
        }
    });
});
