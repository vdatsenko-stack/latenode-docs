const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

const files = globSync('**/*.md', { ignore: 'node_modules/**' });
let filesFixed = 0;

console.log(`Проверка ${files.length} Markdown файлов на корректность front matter...`);

files.forEach(file => {
  const filePath = path.resolve(file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Убираем BOM, если он есть
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }

  const lines = content.split('\n');

  // Проверяем, начинается ли файл с front matter
  if (lines.length > 0 && lines[0].trim() === '---') {
    let firstDelimiterIndex = 0;
    let secondDelimiterIndex = -1;

    // Ищем второй разделитель, начиная со второй строки
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === '---') {
        secondDelimiterIndex = i;
        break;
      }
    }

    // Если второй разделитель не найден или он совпадает с первым,
    // это может быть старая ошибка (незакрытый блок)
    if (secondDelimiterIndex <= firstDelimiterIndex) {
      // Здесь можно оставить старую логику или просто проигнорировать,
      // так как основная проблема сейчас другая. Для чистоты оставим лог.
      console.log(`[ПРЕДУПРЕЖДЕНИЕ] Не найден корректный второй разделитель в файле: ${file}`);
      return; // Переходим к следующему файлу
    }

    // --- НОВАЯ ЛОГИКА ИСПРАВЛЕНИЯ ---
    // Проверяем, были ли пробелы в строках с разделителями
    const firstDelimiterHasError = lines[firstDelimiterIndex] !== '---';
    const secondDelimiterHasError = lines[secondDelimiterIndex] !== '---';
    
    if (firstDelimiterHasError || secondDelimiterHasError) {
      // Приводим строки к каноническому виду '---'
      lines[firstDelimiterIndex] = '---';
      lines[secondDelimiterIndex] = '---';

      const newContent = lines.join('\n');
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`[ИСПРАВЛЕНО] Некорректный разделитель '---' в файле: ${file}`);
      filesFixed++;
    }
  }
});

if (filesFixed > 0) {
  console.log(`\nИсправлено ${filesFixed} файлов.`);
} else {
  console.log('\nПроблем с форматированием front matter не найдено.');
}
