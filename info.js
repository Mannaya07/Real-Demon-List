/* =====================================================================
   INFO.JS  -  qui scrivi TU il testo della pagina "Info" e il link Discord.
   ===================================================================== */

/* Link del server Discord dove si inviano i video delle completion
   (bottone "Submit record"). Sostituisci con il tuo invito. */
const DISCORD_URL = "https://discord.gg/HjyEdx5P4E";

/* Testo della pagina Info: uno per lingua.
   Si scrive in HTML semplice dentro i backtick ` `:
     <h2>Titolo</h2>   <p>Paragrafo</p>   <ul><li>Elenco</li></ul>   <b>grassetto</b>
   Per andare a capo basta scrivere un nuovo <p>. */
const INFO_CONTENT = {

  en: `
    <h2>About this list</h2>


    <h2>How to submit a record</h2>
    <p>Click <b>Submit record</b> and send your completion video in our Discord server.</p>

    <h2>Credits</h2>
    <p>Created by: Patore109 / Davide Franzella</p>
    <p>Many thanks to xPower55HD for the help with the GMD2 files.</p>
    <p>Not all the level have downloadanle GMD2 startpos and the level GMD2, for now only some, but we are working on it, and i'm sure it will not take more than a week for the levels GMD2s, for startpos will take longer</p>
  `,

  it: `
    <h2>Informazioni su questa lista</h2>

    <h2>Come inviare un record</h2>
    <p>Clicca su <b>Invia record</b> e manda il video della tua completion nel nostro server Discord.</p>

    <h2>Crediti</h2>
    <p>Creato da: Patore109 / Davide Franzella</p>
    <p>Grazie mille a xPower55HD per l'aiuto con i file GMD2.</p>
    <p>Non tutti i livelli hanno le startpos con il file GMD2 scaricabile ed i livelli GM2 anchessi scaricabili, per ora solo alcuni, ma noi ci stiamo lavorando, e sono sicuro che non ci vorrà più di una settimana per i GMD2 dei livelli, per le Startpos ci vorrà di più.</p>
  `
};
