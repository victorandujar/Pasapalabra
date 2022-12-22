const lettersDisplay = document.querySelectorAll('.letter')
const welcomeMessage = document.getElementById('welcome-display')
const userName = document.querySelector('.name')
const nameContinueButton = document.querySelector('.button-continuar')
const gameRules = document.getElementById('rules-display')
const playButton = document.querySelector('.button-play')
const rankingButton = document.querySelector('.button-ranking')
const rankingDisplay = document.getElementById('ranking-display')
const playersRanking = document.getElementById('ranking-list')
const goBackButton = document.getElementById('goback-button')
const questionsDisplay = document.getElementById('questions-display')
const showQuestions = document.querySelector('.questions')
const answerContainer = document.querySelector('.answer')
const acceptButton = document.querySelector('.button-accept')
const pasapalabraButton = document.querySelector('.button-pasapalabra')
const exitButton = document.querySelector('.button-exit')
const timerDisplay = document.querySelector('.time-play')
const pointsDisplay = document.querySelector('.letters-correct')
const gameOverDisplay = document.getElementById('gameover-display')
const playAgainButton = document.querySelector('.button-ng')

userName.value = ''
showQuestions.textContent = ''
answerContainer.value = ''
timerDisplay.textContent = 170
pointsDisplay.textContent = 0

let playerName
let questions = []
let position = 0
let counter
let letterSaver
let timer

