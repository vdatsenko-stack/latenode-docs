# analyze_structure.py

import os

# --- НАСТРОЙКИ ---
# Укажите путь к вашей папке с документацией.
# Если скрипт лежит в корне проекта, 'docs' - это правильный путь.
DOCS_DIR = 'docs'
# -----------------

def print_directory_tree(root_dir, prefix=""):
    """
    Рекурсивно обходит директорию и печатает ее структуру,
    отделяя папки и markdown-файлы.
    """
    # Получаем список файлов и папок
    try:
        items = os.listdir(root_dir)
        # Сортируем, чтобы папки шли раньше файлов
        items.sort(key=lambda x: not os.path.isdir(os.path.join(root_dir, x)))
    except FileNotFoundError:
        print(f"ОШИБКА: Директория '{root_dir}' не найдена!")
        return

    for i, name in enumerate(items):
        path = os.path.join(root_dir, name)
        
        # Пропускаем скрытые файлы и сам файл .pages
        if name.startswith('.') or name == '.pages':
            continue

        # Определяем символы для древовидной структуры
        is_last = (i == len(items) - 1)
        connector = "└── " if is_last else "├── "
        
        if os.path.isdir(path):
            print(f"{prefix}{connector}📁 {name}/")
            # Рекурсивный вызов для вложенной папки
            new_prefix = prefix + ("    " if is_last else "│   ")
            print_directory_tree(path, new_prefix)
        elif name.endswith('.md'):
            print(f"{prefix}{connector}📄 {name}")


if __name__ == "__main__":
    print(f"--- Анализ структуры папки '{DOCS_DIR}' ---\n")
    if os.path.isdir(DOCS_DIR):
        print(f"📁 {DOCS_DIR}/")
        print_directory_tree(DOCS_DIR)
        print("\n--- Анализ завершен ---")
        print("\nТеперь используйте эту структуру для создания вашего файла 'docs/.pages'.")
    else:
        print(f"ОШИБКА: Не могу найти папку '{DOCS_DIR}'.")
        print("Убедитесь, что скрипт запущен из корневой папки вашего проекта MkDocs.")