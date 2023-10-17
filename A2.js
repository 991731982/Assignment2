// Create an object named "visitorData" to store the number of site visitors for the last 6 months
const visitorData = [
    { month: "Januray", visitorsNumber: 1000 },
    { month: "February", visitorsNumber: 1500 },
    { month: "March", visitorsNumber: 2000 },
    { month: "April", visitorsNumber: 1800 },
    { month: "May", visitorsNumber: 2500 },
    { month: "June", visitorsNumber: 3000 }
];




// create an HTML table to generate and display the visitor data table

//define the function
function createVisitorDataTable(){
    const visitorDataTable=document.getElementById("visitor-data");
    const table= document.createElement("table");
    const ul=document.createElement("ul");
    visitorDataTable.appendChild(ul);



    for (let i = 0; i < visitorData.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${visitorData[i].month}: ${visitorData[i].visitorsNumber} visitors`;
        ul.appendChild(li);
    }

    visitorDataTable.appendChild(ul);

}

//execute the function:
createVisitorDataTable();







// Function to handle GDPR cookie acceptance
function AcceptCookies() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptLink = document.getElementById('accept-link');
    let cookiesAccepted = false;

    acceptLink.addEventListener('click', function (event) {
        let clickEvent=false;
        if (!cookiesAccepted) {
            // Cookies accepted
            cookieBanner.innerHTML = 'Cookies were accepted. <a id="revoke-link" href="#">Would you like to revoke?</a>';
            cookiesAccepted = true;
        } else {
            // Cookies revoked
            cookieBanner.innerHTML = 'Click to Accept Cookies';
            cookiesAccepted = false;
        }

        // Handle revoking cookies
        const revokeLink = document.getElementById('revoke-link');
        
        if (revokeLink) {
            revokeLink.addEventListener('click', function (event) {
                let clickEvent=false;
                cookiesAccepted = false;
                cookieBanner.innerHTML = 'Click to Accept Cookies';
                revokeLink = false;
            });
        }
    });
}

AcceptCookies();





// Function to handle high contrast mode
function handleHighContrast(){
    const toggleContrastButton=document.getElementById("toggle-contrast");

    let highContrast=false;
      //add click event listener to the toggle button
    toggleContrastButton.addEventListener("click",function(){
        // toggle the value of the isHighContrast variable
        highContrast=!highContrast;

        if(highContrast){
            document.body.style.backgroundColor="black";
            document.body.style.color="white";
            document.body.style.opacity="1";
        }else{
            document.body.style.backgroundColor="gray";
            document.body.style.color="white";
            document.body.style.opacity="0.5";

        }
    });
}

handleHighContrast();





// Function to handle the "Ctrl + A" keyboard shortcut

function handleKeyboardShortcut() {
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.key === 'a') {
            const toggleContrastButton = document.getElementById('toggle-contrast');
            if (toggleContrastButton) {
                // Simulate a click on the 'toggle-contrast' button
                toggleContrastButton.click();
            }
        }
    });
}

handleKeyboardShortcut();