let questions1 = [
  { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", },
  { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", },
  { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé", },
  { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", },
  { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", },
  { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", },
  { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", },
  { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento", },
  { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano", },
  { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba", },
  { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria", },
  { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo", },
  { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas", },
  { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia", },
  { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.", },
  { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien", },
  { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft", },
  { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche", },
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático", },
  { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984", },
  { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914", },
  { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa", },
  { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso", },
  { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética", },
  { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos", },
  { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional", },
];

let questions2 = [
  { letter: "a", answer: "antimateria", status: 0, question: "CON LA A. Materia compuesta por antipartículas.", },
  { letter: "b", answer: "big bang", status: 0, question: "CON LA B. Según algunas teorías astronómicas, gran explosión de una masa compacta de energía y materia que dio origen al universo.", },
  { letter: "c", answer: "constelacion", status: 0, question: "CON LA C. Conjunto de estrellas que, mediante trazos imaginarios, forman un dibujo que evoca una figura determinada.", },
  { letter: "d", answer: "diametro", status: 0, question: "CON LA D. Anchura de un objeto con forma circular, cilíndrica o esférica.", },
  { letter: "e", answer: "entropia", status: 0, question: "CON LA E. Magnitud termodinámica que indica el grado de desorden molecular de un sistema", },
  { letter: "f", answer: "fusion", status: 0, question: "CON LA F. Paso de un cuerpo del estado sólido al líquido por la acción del calor.", },
  { letter: "g", answer: "gravedad", status: 0, question: "CON LA G. Fenómeno natural por el cual los objetos con masa son atraídos entre sí.", },
  { letter: "h", answer: "hemisferio", status: 0, question: "CON LA H. Mitad de una esfera dividida por un plano que pasa por su centro.", },
  { letter: "i", answer: "infinio", status: 0, question: "CON LA I. Que no tiene ni puede tener fin ni límite.", },
  { letter: "j", answer: "jupiter", status: 0, question: "CON LA J. El planeta más grande del sistema solar y el quinto en orden de lejanía al Sol.", },
  { letter: "k", answer: "kelvin", status: 0, question: "CON LA K. Unidad de temperatura del Sistema Internacional, de símbolo K, que equivale 1/273,16 de la temperatura termodinámica del punto triple del agua, en la cual el sólido, el líquido y el gas están en equilibrio.", },
  { letter: "l", answer: "luna", status: 0, question: "CON LA L. Cuerpo celeste que gira alrededor de un planeta.", },
  { letter: "m", answer: "meteorito", status: 0, question: "CON LA M. Fragmento de un cuerpo procedente del espacio exterior que entra en la atmósfera a gran velocidad y cae sobre la Tierra.", },
  { letter: "n", answer: "nebulosa", status: 0, question: "CON LA N. Masa de materia cósmica celeste, difusa y luminosa, que tiene aspecto de nube.", },
  { letter: "ñ", answer: "pequeño", status: 0, question: "CONTIENE LA Ñ. Que tiene un tamaño menor de lo normal.", },
  { letter: "o", answer: "orbita", status: 0, question: "CON LA O. Curva que describe un cuerpo alrededor de otro en el espacio, especialmente un planeta, cometa, satélite etc., como consecuencia de la acción de la fuerza de gravedad.", },
  { letter: "p", answer: "planeta", status: 0, question: "CON LA P. Cuerpo celeste sólido que gira alrededor de una estrella y que no emite luz propia.", },
  { letter: "q", answer: "quark", status: 0, question: "CON LA Q. Son ciertamente unas de las partículas más pequeñas del universo. Son elementales, indivisibles y no se pueden romper en piezas menores.", },
  { letter: "r", answer: "rotacion", status: 0, question: "CON LA R. Giro o vuelta de una cosa alrededor de su propio eje." },
  { letter: "s", answer: "sol", status: 0, question: "CON LA S. Estrella con luz propia alrededor de la cual gira la Tierra.", },
  { letter: "t", answer: "telescopio", status: 0, question: "CON LA T. Instrumento que consta de lentes o espejos curvos y que permite ver agrandada una imagen de un objeto lejano, en especial los cuerpos celestes.", },
  { letter: "u", answer: "urano", status: 0, question: "CON LA U. Es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo. Se llama así en honor a una divinidad griega.", },
  { letter: "v", answer: "via lactea", status: 0, question: "CON LA V. Es una galaxia en forma de espiral que contiene aproximadamente 200 billones de estrellas del Universo y en donde se sitúa el Sistema Solar.", },
  { letter: "w", answer: "newton", status: 0, question: "CONTIENE LA W. Fue físico, filósofo, teólogo, inventor, alquimista y matemático. Es autor de los “Philosophiæ naturalis principia mathematica”.", },
  { letter: "x", answer: "oxigeno", status: 0, question: "CONTIENE LA X. Gas incoloro e inodoro que se encuentra en el aire, en el agua, en los seres vivos y en la mayor parte de los compuestos orgánicos e inorgánicos; es esencial en la respiración y en la combustión.", },
  { letter: "y", answer: "yacimiento", status: 0, question: "CON LA Y. Lugar en el que se encuentran restos arqueológicos.", },
  { letter: "z", answer: "zenit", status: 0, question: "CON LA Z. Punto del hemisferio celeste superior al horizonte que corresponde a un lugar de la Tierra.", },
];

let questions3 = [
  { letter: "a", answer: "altruismo", status: 0, question: "CON LA A. Tendencia a procurar el bien de las personas de manera desinteresada, incluso a costa del interés propio.", },
  { letter: "b", answer: "bondad", status: 0, question: "CON LA B. Inclinación a hacer el bien, comportamiento virtuoso.", },
  { letter: "c", answer: "compasion", status: 0, question: "CON LA C. Sentimiento de tristeza que produce el ver padecer a alguien y que impulsa a aliviar su dolor o sufrimiento, a remediarlo o a evitarlo.", },
  { letter: "d", answer: "deshumanizacion", status: 0, question: "CON LA D. Acción de deshumanizar.", },
  { letter: "e", answer: "educar", status: 0, question: "CON LA E. Proporcionar conocimientos o habilidades a una persona para darle una determinada formación.", },
  { letter: "f", answer: "filosofia", status: 0, question: "CON LA F. Conjunto de reflexiones sobre la esencia, las propiedades, las causas y los efectos de las cosas naturales, especialmente sobre el hombre y el universo.", },
  { letter: "g", answer: "aglomeracion", status: 0, question: "CONTIENE LA G. Reunión o amontonamiento grande y desordenado de algo, especialmente de gente reunida en un lugar.", },
  { letter: "h", answer: "humano", status: 0, question: "CON LA H. Que es propio de la naturaleza imperfecta del hombre.", },
  { letter: "i", answer: "intolerante", status: 0, question: "CON LA I. Que no tolera opiniones o actuaciones, o que actúa con intolerancia.", },
  { letter: "j", answer: "justicia", status: 0, question: "CON LA J. Principio moral que inclina a obrar y juzgar respetando la verdad y dando a cada uno lo que le corresponde.", },
  { letter: "k", answer: "karma", status: 0, question: "CON LA K. En la religión budista y en el hinduismo, creencia según la cual toda acción tiene una fuerza dinámica que se expresa e influye en las sucesivas existencias del individuo.", },
  { letter: "l", answer: "locura", status: 0, question: "CON LA L. Trastorno o perturbación patológicas de las facultades mentales.", },
  { letter: "m", answer: "multinacional", status: 0, question: "CON LA M. De varias naciones.", },
  { letter: "n", answer: "ermitaño", status: 0, question: "CONTIENE LA N. Conjunto de características permanentes e invariables que determinan a un ser o una cosa y sin las cuales no sería lo que es.", },
  { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Persona que vive sola en un lugar deshabitado, especialmente para dedicar su vida a la oración y al sacrificio.", },
  { letter: "o", answer: "optimista", status: 0, question: "CON LA O. Que tiende a ver y juzgar las cosas en su aspecto más positivo o más favorable.", },
  { letter: "p", answer: "programas", status: 0, question: "CON LA P. Dar las instrucciones necesarias a una máquina o aparato para que realice su función de manera automática.", },
  { letter: "q", answer: "quietud", status: 0, question: "CON LA Q. Reposo o falta de movimiento.", },
  { letter: "r", answer: "reir", status: 0, question: "CON LA R. Manifestar alegría, placer o felicidad mediante ciertos movimientos de la boca, los ojos y otras partes de la cara, acompañados de la emisión de una serie de sonidos explosivos e inarticulados." },
  { letter: "s", answer: "salvaje", status: 0, question: "CON LA S. Que crece en el campo o la selva de manera natural, sin intervención humana.", },
  { letter: "t", answer: "tabu", status: 0, question: "CON LA T. Prohibición de hacer o decir algo determinado, impuesta por ciertos respetos o prejuicios de carácter social o psicológico.", },
  { letter: "u", answer: "utopia", status: 0, question: "CON LA U. Plan o sistema ideal de gobierno en el que se concibe una sociedad perfecta y justa, donde todo discurre sin conflictos y en armonía.", },
  { letter: "v", answer: "virtual", status: 0, question: "CON LA V. Que solamente existe de forma aparente y no es real.", },
  { letter: "w", answer: "web", status: 0, question: "CON LA W. Conjunto de información que se encuentra en una dirección determinada de internet.", },
  { letter: "x", answer: "oximoron", status: 0, question: "CONTIENE LA X. Figura retórica de pensamiento que consiste en complementar una palabra con otra que tiene un significado contradictorio u opuesto.", },
  { letter: "y", answer: "yoga", status: 0, question: "CON LA Y. Conjunto de técnicas de concentración derivadas de esta doctrina filosófica que se practican para conseguir un mayor control físico y mental.", },
  { letter: "z", answer: "zombi", status: 0, question: "CON LA Z. Muerto que ha sido revivido mediante un rito mágico y que carece de voluntad propia.", },
];

const getUserName = () => {
  if (userName.value === '') {
    userName.placeholder = 'Introduce un nombre'
    return
  }
  playerName = userName.value
  welcomeMessage.className = "welcome hidden"
  gameRules.className = "rules"

  return playerName
}

const chooseQuestions = () => {
  let randomNumber = Math.ceil(Math.random() * 3)
  if (randomNumber === 1) questions = questions1
  if (randomNumber === 2) questions = questions2
  if (randomNumber === 3) questions = questions3

  return questions
}

const showRankingButton = () => {
  rankingButton.onclick = () => {
    gameRules.className = "rules hidden"
    rankingDisplay.className = "ranking-list"
    goBackButton.className = "button-gb"
  }
}

const goBack = () => {
  goBackButton.onclick = () => {
    rankingDisplay.className = "ranking-list hidden"
    goBackButton.className = "button-gb hidden"
    gameRules.className = "rules"
  }
}

const playGameButton = () => {
  playButton.onclick = () => {
    gameRules.className = "rules hidden"
    questionsDisplay.className = "questions-section"
    counter = 0
    chooseQuestions()
    getQuestion()
    gameTimer()
  }
}

const exitGameButton = () => {
  questionsDisplay.className = "questions-section hidden"
  gameOverDisplay.className = "gameover"
  clearInterval(timer)
}


const playAgainGameButton = () => {
  playAgainButton.onclick = () => {
    gameOverDisplay.className = "gameover hidden"
    gameRules.className = "rules"
    rankingDisplay.className = "ranking-list hidden"
    timerDisplay.textContent = 170
    pointsDisplay.textContent = 0
    answerContainer.value = ''
    for (let i in lettersDisplay) {
      lettersDisplay[i].className = "circle letter not-answered"
    }
    questions.forEach(question => question.status = 0)
  }
}

const getQuestion = () => {
  const findQuestion = questions.find((question) => {
    if (question.status === 0) {
      question.letter = letterSaver
      return question.question
    }
  })
  showQuestions.textContent = findQuestion.question
}

const getQuestionsAndAnswers = () => {
  position = questions.findIndex(letter => letter.letter === letterSaver)
  const positionLastStatus0 = questions.findLastIndex(question => question.status === 0)
  if (answerContainer.value.toLowerCase() === questions[position].answer) {
    questions[position].status = 1
    pointsDisplay.textContent++
    counter++
    lettersDisplay[position].className = "circle letter correct-answer"
  }
  if (answerContainer.value.toLowerCase() !== questions[position].answer) {
    questions[position].status = -1
    counter++
    lettersDisplay[position].className = "circle letter wrong-answer"
  }
  if (counter === questions.length) {
    ranking()
    questionsDisplay.className = "questions-section hidden"
    gameOverDisplay.className = "gameover"
    rankingDisplay.className = "ranking-list"
    clearInterval(timer)
    return
  }
  if (positionLastStatus0 === position) position = -1
  const findQuestion = questions.find((question, index) => {
    if (question.status === 0 && position < index) {
      letterSaver = question.letter
      return question.question
    }
  })
  showQuestions.textContent = findQuestion.question
}

const acceptAnswerButton = () => {
  getQuestionsAndAnswers()
  answerContainer.value = ''
}


const pasapalabraButtonTurn = () => {
  position = questions.findIndex(letter => letter.letter === letterSaver)
  const positionLastStatus0 = questions.findLastIndex(question => question.status === 0)
  if (positionLastStatus0 === position) position = -1
  const findQuestion = questions.find((question, index) => {
    if (question.status === 0 && position < index) {
      letterSaver = question.letter
      return question.question
    }
  })
  answerContainer.value = ''
  showQuestions.textContent = findQuestion.question
}


const gameTimer = () => {
  let setTimer = 170
  timer = setInterval(() => {
    timerDisplay.textContent = setTimer
    if (setTimer === 0) {
      clearInterval(timer)
      questionsDisplay.className = "questions-section hidden"
      gameOverDisplay.className = "gameover"
    }
    setTimer--
  }, 1000)
  return timer
}

const ranking = () => {
  let rankingList
  const players = [
    { name: 'Jordi', letters: 27 },
    { name: 'Bernat', letters: 26 },
    { name: 'Arnau', letters: 26 },
    { name: 'Carles', letters: 24 },
    { name: 'Anna', letters: 23 },
    { name: 'Montse', letters: 23 },
    { name: 'Xavi', letters: 20 },
    { name: 'Clara', letters: 18 }
  ]

  if (counter === questions.length) {
    playersRanking.textContent = ''
    const userRanking = { name: `${userName.value}`, letters: `${Number(pointsDisplay.textContent)}` }
    players.push(userRanking)
    players.sort((a, b) => {
      return b.letters - a.letters;
    })
  }

  const fragment = document.createDocumentFragment()
  for (let i in players) {
    rankingList = document.createElement('li')
    const rankingTable = `${players[i].name}: ${players[i].letters} letras.`
    rankingList.textContent = rankingTable
    fragment.appendChild(rankingList)
  }
 playersRanking.appendChild(fragment)
}

exitButton.onclick = () => {
  exitGameButton()
}

pasapalabraButton.onclick = () => {
  pasapalabraButtonTurn()
}

acceptButton.onclick = () => {
  acceptAnswerButton()
}

nameContinueButton.onclick = () => {
  getUserName()
}

answerContainer.addEventListener('keyup', (event) => {
  if (event.keyCode === 16) {
    pasapalabraButtonTurn()
  }
  if (event.keyCode === 13) {
    acceptAnswerButton()
  }
  if (event.keyCode === 27) {
    exitGameButton()
  }
})

userName.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    getUserName()
  }
})

const gamePasapalabra = () => {
  showRankingButton()
  goBack()
  ranking()
  playGameButton()
  playAgainGameButton()
}

gamePasapalabra()

