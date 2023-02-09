function loadText() {
  let text = new URLSearchParams(window.location.search).get("text")

  if (text) {
    let bubble = document.getElementById("text")
    bubble.innerText = decodeURI(text)
  }
}