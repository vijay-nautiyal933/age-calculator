/* made by vijay Nautiyal */

    const current_date = document.getElementById("current_date");
    const dateOfBirth = document.querySelector("#birthday");
    const calculate_age = document.getElementById("calculate_age");
    const calculate_age_div = document.getElementById("calculate_age_div");
    const Age = document.getElementById("cal_age");

    const today = new Date();
    current_date.innerText = `Today's Date is : ${today.toLocaleDateString('en-IN')}`;

    calculate_age.addEventListener("click", () => {
        let inputDate = dateOfBirth.value;
        if (!inputDate) {
            alert("Please enter your date of birth");
            return;
        }

        let parts = inputDate.split("/");
        if (parts.length !== 3) {
            alert("Please enter date in DD/MM/YYYY format");
            return;
        }

        let day = parseInt(parts[0], 10);
        let month = parseInt(parts[1], 10) - 1;
        let year = parseInt(parts[2], 10);
        let birthDate = new Date(year, month, day);

        if (isNaN(birthDate.getTime())) {
            alert("Invalid date format. Please enter a valid date.");
            return;
        }

        let cal_age = today.getFullYear() - birthDate.getFullYear();
        let monthDiff = today.getMonth() - birthDate.getMonth();
        let dayDiff = today.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            cal_age--;
            monthDiff = (monthDiff + 12) % 12;
        }
        if (dayDiff < 0) {
            let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            dayDiff = lastMonth + dayDiff;
            monthDiff--;
        }

        calculate_age_div.style.display = "block";
        Age.innerText = `Your Age is: ${cal_age} years, ${monthDiff} months `;
    });
