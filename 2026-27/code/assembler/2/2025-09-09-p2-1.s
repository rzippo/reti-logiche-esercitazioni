.include "./files/utility.s"

.data

.text
_main:
    nop
    call innumber_b7
    call newline
    call outdecimal_word
    ret

# Legge e fa eco, ignorando caratteri inattesi, di una cifra in base 7
# Ne lascia il valore in %al
indigit_b7:
indigit_b7_loop:
    call inchar
    cmp $'0', %al
    jb indigit_b7_loop
    cmp $'6', %al
    ja indigit_b7_loop
    # arrivati qui, il carattere è ok
    call outchar
    sub $'0', %al
    ret

# Legge e fa eco, ignorando caratteri inattesi, di un numero naturale di 4 cifre in base 7
# Ne lascia il valore in %ax
innumber_b7:
    # push dei registri sporcati
    push %bx
    push %dx    # sporcato dalla mul a 16 bit

    # fase 1: calcolo prodotti e push
    call indigit_b7
    mov $0, %ah
    mov $343, %bx
    mul %bx
    push %ax

    call indigit_b7
    mov $49, %bl
    mul %bl
    push %ax

    call indigit_b7
    mov $7, %bl
    mul %bl
    push %ax

    call indigit_b7
    mov $0, %ah
    push %ax

    # fase 2: pop e sommatoria
    mov $0, %ax
    // b_0
    pop %bx
    add %bx, %ax
    // += b_1 * 7
    pop %bx
    add %bx, %ax
    // += b_2 * 7 * 7
    pop %bx
    add %bx, %ax
    // += b_3 * 7 * 7 * 7
    pop %bx
    add %bx, %ax
    
    # pop dei registri sporcati
    pop %dx
    pop %bx
    
    ret
