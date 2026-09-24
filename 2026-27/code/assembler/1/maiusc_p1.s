# 1. Leggere messaggio da terminale.
# 2. Convertire le lettere minuscole in maiuscolo.
# 3. Stampare messaggio modificato.

# Svolgimento parziale che svolge solo 1 e 3

.include "./files/utility.s"

.data
msg_in: .fill 80, 1, 0
msg_out: .fill 80, 1, 0

.text
_main:  
    nop
punto_1:
    mov $80, %cx
    lea msg_in, %ebx
    call inline
    nop
punto_2:
    lea msg_in, %esi
    lea msg_out, %edi
    mov $0, %ecx
loop:   
    movb (%esi, %ecx), %al
    # si può trasformare %al qui
    movb %al, (%edi, %ecx)
    inc %ecx
    cmp $0x0d, %al # $0x0d è equivalente a $'\r'
    jne loop
punto_3:
    lea msg_out, %ebx
    call outline
    nop
fine:
    ret
