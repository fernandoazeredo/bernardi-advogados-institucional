# Bernardi & Bernardi Advogados Associados

Site institucional multilíngue do escritório Bernardi & Bernardi Advogados Associados, especializado em Direito Ambiental.

## Publicação

Projeto Firebase exclusivo: `bernardi-advogados-zilto-2026`.

```powershell
cd "D:\APLICATIVOS - DEPLOY\Bernardi_Advogados_Firebase"
Unblock-File .\DEPLOY_FIREBASE.ps1
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
.\DEPLOY_FIREBASE.ps1 -FirebaseProjectId "bernardi-advogados-zilto-2026"
```

Site publicado: <https://bernardi-advogados-zilto-2026.web.app>

## Estrutura

- 30 páginas em português, inglês e espanhol.
- Áreas de atuação, equipe, análises completas e políticas de privacidade.
- Fotos profissionais e identidade visual em `public/assets/`.
- Apresentação institucional em `public/Bernardi_Institucional_2026.pdf`.
- Sitemap, robots.txt, canonical e hreflang para SEO.
- Menu hambúrguer, âncoras móveis, WhatsApp e formulários diretos.

As alterações do site devem ser feitas dentro da pasta `public`. O arquivo principal deve permanecer como `public/index.html`.
