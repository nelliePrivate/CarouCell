/* JavaScript source code for project: "Experiment: image Carousel"
 * Author: Nellie Tobey
 * purpose: Create and document an image carousel for others to use 
 * Discover how to only use 3 images at a time in the HTML load even when there are a multitude
 * For blogpost: <>
 * Date: 9-19-2020
 */

//  DOM ELEMENTS: 
let LEFT_IMG;
let MAIN_IMG;
let RIGHT_IMG;
// buttons: 
let LEFT_BTN;
let PLAY_BTN;
let PAUSE_BTN;
let RIGHT_BTN;
// for initial test:
let ALL_ELEMENTS = []
// Interval for the play function:
let PLAY_CAROUSEL;
// hold the current index for carousel image assignment
let CURRENT = 0
//set up a bool to stop users from skipping images while carousel is in play mode.
let PLAYING = false;

function set_DOM() {
    LEFT_IMG = document.getElementById('left_img')
    MAIN_IMG = document.getElementById('main_img')
    RIGHT_IMG = document.getElementById('right_img')
    LEFT_BTN = document.getElementById('left_btn')
    PLAY_BTN = document.getElementById('play_btn')
    PAUSE_BTN = document.getElementById('pause_btn')
    RIGHT_BTN = document.getElementById('right_btn')
    //testing list:
    ALL_ELEMENTS.push(LEFT_IMG)
    ALL_ELEMENTS.push(MAIN_IMG)
    ALL_ELEMENTS.push(RIGHT_IMG)
    ALL_ELEMENTS.push(LEFT_BTN)
    ALL_ELEMENTS.push(PLAY_BTN)
    ALL_ELEMENTS.push(PAUSE_BTN)
    ALL_ELEMENTS.push(RIGHT_BTN)

}

function testDOM() {
    let max = ALL_ELEMENTS.length
    //console.log(max)
    for (let i = 0; i < max; i++) {
       
        var element = ALL_ELEMENTS[i]
        element.style.border = "2px solid red"
       
    };
}

function test_listener() {
    let newborder = "3px groove blue"
    this.style.border = newborder
    
}

function BTN_listener() {
    LEFT_BTN.addEventListener('click', left)
    PLAY_BTN.addEventListener('click', play)
    PAUSE_BTN.addEventListener('click', pause)
    RIGHT_BTN.addEventListener('click', right)
}

function getpath(n) {
    let path = "images/"
    let name = "faces" + n + '.jpg'
    return path + name

}

function play() {
    PLAYING = true
    var n = CURRENT
    PLAY_CAROUSEL = setInterval(function () { n = assignIMGs(n) }, 2000);
    
}

function pause() {
    PLAYING = false
    clearInterval(PLAY_CAROUSEL)
}

function right() {
    if (!PLAYING) {
        max = 20
        min = 0
        CURRENT = CURRENT + 1

        if (CURRENT > max) {
            CURRENT = 0
        }
        if (CURRENT < min) {
            CURRENT = max
        }

        next = CURRENT + 1
        prev = CURRENT - 1

        if (next > max) {
            next = 0
        }
        if (prev < 0) {
            prev = max
        }

        path1 = getpath(prev)
        LEFT_IMG.src = path1
        path2 = getpath(CURRENT)
        MAIN_IMG.src = path2
        path3 = getpath(next)
        RIGHT_IMG.src = path3
    }

}

function left() {
    if (!PLAYING) {
        max = 20
        min = 0
        CURRENT = CURRENT - 1

        if (CURRENT > max) {
            CURRENT = 0
        }
        if (CURRENT < min) {
            CURRENT = max
        }

        next = CURRENT + 1
        prev = CURRENT - 1

        if (next > max) {
            next = 0
        }
        if (prev < 0) {
            prev = max
        }

        path1 = getpath(prev)
        LEFT_IMG.src = path1
        path2 = getpath(CURRENT)
        MAIN_IMG.src = path2
        path3 = getpath(next)
        RIGHT_IMG.src = path3
    }


}
function assignIMGs(n) {
    //The number of images I have for the carousel are 0-20:
    max = 20
    min = 0
    count = 0;
    
    for (i = n; i <= max; i++) {
        if (count >= 3) {
            break
        }
        path = getpath(i)
        
        if (count == 0) {
           
            LEFT_IMG.src =  path
        }
        if (count == 1) {
            
            MAIN_IMG.src = path
        }
        if (count == 2) {
            
            RIGHT_IMG.src = path
        }
        count++
    }
    if (n + 1 > max || n == max) {
        path = getpath(0)
        MAIN_IMG.src = path
    }
    if (n + 2 > max || n == max) {
        path = getpath(1)
        RIGHT_IMG.src = path
    }

    //console.log(`current n = ${n}`)
    if (n < max) {
        CURRENT = n + 1
        return n + 1
    }
    else {
        CURRENT = 0
        return 0
    }
    

}



window.addEventListener('load', (event) => {
    set_DOM()
   // testDOM()
    BTN_listener()
}
    )
