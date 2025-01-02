"use strict";(self.webpackChunkreti_logiche_esercitazioni=self.webpackChunkreti_logiche_esercitazioni||[]).push([[3287],{7735:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>t,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"esercitazioni/Assembler/Problemi comuni","title":"Problemi comuni","description":"","source":"@site/docs/esercitazioni/Assembler/10. Problemi comuni.mdx","sourceDirName":"esercitazioni/Assembler","slug":"/esercitazioni/Assembler/Problemi comuni","permalink":"/reti-logiche-esercitazioni/esercitazioni/Assembler/Problemi comuni","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":100,"frontMatter":{"sidebar_position":100,"description":""},"sidebar":"esercitazioniSidebar","previous":{"title":"Ambiente e script","permalink":"/reti-logiche-esercitazioni/esercitazioni/Assembler/Documentazione/Ambiente e script"},"next":{"title":"Verilog","permalink":"/reti-logiche-esercitazioni/category/verilog"}}');var a=o(4848),r=o(8453);o(6025);const s={sidebar_position:100,description:""},l="Problemi comuni",t={},c=[{value:"Setup dell&#39;ambiente",id:"setup-dellambiente",level:2},{value:"1. Ho trovato un ambiente assembler per Mac su Github, ma ho problemi ad usarlo",id:"1-ho-trovato-un-ambiente-assembler-per-mac-su-github-ma-ho-problemi-ad-usarlo",level:3},{value:"2. Ho trovato un ambiente basato su DOS, usato precedentemente all&#39;esame, ma ho problemi ad usarlo",id:"2-ho-trovato-un-ambiente-basato-su-dos-usato-precedentemente-allesame-ma-ho-problemi-ad-usarlo",level:3},{value:"3. Lanciando il file <code>assemble.code-workspace</code>, mi appere un messaggio del tipo <code>Unknown distro: Ubuntu</code>",id:"3-lanciando-il-file-assemblecode-workspace-mi-appere-un-messaggio-del-tipo-unknown-distro-ubuntu",level:3},{value:"4. Sto utilizzando una sistema Linux desktop, come uso l&#39;ambiente senza virtualizzazione?",id:"4-sto-utilizzando-una-sistema-linux-desktop-come-uso-lambiente-senza-virtualizzazione",level:3},{value:"Uso dell&#39;ambiente",id:"uso-dellambiente",level:2},{value:"5. Se premo <em>Run</em> su VS Code non viene lanciato il programma",id:"5-se-premo-run-su-vs-code-non-viene-lanciato-il-programma",level:3},{value:"6. Provando a lanciare <code>./assemble.ps1 programma.s</code> ricevo un errore del tipo <code>./assemble.ps1: line 1: syntax error near unexpected token</code>",id:"6-provando-a-lanciare-assembleps1-programmas-ricevo-un-errore-del-tipo-assembleps1-line-1-syntax-error-near-unexpected-token",level:3},{value:"7. Provando ad assemblare ricevo un warning del tipo <code>warning: creating DT_TEXTREL in a PIE</code>",id:"7-provando-ad-assemblare-ricevo-un-warning-del-tipo-warning-creating-dt_textrel-in-a-pie",level:3},{value:"8. Ho modificato il codice per correggere un errore, ma quando assemblo e eseguo il codice, continuo a vedere lo stesso errore.",id:"8-ho-modificato-il-codice-per-correggere-un-errore-ma-quando-assemblo-e-eseguo-il-codice-continuo-a-vedere-lo-stesso-errore",level:3}];function d(e){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"problemi-comuni",children:"Problemi comuni"})}),"\n",(0,a.jsx)(i.p,{children:"Questa sezione include problemi che \xe8 frequente incontrare."}),"\n",(0,a.jsxs)(i.p,{children:["Come regola generale, in sede d'esame rispondiamo a tutte le domande relative a problemi di questo tipo e aiutatiamo a proseguire - perch\xe9 sono relative all'ambiente d'esame e non ai concetti ",(0,a.jsx)(i.em,{children:"oggetto"})," d'esame."]}),"\n",(0,a.jsx)(i.p,{children:"Per altre domande, si pu\xf2 sempre contattare per email o Teams."}),"\n",(0,a.jsx)(i.h2,{id:"setup-dellambiente",children:"Setup dell'ambiente"}),"\n",(0,a.jsx)(i.h3,{id:"1-ho-trovato-un-ambiente-assembler-per-mac-su-github-ma-ho-problemi-ad-usarlo",children:"1. Ho trovato un ambiente assembler per Mac su Github, ma ho problemi ad usarlo"}),"\n",(0,a.jsx)(i.p,{children:"Non abbiamo fatto noi quell'ambiente, non sappiamo come funziona e non offriamo supporto su come usarlo."}),"\n",(0,a.jsx)(i.h3,{id:"2-ho-trovato-un-ambiente-basato-su-dos-usato-precedentemente-allesame-ma-ho-problemi-ad-usarlo",children:"2. Ho trovato un ambiente basato su DOS, usato precedentemente all'esame, ma ho problemi ad usarlo"}),"\n",(0,a.jsxs)(i.p,{children:["Ha probabilmente incontrato uno dei tanti motivi per cui l'ambiente basato su DOS \xe8 stato abbandonato.\r\nQuesti problemi sono al pi\xf9 ",(0,a.jsx)(i.em,{children:"aggirabili"}),", non ",(0,a.jsx)(i.em,{children:"risolvibili"}),"."]}),"\n",(0,a.jsxs)(i.h3,{id:"3-lanciando-il-file-assemblecode-workspace-mi-appere-un-messaggio-del-tipo-unknown-distro-ubuntu",children:["3. Lanciando il file ",(0,a.jsx)(i.code,{children:"assemble.code-workspace"}),", mi appere un messaggio del tipo ",(0,a.jsx)(i.code,{children:"Unknown distro: Ubuntu"})]}),"\n",(0,a.jsxs)(i.p,{children:["Il file ",(0,a.jsx)(i.code,{children:"assemble.code-workspace"})," cerca di lanciare via WSL la distro chiamata ",(0,a.jsx)(i.code,{children:"Ubuntu"}),", senza alcuna specifica di versione.\r\nNel caso la vostra installazione sia diversa, andr\xe0 modificato il file.\r\nDa un terminale Windows, lanciare ",(0,a.jsx)(i.code,{children:"wsl --list -v"}),", dovreste ottenere una stampa del tipo"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"PS C:\\Users\\raffa> wsl --list -v\r\n  NAME                   STATE           VERSION\r\n* Ubuntu                 Stopped         2\r\n  Ubuntu-22.04           Stopped         2\n"})}),"\n",(0,a.jsxs)(i.p,{children:["La parte importante \xe8 la colonna ",(0,a.jsx)(i.code,{children:"NAME"})," dell'immagine che vogliamo usare per l'ambiente assembler.\r\nModificare il file ",(0,a.jsx)(i.code,{children:"assemble.code-workspace"})," con un editor di testo (notepad o VS Code stesso, stando attenti ad aprirlo come file di testo e non come workspace) sostituendo tutte le occorrenze di ",(0,a.jsx)(i.code,{children:"wsl+ubuntu"})," con ",(0,a.jsx)(i.code,{children:"wsl+NOME-DELLA-DISTRO"}),".\r\nPer esempio, se volessi utilizzare l'immagine ",(0,a.jsx)(i.code,{children:"Ubuntu-22.04"}),", sostituirei con ",(0,a.jsx)(i.code,{children:"wsl+Ubuntu-22.04"}),"."]}),"\n",(0,a.jsx)(i.h3,{id:"4-sto-utilizzando-una-sistema-linux-desktop-come-uso-lambiente-senza-virtualizzazione",children:"4. Sto utilizzando una sistema Linux desktop, come uso l'ambiente senza virtualizzazione?"}),"\n",(0,a.jsxs)(i.p,{children:["Il file ",(0,a.jsx)(i.code,{children:"assemble.code-workspace"})," fa tre cose"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Aprire VS Code nella macchina virtuale WSL"}),"\n",(0,a.jsxs)(i.li,{children:["Aprire la cartella ",(0,a.jsx)(i.code,{children:"assembler"})," in tale ambiente"]}),"\n",(0,a.jsxs)(i.li,{children:["Impostare ",(0,a.jsx)(i.code,{children:"pwsh"})," come terminale default"]}),"\n"]}),"\n",(0,a.jsxs)(i.p,{children:["\xc8 possibile fare manualmente gli step 2 e 3, o modificare ",(0,a.jsx)(i.code,{children:"assemble.code-workspace"})," per non fare lo step 1.\r\nPer seguire questa seconda opzione, eliminare la riga con ",(0,a.jsx)(i.code,{children:'"remoteAuthority":'}),",\r\ne modificare il percorso dopo ",(0,a.jsx)(i.code,{children:'"uri":'})," perch\xe9 sia semplicemente un percorso sul proprio disco, per esempio ",(0,a.jsx)(i.code,{children:'"uri": "/home/raff/reti_logiche/assembler"'}),"."]}),"\n",(0,a.jsx)(i.h2,{id:"uso-dellambiente",children:"Uso dell'ambiente"}),"\n",(0,a.jsxs)(i.h3,{id:"5-se-premo-run-su-vs-code-non-viene-lanciato-il-programma",children:["5. Se premo ",(0,a.jsx)(i.em,{children:"Run"})," su VS Code non viene lanciato il programma"]}),"\n",(0,a.jsxs)(i.p,{children:["Non \xe8 cos\xec che si usa l'ambiente di questo corso.\r\nSi deve usare un terminale, assemblare con ",(0,a.jsx)(i.code,{children:"./assemble.ps1 programma.s"})," e lanciare con ",(0,a.jsx)(i.code,{children:"./programma"}),"."]}),"\n",(0,a.jsxs)(i.h3,{id:"6-provando-a-lanciare-assembleps1-programmas-ricevo-un-errore-del-tipo-assembleps1-line-1-syntax-error-near-unexpected-token",children:["6. Provando a lanciare ",(0,a.jsx)(i.code,{children:"./assemble.ps1 programma.s"})," ricevo un errore del tipo ",(0,a.jsx)(i.code,{children:"./assemble.ps1: line 1: syntax error near unexpected token"})]}),"\n",(0,a.jsxs)(i.p,{children:["State usando la shell da terminale sbagliata, ",(0,a.jsx)(i.code,{children:"bash"})," invece che ",(0,a.jsx)(i.code,{children:"pwsh"}),". Aprire un terminale Powershell da VS Code o utilizzare il comando ",(0,a.jsx)(i.code,{children:"pwsh"}),"."]}),"\n",(0,a.jsxs)(i.h3,{id:"7-provando-ad-assemblare-ricevo-un-warning-del-tipo-warning-creating-dt_textrel-in-a-pie",children:["7. Provando ad assemblare ricevo un warning del tipo ",(0,a.jsx)(i.code,{children:"warning: creating DT_TEXTREL in a PIE"})]}),"\n",(0,a.jsxs)(i.p,{children:["Sostituire il file ",(0,a.jsx)(i.code,{children:"assemble.ps1"})," con quello contenuto nel pacchetto pi\xf9 recente tra i file del corso.\r\nOppure modificare manualmente il file, alla riga 29, da"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"gcc -m32 -o ...\n"})}),"\n",(0,a.jsx)(i.p,{children:"a"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:"gcc -m32 -no-pie -o ...\n"})}),"\n",(0,a.jsx)(i.p,{children:"Riprovare quindi a riassemblare. Se il warning non sparisce, scrivermi. Allegando il sorgente."}),"\n",(0,a.jsx)(i.h3,{id:"8-ho-modificato-il-codice-per-correggere-un-errore-ma-quando-assemblo-e-eseguo-il-codice-continuo-a-vedere-lo-stesso-errore",children:"8. Ho modificato il codice per correggere un errore, ma quando assemblo e eseguo il codice, continuo a vedere lo stesso errore."}),"\n",(0,a.jsx)(i.p,{children:"Controllare di aver salvato il file.\r\nIn alto, nella barra delle tab, VS Code mostra un pallino pieno, al posto della X per chiedere la tab, per i file modificati e non salvati."})]})}function m(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,i,o)=>{o.d(i,{R:()=>s,x:()=>l});var n=o(6540);const a={},r=n.createContext(a);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);