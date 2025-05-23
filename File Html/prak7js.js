let daftarFilm = [
    {
        judul: "Inception",
        deskripsi: "Film tentang mimpi dalam mimpi.",
        kategori: "Science Fiction",
        gambar:
            "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
        rating: 8,
        tahunTerbit: 2010,
        sutradara: "Christopher Nolan"
    },
    {
        judul: "Interstellar",
        deskripsi: "Perjalanan antar planet untuk mencari tempat tinggal baru.",
        kategori: "Science Fiction",
        gambar:
            "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        rating: 9,
        tahunTerbit: 2014,
        sutradara: "Christopher Nolan"
    },
    {
        judul: "The Matrix",
        deskripsi: "Seorang peretas komputer belajar dari pemberontak misterius tentang sifat sejati realitasnya dan perannya dalam perang melawan para pengendalinya..",
        kategori: "Science Fiction",
        gambar: "https://upload.wikimedia.org/wikipedia/id/c/c1/The_Matrix_Poster.jpg",
        rating: 8.7,
        tahunTerbit: 1999,
        sutradara: "The Wachowskis"
    }
];

const formFilm = document.getElementById("form-film");
const daftarFilmDiv = document.getElementById("daftar-film");
const judulInput = document.getElementById("judul");
const deskripsiInput = document.getElementById("deskripsi");
const kategoriInput = document.getElementById("kategori");
const gambarInput = document.getElementById("gambar");
const ratingInput = document.getElementById("rating");
const tahunTerbitInput = document.getElementById("tahun-terbit");
const sutradaraInput = document.getElementById("sutradara");
const searchFilmInput = document.getElementById("search-film"); // Added

function tampilkanDaftarFilm(films = daftarFilm) {
    daftarFilmDiv.innerHTML = "";
    films.forEach((film, index) => {
        const filmDiv = document.createElement("div");
        filmDiv.classList.add("film-card");
        filmDiv.innerHTML = `
            <img src="${film.gambar}" alt="${film.judul}">
            <h3>${film.judul}</h3>
            <p>${film.deskripsi}</p>
            <small>Kategori: ${film.kategori}</small><br>
            <small>Rating: ${film.rating}</small><br>
            <small>Tahun Terbit: ${film.tahunTerbit}</small><br>
            <small>Sutradara: ${film.sutradara}</small><br>
            <button onclick="editFilm(${index})">Edit</button>
            <button onclick="hapusFilm(${index})">Hapus</button>
        `;
        daftarFilmDiv.appendChild(filmDiv);
    });
}

function hapusFilm(index) {
    daftarFilm.splice(index, 1);
    tampilkanDaftarFilm();
}

function hapusFilm(index) {
    daftarFilm.splice(index, 1);
    tampilkanDaftarFilm();
}

function editFilm(index) {
    const film = daftarFilm[index];

    judulInput.value = film.judul;
    deskripsiInput.value = film.deskripsi;
    kategoriInput.value = film.kategori;
    gambarInput.value = film.gambar;
    ratingInput.value = film.rating || '';
    tahunTerbitInput.value = film.tahunTerbit || '';
    sutradaraInput.value = film.sutradara || '';

    formFilm.onsubmit = function (event) {
        event.preventDefault();
        film.judul = judulInput.value;
        film.deskripsi = deskripsiInput.value;
        film.kategori = kategoriInput.value;
        film.gambar = gambarInput.value;
        film.rating = ratingInput.value;
        film.tahunTerbit = tahunTerbitInput.value;
        film.sutradara = sutradaraInput.value;

        tampilkanDaftarFilm();
        formFilm.reset();
        formFilm.onsubmit = tambahFilmBaru;
    };
}

function tambahFilmBaru(event) {
    event.preventDefault();

    const filmBaru = {
        judul: judulInput.value,
        deskripsi: deskripsiInput.value,
        kategori: kategoriInput.value,
        gambar: gambarInput.value,
        rating: ratingInput.value,
        tahunTerbit: tahunTerbitInput.value,
        sutradara: sutradaraInput.value
    };

    daftarFilm.push(filmBaru);
    tampilkanDaftarFilm();
    formFilm.reset();
}

searchFilmInput.addEventListener("input", function () {   // Added
    const searchTerm = searchFilmInput.value.toLowerCase();
    const filteredFilms = daftarFilm.filter(film =>
        film.judul.toLowerCase().includes(searchTerm)
    );
    tampilkanDaftarFilm(filteredFilms);
});

formFilm.onsubmit = tambahFilmBaru;
tampilkanDaftarFilm();