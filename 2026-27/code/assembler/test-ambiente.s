.include "./files/utility.s"

.data
messaggio: .ascii "Ok.\r"

.text
_main:  
    nop
    lea messaggio, %ebx
    call outline
    ret
