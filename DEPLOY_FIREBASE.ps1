param(
    [Parameter(Mandatory = $true)]
    [ValidateNotNullOrEmpty()]
    [string]$FirebaseProjectId
)

$ErrorActionPreference = "Stop"
$ProjectFolder = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ProjectFolder

if ($FirebaseProjectId -eq "ID-DO-PROJETO-FIREBASE") {
    throw "Substitua ID-DO-PROJETO-FIREBASE pelo ID real do projeto exclusivo do Bernardi no Firebase."
}

if ($FirebaseProjectId -cnotmatch '^[a-z][a-z0-9-]{4,28}[a-z0-9]$') {
    throw "ID de projeto inválido. Use o ID exato do Firebase, em letras minúsculas, com 6 a 30 caracteres."
}

if (-not (Test-Path ".\firebase.json")) {
    throw "Arquivo firebase.json não encontrado. Execute este script dentro da pasta do projeto."
}

if (-not (Test-Path ".\public\index.html")) {
    throw "Arquivo public\index.html não encontrado. O pacote pode estar incompleto."
}

Write-Host "Validando acesso ao Firebase..." -ForegroundColor Cyan

$FirebaseCommand = Get-Command firebase -ErrorAction SilentlyContinue
if ($FirebaseCommand) {
    & firebase projects:list | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Não foi possível validar o acesso à conta Firebase."
    }
    Write-Host "Publicando o site no Firebase Hosting..." -ForegroundColor Cyan
    & firebase deploy --only hosting --project $FirebaseProjectId
    if ($LASTEXITCODE -ne 0) {
        throw "O Firebase recusou o deploy. Nenhum sucesso foi registrado."
    }
} else {
    $NpxCommand = Get-Command npx -ErrorAction SilentlyContinue
    if (-not $NpxCommand) {
        throw "Node.js/NPX não foi encontrado. Instale o Node.js LTS antes de continuar."
    }

    & npx --yes firebase-tools projects:list | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Não foi possível validar o acesso à conta Firebase."
    }
    Write-Host "Publicando o site no Firebase Hosting..." -ForegroundColor Cyan
    & npx --yes firebase-tools deploy --only hosting --project $FirebaseProjectId
    if ($LASTEXITCODE -ne 0) {
        throw "O Firebase recusou o deploy. Nenhum sucesso foi registrado."
    }
}

Write-Host "Deploy concluído com sucesso." -ForegroundColor Green
