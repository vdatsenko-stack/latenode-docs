// .github/scripts/fix-content.js
const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

function fixContent() {
    const files = globSync('**/*.md', { ignore: 'node_modules/**' });

    console.log(`Проверка и исправление ${files.length} Markdown файлов...`);

    files.forEach(file => {
        const filePath = path.resolve(file);
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;

        // --- ЭТАП 1: Исправление путей изображений из Notion (ОСТАВЛЯЕМ, ЭТО ПОЛЕЗНО) ---
        content = content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, altText, imagePath) => {
            if (imagePath.startsWith('http')) return match;
            try {
                let decodedPath = decodeURIComponent(imagePath);
                let cleanedPath = decodedPath.replace(/ ([a-f0-9]{32})\//, '/');
                if (!cleanedPath.startsWith('./') && cleanedPath.includes('/')) {
                    cleanedPath = `./${cleanedPath}`;
                }
                if (cleanedPath !== decodedPath) {
                    console.log(`[REPAIR PATH] в ${file}: "${imagePath}" -> "${cleanedPath}"`);
                    return `![${altText}](${cleanedPath})`;
                }
            } catch (e) { /* Игнорируем ошибки */ }
            return match;
        });

        // --- ЭТАП 2: Замена битых ссылок на заглушки (ОТКЛЮЧЕНО) ---
        // Эта логика была слишком агрессивной в среде GitHub Actions.
        // Мы ее временно отключаем, чтобы она не мешала сборке.
        /*
        const fileDir = path.dirname(filePath);
        // Картинки
        content = content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, altText, imagePath) => {
            if (imagePath.startsWith('http')) return match;
            try {
                const decodedPath = decodeURIComponent(imagePath);
                const absPath = path.resolve(fileDir, decodedPath);
                if (!fs.existsSync(absPath)) {
                    console.warn(`[PLACEHOLDER] Битая картинка в ${file}: "${imagePath}" -> "/placeholder.webp"`);
                    return `![${altText}](/img/placeholder.webp)`;
                }
            } catch (e) { }
            return match;
        });
        // Ссылки
        content = content.replace(/\[(.*?)\]\((.*?\.md.*?)\)/g, (match, text, linkPath) => {
            if (linkPath.startsWith('http')) return match;
            try {
                const pathWithoutAnchor = linkPath.split('#')[0];
                const decodedPath = decodeURIComponent(pathWithoutAnchor);
                const absPath = path.resolve(fileDir, decodedPath);
                if (pathWithoutAnchor && !fs.existsSync(absPath)) {
                    console.warn(`[PLACEHOLDER] Битая ссылка в ${file}: "${linkPath}" -> "#"`);
                    return `[${text}](#broken-link-was-here)`;
                }
            } catch (e) { }
            return match;
        });
        */


        // --- НОВЫЙ ЭТАП 3: Исправление синтаксиса MDX ---
        // Эта функция ищет все конструкции <...>, которые не являются валидными HTML/JSX тегами,
        // и оборачивает их в обратные кавычки (`), чтобы они воспринимались как код.
        content = content.replace(/<([^>]+)>/g, (match, innerContent) => {
            // Игнорируем закрывающие теги (</...>)
            if (innerContent.startsWith('/')) {
                return match;
            }
            // Игнорируем теги с атрибутами (содержат =)
            if (innerContent.includes('=')) {
                return match;
            }
            // Игнорируем самозакрывающиеся теги (.../>)
            if (innerContent.endsWith('/')) {
                return match;
            }
            // Игнорируем известные React-компоненты (начинаются с большой буквы)
            const tagName = innerContent.split(' ')[0];
            if (tagName && /^[A-Z]/.test(tagName)) {
                return match;
            }
            // Игнорируем известные HTML теги
            const knownHtmlTags = new Set(['br', 'hr', 'img', 'div', 'p', 'span', 'a', 'b', 'i', 'strong', 'em', 'code', 'pre']);
            if (knownHtmlTags.has(tagName)) {
                 return match;
            }

            // Если все проверки не прошли, это наш "сломанный" синтаксис. Исправляем его!
            console.log(`[FIX MDX] в ${file}: найдена и исправлена конструкция "${match}"`);
            return `\`${match}\``;
        });


        // Сохраняем файл, только если были изменения
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
        }
    });

    console.log('Проверка и исправление завершены.');
}

fixContent();
