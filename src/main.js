import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    mastercard: ["#EB001B", "#F79E18"],
    visa: ["#172274", "#fcb70a"],
    default: ["gray", "gray"],
  }
  ccBgColor01.setAttribute("fill", colors[type][1])
  ccBgColor02.setAttribute("fill", colors[type][0])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}
globalThis.setCardType = setCardType
