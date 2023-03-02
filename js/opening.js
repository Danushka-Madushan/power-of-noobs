const staticText = document.querySelector('.op-con')
const dynamicText = document.querySelector('.op-changeing')

const contents = {
    'items' : [
        'Power Of Noobs',
        'Ui/Ux Design',
        'Front-end Design',
        'Back-end Design',
        'Scripting',
        'IT Solutions',
        'API Design/Develop',
    ],
    'prefix': [
        'We Do',
        'we Are',
    ],
    'index' : 1,
    'countdown' : 1800,
}

const setStatciText = (state) => {
    if (state) {
        staticText.classList.remove('w3-animate-right')
        staticText.classList.add('w3-animate-left')
    } else {
        staticText.classList.remove('w3-animate-left')
        staticText.classList.add('w3-animate-right')
        staticText.innerText == contents.prefix[0] ? staticText.innerText = contents.prefix[1] : staticText.innerText = contents.prefix[0] 
    }
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
        if (contents.index == 1 || contents.index == 0) {
            setStatciText(true)
        }
        setDynamicText(false)
    } else if (event.animationName == 'animateright') {
        setTimeout(() => {
            setDynamicText(true)
        }, contents.countdown)
    }
}, false);

staticText.addEventListener('animationend', (event) => {
    if (event.animationName == 'animateleft') {
        setStatciText(false)
    }
})

$(document).ready(() => {
    setTimeout(() => {
        setDynamicText(true)
    }, contents.countdown)
});