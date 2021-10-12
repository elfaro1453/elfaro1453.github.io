# elfaro1453.github.io

Project ini dibuat menggunakan GatsbyJS, anda membutuhkan node versi 16.x.x dan npm versi 7.x.x untuk bisa optimal dalam mengerjakan project ini.

**Cara menjalankan project ini di local anda.**

## Git Clone This Project

1. Buka sebuah folder di finder / explorer
2. Klik kanan pilih open in terminal / open powershell
3. Jalankan kode `git clone https://github.com/elfaro1453/elfaro1453.github.io.git`
4. Setelah git clone selesai, akan ada folder bernama `elfaro1453.github.io`,
5. Buka folder tersebut, klik kanan > open in terminal

## Membuat Github Pages

Github Pages akan digunakan sebagai tempat hosting GatsbyJS website.

1. Buat sebuah repository dengan nama `username.github.io` , `username` diganti dengan nama username github anda, semisal github saya ini usernamenya `elfaro1453` maka nama repositorynya `elfaro1453.github.io`
2. Ketika membuat repository, anda hanya perlu memasukkan nama saja, pengaturan lain dibiarkan saja
3. Setelah repository terbuat, copy url git repositorynya, **Contoh** repository ini adalah `https://github.com/elfaro1453/elfaro1453.github.io.git`

## Ubah Remote URL Git Local

Ketika anda melakukan git clone pada repository ini, maka remote url yang digunakan masih menggunakan repository ini, sehingga perlu diganti dengan remote url dari repository yang telah anda buat di langkah sebelumnya.

1. Buka terminal dari langkah **Git Clone This Project** di atas.
2. cek remote repository yang digunakan oleh project dengan menjalankan kode `git remote -v`
3. Jika dari langkah 2 di atas url remote repository masih `https://github.com/elfaro1453/elfaro1453.github.io.git` , maka kita perlu menggantinya
4. Ganti url remote repository dengan menjalankan kode berikut `git remote set-url origin https://github.com/username/username.github.io.git`, **Ganti username dengan username github anda**
5. Cek kembali remote url dengan menjalankan kode `git remote -v`

## NPM Install

Anda akan melihat bahwasanya hanya ada folder src, maka kita perlu menginstall dan mengkonfigurasi project agar bisa digunakan kembali.

1. Buka terminal dari langkah sebelumnya
2. Jalankan `npm run start` untuk memulai project Gatsby secara local.
3. Setelah server jalan, buka url `http://localhost:8000/` di browser

Happy Hacking !