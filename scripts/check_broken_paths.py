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
    if target.startswith("/"):
        return repo_root / target.lstrip("/")
    return base_file.parent / target


def is_image_path(path_str: str, is_markdown_image: bool) -> bool:
    if is_markdown_image:
        return True
    ext = Path(path_str.split("?", 1)[0].split("#", 1)[0]).suffix.lower()
    return ext in IMAGE_EXTENSIONS


def collect_broken(repo_root: Path):
    broken = []  # list of (file, kind, text, target)
    total_files = 0
    for root, _, files in os.walk(repo_root):
        for fname in files:
            if not fname.lower().endswith((".md", ".mdx")):
                continue
            file_path = Path(root) / fname
            if any(part in {".git", "node_modules"} for part in file_path.parts):
                continue
            total_files += 1
            try:
                text = file_path.read_text(encoding="utf-8")
            except UnicodeDecodeError:
                try:
                    text = file_path.read_text(encoding="utf-16")
                except Exception:
                    continue
            except Exception:
                continue

            # Markdown images
            for m in RE_MD_IMAGE.finditer(text):
                href = m.group(2)
                if is_external_or_anchor(href):
                    continue
                resolved = resolve_path(file_path, href, repo_root)
                if not resolved.exists():
                    broken.append((str(file_path), "image", m.group(0), href))

            # Markdown links
            for m in RE_MD_LINK.finditer(text):
                href = m.group(2)
                if is_external_or_anchor(href):
                    continue
                # If link is actually an image by extension, treat as image
                if is_image_path(href, is_markdown_image=False):
                    resolved = resolve_path(file_path, href, repo_root)
                    if not resolved.exists():
                        broken.append((str(file_path), "image", m.group(0), href))
                    continue
                # Accept extensionless links if a corresponding .md or .mdx exists
                resolved = resolve_path(file_path, href, repo_root)
                if not resolved.exists():
                    # Try with .md or .mdx appended
                    if not (resolved.with_suffix(".md").exists() or resolved.with_suffix(".mdx").exists()):
                        broken.append((str(file_path), "link", m.group(0), href))

            # HTML <img>
            for m in RE_HTML_IMG.finditer(text):
                src = m.group(1)
                if is_external_or_anchor(src):
                    continue
                resolved = resolve_path(file_path, src, repo_root)
                if not resolved.exists():
                    broken.append((str(file_path), "image", m.group(0), src))

    return total_files, broken


def main():
    repo_root = Path(__file__).resolve().parents[1]
    total_files, broken = collect_broken(repo_root)
    if not broken:
        print(f"OK: scanned {total_files} Markdown files, no broken internal links/images found.")
        return
    print(f"Found {len(broken)} broken references in {total_files} files:")
    for file_path, kind, text, target in broken:
        print(f"- {kind.upper()} | {file_path} -> {target}")
    raise SystemExit(1)


if __name__ == "__main__":
    main()


