import React from 'react'

function VersionCopy() {
    return(
        <p className="info">
            <ol>
                <li>Dal menu principale della stampante tocca l'icona "Tool"</li>
                <li>Tocca l'icona "About"</li>
                <li>Troverai la versione del firmware indicata nella riga "Mainboard version"</li>
            </ol>
        </p>
    )
}

function UpdateCopy() {
    return(
        <p className="info">
            <ol>
                <li>Scarica il file compresso del firmware</li>
                <li>Estrai il file appena scaricato</li>
                <li>Collega la microSD della stampante al PC/Mac</li>
                <li><b>Fai un backup dei file contenuti sulla microSD della stampante</b></li>
                <li>Copia l'intero contenuto (file e cartelle) all'interno della microSD</li>
                <li>Opzionale: Se in passato hai effettuato delle modifiche al file di 
                    configurazione "robin_nano35_cfg.txt", ricorda di inserire le stesse 
                    nel nuovo file, con lo stesso nome, che troverai nella cartella del 
                    nuovo firmware;
                </li>
                <li>Spegni la stampante (se accesa)</li>
                <li>Inserisci la microSD nella stampante</li>
                <li>Riaccendi la stampante</li>
                <li>Attendi il caricamento del nuovo firmware</li>
                <li>Concluso l'aggiornamento sullo schermo della stampante visualizzerai il menu iniziale</li>
            </ol>
            <span>
                <b>
                    Attenzione: non spegnere per nessun motivo la stampante 
                    durante la procedura di aggiornamento.
                </b>
            </span>
        </p>
    )
}

function FirmwareVersionsCopy() {
    return(
        <p className="info">
            <ul>
                <li><a href="shorturl.at/lBFO4">Ghost 4s v3.3</a></li>
                <li><a href="shorturl.at/sFIQ1">Ghost 4s v3.1</a></li>
            </ul>
        </p>
    )
}

const copyFirmware = [
    {
        title:"Verifica della versione attualmente installata",  
        content:<VersionCopy/>,
    },
    {
        title:"Procedura di aggiornamento",
        content:<UpdateCopy/>,
    },
    {
        title:"Versioni Firmware disponibili",
        content:<FirmwareVersionsCopy/>,
    }
]

export default copyFirmware
