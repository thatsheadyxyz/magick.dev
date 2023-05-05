const randomCardBtn = document.querySelector('#randomCardBtn')
const randomCardEl = document.querySelector('#randomCardEl')
const tarotCardImg = document.querySelector('#tarotCardImg')
const cardDescription = document.querySelector('#cardDescription')
const threeCardSpreadBtn = document.querySelector('#threeCardSpreadBtn')

const majorArcana = [
    { name: "The Fool", imagePath: "/public/RWS_Tarot_00_Fool.jpg", keywords: "innocence, spontaneity, adventure, risk-taking, naivety, new beginnings" }, 
    { name: "The Magician", imagePath: "/public/RWS_Tarot_01_Magician.jpg", keywords: "manifestation, power, skillfulness, creativity, transformation, self-confidence" },
    { name: "The High Priestess", imagePath: "/public/RWS_Tarot_02_High_Priestess.jpg", keywords: "intuition, mystery, secrets, wisdom, femininity, inner knowledge" },
    { name: "The Empress", imagePath: "/public/RWS_Tarot_03_Empress.jpg", keywords: "fertility, abundance, creativity, nurturing, sensuality, maternal love" },
    { name: "The Emperor", imagePath: "/public/RWS_Tarot_04_Emperor.jpg", keywords: "authority, control, order, leadership, structure, discipline" },
    { name: "The Hierophant", imagePath: "/public/RWS_Tarot_05_Hierophant.jpg", keywords: "tradition, religion, spirituality, ceremony, guidance, conformity" },
    { name: "The Lovers", imagePath: "/public/RWS_Tarot_06_Lovers.jpg", keywords: "love, relationships, attraction, harmony, choice, union" },
    { name: "The Chariot", imagePath: "/public/RWS_Tarot_07_Chariot.jpg", keywords: "determination, willpower, ambition, control, success, progress" },
    { name: "Strength", imagePath: "/public/RWS_Tarot_08_Strength.jpg", keywords: "couage, inner strength, pateince, compassion, fortitude, taming of the beast (animal instincts)" },
    { name: "The Hermit", imagePath: "/public/RWS_Tarot_09_Hermit.jpg", keywords: "solitude, introspection, wisdom, guidance, enlightenment, inner search" },
    { name: "Wheel of Fortune", imagePath: "/public/RWS_Tarot_10_Wheel_of_Fortune.jpg", keywords: "change, cycles, destiny, fortune, tuning point, opportunity" },
    { name: "Justice", imagePath: "/public/RWS_Tarot_11_Justice.jpg", keywords: "balance, fairness, justice, truth, accountability, legal matters" },
    { name: "The Hanged Man", imagePath: "/public/RWS_Tarot_12_Hanged_Man.jpg", keywords: "surrender, release, suspension, letting go, sacrifice, new perspective" },
    { name: "Death", imagePath: "/public/RWS_Tarot_13_Death.jpg", keywords: "transformation, change, endings, new beginnings, rebirth, impermanence" },
    { name: "Temperance", imagePath: "/public/RWS_Tarot_14_Temperance.jpg", keywords: "moderation, balance, harmony, healing, self-control, patience" },
    { name: "The Devil", imagePath: "/public/RWS_Tarot_15_Devil.jpg", keywords: "tempation, materialism, bondage, addiction, fear, ignorance" },
    { name: "The Tower", imagePath: "/public/RWS_Tarot_16_Tower.jpg", keywords: "sudden change, destruction, upheaval, revelation, chaos, awakening" },
    { name: "The Star", imagePath: "/public/RWS_Tarot_17_Star.jpg", keywords: "hope, inspiration, guidance, serenity, optimism, healing" },
    { name: "The Moon", imagePath: "/public/RWS_Tarot_18_Moon.jpg", keywords: "illusion, mystery, subconscious, intuition, deception, night" },
    { name: "The Sun", imagePath: "/public/RWS_Tarot_19_Sun.jpg", keywords: "joy, vitality, enlightenment, success, optimism, radiance" },
    { name: "Judgement", imagePath: "/public/RWS_Tarot_20_Judgement.jpg", keywords: "awakening, renewal, reckoning, redemption, transformation, judgement" },
    { name: "The World", imagePath: "/public/RWS_Tarot_21_World.jpg", keywords: "completion, integration, fulfillment, wholeness, success, end of a cycle" }
]

function getRandomCard() {
    const randomCard = majorArcana[Math.floor(Math.random() * majorArcana.length)]
    console.log(randomCard.name)
    randomCardEl.innerText  = randomCard.name
    tarotCardImg.src = randomCard.imagePath
    tarotCardImg.style.display = "initial"
    cardDescription.innerText = randomCard.keywords
    // threeCardSpreadBtn.style.display = "initial"
}

function getThreeCardSpread() {
    console.log("Past, Present, Future")
    // const pastCard = majorArcana[Math.floor(Math.random() * majorArcana.length)]
    // console.log(pastCard.name)
}