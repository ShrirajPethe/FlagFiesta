let currentFlag = "";
let score = 0;
let chances = 3;
let timeLeft = 60;
let timerInterval;

function fetchRandomFlag() {
    const flags = [
        {country: "Afghanistan", url: "Flags_0_Actual/flag000 (001).png"},
        {country: "Albania", url: "Flags_0_Actual/flag000 (002).png"},
        {country: "Algeria", url: "Flags_0_Actual/flag000 (003).png"},
        {country: "Andorra", url: "Flags_0_Actual/flag000 (004).png"},
        {country: "Angola", url: "Flags_0_Actual/flag000 (005).png"},
        {country: "Antigua and Barbuda", url: "Flags_0_Actual/flag000 (006).png"},
        {country: "Argentina", url: "Flags_0_Actual/flag000 (007).png"},
        {country: "Armenia", url: "Flags_0_Actual/flag000 (008).png"},
        {country: "Australia", url: "Flags_0_Actual/flag000 (009).png"},
        {country: "Austria", url: "Flags_0_Actual/flag000 (010).png"},
        {country: "Azerbaijan", url: "Flags_0_Actual/flag000 (011).png"},
        {country: "Bahrain", url: "Flags_0_Actual/flag000 (012).png"},
        {country: "Bangladesh", url: "Flags_0_Actual/flag000 (013).png"},
        {country: "Barbados", url: "Flags_0_Actual/flag000 (014).png"},
        {country: "Belarus", url: "Flags_0_Actual/flag000 (015).png"},
        {country: "Belgium", url: "Flags_0_Actual/flag000 (016).png"},
        {country: "Belize", url: "Flags_0_Actual/flag000 (017).png"},
        {country: "Benin", url: "Flags_0_Actual/flag000 (018).png"},
        {country: "Bhutan", url: "Flags_0_Actual/flag000 (019).png"},
        {country: "Bolivia", url: "Flags_0_Actual/flag000 (020).png"},
        {country: "Bosnia and Herzegovina", url: "Flags_0_Actual/flag000 (021).png"},
        {country: "Botswana", url: "Flags_0_Actual/flag000 (022).png"},
        {country: "Brazil", url: "Flags_0_Actual/flag000 (023).png"},
        {country: "Brunei", url: "Flags_0_Actual/flag000 (024).png"},
        {country: "Bulgaria", url: "Flags_0_Actual/flag000 (025).png"},
        {country: "Burkina Faso", url: "Flags_0_Actual/flag000 (026).png"},
        {country: "Burundi", url: "Flags_0_Actual/flag000 (027).png"},
        {country: "Cambodia", url: "Flags_0_Actual/flag000 (028).png"},
        {country: "Cameroon", url: "Flags_0_Actual/flag000 (029).png"},
        {country: "Canada", url: "Flags_0_Actual/flag000 (030).png"},
        {country: "Cape Verde", url: "Flags_0_Actual/flag000 (031).png"},
        {country: "Chad", url: "Flags_0_Actual/flag000 (032).png"},
        {country: "Chile", url: "Flags_0_Actual/flag000 (033).png"},
        {country: "Colombia", url: "Flags_0_Actual/flag000 (034).png"},
        {country: "Costa Rica", url: "Flags_0_Actual/flag000 (035).png"},
        {country: "Côte d'Ivoire", url: "Flags_0_Actual/flag000 (036).png"},
        {country: "Croatia", url: "Flags_0_Actual/flag000 (037).png"},
        {country: "Cuba", url: "Flags_0_Actual/flag000 (038).png"},
        {country: "Cyprus", url: "Flags_0_Actual/flag000 (039).png"},
        {country: "Denmark", url: "Flags_0_Actual/flag000 (040).png"},
        {country: "Djibouti", url: "Flags_0_Actual/flag000 (041).png"},
        {country: "Dominica", url: "Flags_0_Actual/flag000 (042).png"},
        {country: "East Timor", url: "Flags_0_Actual/flag000 (043).png"},
        {country: "Ecuador", url: "Flags_0_Actual/flag000 (044).png"},
        {country: "Egypt", url: "Flags_0_Actual/flag000 (045).png"},
        {country: "El Salvador", url: "Flags_0_Actual/flag000 (046).png"},
        {country: "Equatorial Guinea", url: "Flags_0_Actual/flag000 (047).png"},
        {country: "Eritrea", url: "Flags_0_Actual/flag000 (048).png"},
        {country: "Estonia", url: "Flags_0_Actual/flag000 (049).png"},
        {country: "Eswatini", url: "Flags_0_Actual/flag000 (050).png"},
        {country: "Ethiopia", url: "Flags_0_Actual/flag000 (051).png"},
        {country: "Fiji", url: "Flags_0_Actual/flag000 (052).png"},
        {country: "Finland", url: "Flags_0_Actual/flag000 (053).png"},
        {country: "France", url: "Flags_0_Actual/flag000 (054).png"},
        {country: "Gabon", url: "Flags_0_Actual/flag000 (055).png"},
        {country: "Georgia", url: "Flags_0_Actual/flag000 (056).png"},
        {country: "Germany", url: "Flags_0_Actual/flag000 (057).png"},
        {country: "Ghana", url: "Flags_0_Actual/flag000 (058).png"},
        {country: "Greece", url: "Flags_0_Actual/flag000 (059).png"},
        {country: "Grenada", url: "Flags_0_Actual/flag000 (060).png"},
        {country: "Guatemala", url: "Flags_0_Actual/flag000 (061).png"},
        {country: "Guinea Bissau", url: "Flags_0_Actual/flag000 (062).png"},
        {country: "Guinea", url: "Flags_0_Actual/flag000 (063).png"},
        {country: "Guyana", url: "Flags_0_Actual/flag000 (064).png"},
        {country: "Haiti", url: "Flags_0_Actual/flag000 (065).png"},
        {country: "Honduras", url: "Flags_0_Actual/flag000 (066).png"},
        {country: "Hungary", url: "Flags_0_Actual/flag000 (067).png"},
        {country: "Iceland", url: "Flags_0_Actual/flag000 (068).png"},
        {country: "India", url: "Flags_0_Actual/flag000 (069).png"},
        {country: "Indonesia", url: "Flags_0_Actual/flag000 (070).png"},
        {country: "Iran", url: "Flags_0_Actual/flag000 (071).png"},
        {country: "Iraq", url: "Flags_0_Actual/flag000 (072).png"},
        {country: "Ireland", url: "Flags_0_Actual/flag000 (073).png"},
        {country: "Israel", url: "Flags_0_Actual/flag000 (074).png"},
        {country: "Italy", url: "Flags_0_Actual/flag000 (075).png"},
        {country: "Jamaica", url: "Flags_0_Actual/flag000 (076).png"},
        {country: "Japan", url: "Flags_0_Actual/flag000 (077).png"},
        {country: "Jordan", url: "Flags_0_Actual/flag000 (078).png"},
        {country: "Kazakhstan", url: "Flags_0_Actual/flag000 (079).png"},
        {country: "Kenya", url: "Flags_0_Actual/flag000 (080).png"},
        {country: "Kiribati", url: "Flags_0_Actual/flag000 (081).png"},
        {country: "Kuwait", url: "Flags_0_Actual/flag000 (082).png"},
        {country: "Kyrgyzstan", url: "Flags_0_Actual/flag000 (083).png"},
        {country: "Laos", url: "Flags_0_Actual/flag000 (084).png"},
        {country: "Latvia", url: "Flags_0_Actual/flag000 (085).png"},
        {country: "Lebanon", url: "Flags_0_Actual/flag000 (086).png"},
        {country: "Lesotho", url: "Flags_0_Actual/flag000 (087).png"},
        {country: "Liberia", url: "Flags_0_Actual/flag000 (088).png"},
        {country: "Libya", url: "Flags_0_Actual/flag000 (089).png"},
        {country: "Liechtenstein", url: "Flags_0_Actual/flag000 (090).png"},
        {country: "Lithuania", url: "Flags_0_Actual/flag000 (091).png"},
        {country: "Luxembourg", url: "Flags_0_Actual/flag000 (092).png"},
        {country: "Madagascar", url: "Flags_0_Actual/flag000 (093).png"},
        {country: "Malawi", url: "Flags_0_Actual/flag000 (094).png"},
        {country: "Malaysia", url: "Flags_0_Actual/flag000 (095).png"},
        {country: "Maldives", url: "Flags_0_Actual/flag000 (096).png"},
        {country: "Mali", url: "Flags_0_Actual/flag000 (097).png"},
        {country: "Malta", url: "Flags_0_Actual/flag000 (098).png"},
        {country: "Mauritania", url: "Flags_0_Actual/flag000 (099).png"},
        {country: "Mauritius", url: "Flags_0_Actual/flag000 (100).png"},
        {country: "Mexico", url: "Flags_0_Actual/flag000 (101).png"},
        {country: "Moldova", url: "Flags_0_Actual/flag000 (102).png"},
        {country: "Monaco", url: "Flags_0_Actual/flag000 (103).png"},
        {country: "Mongolia", url: "Flags_0_Actual/flag000 (104).png"},
        {country: "Montenegro", url: "Flags_0_Actual/flag000 (105).png"},
        {country: "Morocco", url: "Flags_0_Actual/flag000 (106).png"},
        {country: "Mozambique", url: "Flags_0_Actual/flag000 (107).png"},
        {country: "Myanmar", url: "Flags_0_Actual/flag000 (108).png"},
        {country: "Namibia", url: "Flags_0_Actual/flag000 (109).png"},
        {country: "Nauru", url: "Flags_0_Actual/flag000 (110).png"},
        {country: "Nepal", url: "Flags_0_Actual/flag000 (111).png"},
        {country: "New Zealand", url: "Flags_0_Actual/flag000 (112).png"},
        {country: "Nicaragua", url: "Flags_0_Actual/flag000 (113).png"},
        {country: "Niger", url: "Flags_0_Actual/flag000 (114).png"},
        {country: "Nigeria", url: "Flags_0_Actual/flag000 (115).png"},
        {country: "North Korea", url: "Flags_0_Actual/flag000 (116).png"},
        {country: "North Macedonia", url: "Flags_0_Actual/flag000 (117).png"},
        {country: "Norway", url: "Flags_0_Actual/flag000 (118).png"},
        {country: "Oman", url: "Flags_0_Actual/flag000 (119).png"},
        {country: "Pakistan", url: "Flags_0_Actual/flag000 (120).png"},
        {country: "Palau", url: "Flags_0_Actual/flag000 (121).png"},
        {country: "Palestine", url: "Flags_0_Actual/flag000 (122).png"},
        {country: "Panama", url: "Flags_0_Actual/flag000 (123).png"},
        {country: "Papua New Guinea", url: "Flags_0_Actual/flag000 (124).png"},
        {country: "Paraguay", url: "Flags_0_Actual/flag000 (125).png"},
        {country: "Peru", url: "Flags_0_Actual/flag000 (126).png"},
        {country: "Poland", url: "Flags_0_Actual/flag000 (127).png"},
        {country: "Portugal", url: "Flags_0_Actual/flag000 (128).png"},
        {country: "Qatar", url: "Flags_0_Actual/flag000 (129).png"},
        {country: "Romania", url: "Flags_0_Actual/flag000 (130).png"},
        {country: "Russia", url: "Flags_0_Actual/flag000 (131).png"},
        {country: "Rwanda", url: "Flags_0_Actual/flag000 (132).png"},
        {country: "Saint Kitts and Nevis", url: "Flags_0_Actual/flag000 (133).png"},
        {country: "Saint Lucia", url: "Flags_0_Actual/flag000 (134).png"},
        {country: "Saint Vincent and the Grenadines", url: "Flags_0_Actual/flag000 (135).png"},
        {country: "Samoa", url: "Flags_0_Actual/flag000 (136).png"},
        {country: "San Marino", url: "Flags_0_Actual/flag000 (137).png"},
        {country: "São Tomé and Príncipe", url: "Flags_0_Actual/flag000 (138).png"},
        {country: "Saudi Arabia", url: "Flags_0_Actual/flag000 (139).png"},
        {country: "Senegal", url: "Flags_0_Actual/flag000 (140).png"},
        {country: "Serbia", url: "Flags_0_Actual/flag000 (141).png"},
        {country: "Seychelles", url: "Flags_0_Actual/flag000 (142).png"},
        {country: "Sierra Leone", url: "Flags_0_Actual/flag000 (143).png"},
        {country: "Singapore", url: "Flags_0_Actual/flag000 (144).png"},
        {country: "Slovakia", url: "Flags_0_Actual/flag000 (145).png"},
        {country: "Slovenia", url: "Flags_0_Actual/flag000 (146).png"},
        {country: "Somalia", url: "Flags_0_Actual/flag000 (147).png"},
        {country: "South Africa", url: "Flags_0_Actual/flag000 (148).png"},
        {country: "South Korea", url: "Flags_0_Actual/flag000 (149).png"},
        {country: "South Sudan", url: "Flags_0_Actual/flag000 (150).png"},
        {country: "Spain", url: "Flags_0_Actual/flag000 (151).png"},
        {country: "Sri Lanka", url: "Flags_0_Actual/flag000 (152).png"},
        {country: "Sudan", url: "Flags_0_Actual/flag000 (153).png"},
        {country: "Suriname", url: "Flags_0_Actual/flag000 (154).png"},
        {country: "Sweden", url: "Flags_0_Actual/flag000 (155).png"},
        {country: "Switzerland", url: "Flags_0_Actual/flag000 (156).png"},
        {country: "Syria", url: "Flags_0_Actual/flag000 (157).png"},
        {country: "Tajikistan", url: "Flags_0_Actual/flag000 (158).png"},
        {country: "Tanzania", url: "Flags_0_Actual/flag000 (159).png"},
        {country: "Thailand", url: "Flags_0_Actual/flag000 (160).png"},
        {country: "Bahamas", url: "Flags_0_Actual/flag000 (161).png"},
        {country: "Central African Republic", url: "Flags_0_Actual/flag000 (162).png"},
        {country: "Comoros", url: "Flags_0_Actual/flag000 (163).png"},
        {country: "Czech Republic", url: "Flags_0_Actual/flag000 (164).png"},
        {country: "Democratic Republic of Congo", url: "Flags_0_Actual/flag000 (165).png"},
        {country: "Dominican Republic", url: "Flags_0_Actual/flag000 (166).png"},
        {country: "Federated States of Micronesia", url: "Flags_0_Actual/flag000 (167).png"},
        {country: "Gambia", url: "Flags_0_Actual/flag000 (168).png"},
        {country: "Marshall Islands", url: "Flags_0_Actual/flag000 (169).png"},
        {country: "Netherlands", url: "Flags_0_Actual/flag000 (170).png"},
        {country: "People's Republic of China", url: "Flags_0_Actual/flag000 (171).png"},
        {country: "Philippines", url: "Flags_0_Actual/flag000 (172).png"},
        {country: "Republic of Congo", url: "Flags_0_Actual/flag000 (173).png"},
        {country: "Solomon Islands", url: "Flags_0_Actual/flag000 (174).png"},
        // {country: "Taliban", url: "Flags_0_Actual/flag000 (175).png"},
        {country: "United Arab Emirates", url: "Flags_0_Actual/flag000 (176).png"},
        {country: "United Kingdom", url: "Flags_0_Actual/flag000 (177).png"},
        {country: "United States", url: "Flags_0_Actual/flag000 (178).png"},
        {country: "Vatican City", url: "Flags_0_Actual/flag000 (179).png"},
        {country: "Togo", url: "Flags_0_Actual/flag000 (180).png"},
        {country: "Tonga", url: "Flags_0_Actual/flag000 (181).png"},
        {country: "Trinidad and Tobago", url: "Flags_0_Actual/flag000 (182).png"},
        {country: "Tunisia", url: "Flags_0_Actual/flag000 (183).png"},
        {country: "Turkey", url: "Flags_0_Actual/flag000 (184).png"},
        {country: "Turkmenistan", url: "Flags_0_Actual/flag000 (185).png"},
        {country: "Tuvalu", url: "Flags_0_Actual/flag000 (186).png"},
        {country: "Uganda", url: "Flags_0_Actual/flag000 (187).png"},
        {country: "Ukraine", url: "Flags_0_Actual/flag000 (188).png"},
        {country: "Uruguay", url: "Flags_0_Actual/flag000 (189).png"},
        {country: "Uzbekistan", url: "Flags_0_Actual/flag000 (190).png"},
        {country: "Vanuatu", url: "Flags_0_Actual/flag000 (191).png"},
        {country: "Venezuela", url: "Flags_0_Actual/flag000 (192).png"},
        {country: "Vietnam", url: "Flags_0_Actual/flag000 (193).png"},
        {country: "Yemen", url: "Flags_0_Actual/flag000 (194).png"},
        {country: "Zambia", url: "Flags_0_Actual/flag000 (195).png"},
        {country: "Zimbabwe", url: "Flags_0_Actual/flag000 (196).png"}
            ];
   
    const randomFlag = flags[Math.floor(Math.random() * flags.length)];
    currentFlag = randomFlag.country;
    document.getElementById('flag').src = randomFlag.url;
    document.getElementById('userGuess').value = '';
}

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    if (userGuess.toUpperCase() === currentFlag.toUpperCase()) {
        score++;
        timeLeft+=10;
        if (chances <= 2)
        { chances+=0.5 }
        document.getElementById('score').textContent = `Score: ${score}`;
        document.getElementById('chances').textContent = `Chances left: ${chances}`;
        showNotification();  // Show the "Correct" notification
        fetchRandomFlag();
    } else {
        chances--;
        showNotification2();  // Show the "InCorrect" notification
        document.getElementById('chances').textContent = `Chances left: ${chances}`;
        if (chances <= 0) {
            endGame();
            return;
        }
    }
}

