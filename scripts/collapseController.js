var renaButton = document.getElementById("renascenca-button");
var warrenButton = document.getElementById("warren-button");
var renascencaCollapse = false;
var warrenCollapse = false;

renaButton.addEventListener("click", () => {
    renascencaCollapse = !renascencaCollapse;
    if (!renascencaCollapse) {
        document.getElementById("ready-to-open-rena").classList.remove("hidden");
        document.getElementById("ready-to-close-rena").classList.add("hidden");
    }

    if (renascencaCollapse) {
        document.getElementById("ready-to-open-rena").classList.add("hidden");
        document.getElementById("ready-to-close-rena").classList.remove("hidden");
    }
})

warrenButton.addEventListener("click", () => {
    renascencaCollapse = !renascencaCollapse;
    if (!renascencaCollapse) {
        document.getElementById("ready-to-open-warren").classList.remove("hidden");
        document.getElementById("ready-to-close-warren").classList.add("hidden");
    }

    if (renascencaCollapse) {
        document.getElementById("ready-to-open-warren").classList.add("hidden");
        document.getElementById("ready-to-close-warren").classList.remove("hidden");
    }
})

