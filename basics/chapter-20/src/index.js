import Tooltip from "./ui-files/tooltip";
import Dropdown from "./ui-files/dropdown";
import Tabs from "./ui-files/tabs";
import Snackbar from "./ui-files/snackbar";

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

//Create Snackbar

const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');

button.addEventListener('click', () =>
{
    snackbar.show('Peko');
});