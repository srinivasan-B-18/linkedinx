const userIcon = document.querySelector(".nav-profile-pfoto")

const profileSetting = document.querySelector(".profile-setting")

userIcon.addEventListener('click',()=>{
    profileSetting.classList.toggle("clicked")
})