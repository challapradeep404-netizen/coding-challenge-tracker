const challengeForm = document.getElementById("challengeForm");
const challengeList = document.getElementById("challengeList");

const allBtn = document.getElementById("allBtn");
const solvedBtn = document.getElementById("solvedBtn");
const unsolvedBtn = document.getElementById("unsolvedBtn");

let challenges = JSON.parse(localStorage.getItem("challenges")) || [];
let currentFilter = "all";

// Save to localStorage
function saveChallenges() {
    localStorage.setItem("challenges", JSON.stringify(challenges));
}

// Render challenges
function renderChallenges() {

    challengeList.innerHTML = "";

    let filteredChallenges = challenges.filter(challenge => {

        if (currentFilter === "solved") {
            return challenge.solved;
        }

        if (currentFilter === "unsolved") {
            return !challenge.solved;
        }

        return true;
    });

    filteredChallenges.forEach((challenge, index) => {

        const card = document.createElement("div");
        card.classList.add("challenge-card");

        if (challenge.solved) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <h3>${challenge.problemName}</h3>

            <p><strong>Platform:</strong> ${challenge.platform}</p>

            <p><strong>Difficulty:</strong> ${challenge.difficulty}</p>

            <p>
                <strong>Status:</strong>
                ${challenge.solved ? "Solved ✅" : "Unsolved ❌"}
            </p>

            <div class="buttons">

                <button class="toggle-btn">
                    ${challenge.solved ? "Mark Unsolved" : "Mark Solved"}
                </button>

                <button class="edit-btn">
                    Edit
                </button>

                <button class="delete-btn">
                    Delete
                </button>

            </div>
        `;

        // Toggle solved status
        card.querySelector(".toggle-btn").addEventListener("click", () => {

            challenge.solved = !challenge.solved;

            saveChallenges();
            renderChallenges();

        });

        // Edit challenge
        card.querySelector(".edit-btn").addEventListener("click", () => {

            const newProblemName = prompt(
                "Edit Problem Name",
                challenge.problemName
            );

            if (newProblemName !== null && newProblemName.trim() !== "") {

                challenge.problemName = newProblemName;

                saveChallenges();
                renderChallenges();

            }

        });

        // Delete challenge
        card.querySelector(".delete-btn").addEventListener("click", () => {

            challenges.splice(index, 1);

            saveChallenges();
            renderChallenges();

        });

        challengeList.appendChild(card);

    });

}

// Add challenge
challengeForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const problemName = document.getElementById("problemName").value;
    const platform = document.getElementById("platform").value;
    const difficulty = document.getElementById("difficulty").value;

    const challenge = {

        problemName,
        platform,
        difficulty,
        solved: false

    };

    challenges.push(challenge);

    saveChallenges();
    renderChallenges();

    challengeForm.reset();

});

// Filter buttons
allBtn.addEventListener("click", () => {

    currentFilter = "all";
    renderChallenges();

});

solvedBtn.addEventListener("click", () => {

    currentFilter = "solved";
    renderChallenges();

});

unsolvedBtn.addEventListener("click", () => {

    currentFilter = "unsolved";
    renderChallenges();

});

// Initial display
renderChallenges();
