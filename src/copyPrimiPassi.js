import React from 'react'

export function SoftwareCopy() {
    return(
        <p className="info">
{/* TODO: remove this horribly long string, move it to a file */}
{`
Il firmware, cioè il programma che fa funzionare la stampante, è installato nella memoria della scheda madre, contenuta nella base.
Può essere aggiornato molto facilmente tramite la scheda microSD fornita con la stampante.
Un primo consiglio che possiamo darvi è di aggiornare immediatamente la stampante con il più recente firmware, da scaricare qui: 
conterrà diversi bugfix e vi eviterà problemi di compatibilità con le guide su questa Wiki e con le ultime versioni di cura (il nostro slicer preferito)
Per prima cosa, effettuare un backup della scheda (passo facoltativo, se non vi importa
niente del contenuto, che, di default, dovrebbe essere il file di config per il firmware
e i file stl e gcode della vite e del bullone).

Una volta copiato il contenuto della scheda in una cartella di vostra preferenza:
`}
            <ol>
                <li>Scaricate il firmware</li>
                <li>Scompattatelo in una cartella che terrete come backup per sicurezza</li>
                <li>Copiatene il contenuto nella microSD</li>
                <li>Rimuovete il dispositivo USB</li>
                <li>Inserite la scheda nella stampante (attenzione: la scheda va inserita capovolta rispetto a come si inserisce nell'adattatore!)</li>
                <li>Spegnere (se accesa) e accendere la stampante</li>
            </ol>
            {`
Una volta accesa, comparirà il logo della Flying Bear e poi una barra di progresso, che indicherà lo stato dell'installazione del firmware. 
(inserire qui schermata dell'upgrade del firmware)
Completata questa operazione, vi si presenterà il menu. Siete un passo più vicini alla vostra prima stampa con la Flying Bear Ghost 4S! 
Non fatevi tentare dallo smanettare con il menu:
            `}
            <ol>
                <li>Estraete la microSD dalla stampante ed inseritela nel computer</li>
                <li>Copiate sul computer il file robin_nano35_cfg.cur</li>
                <li>Apritelo e salvatelo come robin_nano35_cfg.txt (shortcut: F2 per Ubuntu, Enter per macOS)</li>
            </ol>
            {`
Questo file contiente tutti i principali parametri della stampante
Cambiare un valore in questo file permette di modificare quel valore sul firmware installato
Vediamo cosa cambiare nel file robin_nano35_cfg.txt che avete creato prima tramite il vostro editor preferito
            `}        
        </p>
    )
}

function LanguageCopy() {
    return(
        <p className="info">
            <span>#Language setting</span>
            <span> cfg_language_type 3 # Language selection 2 - English 3 - Russian</span>
        </p>
    )
}

function SicurezzaCopy() {
    return(
        <p className="info">
            <span># Threshold settings</span>
            <span>> HEATER_0_MINTEMP 5 # It is recommended to set exactly 5 (not -5) to avoid overheating if the sensor breaks</span>
            <span>> HEATER_1_MINTEMP 5 # It is recommended to set exactly 5 (not -5 ) in order to avoid overheating in the event of a sensor breakdown</span>
            <span>> THERMAL_PROTECTION_PERIOD 30 # Polling time for thermal protection, seconds </span>
            <span>> THERMAL_PROTECTION_HYSTERESIS 10 # Change in degrees C </span>
            <span>> WATCH_TEMP_PERIOD 30 # Polling time for thermal protection, seconds </span>
            <span>> WATCH_TEMP_CEMCINC </span>
            <span>> THERMAL_PROTECTION_BED_PERIOD 30 # Poll time for thermal protection, seconds </span>
            <span>> THERMAL_PROTECTION_BED_HYSTERESIS 3 # Change in degrees C </span>
            <span>> WATCH_BED_TEMP_PERIOD 60 # Poll time for thermal protection, seconds </span>
            <span>> WATCH_BED_TEMP_INCREASE 2 # Change </span>
        </p>
    )
}

function WifiCopy() {
    return(
        <p className="info">
            <span>> CFG_WIFI_AP_NAME # name of WiFi, write before # </span>
            <span>> CFG_WIFI_KEY_CODE # password WiFi, write before # </span>
        </p>
    )
}


export const copyPrimiPassi = [
    {
        title:"Cambio Lingua",
        content:<LanguageCopy/>,
    },
    {
        title:"Sicurezza",
        content:<SicurezzaCopy/>,
    },
    {
        title:"WiFi",
        content:<WifiCopy/>,
    },
]

//module.exports =  [copyPrimiPassi, SoftwareCopy]
