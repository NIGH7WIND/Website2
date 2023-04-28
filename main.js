const searchInput = document.querySelector("#search-input")

searchInput.addEventListener("keydown", function(event) {
    if (event.code == "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&sxsrf=APwXEdcBzWveYnC8wnKUSwlthiI4Db3hag%3A1682437969382&ei=UfdHZJn5Fs-aseMP6OeE0Ag&ved=0ahUKEwjZ5ZXsscX-AhVPTWwGHegzAYoQ4dUDCBA&uact=5&oq=" + input + "&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQigUQQzINCC4QigUQsQMQ1AIQQzINCC4QigUQsQMQ1AIQQzINCC4QigUQxwEQ0QMQQzINCC4QigUQsQMQ1AIQQzIICAAQgAQQsQMyCAguEIAEELEDMgsIABCABBCxAxCDATIICC4QgAQQsQMyDQguEIoFELEDENQCEEM6CggAEEcQ1gQQsAM6CggAEIoFELADEEM6BAgjECc6EwguEIoFELEDEIMBEMcBENEDEEM6DQgAEIoFELEDEIMBEEM6BQgAEIAEOgoILhCKBRCxAxBDOgcIABCABBAKOgcIIxDqAhAnOg8IABCKBRDqAhC0AhBDGAE6CgguEIoFENQCEEM6EQguEIMBEMcBELEDENEDEIAEOgoIABCKBRCxAxBDOggIABCABBDJAzoICAAQigUQkgM6CwguEIAEELEDEIMBOgsILhCABBCxAxDUAkoECEEYAFDJD1jtH2DhIWgEcAF4AIABgAGIAaAIkgEDNC42mAEAoAEBsAEUyAEKwAEB2gEGCAEQARgB&sclient=gws-wiz-serp"
}