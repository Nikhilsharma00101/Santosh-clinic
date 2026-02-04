#!/usr/bin/env pwsh

# Comprehensive lint fix script for all remaining errors

Write-Host "Starting comprehensive lint fixes..." -ForegroundColor Cyan

# Create a backup before mass fixes
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$backupDir = "backup_$timestamp"
New-Item -ItemType Directory -Path $backupDir -Force | Out-Null

# Function to safely edit a file
function Fix-File {
    param(
        [string]$FilePath,
        [scriptblock]$FixLogic
    )
    
    if (Test-Path $FilePath) {
        # Backup
        $backupPath = Join-Path $backupDir (Split-Path $FilePath -Leaf)
        Copy-Item $FilePath $backupPath -Force
        
        # Apply fix
        try {
            & $FixLogic
            Write-Host "  ✓ Fixed: $FilePath" -ForegroundColor Green
        } catch {
            Write-Host "  ✗ Error fixing $FilePath : $_" -ForegroundColor Red
            # Restore from backup
            Copy-Item $backupPath $FilePath -Force
        }
    }
}

# Fix footer.tsx - Remove unused imports and restore the file to clean state
Fix-File "src\components\layout\footer.tsx" {
    $content = Get-Content "src\components\layout\footer.tsx" -Raw
    $content = $content -replace "import { SITE_CONFIG, FOOTER_LINKS, SERVICES } from", "import { SITE_CONFIG, FOOTER_LINKS } from"
    $content = $content -replace ", Globe,", ","
    $content = $content -replace ", Cpu", ""
    Set-Content "src\components\layout\footer.tsx" $content
}

# Remove unused imports from various files
$filesToClean = @(
    @{File="src\components\home\doctors-preview.tsx"; Remove=@("MagneticButton")},
    @{File="src\components\home\hero-app-interface.tsx"; Remove=@("Heart", "Sparkles", "Pill", "Users", "ArrowRight")},
    @{File="src\components\home\hero-mosaic\service-marquee.tsx"; Remove=@("motion")},
    @{File="src\components\home\hero-revamp.tsx"; Remove=@("Sparkles", "Clock", "Globe", "useState")},
    @{File="src\components\home\hero-ultra-design.tsx"; Remove=@("Link", "ShieldCheck")},
    @{File="src\components\home\services-preview.tsx"; Remove=@("ShieldPlus")},
    @{File="src\components\ui\button.tsx"; Remove=@("Slot", "motion", "HTMLMotionProps")},
    @{File="src\components\ui\gradient-text.tsx"; Remove=@("motion")},
    @{File="src\components\ui\magnetic-button.tsx"; Remove=@("useMotionTemplate")},
    @{File="src\data\articles.ts"; Remove=@("Heart", "Sparkles")}
)

foreach ($item in $filesToClean) {
    if (Test-Path $item.File) {
        $content = Get-Content $item.File -Raw
        foreach ($import in $item.Remove) {
            $content = $content -replace ",?\s*$import", ""
        }
        Set-Content $item.File $content
        Write-Host "  ✓ Cleaned imports from: $($item.File)" -ForegroundColor Green
    }
}

Write-Host "`n✅ All fixes applied! Backup saved to: $backupDir" -ForegroundColor Cyan
