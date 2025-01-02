"use strict";(self.webpackChunkreti_logiche_esercitazioni=self.webpackChunkreti_logiche_esercitazioni||[]).push([[7609],{6980:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"esercitazioni/Verilog/Documentazione/Simulazione e GTKWave","title":"Simulazione e GTKWave","description":"","source":"@site/docs/esercitazioni/Verilog/Documentazione/5. Simulazione e GTKWave.mdx","sourceDirName":"esercitazioni/Verilog/Documentazione","slug":"/esercitazioni/Verilog/Documentazione/Simulazione e GTKWave","permalink":"/reti-logiche-esercitazioni/esercitazioni/Verilog/Documentazione/Simulazione e GTKWave","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"description":""},"sidebar":"esercitazioniSidebar","previous":{"title":"Sintassi per reti sincronizzate","permalink":"/reti-logiche-esercitazioni/esercitazioni/Verilog/Documentazione/Sintassi per reti sincronizzate"},"next":{"title":"Simulatore processore sEP8","permalink":"/reti-logiche-esercitazioni/esercitazioni/Verilog/Simulatore processore sEP8"}}');var r=n(4848),a=n(8453),l=n(6025);const s={description:""},t="Simulazione ed uso di GTKWave",c={},d=[{value:"Compilazione e simulazione",id:"compilazione-e-simulazione",level:2},{value:"Waveform e debugging",id:"waveform-e-debugging",level:2},{value:"Zoom, ordinamento, formattazione",id:"zoom-ordinamento-formattazione",level:3},{value:"Non specificati e alta impedenza",id:"non-specificati-e-alta-impedenza",level:3},{value:"Pulsante <em>Reload</em>",id:"pulsante-reload",level:3},{value:"Linea di errore",id:"linea-di-errore",level:3}];function m(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"simulazione-ed-uso-di-gtkwave",children:"Simulazione ed uso di GTKWave"})}),"\n",(0,r.jsxs)(i.p,{children:["Documentiamo qui il software da utilizzare per il testing e debugging delle reti prodotte, ossia ",(0,r.jsx)(i.code,{children:"iverilog"}),", ",(0,r.jsx)(i.code,{children:"vvp"})," e ",(0,r.jsx)(i.code,{children:"GTKWave"}),".\r\nA differenza dell'ambiente per Assembler, questi sono facilmente reperibili per ogni piattaforma, o compilabili dal sorgente.\r\nIn sede d'esame si utilizzano da un normale terminale Windows, senza utilizzare macchine virtuali.\r\n",(0,r.jsx)(i.a,{href:"https://bleyer.org/icarus/",children:"Qui"})," si trovano installer per Windows."]}),"\n",(0,r.jsxs)(i.p,{children:["Negli esercizi di esame vengono forniti i file necessari a compilare simulazioni per testare la propria rete.\r\nQuesti sono tipicamente i file ",(0,r.jsx)(i.code,{children:"testbench.v"})," e ",(0,r.jsx)(i.code,{children:"reti_standard.v"}),".\r\nIl primo contiene una serie di test che verificano il corretto comportamento della rete prodotta rispetto alle specifiche richieste.\r\nIl secondo contiene invece delle reti combinatorie che si potranno assumere note e sintetizzabili, da usare per la sintesi di rete combinatoria."]}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsxs)(i.p,{children:["Non tutti gli esercizi hanno una parte di sintesi di rete combinatoria, e quindi il file ",(0,r.jsx)(i.code,{children:"reti_standard.v"}),".\r\nInoltre, ciascun esercizio ha il ",(0,r.jsx)(i.em,{children:"proprio"})," file ",(0,r.jsx)(i.code,{children:"reti_standard.v"}),", che sar\xe0 diverso da quelli allegati ad altri esercizi."]})}),"\n",(0,r.jsx)(i.h2,{id:"compilazione-e-simulazione",children:"Compilazione e simulazione"}),"\n",(0,r.jsxs)(i.p,{children:["Sia ",(0,r.jsx)(i.code,{children:"descrizione.v"})," il sorgente contenente la descrizione della rete sincronizzata da noi prodotto, e che vogliamo testare."]}),"\n",(0,r.jsxs)(i.p,{children:["Si compila la simulazione con il comando da terminale ",(0,r.jsx)(i.code,{children:"iverilog"}),".\r\nIl comando richiede come argomenti i file da compilare assieme.\r\nDi default, il binario prodotto si chiamer\xe0 ",(0,r.jsx)(i.code,{children:"a.out"}),", mentre con l'opzione ",(0,r.jsx)(i.code,{children:"-o nome"})," \xe8 possibile impostarne uno a scelta.\r\nPer esempio:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"iverilog -o desc testbench.v reti_standard.v descrizione.v\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Il file prodotto non \xe8 eseguibile da solo, ma va lanciato usando ",(0,r.jsx)(i.code,{children:"vvp"}),".\r\nPer esempio:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"vvp desc\n"})}),"\n",(0,r.jsx)(i.p,{children:"Questo lancer\xe0 la simulazione.\r\nIn un test di successo, vedremo le seguenti stampe:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"VCD info: dumpfile waveform.vcd opened for output.\r\n$finish called at [un numero]\n"})}),"\n",(0,r.jsxs)(i.p,{children:["La prima stampa ci informa che il file ",(0,r.jsx)(i.code,{children:"waveform.vcd"})," sta venendo popolato, la seconda ci informa del tempo di simulazione al quale questa \xe8 terminata con il comando ",(0,r.jsx)(i.code,{children:"$finish"}),".\r\nAlcune versioni di ",(0,r.jsx)(i.code,{children:"vvp"})," non stampano quest'ultima di default - non \xe8 un problema."]}),"\n",(0,r.jsxs)(i.p,{children:["Le testbench degli esercizi d'esame stampano a video quando incontrano un errore: un test fallito avr\xe0 quindi delle righe in pi\xf9 in mezzo a quelle presentate qui.\r\nPer esempio, ",(0,r.jsx)(i.code,{children:"Timeout - waiting for signal failed"})," indica che la simulazione si era bloccata in attesa di un evento che non \xe8 mai accaduto, per esempio un segnale di handshake."]}),"\n",(0,r.jsxs)(i.admonition,{type:"tip",children:[(0,r.jsxs)(i.mdxAdmonitionTitle,{children:["Le testbench non sono mai ",(0,r.jsx)(i.em,{children:"complete"})]}),(0,r.jsxs)(i.p,{children:["Se la simulazione non stampa errori, questo indica solo che la testbench  ",(0,r.jsx)(i.em,{children:"non ne ha trovato alcuno"}),".\r\nNon implica, invece, che ",(0,r.jsx)(i.em,{children:"non ci siano"})," errori.\r\nQuesto sia perch\xe9 \xe8 impossibile scrivere una testbench davvero esaustiva di per tutti i possibili percorsi di esecuzione, ma anche perch\xe9 \xe8 facile scrivere Verilog che ",(0,r.jsx)(i.em,{children:"sembra"})," funzionare bene ma che in realt\xe0 usa costrutti che rendono la rete irrealizzabile in hardware."]}),(0,r.jsx)(i.p,{children:"\xc8 sempre responsabilit\xe0 dello studente assicurarsi che non ci siano errori.\r\nIn fase di autocorrezione, anche se la testbench non trova nessun errore, \xe8 sempre possibile (anzi, dovuto) assicurarsi della correttezza del compito e fare correzioni se necessarie."})]}),"\n",(0,r.jsx)(i.h2,{id:"waveform-e-debugging",children:"Waveform e debugging"}),"\n",(0,r.jsxs)(i.p,{children:["La simulazione genera un file ",(0,r.jsx)(i.code,{children:"waveform.vcd"})," contenente l'evoluzione di tutti i fili e registri nella simulazione.\r\nQuesto file \xe8 prodotto grazie alle seguenti righe, incluse in tutte le testbench:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-verilog",children:'initial begin\r\n    $dumpfile("waveform.vcd");\r\n    $dumpvars;\r\n    ...\n'})}),"\n",(0,r.jsx)(i.p,{children:"Con questo file possiamo studiare l'evoluzione della rete e trovare eventuali errori.\r\nPer analizzarlo, usiamo GTKWave, richiamabile da terminale con"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"gtkwave waveform.vcd\n"})}),"\n",(0,r.jsx)(i.p,{children:"Si dovrebbe aprire quindi una finestra dal quale possiamo analizzare l'evoluzione della rete."}),"\n",(0,r.jsx)("img",{src:(0,l.Ay)("img/verilog/gtkwave/gtkwave.png"),alt:""}),"\n",(0,r.jsxs)(i.p,{children:["Il programma mostra sulla sinistra le varie componenti nella simulazione e, se li selezioniamo, i fili e registri che li compongono.\r\nCi interesser\xe0 in particolare ",(0,r.jsx)(i.code,{children:"dut"})," (",(0,r.jsx)(i.em,{children:"device under test"}),"), che sar\xe0 proprio il componente da noi realizzato.\r\nSelezionando poi i vari ",(0,r.jsx)(i.code,{children:"wire"})," e ",(0,r.jsx)(i.code,{children:"reg"}),' che compaiono sotto, e cliccando "Append", compariranno nella schermata a destra, dove possiamo vedere l\'evoluzione nel tempo.']}),"\n",(0,r.jsx)(i.h3,{id:"zoom-ordinamento-formattazione",children:"Zoom, ordinamento, formattazione"}),"\n",(0,r.jsx)(i.p,{children:"Lo zoom della timeline a destra \xe8 regolabile, usando la rotellina del mouse o le lenti d'ingrandimento in alto a sinistra."}),"\n",(0,r.jsx)(i.p,{children:"Cliccando in punti specifici della timeline spostiamo il cursore, cio\xe8 la linea rosso verticale.\r\nPossiamo quindi leggere nella colonna centrale il valore di ciascun segnale all'istante dove si trova il cursore."}),"\n",(0,r.jsxs)(i.p,{children:["I segnali nella schermata principale sono ordinabili, per esempio \xe8 in genere utile spostare ",(0,r.jsx)(i.code,{children:"clock"})," e ",(0,r.jsx)(i.code,{children:"STAR"})," in alto.\r\nDi default, sono formattati come segnali binari, composti se da un bit, o in notazione esadecimale, se da pi\xf9 bit.\r\nCliccando col destro su un segnale \xe8 possibile cambiare la formattazione in diversi modi, incluso decimale."]}),"\n",(0,r.jsx)(i.h3,{id:"non-specificati-e-alta-impedenza",children:"Non specificati e alta impedenza"}),"\n",(0,r.jsxs)(i.p,{children:["Prestare particolare attenzione ai valori non specificati (",(0,r.jsx)(i.code,{children:"X"}),") e alta impedenza (",(0,r.jsx)(i.code,{children:"Z"}),"), che sono spesso sintomi di errori, per esempio per un filo di input non collegato."]}),"\n",(0,r.jsx)(i.p,{children:"Nella waveform, i valori non specificati sono evidenziati con un'area rossa, mentre i fili in alta impedenza sono evidenziati con una linea orizzontale gialla posta a met\xe0 altezza tra 0 e 1."}),"\n",(0,r.jsxs)(i.h3,{id:"pulsante-reload",children:["Pulsante ",(0,r.jsx)(i.em,{children:"Reload"})]}),"\n",(0,r.jsxs)(i.p,{children:["Il comando ",(0,r.jsx)(i.code,{children:"gtkwave waveform.vcd"})," blocca il terminale da cui viene lanciato, rendendo impossibile mandare altri comandi finch\xe9 non viene chiuso.\r\n\xc8 quindi frequente vedere studenti chiudere e riaprire GTKWave ogni volta che c'\xe8 bisogno di risimulare la rete."]}),"\n",(0,r.jsx)(i.p,{children:"Questo approaccio \xe8 per\xf2 inefficiente, dato che si dovr\xe0 ogni volta riselezionare i fili, riformattarne i valori, ritrovare il punto d'errore che si stava studiando."}),"\n",(0,r.jsxs)(i.p,{children:["Il pulsante ",(0,r.jsx)(i.em,{children:"Reload"}),", indicato con l'icona \ud83d\udd01, permette di ricaricare il file ",(0,r.jsx)(i.code,{children:"waveform.vcd"})," senza chiudere e riaprire il programma, e mantentendo tutte le selezioni fatte."]}),"\n",(0,r.jsx)(i.p,{children:"\xc8 per questo una buona idea utilizzare una delle seguenti strategie:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["usare due terminali, uno dedicato a ",(0,r.jsx)(i.code,{children:"iverilog"})," e ",(0,r.jsx)(i.code,{children:"vvp"}),", l'altro a ",(0,r.jsx)(i.code,{children:"gtkwave"}),";"]}),"\n",(0,r.jsxs)(i.li,{children:["lanciare il comando ",(0,r.jsx)(i.code,{children:"gtkwave"})," in background. Nell'ambiente Windows all'esame, questo si pu\xf2 fare aggiungendo un ",(0,r.jsx)(i.code,{children:"&"})," in fondo: ",(0,r.jsx)(i.code,{children:"gtkwave waveform.vcd &"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"In entrambi i casi, otteniamo di poter rieseguire la simulazione mentre GTKWave \xe8 aperto, e poter quindi sfruttare il pulsante Reload."}),"\n",(0,r.jsxs)(i.admonition,{type:"warning",children:[(0,r.jsxs)(i.mdxAdmonitionTitle,{children:["Se l'operatore ",(0,r.jsx)(i.code,{children:"&"})," non funziona"]}),(0,r.jsxs)(i.p,{children:["In alcune installazioni di Powershell l'operatore ",(0,r.jsx)(i.code,{children:"&"})," non funziona.\r\nL'operatore \xe8 un semplice alias per ",(0,r.jsx)(i.code,{children:"Start-Job"}),", e si pu\xf2 ovviare al problema usando questo comando per esteso:"]}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"Start-Job { gtkwave waveform.vcd }\n"})}),(0,r.jsxs)(i.p,{children:["L'operatore \xe8 documentato ",(0,r.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_operators?view=powershell-7.4#background-operator-",children:"qui"}),"."]})]}),"\n",(0,r.jsx)(i.h3,{id:"linea-di-errore",children:"Linea di errore"}),"\n",(0,r.jsxs)(i.p,{children:["Nelle testbench d'esame \xe8 (di solito) presente anche una ",(0,r.jsx)(i.em,{children:"linea di errore"})," che permette di identificare subito i punti in cui la testbench ha trovato un errore.\r\nQuesto \xe8 particolarmente utile per scorrere lunghe simulazioni."]}),"\n",(0,r.jsxs)(i.p,{children:["Queste linee sono realizzate nella testbench con una variabile ",(0,r.jsx)(i.code,{children:"reg error"})," inizializzata a 0 ed un blocco ",(0,r.jsx)(i.code,{children:"always"})," che risponde ad ogni variazione di ",(0,r.jsx)(i.code,{children:"error"})," per rimetterla a 0 dopo una breve attesa.\r\nQuesta attesa breve ma non nulla fa s\xec che basti assegnare 1 ad ",(0,r.jsx)(i.code,{children:"error"})," per ottenere un'impulso sulla linea, facilmente visibile."]}),"\n",(0,r.jsxs)(i.p,{children:["In GTKWave, possiamo trovare il segnale ",(0,r.jsx)(i.code,{children:"error"})," tra i ",(0,r.jsx)(i.code,{children:"wire"})," e ",(0,r.jsx)(i.code,{children:"reg"})," del modulo ",(0,r.jsx)(i.code,{children:"testbench"})," (",(0,r.jsx)(i.em,{children:"non"})," in ",(0,r.jsx)(i.code,{children:"dut"}),").\r\nMostrando questo segnale, possiamo riconoscere i punti di errore come impulsi, come nell'esempio seguente."]}),"\n",(0,r.jsx)("img",{src:(0,l.Ay)("img/verilog/3/error-line-perimetro.png")})]})}function u(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>s});var o=n(6540);const r={},a=o.createContext(r);function l(e){const i=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(a.Provider,{value:i},e.children)}}}]);