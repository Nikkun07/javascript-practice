import Tooltip from "./ui-files/tooltip";
import Dropdown from "./ui-files/dropdown";

// Create Tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));


// Create Dropdown
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown =>
{
    const instance = new Dropdown(dropdown);
    instance.init();
})

tooltip.init();