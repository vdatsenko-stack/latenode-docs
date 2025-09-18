function fixPaths(filePath, content) {
    const fileDir = path.dirname(filePath);
    let changed = false;

    // --- Картинки ---
    content = content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, altText, imagePath) => {
        if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return match;

        const decoded = decodeURIComponent(imagePath);
        const absPath = path.resolve(fileDir, decoded);

        if (!fs.existsSync(absPath)) {
            changed = true;
            console.warn(`[ЗАМЕНА] Битая картинка в ${filePath}: ${imagePath} -> /placeholder.png`);
            return `![${altText}](/placeholder.png)`; // ← заглушка в корне
        }

        return match;
    });

    // --- Ссылки на md ---
    content = content.replace(/\[(.*?)\]\((.*?\.md)\)/g, (match, text, linkPath) => {
        const decoded = decodeURIComponent(linkPath);
        const absPath = path.resolve(fileDir, decoded);

        if (!fs.existsSync(absPath)) {
            changed = true;
            console.warn(`[ЗАМЕНА] Битая ссылка в ${filePath}: ${linkPath} -> #`);
            return `[${text}](#)`; // ← заглушка для ссылок
        }

        return match;
    });

    return changed ? content : content;
}
