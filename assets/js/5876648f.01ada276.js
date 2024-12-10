"use strict";(self.webpackChunkreti_logiche_esercitazioni=self.webpackChunkreti_logiche_esercitazioni||[]).push([[511],{1743:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"esercitazioni/Verilog/Simulatore processore sEP8","title":"Simulatore processore sEP8","description":"","source":"@site/docs/esercitazioni/Verilog/Simulatore processore sEP8.mdx","sourceDirName":"esercitazioni/Verilog","slug":"/esercitazioni/Verilog/Simulatore processore sEP8","permalink":"/reti-logiche-esercitazioni/esercitazioni/Verilog/Simulatore processore sEP8","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":100,"frontMatter":{"sidebar_position":100,"id":"Simulatore processore sEP8","title":"Simulatore processore sEP8","description":""},"sidebar":"esercitazioniSidebar","previous":{"title":"Sintassi per reti combinatorie","permalink":"/reti-logiche-esercitazioni/esercitazioni/Verilog/Documentazione/Sintassi per reti combinatorie"},"next":{"title":"Uso di VS Code","permalink":"/reti-logiche-esercitazioni/esercitazioni/VS-Code"}}');var t=r(4848),n=r(8453),a=r(6025);const s={sidebar_position:100,id:"Simulatore processore sEP8",title:"Simulatore processore sEP8",description:""},c="Simulatore processore sEP8",l={},d=[{value:"Lancio di simulazioni",id:"lancio-di-simulazioni",level:2},{value:"Caricamento di programmi tramite ROM",id:"caricamento-di-programmi-tramite-rom",level:2},{value:"Riferimenti storici: le cartucce",id:"riferimenti-storici-le-cartucce",level:3}];function m(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"simulatore-processore-sep8",children:"Simulatore processore sEP8"})}),"\n",(0,t.jsxs)(i.p,{children:["Il processore sEP8 (Simple Educational Processor 8 bit) \xe8 un semplice processore a 8 bit, descritto nel libro ",(0,t.jsx)(i.a,{href:"http://www.edizioniets.com/scheda.asp?n=9788846743114",children:"Dalle porte AND OR NOT al sistema calcolatore"})," del prof. Paolo Corsini e utilizzato nel corso per presentare i meccanismi fondamentali di un processore e la realizzazione dello stesso in hardware tramite il linguaggio Verilog.\r\nOltre che a questi scopi didattici, \xe8 anche una buona base di partenza per esplorare architetture di processori e le loro implementazioni in hardware."]}),"\n",(0,t.jsxs)(i.p,{children:["Nel repository ",(0,t.jsx)(i.a,{href:"https://github.com/Unipisa/sEP8",children:"https://github.com/Unipisa/sEP8"})," contiene codice utilizzabile per simulare il processore, sperimentarne estensioni etc."]}),"\n",(0,t.jsxs)(i.admonition,{title:"Attribuzione",type:"tip",children:[(0,t.jsxs)(i.p,{children:["Il codice attualmente presente nel repository \xe8 frutto del lavoro di ",(0,t.jsx)(i.a,{href:"https://github.com/nicorama06",children:"Nicola Ramacciotti"})," nell'ambito della sua Tesi di Laurea in Ingegneria Informatica, dal titolo \"",(0,t.jsx)(i.em,{children:"Design e implementazione di un ambiente di simulazione e testing in Verilog per il processore sEP8"}),'".']}),(0,t.jsx)(i.p,{children:"Siamo disponibili a seguire tesi triennali sull'argomento."})]}),"\n",(0,t.jsx)(i.h2,{id:"lancio-di-simulazioni",children:"Lancio di simulazioni"}),"\n",(0,t.jsx)(i.p,{children:"Il codice sorgente fornito include tutto il necessario per simulare l'architettura sEP8 e osservare il suo comportamento interno durante l'esecuzione di un semplice programma."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"> iverilog -o sEP8  .\\sEP8.v .\\MEMORIA.v .\\RAM.v .\\ROM.v .\\IO.v .\\clock_generator.v .\\testbench.v\r\n> vvp ./sEP8\r\nVCD info: dumpfile waveform.vcd opened for output.\r\nABCDEFGHIJKLMNOPQRSTUVWXYZ\r\nSimulazione terminata: il processore ha eseguito un'istruzione HLT  \n"})}),"\n",(0,t.jsxs)(i.p,{children:["I caratteri che vediamo stampati (da ",(0,t.jsx)(i.code,{children:"A"})," a ",(0,t.jsx)(i.code,{children:"Z"}),") sono l'output del programma contenuto in ",(0,t.jsx)(i.code,{children:"ROM.v"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Dal file ",(0,t.jsx)(i.code,{children:"waveform.vcd"}),", possiamo studiare il comportamento del processore."]}),"\n",(0,t.jsx)("img",{src:(0,a.Ay)("/img/verilog/sEP8/waveform.png")}),"\n",(0,t.jsx)(i.h2,{id:"caricamento-di-programmi-tramite-rom",children:"Caricamento di programmi tramite ROM"}),"\n",(0,t.jsxs)(i.p,{children:["In questo simulatore, il programma da eseguire \xe8 caricato tramite un modulo ",(0,t.jsx)(i.code,{children:"ROM"}),", che viene montato a partire dall'indirizzo ",(0,t.jsx)(i.code,{children:"24'hFF0000"}),".\r\nTale modulo dovr\xe0 contenere le sequenze di byte corrispondenti alle istruzioni del programma."]}),"\n",(0,t.jsxs)(i.p,{children:["Un assemblatore basilare \xe8 fornito come script python, che traduce semplici programmi assembler per questo processore in un modulo ",(0,t.jsx)(i.code,{children:"ROM"})," contenente la giusta sequenza di byte."]}),"\n",(0,t.jsx)(i.h3,{id:"riferimenti-storici-le-cartucce",children:"Riferimenti storici: le cartucce"}),"\n",(0,t.jsx)(i.p,{children:"Questo modo di caricare i programmi non \xe8 solo una semplificazione a scopo didattico, ma ha anche degli esempi storici concreti."}),"\n",(0,t.jsxs)(i.p,{children:["Infatti operavano cos\xec le prime console, dove gli esempi pi\xf9 famosi sono probabilmente le console Nintendo come N64 e GameBoy.\r\nIn queste console, ciascun gioco \xe8 fornito come una ",(0,t.jsx)(i.em,{children:"cartuccia"})," che va inserita nella console prima di accenderla.\r\nCiascuna cartuccia \xe8 del vero e proprio hardware che contiene la ROM dentro la quale \xe8 scritto il ",(0,t.jsx)(i.em,{children:"programma"})," del gioco, e i pin che collegano la cartuccia e la console sono proprio fili di indirizzamento e dati."]}),"\n",(0,t.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/N64-Console-Set.jpg/1920px-N64-Console-Set.jpg"}),"\n",(0,t.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/N64-Game-Cartridge.jpg/1920px-N64-Game-Cartridge.jpg"}),"\n",(0,t.jsxs)(i.p,{children:["In realt\xe0, permettendo generiche letture e scritture al range di indirizzi a cui \xe8 montata la cartuccia, questa poteva contenere diversi tipi di hardware, inclusi chip di RAM aggiuntivi, chip di memoria per permettere di salvare il gioco, o ancora hardware dedicato come ",(0,t.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Rumble_Pak",children:(0,t.jsx)(i.em,{children:"rumble pak"})})," o ",(0,t.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Game_Boy_Camera",children:"fotocamera"}),"."]})]})}function p(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},8453:(e,i,r)=>{r.d(i,{R:()=>a,x:()=>s});var o=r(6540);const t={},n=o.createContext(t);function a(e){const i=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(n.Provider,{value:i},e.children)}}}]);