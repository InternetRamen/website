let words = {
    "value": [
        "happy",
        "sad",
        "good",
        "mad",
        "bad",
        "nice",
        "stuff",
        "thing",
        "very",
        "extremely",
        "fast",
        "slow",
        "long",
        "short",
        "amazing",
        "love",
        "funny",
        "heart",
        "soul",
        "a lot",
        "pretty",
        "fun",
        "smile",
        "based off",
        "flower"
    ],
    "pronouns": [
        "I", "me", "our", "we", "us", "ours", "you", "your", "yours", "my", "mine"
    ]
}
function check() {
    if (!document.querySelector("#atextarea")) return document.querySelector("#output").innerHTML = "Errored"
    if (!document.querySelector("#atextarea").value) return document.querySelector("#output").innerHTML = "PLEASSSEE enter something first"
    let noWords = words.value
    let txtArray = document.querySelector("#atextarea").value.split(" ")
    let final = ""
    for (let singleWord of noWords) {
        for (let txt of txtArray) {
            if (txt === singleWord) {
                final += `You have ${singleWord} in the story!\n`
            }
        }
    }
    if (txtArray.some(val => noWords.includes(val))) {
        final += "You didn't pass!"
    } else {
        final += `You passed! You have ${txtArray.length} words in your essay btw`
    }
    document.querySelector("#output").innerHTML = final
}