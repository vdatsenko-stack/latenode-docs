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

        // --- ЭТАП 1: Попытка активного исправления путей (логика из моего скрипта) ---
        content = content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, altText, imagePath) => {
            if (imagePath.startsWith('http')) return match;
            try {
                let decodedPath = decodeURIComponent(imagePath);
                // Удаляем хеш, который Notion добавляет к папкам с изображениями
                let cleanedPath = decodedPath.replace(/ ([a-f0-9]{32})\//, '/');
                if (!cleanedPath.startsWith('./') && cleanedPath.includes('/')) {
                    cleanedPath = `./${cleanedPath}`;
                }
                if (cleanedPath !== decodedPath) {
                    console.log(`[REPAIR ATTEMPT] в ${file}: "${imagePath}" -> "${cleanedPath}"`);
                    return `![${altText}](${cleanedPath})`;
                }
            } catch (e) { /* Игнорируем ошибки декодирования */ }
            return match;
        });

        // --- ЭТАП 2: Замена оставшихся битых ссылок на заглушки (ваша логика) ---
        // Картинки
        content = content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, altText, imagePath) => {
            if (imagePath.startsWith('http')) return match;
            try {
                const decodedPath = decodeURIComponent(imagePath);
                const absPath = path.resolve(fileDir, decodedPath);
                if (!fs.existsSync(absPath)) {
                    totalFixes++;
                    console.warn(`[PLACEHOLDER] Битая картинка в ${file}: "${imagePath}" -> "/placeholder.webp"`);
                    return `![${altText}](/img/placeholder.webp)`; // Ссылка на заглушку в static/img
                }
            } catch (e) { /* Игнорируем ошибки */ }
            return match;
        });

        // Ссылки на другие .md файлы
        content = content.replace(/\[(.*?)\]\((.*?\.md.*?)\)/g, (match, text, linkPath) => {
            if (linkPath.startsWith('http')) return match;
            try {
                // Убираем якоря из пути для проверки файла
                const pathWithoutAnchor = linkPath.split('#')[0];
                const decodedPath = decodeURIComponent(pathWithoutAnchor);
                const absPath = path.resolve(fileDir, decodedPath);
                if (pathWithoutAnchor && !fs.existsSync(absPath)) {
                    totalFixes++;
                    console.warn(`[PLACEHOLDER] Битая ссылка в ${file}: "${linkPath}" -> "#"`);
                    return `[${text}](#broken-link-was-here)`;
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
        console.log(`\nЗаменено на заглушки ${totalFixes} битых ссылок.`);
    }
    console.log('Проверка и исправление завершены.');
}

// Запускаем
fixContent();
