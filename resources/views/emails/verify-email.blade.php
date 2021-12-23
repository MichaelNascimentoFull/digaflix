@component('mail::message')
Olá,

Obrigado por se registrar no Digaflix

@component('mail::button', ['url' => $verifyUrl])
Verifique seu email
@endcomponent

caso não consiga acesse o link, {{$verifyUrl}}

Atenciosamente<br>

Digaflix

@endcomponent
