const modal = document.querySelector('.js-modal');
const postDetail = document.querySelector('.js-post-details');
const eventDetail = document.querySelector('.js-event-details');
const postDetailOpenBtns = document.querySelectorAll('.js-read-details');
const loginForm = document.querySelector('.js-login-form');
const postList = document.querySelector('.js-post-list');
const eventList = document.querySelector('.js-event-list');


//show and hide post details
function showPostDetails() {
    postDetail.classList.add('open');
    modal.classList.add('open');
    
        var check = postList.classList.contains('open')
        if(!check) {
            closePost.style.display = 'none';
            closePostDetails.style.display = 'block';
        }
    }
function hidePostDetails() {
    modal.classList.remove('open');
    postDetail.classList.remove('open');
    // eventDetail.classList.remove('open');
}
// asign click event for postDetailOpens button
for(const postDetailOpenBtn of postDetailOpenBtns) {
    postDetailOpenBtn.addEventListener('click',showPostDetails);
    
}
//button close post-detail form
const closePostDetails = document.querySelector('.js-close-post-details');
closePostDetails.addEventListener('click', hidePostDetails);

// event stop propagation 
postDetail.addEventListener('click', function(e) {
    e.stopPropagation();
})

// click outside form to close form
modal.addEventListener('click', hidePostDetails);






// show and hide post-list

const postListOpenBtns = document.querySelectorAll('.js-open-list-btn');
const closePostList = document.querySelector('.js-close-post-list');
const closePost = document.querySelector('.js-close-1')
closePostList.addEventListener('click', hidePostList);

// show post list and click close post detail but post list is opening
function showPostList() {
    modal.classList.add('open');
    postList.classList.add('open');
    setTimeout(function() {
        var check = postList.classList.contains('open')
        if(check) {
            closePostDetails.style.display = 'none';
            closePost.style.display = 'block';
            closePost.addEventListener('click', function() {
                postDetail.classList.remove('open');

            })
        }
    },2000)
}

function hidePostList() {
    modal.classList.remove('open');
    postList.classList.remove('open');
    postDetail.classList.remove('open')
}

for (const postListOpenBtn of postListOpenBtns) {
    postListOpenBtn.addEventListener('click', showPostList);
}

postList.addEventListener('click', function(e) {
    e.stopPropagation();
})


//show and hide event details

const eventDetailOpenBtns = document.querySelectorAll('.js-event-open-btn');
const closeEventDetails = document.querySelector('.js-close-event-details');


function showEventDetails() {
    modal.classList.add('open');
    eventDetail.classList.add('open');

    var check = eventList.classList.contains('open')
        if(!check) {
            closeEvent.style.display = 'none';
            closeEventDetails.style.display = 'block';
        }
}

function hideEventDetails() {
    modal.classList.remove('open');
    eventDetail.classList.remove('open');
    eventList.classList.remove('open');
}

for (const eventOpenBtn of eventDetailOpenBtns) {
    eventOpenBtn.addEventListener('click', showEventDetails);
}
closeEventDetails.addEventListener('click',hideEventDetails);
eventDetail.addEventListener('click', function(e) {
    e.stopPropagation();
})
modal.addEventListener('click', hideEventDetails);



//show and hide event list

const eventListOpenBtn = document.querySelector('.js-read-event-list');
const closeEventList = document.querySelector('.js-close-event-list');
const closeEvent = document.querySelector('.js-close-event-1')
function showEventList() {
    modal.classList.add('open');
    eventList.classList.add('open');
    setTimeout(function() {
        var check = eventList.classList.contains('open')
        if(check) {
            closeEventDetails.style.display = 'none';
            closeEvent.style.display = 'block';
            closeEvent.addEventListener('click', function() {
                eventDetail.classList.remove('open');

            })
        }
    },2000)
}

function hideEventList() {
    modal.classList.remove('open');
    eventList.classList.remove('open');
    eventDetail.classList.remove('open');
}
closeEventList.addEventListener('click', hideEventList);
eventListOpenBtn.addEventListener('click', showEventList);

eventList.addEventListener('click', function(e) {
    e.stopPropagation();
})


//show hide form login

const closeLogin = document.querySelector('.js-close-login');
const loginFormBtns = document.querySelectorAll('.js-login');


//show  login form

function showLoginForm() {
    modal.classList.add('open');
    loginForm.classList.add('open');
}


// hide  login form
function hideLoginForm() {
    modal.classList.remove('open');
    loginForm.classList.remove('open');
    registerForm.style.display = 'none';
    loginFormf.style.display ='flex';
    loginTilte.style.display = 'block';
    registerTilte.style.display = 'none';
    noteRegister.style.display = 'flex'
}



//assign 'click' event to open login form 
for (const loginFormBtn of loginFormBtns) {
    loginFormBtn.addEventListener('click', showLoginForm);
}

modal.addEventListener('click', hideLoginForm);

closeLogin.addEventListener('click', hideLoginForm);

loginForm.addEventListener('click', function(e) {
    e.stopPropagation();
})


// open register form
var loginFormf = document.querySelector('#js-login-f');
var loginTilte = document.querySelector('.js-login-title');
var registerTilte = document.querySelector('.js-register-title');
var registerForm = document.querySelector('#js-register-f');
var returnBtn = document.querySelector('#return-login-btn');
var openRegisterBtn = document.querySelector('#js-register-link');
var noteRegister = document.querySelector('#js-note-register');
// open register form
function openRegisterForm() {
    loginTilte.style.display = 'none';
    registerTilte.style.display = 'block'
    loginFormf.style.display = 'none';
    registerForm.style.display = 'flex'
    returnBtn.style.display = 'block'
    noteRegister.style.display = 'none';
}

function returnLoginForm() {
    registerForm.style.display = 'none';
    loginFormf.style.display ='flex';
    loginTilte.style.display = 'block';
    registerTilte.style.display = 'none';
    noteRegister.style.display = 'block';
    returnBtn.style.display = 'none';
}


openRegisterBtn.addEventListener('click', openRegisterForm);


returnBtn.addEventListener('click', returnLoginForm );

// show and hide post request form

const postRequestForm = document.querySelector('#js-post-request');
const closePostRequest = document.querySelector('.js-close-post-request');
const openPostRequestBtns = document.querySelectorAll('.js-open-post-request-btn');

function showPostRequest() {
    modal.classList.add('open');
    postRequestForm.classList.add('open');
}

function hidePostRequest() {
    modal.classList.remove('open');
    postRequestForm.classList.remove('open');
}

for(const openPostRequestBtn of openPostRequestBtns){
    openPostRequestBtn.addEventListener('click',showPostRequest);
}
modal.addEventListener('click',hidePostRequest);
closePostRequest.addEventListener('click',hidePostRequest);
postRequestForm.addEventListener('click', function(e) {
    e.stopPropagation();
})



//show registered event

const registeredEvent = document.querySelector('.js-registered-event');
const openRegisteredBtn = document.querySelector('.js-open-registred-event');
const displayRegistered = document.querySelector('.js-adjust-text-loc');
openRegisteredBtn.addEventListener('click', function() {
    registeredEvent.style.display = 'flex'
    displayRegistered.style.justifyContend = 'flex-start'

})