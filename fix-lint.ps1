#!/usr/bin/env pwsh

# Fix all remaining lint errors systematically

# Philosophy Section - Fix apostrophes
(Get-Content "src\components\doctors\philosophy-section.tsx") -replace "family's well-being", "family&apos;s well-being" -replace "It's not", "It&apos;s not" | Set-Content "src\components\doctors\philosophy-section.tsx"

# Cinematic Display - Fix missing dependency
$content = Get-Content "src\components\home\hero-mosaic\cinematic-display.tsx" -Raw
$content -replace '(\s+), \[\]\);', '$1, [scenes.length]);' | Set-Content "src\components\home\hero-mosaic\cinematic-display.tsx"

# Hero - Fix apostrophe
(Get-Content "src\components\home\hero.tsx") -replace "Narela's Multispecialty", "Narela&apos;s Multispecialty" | Set-Content "src\components\home\hero.tsx"

# Testimonials - Fix quotes
(Get-Content "src\components\home\testimonials.tsx") -replace '"\{quote\}"', '&ldquo;{quote}&rdquo;' | Set-Content "src\components\home\testimonials.tsx"

# Articles.ts - Just remove unused imports (not directly fixable via replace, need manual edit)

Write-Host "Basic fixes applied. Some files may need manual intervention." -ForegroundColor Green
