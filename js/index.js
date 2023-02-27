const dynamicText = document.querySelector('.op-changeing')

const contents = [
    'Awesome',
    'Reliable',
    'Smart',
    'Perfect',
    'The Best of The Best',
]

let index = 1

const animate = () => {
    dynamicText.classList.remove('w3-animate-right')
    dynamicText.classList.add('w3-animate-left')
}

const animateback = () => {
    dynamicText.classList.remove('w3-animate-left')
    dynamicText.classList.add('w3-animate-right')
    dynamicText.innerText = contents[index]
    index == 4 ? index = 0 : index ++
}