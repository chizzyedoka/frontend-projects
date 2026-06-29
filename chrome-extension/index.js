let interviewResources = JSON.parse(localStorage.getItem("interviewResources")) || [];
const inputField = document.getElementById("input-el");
const inputButton = document.getElementById("input-btn");
const deleteButton = document.getElementById("delete-btn");
const tabButton = document.getElementById("tab-btn");
const ulEl = document.getElementById("ul-el");

// Draw a single saved URL as a clickable list item.
function renderItem(url) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = url;
    a.href = url;
    a.target = "_blank";
    li.appendChild(a);
    ulEl.appendChild(li);
}

// Single source of truth for adding a resource: store + persist + draw.
function addResource(url) {
    interviewResources.push(url);
    localStorage.setItem("interviewResources", JSON.stringify(interviewResources));
    renderItem(url);
}

// Paint everything already saved as soon as the popup opens.
interviewResources.forEach(renderItem);

// Highlight the input while the user is typing.
inputField.addEventListener("input", function() {
    inputField.style.backgroundColor = inputField.value.length > 0 ? "lightblue" : "white";
});

// Save whatever is typed in the input box.
inputButton.addEventListener("click", function() {
    let url = inputField.value.trim();
    if (!url) {
        return;
    }

    // Add a scheme if the user left it off (don't double up on http/https links).
    if (!/^https?:\/\//i.test(url)) {
        url = "https://" + url;
    }

    addResource(url);
    inputField.value = "";
    inputField.style.backgroundColor = "white";
});

// Save the URL of the current tab.
tabButton.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs[0] && tabs[0].url) {
            addResource(tabs[0].url);
        }
    });
});

// Double-click to clear the whole list.
deleteButton.addEventListener("dblclick", function() {
    localStorage.removeItem("interviewResources");
    interviewResources = [];
    ulEl.innerHTML = "";
});
