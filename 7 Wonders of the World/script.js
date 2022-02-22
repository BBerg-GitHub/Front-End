
/* Picture will resize if they are active */
/* QuerySelectorAll = Creates a node list of all panels */
const panels = document.querySelectorAll('.panel')

/* test for list with the developer tools */
console.log(panels) 
console.log(panels[0])

/* loop through node list, and add an event listener */
panels.forEach((panel) => {
    console.log(panel)
    panel.addEventListener('click', () => {
        /* remove current active class */
        removeActiveClass()
        /* console.log(123) */
        panel.classList.add('active')
    })
})

/* loop through and remove active class */
function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    }) 
}



