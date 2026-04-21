# Masjid Al-Hamd — Onepage Website

Website sederhana untuk Masjid Al-Hamd (onepage) dengan carousel, info KAS, kegiatan, kebutuhan, dan halaman posting sederhana.

How to run locally:

```bash
# dari folder project
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

Deploy ke GitHub Pages (pilihan):

- Cara mudah: pada repository GitHub → Settings → Pages → Source: `main` branch, folder `/ (root)` → Save. File akan dipublikasikan pada `https://<username>.github.io/<repo>`.
- Alternatif: buat branch `gh-pages` dan push build ke branch tersebut.

Pastikan semua file (index.html, styles.css, script.js, images/, posts/) ada di root repo.
# al-hamd