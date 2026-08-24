import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <h1 className="mb-12 text-2xl font-semibold tracking-tighter">
        Andreas Putera, PhD
      </h1>

      <div className="relative mb-8 h-64 w-full overflow-hidden rounded-xl">
  <Image
    src="/eyes.jpg"
    alt="Andreas Putera"
    fill
    priority
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover"
  />
</div>
      <p className="mb-4">
        {`Halo para pembaca sekalian! Saya Andreas Putera, seorang akademisi di bidang material dan metalurgi, khususnya pirometalurgi, yang sudah menggeluti bidang ini sejak 2016. Saat ini saya bekerja sebagai Research Fellow di University of Wollongong, Australia. Saya memiliki background sarjana di Teknik Kimia Universitas Gadjah Mada, sebelum selanjutnya Master’s degree di The University of Auckland dan PhD di Swinburne University. Blog ini saya tulis untuk mencurahkan pikiran seputar perjalanan hidup saya. Hal ini bisa mencakup edukasi, karir, sampai kehidupan pribadi seperti percintaan. Seperti yang ditulis oleh Raditya Dika dalam blog berjudul “Catatan tentang membaca” di 18 Januari 2026, `}
      </p>

      
<blockquote className="my-4 border-l-4 border-gray-300 pl-4 italic">
  &ldquo;Membaca itu adalah return investment terbaik yang bisa kita lakukan&rdquo;
</blockquote>


<p className="mb-4">
          {`Dalam tulisannya, Ia menjelaskan betapa banyaknya waktu yang harus seseorang alokasikan untuk membuat sebuah tulisan dari pengalamannya sendiri (first-hand experience), proses berpikir, review, editing, hingga akhirnya dipublikasi. Dan semua proses tersebut dapat kita lahap dalam waktu hitungan hari atau bahkan jam. Setelah membaca hal tersebut, Aku pun berpikir, “Oh ya, bayangkan betapa banyaknya waktu yang harus aku lalui untuk mencapai posisi ini sekarang ya?” Kuliah sarjana, master, dan kemudian doktoral. Semuanya butuh waktu yang sangat panjang. `}

      </p>

<p className="mb-4">
          {`Web ini akan memuat semua cerita dari mulai pengalaman akademik, profesional, hingga kehidupan pribadi (khususnya ketika memutuskan menikah, berpasangan dan menjadi orang tua). Mudah-mudahan tulisan saya bisa memberi manfaat bagi banyak orang yang sedang membutuhkan. `}

      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
