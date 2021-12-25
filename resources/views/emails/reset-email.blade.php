@component('mail::message')

Olá!

Foi solicitada a troca da senha, para autera-lá click no link, valido por 60 minutos

@component('mail::button', ['url' =>'http://localhost:8000/newpassword/'.$user->email.'/'.$resetUrl])
Trocar Senha
@endcomponent


Atenciosamente,<br>
Digaflix
    
@endcomponent