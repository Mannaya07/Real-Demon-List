/* =====================================================================
   COME COMPILARE UN FILE PLAYERS  (copia questo file e rinominalo)
   =====================================================================

   1) NOME DEL FILE = nome ESATTO del livello (maiuscole e spazi inclusi)
        livello "Cognition"  ->  players/Cognition.js
        livello "2 1 1"      ->  players/2 1 1.js

   2) Una sola chiamata registerPlayers. Il primo valore e' il nome del livello.

   3) Un giocatore per riga, tra parentesi quadre, separati da VIRGOLA:

        ["NomeGiocatore", "https://www.youtube.com/watch?v=XXXXXXXXXXX"]
            -> cliccando il nome si apre la pagina con il video della sua
               completion (incorporato nel sito + pulsante "Watch on YouTube")

        ["NomeGiocatore"]
            -> nessun video: la pagina mostra "Video not available yet"

   4) L'ultima riga NON vuole la virgola finale.
   ===================================================================== 

registerPlayers("Cognition", [

  ["Nickuzs", "https://youtu.be/XXXXXXXXXXX"],

  ["Altro Player", "https://www.youtube.com/watch?v=YYYYYYYYYYY"],

  ["Terzo Player"]

]);
*/