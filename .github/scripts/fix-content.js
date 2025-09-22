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

        // --- ЭТАП 1: Умное исправление синтаксиса MDX ---
        content = content.replace(/<([^>]+)>/g, (match, innerContent) => {
            const tagName = innerContent.split(/[\s>]/)[0];
            // Игнорируем валидные HTML/JSX теги, чтобы не сломать их
            if (innerContent.startsWith('/') || innerContent.endsWith('/') || innerContent.includes('=')) return match;
            if (/^[A-Z]/.test(tagName)) return match; // React-компоненты
            const knownHtmlTags = new Set(['br', 'hr', 'img', 'div', 'p', 'span', 'a', 'b', 'i', 'strong', 'em', 'code', 'pre', 'details', 'summary']);
            if (knownHtmlTags.has(tagName)) return match;

            console.log(`[FIX MDX <...>] в ${file}: исправлена конструкция "${match}"`);
            totalFixes++;
            return `\`${match}\``;
        });

        // --- ЭТАП 2: Удаление лишних закрывающих тегов ---
        // Ищет одинокий </...> на строке, где нет открывающего тега
        content = content.split('\n').map(line => {
            const closingTagMatch = line.match(/<\/([a-zA-Z]+)>/);
            if (closingTagMatch) {
                const tagName = closingTagMatch[1];
                const openingTagRegex = new RegExp(`<${tagName}`);
                if (!line.match(openingTagRegex)) {
                    console.log(`[FIX MDX /] в ${file}: удален лишний закрывающий тег "${closingTagMatch[0]}"`);
                    totalFixes++;
                    return line.replace(closingTagMatch[0], '');
                }
            }
            return line;
        }).join('\n');

        // --- ЭТАП 3: Исправление путей изображений и замена битых ссылок ---
        content = content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, altText, imagePath) => {
            if (imagePath.startsWith('http')) return match;
            try {
                let decodedPath = decodeURIComponent(imagePath);
                let cleanedPath = decodedPath.replace(/ ([a-f0-9]{32})\//, '/');
                const absPath = path.resolve(fileDir, cleanedPath);
                if (!fs.existsSync(absPath)) {
                    console.warn(`[PLACEHOLDER] Битая картинка в ${file}: "${imagePath}" -> "/img/placeholder.webp"`);
                    totalFixes++;
                    return `![${altText}](/img/placeholder.webp)`;
                }
                if (cleanedPath !== decodedPath) {
                    console.log(`[REPAIR PATH] в ${file}: "${imagePath}" -> "${cleanedPath}"`);
                    totalFixes++;
                    return `![${altText}](${cleanedPath})`;
                }
            } catch (e) {}
            return match;
        });

        // --- ЭТАП 4: Конвертация нестандартных <aside> в Admonitions ---
        content = content.replace(/````<aside>````\s*([\s\S]*?)\s*<\/aside>/g, (match, innerContent) => {
            let admonitionType = 'note';
            let title = '';
            let cleanedContent = innerContent.trim();
            if (cleanedContent.startsWith('❓')) {
                admonitionType = 'note';
                title = 'Question';
                cleanedContent = cleanedContent.replace('❓', '').trim();
            } else if (cleanedContent.startsWith('💡')) {
                admonitionType = 'tip';
                title = 'Hint';
                cleanedContent = cleanedContent.replace('💡', '').trim();
            }
            console.log(`[CONVERT ASIDE] в ${file}: конвертирован блок <aside> в :::${admonitionType}`);
            totalFixes++;
            if (title) return `:::${admonitionType}[${title}]\n\n${cleanedContent}\n\n:::`;
            return `:::${admonitionType}\n\n${cleanedContent}\n\n:::`;
        });

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
