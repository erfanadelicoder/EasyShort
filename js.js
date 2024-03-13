function ShortClicked() {
    let Inurl =  document.getElementById("longurl");
    let ShortUrlLa =  document.getElementById("ShortUrl");
    const LongUrl = Inurl.value;
    const api = "WkRipHtl57irchEFxnDzPvM0Ka9oQpN1XNSuIAn3kjYqX"
    const url = "https://shrtlnk.dev/api/v2/link"
    fetch(url, {
    method: "POST",
    body: JSON.stringify({
        "url": LongUrl,
    }),
    headers: {"api-key": api}
    })
    .then((response) => response.json())
    .then((json) =>   ShortUrlLa.innerHTML = json.shrtlnk);
    ShortUrlLa.style.color = "red"
  
}