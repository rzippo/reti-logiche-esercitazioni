.include "./files/utility.s"

.data

msg_in: .fill 80, 1, 0

.text
_main:  
    nop
    mov $80, %cx
    lea msg_in, %ebx
    call inline

    cld
    mov $'_', %al
    lea msg_in, %edi
    mov $80, %cx

    repne scasb
    mov %edi, %ebx
    repne scasb
    mov %edi, %ecx
    sub %ebx, %ecx
    dec %ecx
    call outmess

    ret
