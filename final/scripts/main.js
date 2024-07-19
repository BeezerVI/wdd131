document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("review-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const diceType = parseInt(document.getElementById("dice-type").value);
        const diceNumber = parseInt(document.querySelector("input[name='dice-number']").value);
        const modifier = parseInt(document.querySelector("input[name='modifier']").value);

        let totalRoll = 0;
        for (let i = 0; i < diceNumber; i++) {
            totalRoll += Math.floor(Math.random() * diceType) + 1;
        }

        const finalOutcome = totalRoll + modifier;

        displayOutcome(finalOutcome);
    });

    function displayOutcome(outcome) {
        const outcomeContainer = document.createElement("div");
        outcomeContainer.className = "outcome";
        outcomeContainer.textContent = `Roll Outcome: ${outcome}`;

        const main = document.querySelector("main");
        const existingOutcome = document.querySelector(".outcome");

        if (existingOutcome) {
            form.replaceChild(outcomeContainer, existingOutcome);
        } else {
            form.appendChild(outcomeContainer);
        }
    }
});
