// .github/scripts/fix-frontmatter.js
const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

// --- НАСТРОЙКИ ---
// Ищем все Markdown файлы во всех подпапках
const files = globSync('**/*.md', { ignore: 'node_modules/**' });

let filesFixed = 0;

console.log(`Проверка ${files.length} Markdown файлов...`);

files.forEach(file => {
  const filePath = path.resolve(file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Убираем BOM (Byte Order Mark), если он есть
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  
  // Обрезаем пробелы в начале и конце
  const trimmedContent = content.trim();

  // --- ЛОГИКА ИСПРАВЛЕНИЯ ---
  // Проверяем два условия:
  // 1. Файл начинается с '---'.
  // 2. В файле ровно один разделитель '---' (т.е. он не закрыт).
  if (trimmedContent.startsWith('---') && trimmedContent.split('---').length === 2) {
    // Находим первый пустой абзац (двойной перенос строки) после front matter.
    // Это самый надежный признак конца метаданных.
    const parts = trimmedContent.split('\n\n');
    
    // Если есть хотя бы один пустой абзац
    if (parts.length > 1) {
      // Первая часть - это наш незакрытый front matter.
      const frontMatterBlock = parts[0];
      // Все остальное - основной контент.
      const mainContent = parts.slice(1).join('\n\n');

      // Собираем исправленный файл
      const newContent = `${frontMatterBlock.trim()}\n---\n\n${mainContent}`;

      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`[ИСПРАВЛЕНО] Отсутствующий '---' в файле: ${file}`);
      filesFixed++;
    } else {
        console.log(`[ПРЕДУПРЕЖДЕНИЕ] Не удалось найти конец front matter в файле: ${file}`);
    }
  }
});

if (filesFixed > 0) {
    console.log(`\nИсправлено ${filesFixed} файлов.`);
} else {
    console.log('\nПроблем с front matter не найдено.');
}
