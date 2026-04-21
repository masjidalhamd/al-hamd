# GitHub Pages Setup Instructions

## 📋 Informasi Repository
- **Repository**: masjidalhamd/al-hamd
- **Branch**: main
- **URL GitHub**: https://github.com/masjidalhamd/al-hamd

---

## 🚀 Cara Mengaktifkan GitHub Pages

### Option 1: Menggunakan GitHub Web GUI (Recommended)

1. **Buka repository di GitHub**
   - Kunjungi: https://github.com/masjidalhamd/al-hamd

2. **Pergi ke Settings**
   - Klik tab **Settings** (icon gear)

3. **Cari bagian Pages**
   - Di sidebar kiri, scroll ke bawah
   - Klik **Pages** (atau cari "Pages" di search)

4. **Konfigurasi Build and Deployment**
   - **Source**: Pilih **"Deploy from a branch"**
   - **Branch**: Pilih **main**
   - **Folder**: Pilih **/ (root)**
   - Klik **Save**

5. **Tunggu deployment selesai**
   - GitHub akan memproses deployment (biasanya 1-2 menit)
   - Refresh halaman untuk melihat status

---

## 🌐 Akses Website

Setelah GitHub Pages aktif, website bisa diakses di:

```
https://masjidalhamd.github.io/al-hamd
```

---

## ✅ Verifikasi Deployment

1. Go to: https://github.com/masjidalhamd/al-hamd/settings/pages
2. Cari pesan: **"Your site is published at https://masjidalhamd.github.io/al-hamd"**
3. Klik link untuk mengecek website live

---

## 📝 Additional Info

- **Type**: Static Site (HTML, CSS, JavaScript)
- **Build Tool**: None (GitHub Pages akan serve file langsung)
- **Branch**: Main (latest changes)
- **Update**: Setiap kali push ke main, GitHub Pages otomatis re-deploy

---

## 🔄 Workflow Selanjutnya

1. Edit file lokal
2. Commit changes: `git add -A && git commit -m "message"`
3. Push ke GitHub: `git push origin main`
4. GitHub Pages otomatis update dalam 1-2 menit

---

## 📞 Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Website tidak muncul | Tunggu 2-3 menit, refresh GitHub Pages settings |
| 404 Error | Pastikan Settings > Pages sudah diatur ke branch main |
| Gambar tidak muncul | Cek path images di HTML (case-sensitive) |

---

**Last Updated**: April 21, 2026
**Status**: ✅ Ready for GitHub Pages
