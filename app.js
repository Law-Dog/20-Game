var cpoint = 0

var ppoint = 0





    
function asknam() {
    var nam = prompt("Welcome to 20! What is your name?")
    console.log(nam)
    rules(nam)
    return nam
}




function rules(nam) {
    alert(`Hello, ${nam}! The game 20 is simple. It is a compition to see who gets closer to 20, either you or me, the computer.\n\nI will first draw cards, but will stop at 16. After my turn is done, you will draw as many cards as needed to get as close to 20 as possible, with the max you can have at 20.\n\nPay close attention to the numbers on screen so you don't go over 20!`);
}

function random() {
    Math.floor(Math.random() * 10) + 1
    return Math.floor(Math.random() * 10) + 1
}

function computer(ppoint, pcount, ccount, cpoint, nam, r) {
    alert(`My turn!`);

    var ccount = 0

    do {

        var r = random()

        ccount = (ccount + r);

        alert(`New card drawn is ${r}\n\nMy total is now ${ccount}`);
        
            
    } while (ccount < 16);

    if (ccount > 20) {
        ppoint++
        console.log(`${nam} (card=${pcount}) = ${ppoint} points \ncom (card=${ccount}) = ${cpoint} points\n\n(Computer went over 20)`);
        alert(`Aw man! I went over the limit, with ${ccount} points. Therefore you win, earning a point.\nScores:\n\nMe(bot): ${cpoint} points\n\nYou(${nam}): ${ppoint} points`)
    } else if (ccount <= 20) {
        alert(`I stopped at ${ccount}\n\n${nam}'s turn now!`);
        player()
    }
    return ccount, r
}

function player(ccount, pcount, ) {
    var pcount = 0
    
    do {
        pcount = (pcount + r);

        var left = (20 - pcount)

        do {
            var again = prompt(`New card drawn is ${r}\n\nYour total is now ${pcount}\n\nWould you like another card? You have ${left} left to get to 20. Remember, I got ${ccount}. Type 'yes' or 'no' without capitals`)
        } while ((again != "yes") && (again != "no"));

    } while ((again == "yes") && (pcount < 20));

    alert(`You stopped at ${pcount}`);

    return left
}

asknam()

computer()





















function dodod() {
    var name = prompt(`Welcome to 20! What is your name?`);

    var rules = (`Hello, ${name}! The game 20 is simple. It is a compition to see who gets closer to 20, either you or me, the computer.\n\nI will first draw cards, but will stop at 16. After my turn is done, you will draw as many cards as needed to get as close to 20 as possible, with the max you can have at 20.\n\nPay close attention to the numbers on screen so you don't go over 20!`);

    alert(`${rules}`)

    var cpoint = 0

    var ppoint = 0

    do {

        

        var ccount = 0

        var pcount = 0

        alert(`My turn!`);

        do {

            var cnew = (Math.floor(Math.random() * 10) + 1);

            ccount = (ccount + cnew);

            alert(`New card drawn is ${cnew}\n\nMy total is now ${ccount}`);
            
        } while (ccount < 16);

        if (ccount > 20) {
            ppoint++
            console.log(`${name} (card=${pcount}) = ${ppoint} points \ncom (card=${ccount}) = ${cpoint} points\n\n(Computer went over 20)`);
            alert(`Aw man! I went over the limit, with ${ccount} points. Therefore you win, earning a point.\nScores:\n\nMe(bot): ${cpoint} points\n\nYou(${name}): ${ppoint} points`)
        } else if (ccount <= 20) {

            alert(`I stopped at ${ccount}\n\n${name}'s turn now!`);

            do {
                var pnew = (Math.floor(Math.random() * 10) + 1);

                pcount = (pcount + pnew);

                var left = (20 - pcount)

                do {
                    var again = prompt(`New card drawn is ${pnew}\n\nYour total is now ${pcount}\n\nWould you like another card? You have ${left} left to get to 20. Remember, I got ${ccount}. Type 'yes' or 'no' without capitals`)
                } while ((again != "yes") && (again != "no"));

            } while ((again == "yes") && (pcount < 20));

            alert(`You stopped at ${pcount}`);

            if (pcount == ccount) {
                cpoint++
                ppoint++
                console.log(`${name} (card=${pcount}) = ${ppoint} points \ncom (card=${ccount}) = ${cpoint} points\n\n(Computer tied with ${name})`);
                alert(`Tie! We both got ${pcount} and I think we both deserve a point ;)\nScores:\n\nMe(bot): ${cpoint} points\n\nYou(${name}): ${ppoint} points)`);
            } else if ((pcount > ccount) && (pcount <= 20)) {
                ppoint++
                console.log(`${name} (card=${pcount}) = ${ppoint} points \ncom (card=${ccount}) = ${cpoint} points\n\n(${name} beat computer, stay under 21)`);
                alert(`Congradulations! You beat me and you now have earned 1 point.\nScores:\n\nMe(bot): ${cpoint} points\n\nYou(${name}): ${ppoint} points`)
            } else if ((pcount < ccount) && (pcount <= 20)) {
                cpoint++
                console.log(`${name} (card=${pcount}) = ${ppoint} points \ncom (card=${ccount}) = ${cpoint} points\n\n(computer beat ${name}, stay under 21)`);
                alert(`Yay! I beat ${name} and I have earned 1 point.\nScores:\n\nMe(bot): ${cpoint} points\n\nYou(${name}): ${ppoint} points`)
            } else if (pcount > 20) {
                cpoint++
                console.log(`${name} (card=${pcount}) = ${ppoint} points \ncom (card=${ccount}) = ${cpoint} points\n\n(${name} went over 20)`);
                alert(`Yay (for me)! You, ${name}, went over the limit, with ${pcount} points. Therefore I win, earning a point.\nScores:\n\nMe(bot): ${cpoint} points\n\nYou(${name}): ${ppoint} points`)
            } else {
                alert(`Sorry, ${name}! The programmer didn't forsee this option. Refresh to restart.`)
            }

        } else {
            alert(`Sorry, ${name}! The programmer didn't forsee this option. Refresh to restart.`)
        }
        var restart = prompt(`Would you like to play again, ${name}? Type either yes or no without capitals. Anything else will exit program, after revealing final score.`)

        if ((restart == "yes") && (read != "never")) {
            var read = prompt(`Would you like to read the rules again, ${name}? Type 'yes', 'no', or 'never' without capitals.`)
            if ((read == "yes") && (read != "never")) {
                alert(`${rules}`)
            }
        } else if ((read == "never") || (read == "no")) {
            console.log(read)
        } else if (restart == "no") {
            console.log(restart)
        }else {
            alert(`Sorry, ${name}! The programmer didn't forsee this option. Refresh to restart.`)
        }

    } while (restart == "yes");

    if (cpoint == ppoint) {
        alert(`Scores:\n\nMe(bot): ${cpoint} points\n\nYou(${name}): ${ppoint} points\n\nYay!! We tied! See you next time!!`)
    } else if (cpoint < ppoint) {
        alert(`Scores:\n\nMe(bot): ${cpoint} points\n\nYou(${name}): ${ppoint} points\n\Congradulations!! ${name} wins! See you next time!!`)
    } else if (cpoint > ppoint) {
        alert(`Scores:\n\nMe(bot): ${cpoint} points\n\nYou(${name}): ${ppoint} points\n\nYAYYY!! I win! See you next time!!`)
    } else {
        alert(`Sorry, ${name}! The programmer didn't forsee this option. Refresh to restart.`)
    }
}