function showNotification() {
    const notification = document.getElementById('notification');
    notification.style.opacity = "1";  // Show the notification
    
    setTimeout(function() {
        notification.style.opacity = "0";
    // }, 10000);
    }, 1000);
}


function showNotification2() {
    const notification = document.getElementById('notifiNot');
    notification.style.opacity = "1";  // Show the notification
    
    setTimeout(function() {
        notification.style.opacity = "0";
    // }, 10000);
    }, 1000);
}


// game over -> Either timer reaching 0 OR running out of chances
function endGame() {
    clearInterval(timerInterval); 
    document.getElementById('timer').style.display = 'none'; 
    alert("Game over! Your score is: " + score);
}


// Starting the game's timer
function startTimer() {
    timerInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById('timer').querySelector('span').textContent = timeLeft;
        } else {
            clearInterval(timerInterval);  // Stop the timer
            endGame();  // Game over timer reached 0
        }
    }, 1000);
}

function endGame() {
    clearInterval(timerInterval); // Stop the timer
    document.getElementById('timer').style.display = 'none'; // Hide the timer
    alert("Game over! Your score is: " + score);
}

function resetGame() {
    score = 0;
    chances = 3;
    timeLeft = 60;

    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('chances').textContent = `Chances left: ${chances}`;
    document.getElementById('timer').querySelector('span').textContent = timeLeft;
    document.getElementById('timer').style.display = 'block';  // Show the timer again

    clearInterval(timerInterval);  // Clear the current timer (if running)
    startTimer();  // Start the timer

    fetchRandomFlag(); 
}



function skipFlag() {
    chances--;
    document.getElementById('chances').textContent = `Chances left: ${chances}`;
    if (chances <= 0) {
        endGame();
        return;
    }
    fetchRandomFlag();

}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const container = document.querySelector('.container2');
        container.style.opacity = '1';
        container.style.visibility = 'visible';

        setTimeout(function() {
            container.style.opacity = '0';
            container.style.visibility = 'hidden';
        }, 5000);

    }, 500);
});


fetchRandomFlag();
startTimer();

// *^____^* 👌      Author Shriraj Pethe 
// (～￣▽￣)～ 👌      Author Shriraj Pethe