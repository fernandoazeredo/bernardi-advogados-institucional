# Bernardi & Bernardi Advogados Associados

Site institucional do escritório Bernardi & Bernardi Advogados Associados, especializado em Direito Ambiental.

## Publicação

Projeto Firebase exclusivo: `bernardi-advogados-zilto-2026`.

No Windows PowerShell:

```powershell
cd "C:\Users\Fernando\Desktop\Bernardi_Advogados_Firebase"
Unblock-File .\DEPLOY_FIREBASE.ps1
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
.\DEPLOY_FIREBASE.ps1 -FirebaseProjectId "bernardi-advogados-zilto-2026"
```

Site publicado: <https://bernardi-advogados-zilto-2026.web.app>

## Estrutura

- `public/index.html`: página institucional completa.
- `public/associados/`: fotografias dos advogados associados.
- `public/Bernardi_Institucional_2026.pdf`: apresentação institucional otimizada.
- `public/privacidade.html`: política de privacidade.
- `firebase.json`: configuração do Firebase Hosting.
- `.firebaserc`: vínculo exclusivo com o projeto Firebase.
- `DEPLOY_FIREBASE.ps1`: script seguro de publicação.

## Atualizações

As alterações do site devem ser feitas dentro da pasta `public`. O arquivo principal deve permanecer como `public/index.html`.

