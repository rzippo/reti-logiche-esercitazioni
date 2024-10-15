"use strict";(self.webpackChunkreti_logiche_esercitazioni=self.webpackChunkreti_logiche_esercitazioni||[]).push([[3889],{2273:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=n(4848),a=n(8453),s=(n(6025),n(407));const t={sidebar_position:2,description:""},l="Ambiente di sviluppo",o={id:"esercitazioni/Assembler/Ambiente",title:"Ambiente",description:"",source:"@site/docs/esercitazioni/Assembler/2. Ambiente.mdx",sourceDirName:"esercitazioni/Assembler",slug:"/esercitazioni/Assembler/Ambiente",permalink:"/reti-logiche-esercitazioni/esercitazioni/Assembler/Ambiente",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:""},sidebar:"esercitazioniSidebar",previous:{title:"Assembler",permalink:"/reti-logiche-esercitazioni/category/assembler"},next:{title:"Esercitazioni",permalink:"/reti-logiche-esercitazioni/category/esercitazioni"}},c={},d=[{value:"Attenzione all&#39;architettura",id:"attenzione-allarchitettura",level:2},{value:"Struttura dell&#39;ambiente",id:"struttura-dellambiente",level:2},{value:"Requisiti minimi",id:"requisiti-minimi",level:3},{value:"Lanciare l&#39;ambiente e primo programma",id:"lanciare-lambiente-e-primo-programma",level:2}];function m(e){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"ambiente-di-sviluppo",children:"Ambiente di sviluppo"})}),"\n",(0,r.jsxs)(i.p,{children:["In questo corso, programmeremo assembler per architettura x86, a 32 bit.\r\nUseremo la sintassi ",(0,r.jsx)(i.em,{children:"GAS"})," (anche nota come ",(0,r.jsx)(i.em,{children:"AT&T"}),"), usando la linea di comando in un sistema Linux.\r\nUtilizzeremo degli script appositi per assemblare, testare e debuggare.\r\nQuesti script non fanno che chiamare, semplificandone l'uso, ",(0,r.jsx)(i.code,{children:"gcc"})," e ",(0,r.jsx)(i.code,{children:"gdb"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"attenzione-allarchitettura",children:"Attenzione all'architettura"}),"\n",(0,r.jsx)(i.p,{children:"Programmare in assembler vuol dire programmare per una specifica architettura di processori.\r\nL'architettura x86 \xe8 stata rimpiazzata nel tempo da x64, a 64 bit, ma \xe8 del tutto retrocompatibile (ci limitiamo a x86 perch\xe9 tanto ci basta ai fini didattici).\r\nUsare una macchina con architettura diversa (in particolare, ARM) \xe8 inevitabilmente fonte di problemi."}),"\n",(0,r.jsx)(i.p,{children:"Da una parte, si potrebbe pensare di esercitarsi scrivendo assembler per la propria architettura, anzich\xe9 quella usata nel corso.\r\nSorgono diversi problemi: dover imparare sintassi, meccanismi, registri completamente diversi; dover fare a meno o reingegnerizzarsi la libreria usata per l'input-output a terminale; dover comunque imparare l'assembler mostrato nel corso perch\xe9 quella sar\xe0 richiesta all'esame e supportata dalle macchine in laboratorio."}),"\n",(0,r.jsx)(i.p,{children:"La seconda opzione \xe8 usare strumenti di virtuallizzazione capaci di far girare un sistema operativo con architettura diversa.\r\nSorge come principale problema l'ergonomicit\xe0 ed efficienza di questa soluzione, che dipende molto dagli strumenti che si trovano e dalle caratteristiche hardware della macchina, che potrebbero essere non sufficienti."}),"\n",(0,r.jsxs)(i.p,{children:["Tenere comunque presente che, per i programmi che intendiamo scrivere, basta una macchina x86 molto ",(0,r.jsx)(i.em,{children:"poco"})," potente."]}),"\n",(0,r.jsx)(i.h2,{id:"struttura-dellambiente",children:"Struttura dell'ambiente"}),"\n",(0,r.jsx)(i.p,{children:"I programmi che scriveremo ed eseguiremo, cos\xec come quelli utilizzati per assemblare, gireranno in un terminale Linux."}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsx)(i.p,{children:"Questo perch\xe9 \xe8 molto pi\xf9 facile virtualizzare un ambiente Linux moderno in un Windows o Mac che il contrario.\r\nIn precedenza si usava MS-DOS, un sistema del 1981 facilmente emulabile, ma molto limitato data l'et\xe0."}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["Nell'ambiente d'esame, si usa un Ubuntu 22.04 virtualizzato tramite ",(0,r.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/install",children:"WSL"})," su macchina Windows 11.\r\nCome editor usiamo ",(0,r.jsx)(i.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})," con l'",(0,r.jsx)(i.a,{href:"https://code.visualstudio.com/docs/remote/wsl",children:"estensione per lo sviluppo in WSL"}),"."]}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)(s.A,{value:'\n    graph LR\n       subgraph "Windows 11, x86"\n          V[VS Code]\n          subgraph WSL2 x86\n             subgraph Ubuntu 22.04\n                T[Terminale]\n             end\n          end\n       end\n       V[VS Code] --\x3e T[Terminale]\n '}),(0,r.jsx)("figcaption",{children:(0,r.jsx)(i.p,{children:"Schema dell'ambiente usato all'esame."})})]}),"\n",(0,r.jsxs)(i.p,{children:["Questo ci permette di mantenere un ambiente grafico moderno mentre si lavora con un terminare Linux virtualizzato.\r\n\xc8 anche relativamente facile da riprodurre in altri contesti, utilizzando altre forme di visualizzazione e ",(0,r.jsx)(i.a,{href:"https://code.visualstudio.com/docs/remote/ssh",children:"SSH"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["Tra i file del corso (Teams o ",(0,r.jsx)(i.a,{href:"http://docenti.ing.unipi.it/~a080368/Teaching/RetiLogiche/materiale.html",children:"sito web"}),") trovate il pacchetto di installazione con le istruzioni passo-passo per riprodurre l'ambiente del laboratorio ",(0,r.jsx)("u",{children:"su una macchina Windows 11 con architettura x86"}),": questo perch\xe9 \xe8 pensata e testata per le macchine in laboratorio usate per l'esame."]}),"\n",(0,r.jsx)(i.p,{children:"Le stesse istruzioni possono essere adattate per riprodurre un ambiente funzionale in un contesto diverso."}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)(s.A,{value:"\n    graph LR\n       subgraph Qualunque sistema operativo\n          V[VS Code]\n       end\n       subgraph Linux x86\n          T[Terminale]\n       end\n       V -- SSH --\x3e T\n "}),(0,r.jsx)("figcaption",{children:(0,r.jsx)(i.p,{children:"Schema di un ambiente che usa SSH."})})]}),"\n",(0,r.jsx)(i.h3,{id:"requisiti-minimi",children:"Requisiti minimi"}),"\n",(0,r.jsx)(i.p,{children:"L'ambiente Linux deve essere in grado di"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Eseguire gli script ",(0,r.jsx)(i.code,{children:"powershell"})," dell'ambiente"]}),"\n",(0,r.jsxs)(i.li,{children:["Assemblare, usando ",(0,r.jsx)(i.code,{children:"gcc"}),", programmi x86 scritti con sintassi ",(0,r.jsx)(i.em,{children:"GAS"})]}),"\n",(0,r.jsx)(i.li,{children:"Eseguire programmi x86"}),"\n",(0,r.jsxs)(i.li,{children:["Debuggarli usando ",(0,r.jsx)(i.code,{children:"gdb"})]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Su Ubuntu 22.04, i pacchetti da installare sono"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"build-essential"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"gcc-multilib"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"gdb"})}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"powershell"})," (",(0,r.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/powershell/scripting/install/install-ubuntu?view=powershell-7.4",children:"guida"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsx)(i.p,{children:"Perch\xe9 Powershell?"}),"\n",(0,r.jsxs)(i.p,{children:["Perch\xe9 Powershell (2006) \xe8 object-oriented, e permette di scrivere script leggibili e manutenibili, in modo semplice.\r\nBash (1989) \xe8 invece text-oriented, con una ",(0,r.jsx)(i.a,{href:"https://mywiki.wooledge.org/BashPitfalls",children:"lunga lista di trappole da saper evitare"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"lanciare-lambiente-e-primo-programma",children:"Lanciare l'ambiente e primo programma"}),"\n",(0,r.jsxs)(i.p,{children:["Una volta eseguiti i passi dell'installazione, avremo una cartella ",(0,r.jsx)(i.code,{children:"C:/reti_logiche"})," con contenuto come da figura."]}),"\n",(0,r.jsx)("img",{src:"c-reti_logiche.png",alt:""}),"\n",(0,r.jsxs)(i.p,{children:["Il file ",(0,r.jsx)(i.code,{children:"assembler.code-workspace"})," lancer\xe0 VS Code, collegandosi alla macchina virtuale WSL e la cartella di lavoro ",(0,r.jsx)(i.code,{children:"C:/reti_logiche/assembler"}),"."]}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsx)(i.p,{children:"Questo file \xe8 configurato per l'ambiente d'esame, per automatizzare l'avvio.\r\nSe si usa un ambiente diverso, il file andr\xe0 modificato di conseguenza per funzionare, o si dovr\xe0 avviare l'ambiente \"manualmente\"."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"La finestra VS Code che si aprir\xe0 sar\xe0 simile alla seguente."}),"\n",(0,r.jsx)("img",{src:"vs-code-assembler-start.png",alt:""}),"\n",(0,r.jsxs)(i.p,{children:["Nell'angolo in basso a sinistra, ",(0,r.jsx)(i.code,{children:"WSL: Ubuntu-22.04"})," sta a indicare che l'editor \xe8 correttamente connesso alla macchina virtuale (compare una dicitura simile se si usa SSH)."]}),"\n",(0,r.jsx)(i.p,{children:"I file e cartelle mostrati nell'immagine sono quelli che ci si deve aspettare dall'ambiente vuoto."}),"\n",(0,r.jsxs)(i.p,{children:["Il file ",(0,r.jsx)(i.code,{children:"test-ambiente.s"})," \xe8 un semplice programma per verificare che l'ambiente funzioni."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-assembler",metastring:"showLines",children:'.include "./files/utility.s"\r\n\r\n.data\r\nmessaggio: .ascii "Ok.\\r"\r\n\r\n.text\r\n_main:  \r\n   nop\r\n   lea messaggio, %ebx\r\n   call outline\r\n   ret\r\n\n'})}),"\n",(0,r.jsx)(i.p,{children:"Apriamo quindi un terminale in VS Code (Terminale > Nuovo Terminale).\r\nPer poter lanciare gli script, il terminale deve essere Powershell, non bash."}),"\n","\n","\n","\n","\n",(0,r.jsxs)(i.p,{children:["Per cambiare shell si pu\xf2 usare il bottone ",(0,r.jsx)(i.code,{children:"+"})," sulla sinistra, o lanciare il comando ",(0,r.jsx)(i.code,{children:"pwsh"})," senza argomenti."]}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsx)(i.p,{children:"Se si preferisce, in VS Code si pu\xf2 aprire un terminale anche come tab dell'editor, o spostandolo al lato anzich\xe9 in basso."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"A questo punto possiamo lanciare il comando per assemblare il programma di test."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"./assemble.ps1 ./test-ambiente.s\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Dovremmo adesso vedere, tra i file, il binario ",(0,r.jsx)(i.code,{children:"test-ambiente"}),".\r\nLo possiamo eseguire con ",(0,r.jsx)(i.code,{children:"./test-ambiente"}),", che dovrebbe stampare ",(0,r.jsx)(i.code,{children:"Ok."}),"."]}),"\n",(0,r.jsx)("img",{src:"vs-code-assembler-terminal-test-ambiente.png",alt:""})]})}function u(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}}}]);