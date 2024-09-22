const followButton = document.querySelector('.followButton')

followButton.addEventListener('click',()=>{
    if(followButton.classList.contains('following')){
        followButton.innerText='Follow'
        followButton.classList.remove('following')
    }else{
        followButton.innerText='Following'
        followButton.classList.add('following')
    }
})

const moreButton = document.querySelector('.moreButton')
const moreOptions = document.querySelector('.moreOptionsPopup')
moreButton.addEventListener('click',()=>{
    moreButton.classList.toggle('opened')
    moreOptions.classList.toggle('opened')
})

const commentButton = document.querySelector('.commentButton')
const card = document.querySelector('.card')
commentButton.addEventListener('click',()=>{
    card.classList.toggle('commentOpened')
})