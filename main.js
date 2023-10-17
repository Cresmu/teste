const apiUrlCommander = "https://api.scryfall.com/cards/random?q=is%3Acommander"


async function fetchCardInfo() {
  for(let i = 0; i < 5; i++){
    let img = document.getElementsByClassName("commander__image")[i]
    let nome = document.getElementsByClassName("nome_commander")[i]
    let ledh = document.getElementsByClassName("edh")[i]
    let lscry = document.getElementsByClassName("scry")[i]

      try {
      const response = await fetch(apiUrlCommander)
      if (response.status === 200) {
        const data = await response.json()
        const cardName = data.name
        const imageUrl = data.image_uris.normal
        const nome_t = cardName.replace(/[, ]+/g, "-").toLowerCase()

        img.src = imageUrl
        ledh.href = "https://edhrec.com/commanders/"+nome_t
        lscry.href = "https://scryfall.com/search?q="+nome_t

      } else {
        console.error("Erro Req: " + response.status)
      }
    } catch (error) {
      console.error("Erro Inf: " + error)
    }
  }

}