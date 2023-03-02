const staticText = document.querySelector('.op-con')
const dynamicText = document.querySelector('.op-changeing')

const contents = {
    'items' : [
        'Ui/Ux Design',
        'Front-end Design',
        'Back-end Design',
        'Scripting',
        'IT Solutions',
        'API Design/Develop',
    ],
    'index' : 1,
}

const setDynamicText = (state) => {
    if (state) {
        dynamicText.classList.remove('w3-animate-right')
        dynamicText.classList.add('w3-animate-left')
    } else {
        dynamicText.classList.remove('w3-animate-left')
        dynamicText.classList.add('w3-animate-right')

        dynamicText.innerText = contents.items[contents.index]
        contents.index == contents.items.length - 1 ? contents.index = 0 : contents.index ++
    }
}

dynamicText.addEventListener("animationend", (event) => {
    if (event.animationName == 'animateleft') {
        setDynamicText(false)
    } else if (event.animationName == 'animateright') {
        setTimeout(() => {
            setDynamicText(true)
        }, 1500)
    }
}, false);

$(document).ready(() => {
    
    setDynamicText(true)
});