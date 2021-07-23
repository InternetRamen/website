// let options = {
//     root: document.querySelector('#scrollArea'),
//     rootMargin: '0px',
//     threshold: 1.0
// }
//
// let observer = new IntersectionObserver(callback, options);
//
function money_round(num) {
    return Math.ceil(num * 1000) / 1000;
}
window.onload = function() {
    let priceElement = document.getElementById("price");
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=banano&vs_currencies=usd")
        .then(res => res.json())
        .then(data => {
            priceElement.innerHTML = ("$" + money_round(data.banano.usd))
        })

}

//
// fetch("https://raw.githubusercontent.com/InternetRamen/Internetramen/master/README.md")
//     .then(response => response.text())
//     .then(body => {
//         var converter = new showdown.Converter(),
//             text      = body,
//             html      = converter.makeHtml(text);
//         document.getElementById("main").innerHTML = html
//
//     })
