"use strict";(self.webpackChunkreti_logiche_esercitazioni=self.webpackChunkreti_logiche_esercitazioni||[]).push([[2553],{2117:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"esercitazioni/Verilog/Documentazione/Sintassi per reti combinatorie","title":"Sintassi per reti combinatorie","description":"","source":"@site/docs/esercitazioni/Verilog/Documentazione/2. Sintassi per reti combinatorie.mdx","sourceDirName":"esercitazioni/Verilog/Documentazione","slug":"/esercitazioni/Verilog/Documentazione/Sintassi per reti combinatorie","permalink":"/reti-logiche-esercitazioni/esercitazioni/Verilog/Documentazione/Sintassi per reti combinatorie","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"description":""},"sidebar":"esercitazioniSidebar","previous":{"title":"Operatori","permalink":"/reti-logiche-esercitazioni/esercitazioni/Verilog/Documentazione/Operatori"},"next":{"title":"Uso di VS Code","permalink":"/reti-logiche-esercitazioni/esercitazioni/VS-Code"}}');var o=n(4848),a=n(8453);n(6025);const s={description:""},t="Sintassi per reti combinatorie",d={},l=[{value:"<code>module</code>",id:"module",level:2},{value:"<code>input</code> e <code>output</code>",id:"input-e-output",level:3},{value:"<code>wire</code>",id:"wire",level:2},{value:"Usare un <code>module</code> in un altro <code>module</code>",id:"usare-un-module-in-un-altro-module",level:2},{value:"Tabelle di verit\xe0",id:"tabelle-di-verit\xe0",level:2},{value:"Multiplexer",id:"multiplexer",level:2},{value:"Reti parametrizzate",id:"reti-parametrizzate",level:2}];function c(e){const i={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"sintassi-per-reti-combinatorie",children:"Sintassi per reti combinatorie"})}),"\n",(0,o.jsxs)(i.p,{children:["Una rete combinatoria si esprime come un ",(0,o.jsx)(i.code,{children:"module"})," composto solo da ",(0,o.jsx)(i.code,{children:"wire"}),", espressioni combinatorie e componenti che sono a loro volta reti combinatorie."]}),"\n",(0,o.jsx)(i.h2,{id:"module",children:(0,o.jsx)(i.code,{children:"module"})}),"\n",(0,o.jsxs)(i.p,{children:["Il blocco ",(0,o.jsx)(i.code,{children:"module ... endmodule"})," definisce un ",(0,o.jsx)(i.em,{children:"tipo"})," di componente, che pu\xf2 poi essere instanziato in altri componenti.\r\nLa dichiarazione di un ",(0,o.jsx)(i.code,{children:"module"})," include il suo nome e la lista delle sue porte."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-verilog",children:"module nome_rete ( porta1, porta2, ... );\r\n    ...    \r\nendmodule\n"})}),"\n",(0,o.jsxs)(i.h3,{id:"input-e-output",children:[(0,o.jsx)(i.code,{children:"input"})," e ",(0,o.jsx)(i.code,{children:"output"})]}),"\n",(0,o.jsxs)(i.p,{children:["Per ciascuna porta di un ",(0,o.jsx)(i.code,{children:"module"}),", dichiariamo se \xe8 di ",(0,o.jsx)(i.code,{children:"input"})," o ",(0,o.jsx)(i.code,{children:"output"}),", e di quanti bit \xe8 composta.\r\nSe non specificata, la dimensione default \xe8 1.\r\nLa dichiarazione di porte con le stesse caratteristiche si pu\xf2 fare nella stessa riga."]}),"\n",(0,o.jsxs)(i.p,{children:["Le porte ",(0,o.jsx)(i.code,{children:"input"})," sono dei ",(0,o.jsx)(i.code,{children:"wire"})," il cui valore va assegnato ",(0,o.jsx)(i.em,{children:"al di fuori"})," di questa rete."]}),"\n",(0,o.jsxs)(i.p,{children:["Le porte ",(0,o.jsx)(i.code,{children:"output"})," sono dei ",(0,o.jsx)(i.code,{children:"wire"})," il cui valore va assegnato ",(0,o.jsx)(i.em,{children:"all'interno"})," di questa rete."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-verilog",children:"module nome_rete ( porta1, porta2, porta3, porta4 );\r\n//highlight-start\r\n    input [3:0] porta1, porta2;\r\n    output [3:0] porta3; \r\n    output porta4; \r\n//highlight-end\r\n    ...\r\nendmodule\n"})}),"\n",(0,o.jsxs)(i.admonition,{type:"info",children:[(0,o.jsx)(i.mdxAdmonitionTitle,{children:(0,o.jsx)(i.code,{children:"inout"})}),(0,o.jsxs)(i.p,{children:["Non usiamo porte ",(0,o.jsx)(i.code,{children:"inout"})," nelle reti combinatorie."]})]}),"\n",(0,o.jsx)(i.h2,{id:"wire",children:(0,o.jsx)(i.code,{children:"wire"})}),"\n",(0,o.jsxs)(i.p,{children:["Un ",(0,o.jsx)(i.code,{children:"wire"})," \xe8 un filo che trasporta un valore logico.\r\nSe non specificata, la dimensione default \xe8 1.\r\nLa dichiarazione di ",(0,o.jsx)(i.code,{children:"wire"})," con le stesse caratteristiche si pu\xf2 fare nella stessa riga."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-verilog",children:"    wire [3:0] w1, w2;\r\n    wire w3, w4, w5;\n"})}),"\n",(0,o.jsxs)(i.p,{children:["Con uno statement ",(0,o.jsx)(i.code,{children:"assign"})," possiamo associare al ",(0,o.jsx)(i.code,{children:"wire"})," una ",(0,o.jsx)(i.em,{children:"espressione combinatoria"}),": il ",(0,o.jsx)(i.code,{children:"wire"})," assumer\xe0 continuamente il valore dell'espressione, rispondendo ai cambiamenti dei suoi operandi.\r\nLo statement ",(0,o.jsx)(i.code,{children:"assign"})," pu\xf2 includere un fattore di ritardo, ",(0,o.jsx)(i.code,{children:"#T"}),", per indicare che il valore del filo segue il valore dell'espressione con ritardo di ",(0,o.jsx)(i.code,{children:"T"})," unit\xe0."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-verilog",children:"    assign #1 w5 = w3 & w4; \n"})}),"\n",(0,o.jsxs)(i.p,{children:["Un ",(0,o.jsx)(i.code,{children:"wire"})," pu\xf2 essere associato a una porta di un ",(0,o.jsx)(i.code,{children:"module"}),", come mostrato nella sezione successiva."]}),"\n",(0,o.jsxs)(i.h2,{id:"usare-un-module-in-un-altro-module",children:["Usare un ",(0,o.jsx)(i.code,{children:"module"})," in un altro ",(0,o.jsx)(i.code,{children:"module"})]}),"\n",(0,o.jsxs)(i.p,{children:["Una volta definito un ",(0,o.jsx)(i.code,{children:"module"}),", possiamo instanziare componenti di questo ",(0,o.jsx)(i.em,{children:"tipo"})," in un altro module."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-verilog",children:"    nome_module nome_istanza (\r\n        .porta1(...), .porta2(...), ...\r\n    );\n"})}),"\n",(0,o.jsxs)(i.p,{children:["All'interno degli statement ",(0,o.jsx)(i.code,{children:".porta(...)"})," specichiamo quale porta, espressione o ",(0,o.jsx)(i.code,{children:"wire"})," del ",(0,o.jsx)(i.code,{children:"module"})," corrente va collegato alla porta del ",(0,o.jsx)(i.code,{children:"module"})," instanziato."]}),"\n",(0,o.jsxs)(i.p,{children:["Insieme agli statement ",(0,o.jsx)(i.code,{children:"assign"})," e l'uso di ",(0,o.jsx)(i.code,{children:"wire"}),", questo ci permette di comporre reti combinatorie su diversi livelli di complessit\xe0 e con poca duplicazione del codice."]}),"\n",(0,o.jsxs)(i.p,{children:["Come esempio, costruiamo un ",(0,o.jsx)(i.code,{children:"and"})," a 1 ingresso e lo usiamo per comporre un ",(0,o.jsx)(i.code,{children:"and"})," a 3 ingressi."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:"module and(a, b, z);\r\n    input a, b;\r\n    output z;\r\n\r\n    assign #1 z = a & b;\r\nendmodule\r\n\r\nmodule and2(a, b, c, z);\r\n    input a, b, c;\r\n    output z;\r\n\r\n    wire z1;\r\n    and a1(\r\n        .a(a), .b(b),\r\n        .z(z1)\r\n    );\r\n\r\n    and a2(\r\n        .a(c), .b(z1),\r\n        .z(z)\r\n    );\r\nendmodule\n"})}),"\n",(0,o.jsx)(i.h2,{id:"tabelle-di-verit\xe0",children:"Tabelle di verit\xe0"}),"\n",(0,o.jsx)(i.p,{children:"Talvolta il modo pi\xf9 immediato per esprimere una rete combinatoria \xe8 tramite la sua tabella di verit\xe0.\r\n\xc8 anche noto che data una tabella di verit\xe0 possiamo ottenere una sintesi della rete combinatoria, utilizzando metodi come le mappe di Karnaugh."}),"\n",(0,o.jsx)(i.p,{children:"In Verilog, il modo pi\xf9 immediato di esprimere una tabella di verit\xe0 \xe8 utilizzando\r\nuna catena di operatori ternari."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:"module and (x, y, z);\r\n    input x, y;\r\n    output z;\r\n    assign #1 z = \r\n        ({x,y} == 2'b00) ? 1'b0 :\r\n        ({x,y} == 2'b00) ? 1'b0 :\r\n        ({x,y} == 2'b00) ? 1'b0 :\r\n        /*{x,y} == 2'b11*/ 1'b1;\n"})}),"\n",(0,o.jsxs)(i.p,{children:["Un'alternativa \xe8 l'uso di ",(0,o.jsx)(i.code,{children:"function"})," e ",(0,o.jsx)(i.code,{children:"casex"}),"."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-verilog",metastring:"showLineNumbers",children:"module and (x, y, z);\r\n    input x, y;\r\n    output z;\r\n    assign #1 z = tabella_verita({a, b});\r\n\r\n    function tabella_verita;\r\n        input [1:0] ab;\r\n        casex(ab)\r\n            2'b00: tabella_verita = 1'b0;\r\n            2'b01: tabella_verita = 1'b0;\r\n            2'b10: tabella_verita = 1'b0;\r\n            2'b11: tabella_verita = 1'b1;\r\n        endcase\r\n    endfunction\r\nendmodule\n"})}),"\n",(0,o.jsxs)(i.p,{children:["Per indicare tabelle di verit\xe0 con pi\xf9 di un bit in uscita si scrive, per esempio, ",(0,o.jsx)(i.code,{children:"function [1:0] tabella_verita;"}),".\r\nNel ",(0,o.jsx)(i.code,{children:"casex"})," si pu\xf2 utilizzare anche un caso default, scrivendo come ultimo caso ",(0,o.jsx)(i.code,{children:"default: tabella_verita = ...;"}),"."]}),"\n",(0,o.jsxs)(i.admonition,{type:"info",children:[(0,o.jsxs)(i.mdxAdmonitionTitle,{children:["Attenzione all'uso delle ",(0,o.jsx)(i.code,{children:"function"})]}),(0,o.jsxs)(i.p,{children:["Le ",(0,o.jsx)(i.code,{children:"function"})," sono blocchi di ",(0,o.jsx)(i.em,{children:"codice da eseguire"}),", parti del ",(0,o.jsx)(i.em,{children:"behavioral modelling"})," di Verilog.\r\nIl simulatore ne svolge i passaggi come un programma, senza consumare tempo e senza alcun corrispettivo hardware previsto.\r\n\xc8 per questo, per esempio, che dobbiamo specificare noi il tempo consumato nello statement ",(0,o.jsx)(i.code,{children:"assign"}),"."]}),(0,o.jsxs)(i.p,{children:["L'uso mostrato qui delle ",(0,o.jsx)(i.code,{children:"function"})," \xe8 ",(0,o.jsx)("u",{children:"l'unico ammesso"})," per una ",(0,o.jsx)(i.em,{children:"sintesi"})," di reti combinatorie.\r\nIn presenza di ogni altra elaborazione algoritmica, di cui non sia evidente il corrispettivo hardware, sar\xe0 invece considerata una ",(0,o.jsx)(i.em,{children:"descrizione"})," di rete combinatoria."]})]}),"\n",(0,o.jsx)(i.h2,{id:"multiplexer",children:"Multiplexer"}),"\n",(0,o.jsxs)(i.p,{children:["I multiplexer sono da considerarsi noti e sintetizzabili, e si possono esprimere con uno o pi\xf9 operatori ternari ",(0,o.jsx)(i.code,{children:"?"}),"."]}),"\n",(0,o.jsxs)(i.admonition,{title:"Operatore ternario",type:"info",children:[(0,o.jsxs)(i.p,{children:["La sintassi \xe8 della forma ",(0,o.jsx)(i.code,{children:" cond ? v_t : v_f"}),", dove ",(0,o.jsx)(i.code,{children:"cond"})," \xe8 un predicato (espressione ",(0,o.jsx)(i.code,{children:"true"})," o ",(0,o.jsx)(i.code,{children:"false"}),") mentre ",(0,o.jsx)(i.code,{children:"v_t"})," e ",(0,o.jsx)(i.code,{children:"v_f"})," sono espressioni dello stesso tipo."]}),(0,o.jsxs)(i.p,{children:["L'espressione ha valore ",(0,o.jsx)(i.code,{children:"v_t"})," se il predicato ",(0,o.jsx)(i.code,{children:"cond"})," \xe8 ",(0,o.jsx)(i.code,{children:"true"}),", ",(0,o.jsx)(i.code,{children:"v_f"})," altrimenti."]})]}),"\n",(0,o.jsxs)(i.p,{children:["Per un multiplexer con selettore a 1 bit, baster\xe0 un solo ",(0,o.jsx)(i.code,{children:"?"}),"."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-verilog",children:"input sel;\r\nassign #1 multiplexer = sel ? x0 : x1;\n"})}),"\n",(0,o.jsx)(i.p,{children:"Per un selettore a pi\xf9 bit si dovranno usare in serie per gestire pi\xf9 casi"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-verilog",children:"input [1:0] sel;\r\nassign #1 multiplexer = \r\n    (sel == 2'b00) ? x0 :\r\n    (sel == 2'b01) ? x1 :\r\n    (sel == 2'b10) ? x2 :\r\n    /*sel == 2'b11*/ x3 :\n"})}),"\n",(0,o.jsx)(i.h2,{id:"reti-parametrizzate",children:"Reti parametrizzate"}),"\n",(0,o.jsxs)(i.p,{children:["In un ",(0,o.jsx)(i.code,{children:"module"})," si possono definire parametri per generalizzare la rete.\r\nIn particolare, questo \xe8 frequentemente utilizzato in ",(0,o.jsx)(i.code,{children:"reti_standard.v"})," per fornire reti il cui dimensionamento \xe8 da specificare."]}),"\n",(0,o.jsx)(i.p,{children:"Per esempio, vediamo come \xe8 definita una rete di somma a N bit."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-verilog",children:"module add( \r\n    x, y, c_in,\r\n    s, c_out, ow    \r\n);\r\n//highlight-start\r\n    parameter N = 2;\r\n//highlight-end\r\n\r\n//highlight-start\r\n    input [N-1:0] x, y;\r\n//highlight-end\r\n    input c_in;\r\n\r\n//highlight-start\r\n    output [N-1:0] s;\r\n//highlight-end\r\n    output c_out, ow;\r\n\r\n    assign #1 {c_out, s} = x + y + c_in;\r\n//highlight-start\r\n    assign #1 ow = (x[N-1] == y[N-1]) && (x[N-1] != s[N-1]);\r\n//highlight-end\r\nendmodule\n"})}),"\n",(0,o.jsxs)(i.p,{children:["Con ",(0,o.jsx)(i.code,{children:"N = 2"})," viene impostato il valore di default del parametro.\r\nQuando instanziamo la rete altrove, possiamo modificare questo parametro, per esempio per ottenere un sommatore a 8 bit."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-verilog",children:"    add #( .N(8) ) a (\r\n        ...\r\n    );\n"})}),"\n",(0,o.jsxs)(i.p,{children:["Un ",(0,o.jsx)(i.code,{children:"module"})," pu\xf2 avere pi\xf9 di un parametro, che possono essere impostati indipendentemente."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-verilog",children:"    nome_modulo #( .nome_parametro1(v1), .nome_parametro2(v2)... ) nome_istanza (\r\n        ...\r\n    );\n"})}),"\n",(0,o.jsx)(i.admonition,{title:"Immutabilit\xe0 dei parametri",type:"warning",children:(0,o.jsxs)(i.p,{children:["I parametri determinano la quantit\xe0 di ",(0,o.jsx)("u",{children:"hardware"}),", che non \xe8 mutabile!\r\nI valori associati devono essere ",(0,o.jsx)("u",{children:"costanti"}),"."]})}),"\n",(0,o.jsxs)(i.admonition,{title:"Parametrizzazione e sintesi di reti combinatorie",type:"note",children:[(0,o.jsxs)(i.p,{children:["La parametrizzazione \xe8 facilmente applicabile a ",(0,o.jsx)(i.em,{children:"descrizioni"})," di reti combinatorie dove si usano espressioni combinatorie che il simulatore \xe8 facilmente in grado di adattare a diverse quantit\xe0 di bit."]}),(0,o.jsxs)(i.p,{children:["\xc8 molto pi\xf9 complicato applicarla a ",(0,o.jsx)(i.em,{children:"sintesi"})," di reti combinatorie, dato che non si possono instanziare componenti in modo parametrico, per esempio ",(0,o.jsx)(i.code,{children:"N"})," full adder da 1 bit per sintetizzare un full adder a ",(0,o.jsx)(i.code,{children:"N"})," bit."]})]})]})}function u(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>t});var r=n(6540);const o={},a=r.createContext(o);function s(e){const i=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:i},e.children)}}}]);