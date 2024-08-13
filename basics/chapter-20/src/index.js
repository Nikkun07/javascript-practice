import Tooltip from "./ui-files/tooltip";
import Dropdown from "./ui-files/dropdown";
import Tabs from "./ui-files/tabs";

// Create Tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// Create Dropdown
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown =>
{
    const instance = new Dropdown(dropdown);
    instance.init();
})

//Create Tabbed Content

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();