import os
import re
from pathlib import Path


RE_MD_IMAGE = re.compile(r"!\[([^\]]*)\]\(([^)\s]+)(?:\s+\"[^\"]*\")?\)")
RE_MD_LINK = re.compile(r"(?<!\!)\[([^\]]+)\]\(([^)\s]+)(?:\s+\"[^\"]*\")?\)")
RE_HTML_IMG = re.compile(r"<img\s+[^>]*src=\"([^\"]+)\"[^>]*>", re.IGNORECASE)


IMAGE_EXTENSIONS = {
    ".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".bmp", ".tif", ".tiff", ".ico", ".apng"
}


def is_external_or_anchor(href: str) -> bool:
    lower = href.lower()
    return (
        lower.startswith("http://")
        or lower.startswith("https://")
        or lower.startswith("mailto:")
        or lower.startswith("tel:")
        or lower.startswith("data:")
        or lower.startswith("#")
    )


def resolve_path(base_file: Path, target: str, repo_root: Path) -> Path:
    # Absolute path relative to repo root
    if target.startswith("/"):
        return (repo_root / target.lstrip("/"))
    # Relative to the current file's directory
    return (base_file.parent / target)


def target_exists(resolved: Path) -> bool:
    try:
        return resolved.exists()
    except OSError:
        return False


def is_image_path(path_str: str, is_markdown_image: bool) -> bool:
    if is_markdown_image:
        return True
    ext = Path(path_str.split("?", 1)[0].split("#", 1)[0]).suffix.lower()
    return ext in IMAGE_EXTENSIONS


def replace_in_text_md(file_path: Path, text: str, repo_root: Path):
    replacements = 0

    # Handle Markdown images
    def _repl_img(match: re.Match):
        nonlocal replacements
        alt_text, href = match.group(1), match.group(2)
        if is_external_or_anchor(href):
            return match.group(0)
        resolved = resolve_path(file_path, href, repo_root)
        if target_exists(resolved):
            return match.group(0)
        replacements += 1
        return f"![{alt_text}](/placeholder.png)"

    text = RE_MD_IMAGE.sub(_repl_img, text)

    # Handle Markdown links (non-images)
    def _repl_link(match: re.Match):
        nonlocal replacements
        link_text, href = match.group(1), match.group(2)
        if is_external_or_anchor(href):
            return match.group(0)
        # If it actually points to an image by extension, treat as image
        if is_image_path(href, is_markdown_image=False):
            resolved = resolve_path(file_path, href, repo_root)
            if target_exists(resolved):
                return match.group(0)
            replacements += 1
            return f"[{link_text}](/placeholder.png)"
        resolved = resolve_path(file_path, href, repo_root)
        if target_exists(resolved):
            return match.group(0)
        replacements += 1
        return f"[{link_text}](/introduction.md)"

    text = RE_MD_LINK.sub(_repl_link, text)

    # Handle HTML <img> tags
    def _repl_html_img(match: re.Match):
        nonlocal replacements
        src = match.group(1)
        if is_external_or_anchor(src):
            return match.group(0)
        resolved = resolve_path(file_path, src, repo_root)
        if target_exists(resolved):
            return match.group(0)
        replacements += 1
        # Replace only the src attribute value
        original = match.group(0)
        return original.replace(src, "/placeholder.png")

    text = RE_HTML_IMG.sub(_repl_html_img, text)

    return text, replacements


def process_markdown_files(repo_root: Path, check_only: bool = False):
    total_files = 0
    changed_files = 0
    total_replacements = 0

    for root, _, files in os.walk(repo_root):
        for fname in files:
            if not fname.lower().endswith((".md", ".mdx")):
                continue
            file_path = Path(root) / fname
            # Skip files in .git or node_modules if present
            if any(part in {".git", "node_modules"} for part in file_path.parts):
                continue

            total_files += 1
            try:
                original = file_path.read_text(encoding="utf-8")
            except UnicodeDecodeError:
                try:
                    original = file_path.read_text(encoding="utf-16")
                except Exception:
                    continue
            except Exception:
                continue

            updated, reps = replace_in_text_md(file_path, original, repo_root)
            if reps > 0 and updated != original:
                if not check_only:
                    file_path.write_text(updated, encoding="utf-8")
                changed_files += 1
                total_replacements += reps

    return total_files, changed_files, total_replacements


def main():
    import argparse
    parser = argparse.ArgumentParser(description="Fix or check broken Markdown image/link paths.")
    parser.add_argument("--check", action="store_true", help="Scan only; do not modify files. Non-zero exit if broken refs found.")
    args = parser.parse_args()

    repo_root = Path(__file__).resolve().parents[1]
    intro = repo_root / "introduction.md"
    placeholder = repo_root / "placeholder.png"
    if not intro.exists():
        print("WARNING: /introduction.md not found at repo root.")
    if not placeholder.exists():
        print("WARNING: /placeholder.png not found at repo root.")

    total_files, changed_files, total_replacements = process_markdown_files(repo_root, check_only=args.check)
    print(f"Scanned Markdown files: {total_files}")
    if args.check:
        print(f"Files with issues: {changed_files}")
        print(f"Broken paths detected: {total_replacements}")
        if total_replacements > 0:
            raise SystemExit(1)
        return
    print(f"Files changed: {changed_files}")
    print(f"Broken paths replaced: {total_replacements}")


if __name__ == "__main__":
    main()


