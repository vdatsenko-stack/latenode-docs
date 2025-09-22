// .github/scripts/fix-content.js
const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

function fixContent() {
    const files = globSync('**/*.md', { ignore: 'node_modules/**' });
    let totalFixes = 0;

    console.log(`Проверка и исправление ${files.length} Markdown файлов...`);

    files.forEach(file => {
        const filePath = path.resolve(file);
        const fileDir = path.dirname(filePath);
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;

        // --- ЭТАП 1: Умное исправление синтаксиса MDX (<...>) ---
        content = content.replace(/<([^>/\s]+)>/g, (match, innerContent) => {
            // Это регулярное выражение ищет <слово> но игнорирует <слово с пробелом> или </слово>
            // Это безопасный способ исправить только плейсхолдеры.
            console.log(`[FIX MDX] в ${file}: исправлена конструкция "${match}"`);
            totalFixes++;
            return `\`${match}\``;
        });


        // --- ЭТАП 2: Исправление путей изображений и замена битых ссылок ---
        content = content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, altText, imagePath) => {
            if (imagePath.startsWith('http')) return match; // Игнорируем внешние ссылки

            try {
                let decodedPath = decodeURIComponent(imagePath);
                // Удаляем хеш, который Notion добавляет к папкам с изображениями
                let cleanedPath = decodedPath.replace(/ ([a-f0-9]{32})\//, '/');

                // Проверяем, существует ли файл по очищенному пути
                const absPath = path.resolve(fileDir, cleanedPath);
                if (!fs.existsSync(absPath)) {
                    // Если файла нет, заменяем на универсальную заглушку
                    console.warn(`[PLACEHOLDER] Битая картинка в ${file}: "${imagePath}" -> "/img/placeholder.webp"`);
                    totalFixes++;
                    // ВАЖНО: Docusaurus поймет этот путь как static/img/placeholder.webp
                    return `![${altText}](/img/placeholder.webp)`;
                }

                if (cleanedPath !== decodedPath) {
                    console.log(`[REPAIR PATH] в ${file}: "${imagePath}" -> "${cleanedPath}"`);
                    totalFixes++;
                    return `![${altText}](${cleanedPath})`;
                }

            } catch (e) { /* Игнорируем ошибки */ }
            return match;
        });

        // Сохраняем файл, только если были изменения
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
        }
    });

    if (totalFixes > 0) {
        console.log(`\nАвтоматически исправлено ${totalFixes} проблем.`);
    }
    console.log('Проверка и исправление завершены.');
}

fixContent();
