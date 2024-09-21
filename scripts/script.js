let email_part1 = "reg.zin"
let email_part2 = "gmail.com"
Array.from(document.querySelectorAll('.link-email')).forEach( function(el) {
    let email = email_part1 + "@" + email_part2;
    el.href = "mailto:" + email;
    el.innerHTML = email;
});
