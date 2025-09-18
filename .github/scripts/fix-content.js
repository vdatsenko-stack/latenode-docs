const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

function fixFrontMatter(filePath, content) {
    // ... (весь ваш предыдущий код для исправления front matter)
    const lines = content.split('\n');
    if (lines.length > 0 && lines[0].trim() === '---') {
        let firstDelimiterIndex = 0;
        let secondDelimiterIndex = -1;
        for (let i = 1; i < lines.length; i++) {
            if (lines[i].trim() === '---') {
                secondDelimiterIndex = i;
                break;
            }
        }
        if (secondDelimiterIndex <= firstDelimiterIndex) return content;
        
        const firstDelimiterHasError = lines[firstDelimiterIndex] !== '---';
        const secondDelimiterHasError = lines[secondDelimiterIndex] !== '---';
        
        if (firstDelimiterHasError || secondDelimiterHasError) {
            lines[firstDelimiterIndex] = '---';
            lines[secondDelimiterIndex] = '---';
            console.log(`[ИСПРАВЛЕНО] Некорректный разделитель '---' в файле: ${filePath}`);
            return lines.join('\n');
        }
    }
    return content;
}

function fixImagePaths(filePath, content) {
    const fileDir = path.dirname(filePath);
    let changed = false;

    // Регулярное выражение для поиска Markdown ссылок на изображения
    // Пример: ![alt text](path/to/image.png)
    const regex = /!\[(.*?)\]\((.*?)\)/g;

    const newContent = content.replace(regex, (match, altText, imagePath) => {
        // Игнорируем абсолютные URL
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
            return match;
        }

        // Декодируем URL-кодированные символы (например, %20 для пробела)
        let decodedPath = decodeURIComponent(imagePath);

        // Убираем возможный префикс, который мог остаться от старой структуры
        const prefixesToRemove = [
            'platform-documentation/', 
            'documentation/', 
            'integrations/', 
            'white_label/', 
            'changelog/'
        ];
        prefixesToRemove.forEach(prefix => {
            if (decodedPath.startsWith(prefix)) {
                decodedPath = decodedPath.substring(prefix.length);
            }
        });
        
        // Удаляем "хвосты" с хешами, которые часто добавляет Notion
        // Например: "My Image Folder 1a2b3c4d/image.png" -> "My Image Folder/image.png"
        decodedPath = decodedPath.replace(/ [a-f0-9]{32}\//g, '/');

        // Строим новый, относительный путь
        const newPath = `./${path.basename(decodedPath)}`;
        const fullNewPath = path.join(fileDir, newPath);

        // Проверяем, существует ли файл по предполагаемому новому пути
        // (Это сложная проверка для CI, поэтому пока просто заменяем)
        // Мы предполагаем, что изображения лежат в папке с таким же названием, как у md-файла

        if (imagePath !== newPath) {
            changed = true;
            console.log(`[ИСПРАВЛЕНО] Путь к изображению в ${filePath}: "${imagePath}" -> "${newPath}"`);
            return `![${altText}](${newPath})`;
        }

        return match;
    });

    if (changed) {
        return newContent;
    }
    return content;
}


// --- ОСНОВНОЙ ЦИКЛ ---
const files = globSync('**/*.md', { ignore: 'node_modules/**' });
console.log(`Проверка и исправление ${files.length} Markdown файлов...`);

files.forEach(file => {
  const filePath = path.resolve(file);
  let originalContent = fs.readFileSync(filePath, 'utf8');
  let content = originalContent;

  content = fixFrontMatter(filePath, content);
  content = fixImagePaths(filePath, content);

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log('Проверка и исправление завершены.');
