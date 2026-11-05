import './styles/tokens.css'
import './styles/main.css'

const artwork = {
  hero: `
    <path d="M92 174h216l-13 13H105z" fill="#806b58"/>
    <path d="M117 102h55v70h-55z" fill="#c98f64"/>
    <path d="M126 84h37v18h-37z" fill="#e7d8c6"/>
    <path d="M130 75h29v9h-29z" fill="#8a6148"/>
    <path d="M213 124h48v48h-48z" fill="#d2a17a"/>
    <path d="M205 124h64v9h-64z" fill="#6c8a68"/>
    <path d="M221 101c-4-17 8-26 20-30-2 15-6 23-20 30z" fill="#769276"/>
    <path d="M238 106c1-16 13-22 26-23-5 13-12 20-26 23z" fill="#51765e"/>
    <path d="M91 202h218l-12 10H103z" fill="#d0bfa8"/>
    <path d="M102 212h194v9H102z" fill="#ad957d"/>
  `,
  mug: `
    <path d="M154 90h91v88c0 15-12 27-27 27h-37c-15 0-27-12-27-27z" fill="#eadfce"/>
    <path d="M245 108h14c17 0 25 11 25 27s-8 27-25 27h-14v-14h14c7 0 11-4 11-13s-4-13-11-13h-14z" fill="#d4c3ae"/>
    <path d="M154 111h91" stroke="#b09b80" stroke-width="4"/>
    <circle cx="181" cy="132" r="3" fill="#a88b6d"/>
    <circle cx="214" cy="151" r="3" fill="#a88b6d"/>
    <circle cx="185" cy="170" r="2" fill="#a88b6d"/>
  `,
  tote: `
    <path d="M125 115h150l-10 91H135z" fill="#dfcfb6"/>
    <path d="M159 122V96c0-22 13-37 41-37s41 15 41 37v26h-15V96c0-14-7-22-26-22s-26 8-26 22v26z" fill="#526f59"/>
    <path d="M154 142h92" stroke="#c3ae91" stroke-width="4"/>
    <path d="M178 166h43" stroke="#c3ae91" stroke-width="4"/>
  `,
  lamp: `
    <path d="M146 115h108l-18 54h-72z" fill="#d7bb91"/>
    <path d="M160 116c8-13 24-19 40-19s32 6 40 19z" fill="#eee2cf"/>
    <path d="M192 169h16v31h-16z" fill="#748872"/>
    <path d="M168 200h64v11h-64z" rx="5" fill="#607761"/>
    <path d="M174 116h52" stroke="#c9aa7f" stroke-width="3"/>
  `,
  planter: `
    <path d="M147 133h106l-12 69h-82z" fill="#bd7652"/>
    <path d="M140 126h120v15H140z" fill="#d28c65"/>
    <path d="M198 127V84" stroke="#527758" stroke-width="6" stroke-linecap="round"/>
    <path d="M199 101c-30 2-38-15-39-34 25 1 39 12 39 34z" fill="#648763"/>
    <path d="M199 111c25-3 36-19 35-39-22 4-36 17-35 39z" fill="#7e9a73"/>
    <path d="M198 93c-6-19 2-32 19-43 7 19 2 34-19 43z" fill="#526f59"/>
  `,
  throw: `
    <path d="M121 98h160v103H121z" rx="8" fill="#6d846b"/>
    <path d="M121 123h160M121 149h160M121 175h160" stroke="#879a7f" stroke-width="6"/>
    <path d="M140 98v103m25-103v103m25-103v103m25-103v103m25-103v103" stroke="#587359" stroke-width="3"/>
    <path d="M133 201v15m18-15v15m18-15v15m18-15v15m18-15v15m18-15v15m18-15v15m18-15v15" stroke="#c9b99e" stroke-width="3" stroke-linecap="round"/>
  `,
  notebook: `
    <path d="M132 84h89v126h-89z" fill="#d3a47c"/>
    <path d="M183 99h88v111h-88z" fill="#eee5d7"/>
    <path d="M145 113h53m-53 18h53m-53 18h38" stroke="#b78561" stroke-width="3"/>
    <path d="M198 129h53m-53 18h53m-53 18h38" stroke="#c9bba8" stroke-width="3"/>
    <path d="M146 84v126m48-111v111" stroke="#a87552" stroke-width="3"/>
  `,
}

function createIllustration(name) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260">
      <rect width="400" height="260" rx="18" fill="#e9eee7"/>
      <circle cx="325" cy="54" r="34" fill="#dce6da"/>
      <path d="M0 224c76-27 133-21 201-2 82 24 133 12 199-12v50H0z" fill="#dce3d8"/>
      ${artwork[name]}
    </svg>
  `
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

document.querySelectorAll('img[data-art]').forEach((image) => {
  image.src = createIllustration(image.dataset.art)
})
