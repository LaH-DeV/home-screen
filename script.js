(function getBookFromDocument(){
    const coverElement = document.querySelector('.cover');
    const firstPageElement = document.querySelector('#page-blank');
    const lastPageElement = document.querySelector('.last-page');
    const names = [
        'my Wizard',
        'my King',
        'my Lord',
        'freak',
        'peasant',
        'strong man',
        'hunk',
        'goofball'
    ];
    const greetings = [
        'Hello, ',
        'Hi ',
        'Good morning ',
        'Hey ',
        'Hey. ‘Sup? ',
        '‘Sup? '
    ];
    const destinations = [
        'Choose your destination',
        'Select your destination',
        'Go on an adventure!',
        'Choose your weapon',
        'Pick your side',
        'Go on journey',
        "What's your target?",
        "What's your goal?",
        "What's your point?!",
    ]
    const logos = [
        'wizard-face',
        'troll',
        'brutal-helm',
        'monk-face',
        'dwarf-face',
        'overlord-helm',
        'dragon-head',
        'orc-head',
        'cultist',
        'goblin-head'
    ]
    const randomOutput = (req) => {
        switch(req){
            case 'logo':
            return logos[Math.floor(Math.random() * logos.length)];
            case 'name':
            return names[Math.floor(Math.random() * names.length)];
            case 'greeting':
            return greetings[Math.floor(Math.random() * greetings.length)];
            case 'destination':
            return destinations[Math.floor(Math.random() * destinations.length)];
        }
    }

    const today = (date = new Date()) => {
        let day;
        if(date.getDate() < 10){
            day = '0'+date.getDate();
        } else {day = date.getDate();}
        let month = date.getMonth()+1;
        if(month < 10) {
            month = '0'+month;
        }
        let year = date.getFullYear();
        return `Today is ${day} / ${month} / ${year}`
    }

    firstPageElement.innerHTML = `<div class="content-blank"><h1 class="greet-heading">${randomOutput('greeting')}<span class="name-span">${randomOutput('name')}</span></h1>
    <img src="./images/${randomOutput('logo')}.svg" alt="logo" id="blank-logo"</div>`;
    lastPageElement.innerHTML = `<div class="links-container">
    <h2 id="choose-heading"><span class="choose-span">${randomOutput('destination')}</span></h2>
    <a class="yt" href="https://www.youtube.com/"><i class="fab fa-youtube"></i>YouTube</a>
    <a class="gg" href="https://www.google.com/"><i class="fab fa-google"></i>Google</a>
    <a class="gm" href="https://mail.google.com/mail/"><i class="fas fa-envelope"></i>Gmail</a>
    <a class="tr" href="https://translate.google.pl/"><i class="fas fa-language"></i>Translate</a>
    <a class="fb" href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i>Facebook</a>
    <a class="nt" href="https://www.netflix.com/"><i class="fas fa-video"></i>Netflix</a>
    </div>
    <div class="content-date"><p class="date">${today()}</p></div>`;


    $(window).on("load", function () {
        
        setTimeout(()=>{
            document.querySelector('.book').classList.remove('small');
        }, 3000)
        setTimeout(()=>{
            coverElement.classList.add('open');
            document.querySelector('.book').classList.add('open');
        }, 3600)
    })
})();
