// ─── CATEGORIES ──────────────────────────────────────────────────────────────

export const CATEGORIES = {
  home:      { label: "Inicio" },
  tienda:    { label: "Tienda" },
  perros:    { label: "Perros" },
  gatos:     { label: "Gatos" },
  aves:      { label: "Aves" },
  peces:     { label: "Peces" },
  alimento:  { label: "Alimento" },
  juguetes:  { label: "Juguetes" },
  accesorios:{ label: "Accesorios" },
  camas:     { label: "Camas & Casas" },
  jaulas:    { label: "Jaulas" },
  decoracion:{ label: "Decoración" },
  peceras:   { label: "Peceras" },
};

// ─── PAGES (breadcrumb hierarchy) ────────────────────────────────────────────

export const PAGES = {
  home:              { breadcrumb: ["home"],                                           title: "Inicio" },
  tienda:            { breadcrumb: ["home", "tienda"],                                 title: "Tienda" },
  perros:            { breadcrumb: ["home", "tienda", "perros"],                       title: "Perros" },
  gatos:             { breadcrumb: ["home", "tienda", "gatos"],                        title: "Gatos" },
  aves:              { breadcrumb: ["home", "tienda", "aves"],                         title: "Aves" },
  peces:             { breadcrumb: ["home", "tienda", "peces"],                        title: "Peces" },
  // Perros
  alimento_perros:   { breadcrumb: ["home", "tienda", "perros", "alimento"],           title: "Alimento para Perros" },
  juguetes_perros:   { breadcrumb: ["home", "tienda", "perros", "juguetes"],           title: "Juguetes para Perros" },
  accesorios_perros: { breadcrumb: ["home", "tienda", "perros", "accesorios"],         title: "Accesorios para Perros" },
  camas_perros:      { breadcrumb: ["home", "tienda", "perros", "camas"],              title: "Camas & Casas para Perros" },
  // Gatos
  alimento_gatos:    { breadcrumb: ["home", "tienda", "gatos", "alimento"],            title: "Alimento para Gatos" },
  juguetes_gatos:    { breadcrumb: ["home", "tienda", "gatos", "juguetes"],            title: "Juguetes para Gatos" },
  accesorios_gatos:  { breadcrumb: ["home", "tienda", "gatos", "accesorios"],          title: "Accesorios para Gatos" },
  camas_gatos:       { breadcrumb: ["home", "tienda", "gatos", "camas"],               title: "Camas para Gatos" },
  // Aves
  alimento_aves:     { breadcrumb: ["home", "tienda", "aves", "alimento"],             title: "Alimento para Aves" },
  juguetes_aves:     { breadcrumb: ["home", "tienda", "aves", "juguetes"],             title: "Juguetes para Aves" },
  jaulas_aves:       { breadcrumb: ["home", "tienda", "aves", "jaulas"],               title: "Jaulas para Aves" },
  // Peces
  alimento_peces:    { breadcrumb: ["home", "tienda", "peces", "alimento"],            title: "Alimento para Peces" },
  decoracion_peces:  { breadcrumb: ["home", "tienda", "peces", "decoracion"],          title: "Decoración para Peces" },
  peceras_peces:     { breadcrumb: ["home", "tienda", "peces", "peceras"],             title: "Peceras" },
};

// ─── FEATURED CATEGORIES ──────────────────────────────────────────────────────

export const FEATURED_CATEGORIES = [
  { key: "perros", image: "/img/dog.png",  color: "#FF6B35", label: "Perros" },
  { key: "gatos",  image: "/img/cat.png",  color: "#A855F7", label: "Gatos" },
  { key: "aves",   image: "/img/bird.png", color: "#22C55E", label: "Aves" },
  { key: "peces",  image: "/img/fih.png",  color: "#3B82F6", label: "Peces" },
];

// ─── DOG SUBCATEGORIES ────────────────────────────────────────────────────────

export const DOG_SUBCATEGORIES = [
  { key: "alimento_perros",   image: "https://centrosveterinariosmascoteros.com/wp-content/uploads/2015/04/perro-comiendo-cachorro.jpg", label: "Alimento",      color: "#FF6B35" },
  { key: "juguetes_perros",   image: "https://images.ctfassets.net/82d3r48zq721/r0ScftLsdRn5wEbSM7nUY/f28472f52a22defbd3791988935830a6/Puppy-chewing-dog-toy_resized.jpg?w=800&q=50",     label: "Juguetes",      color: "#FF6B35" },
  { key: "accesorios_perros", image: "https://www.hartz.com/wp-content/uploads/2022/11/pet-accessories-3.jpg",                 label: "Accesorios",    color: "#FF6B35" },
  { key: "camas_perros",      image: "https://m.media-amazon.com/images/I/710uiulUmaL._AC_UF1000,1000_QL80_.jpg",              label: "Camas & Casas", color: "#FF6B35" },
];

// ─── CAT SUBCATEGORIES ────────────────────────────────────────────────────────

export const CAT_SUBCATEGORIES = [
  { key: "alimento_gatos",   image: "https://e1.nmcdn.io/anicira/wp-content/uploads/2021/03/shutterstock_1692288550-scaled.jpg/v:1-width:600-height:411-fit:cover/shutterstock_1692288550-scaled.webp?signature=e0325d7d", label: "Alimento",   color: "#A855F7" },
  { key: "juguetes_gatos",   image: "https://www.profeline-shop.com/media/eb/e7/7e/1691937896/katzenangel-system-wechselanhaenger.jpg?ts=1691937966",                                                                       label: "Juguetes",   color: "#A855F7" },
  { key: "accesorios_gatos", image: "https://i.etsystatic.com/10692466/r/il/e34281/3747428365/il_570xN.3747428365_r6hk.jpg",                                                                                               label: "Accesorios", color: "#A855F7" },
  { key: "camas_gatos",      image: "https://m.media-amazon.com/images/I/51n4JmHPCRL._AC_UF894,1000_QL80_.jpg",                                                                                                            label: "Camas",      color: "#A855F7" },
];

// ─── BIRD SUBCATEGORIES ───────────────────────────────────────────────────────

export const BIRD_SUBCATEGORIES = [
  { key: "alimento_aves", image: "https://media.audubon.org/editorial-card-images/article/gbbc_blackcapped_chickadee_helena_garcia_quebec_n398_2011_kk.jpg", label: "Alimento", color: "#22C55E" },
  { key: "juguetes_aves", image: "https://www.petmate.com/cdn/shop/articles/The_Importance_of_Toys_for_Pet_Birds_65b8f6b6-b9f5-4980-8bb3-06572afcf0a2.png?v=1771008660",                label: "Juguetes", color: "#22C55E" },
  { key: "jaulas_aves",   image: "https://m.media-amazon.com/images/I/71SoSgvq1xL.jpg",                                                                                                label: "Jaulas",   color: "#22C55E" },
];

// ─── FISH SUBCATEGORIES ───────────────────────────────────────────────────────

export const FISH_SUBCATEGORIES = [
  { key: "alimento_peces",   image: "https://www.petzlifeworld.in/cdn/shop/files/71KrMFPGpjL._SX679.jpg?v=1704373455&width=1445",                              label: "Alimento",   color: "#3B82F6" },
  { key: "decoracion_peces", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FME8zZRtVzrZwvZ5cnWDvPGn7tPNaGYRPA&s",                          label: "Decoración", color: "#3B82F6" },
  { key: "peceras_peces",    image: "https://www.aqueon.com//-/media/project/oneweb/aqueon/us/blog/fish-compatibility/compatibility_01.jpg",                    label: "Peceras",    color: "#3B82F6" },
];

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────

export const PRODUCTS = [
  // Perros
  { id: 1000, name: "Royal Canin Adult",           price: 799,  category: "alimento_perros",   tag: "Más vendido", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJ59oS6baQUXIcbzqJ1c1ieI0ue-BQtutmg&s",                                                                                                                                                rating: 4.8 },
  { id: 1001, name: "Collar LED Neon",             price: 199,  category: "accesorios_perros", tag: "Nuevo",       image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQs84e0rZoXGdclevzp-uN-D9gQgTm08DjOE01n6_UTlpPOR4L6My3YE2ang533VQzd3uf2dHqpx34XMcGKCfJZLAXTK3pWsBnu10w0VxFv25dlf4JPAkKMBs-ve5Bo97uX-tBUSpx9g&usqp=CAc",                        rating: 4.6 },
  { id: 1002, name: "Cama Ortopédica XL",          price: 999,  category: "camas_perros",      tag: "Premium",     image: "https://dognut.com.mx/wp-content/uploads/2025/06/dognut-Cama-Ortopedica-para-perros-Mediana-y-Extragrande_6.jpg",                                                                                                                                rating: 4.9 },
  { id: 1003, name: "Cuerda para jalar",           price: 99,   category: "juguetes_perros",   tag: "Popular",     image: "https://m.media-amazon.com/images/I/71cFLfejmVL.jpg",                                                                                                                                                                                            rating: 4.7 },
  { id: 1004, name: "Pato de uso rudo",            price: 149,  category: "juguetes_perros",   tag: "Popular",     image: "https://www.talltailsdog.com/media/catalog/product/cache/f176026f7afb679026fcce47d01db013/l/a/latex_duck_dog_toy_main.jpg",                                                                                                                       rating: 4.7 },
  { id: 1005, name: "Zapatos para perro",          price: 399,  category: "accesorios_perros", tag: "Popular",     image: "https://m.media-amazon.com/images/I/61E6uLCrLfL.jpg",                                                                                                                                                                                            rating: 4.7 },
  { id: 1006, name: "Cama para perro pequeño",     price: 499,  category: "camas_perros",      tag: "Popular",     image: "https://http2.mlstatic.com/D_NQ_NP_866926-MLA110110661818_042026-O.webp",                                                                                                                                                                        rating: 4.7 },
  { id: 1007, name: "Kong Juguete Relleno",        price: 249,  category: "juguetes_perros",   tag: "Popular",     image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTkOwVWiBI8C5_zdMdoIBnn33cpPXgArljMCwgr0jWjwTt0Uniz_Vcvdp61BWpvwciiDiXwuprL92_BEbdtxmFKjQdtci9aVvp3zu0n5SaQa7CQm9pRTCWtxHZj4cozXV0q4BouWZE&usqp=CAc",                          rating: 4.7 },
  { id: 1008, name: "Arnés Acolchado S/M",         price: 399,  category: "accesorios_perros", tag: "",            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bgmmObBP4PgsBLm8qvyU06Jz2Kj_XTd4GA&s",                                                                                                                                                 rating: 4.6 },
  { id: 1009, name: "Hill's Science Diet",         price: 890,  category: "alimento_perros",   tag: "Premium",     image: "https://www.mascotasyaccesorios.mx/cdn/shop/products/DHASB2_1_1024x.jpg?v=1741989816",                                                                                                                                                            rating: 5.0 },
  { id: 1010, name: "Casa para perro pequeño",     price: 1399, category: "camas_perros",      tag: "Premium",     image: "https://http2.mlstatic.com/D_NQ_NP_630335-MLA95397711268_102025-O.webp",                                                                                                                                                                         rating: 5.0 },

  // Gatos
  { id: 2000, name: "Whiskas Mix Pescado",         price: 299,  category: "alimento_gatos",    tag: "",            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSXPi8RXBwWzBYNXqfubuXNeVye8UXRj9acvlVwpzaREN_NXXFkHk9iuU8Yr0Dkorh2-zua0G-hDtWYCdXy4Q8CcOYMOujBBpcfZil0W1VN5IkAMK3Asr_z63g4-ETa6l2pRoetVw&usqp=CAc",                         rating: 4.5 },
  { id: 2001, name: "Rascador Torre XL",           price: 1599,  category: "juguetes_gatos",    tag: "Nuevo",       image: "https://i.ebayimg.com/00/s/MTUwMFgxMjM0/z/BqsAAOSwKp1kSgG8/$_57.JPG?set_id=880000500F",                                                                                                                                                          rating: 4.8 },
  { id: 2002, name: "Caja de arena",               price: 299,  category: "accesorios_gatos",    tag: "Nuevo",       image: "https://i5.walmartimages.com/asr/c6f8c220-50cc-479c-a9ee-74980f4441ff.7aa2dcad66059e6f97cb7f9d6813502a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",                                                                                                                                                          rating: 4.8 },
  { id: 2003, name: "Cama de flor para gato",      price: 899,  category: "camas_gatos",    tag: "Nuevo",       image: "https://m.media-amazon.com/images/I/81Bjfid17ZL._AC_UF894,1000_QL80_.jpg",                                                                                                                                                          rating: 4.8 },
  { id: 2004, name: "Alimento para gatos Perfect Sense", price: 999,  category: "alimento_gatos",    tag: "Nuevo",       image: "https://m.media-amazon.com/images/I/61piOCBgWHL._AC_UF1000,1000_QL80_.jpg",                                                                                                                                                          rating: 4.8 },
  { id: 2006, name: "Pechera con correa",           price: 199,  category: "accesorios_gatos",    tag: "Nuevo",       image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTbHGL_B3b1L3YF2u3fjmPrDj9JXbmDFjB5APWiwYesd31fe_j1anB7CeT9U25-1BgFWNp4epSFYvGAGG1TPJ6uTNNntS02ZA9IxSBH6M1NCEKjNQCyu3SMWlUYQdQiumnTHkJwsE&usqp=CAc",                                                                                                                                                          rating: 4.8 },
  { id: 2008, name: "Cama elevada cubierta",           price: 999,  category: "camas_gatos",    tag: "Nuevo",       image: "https://www.ikea.com/us/en/images/products/utsadd-cat-house-on-legs-rattan__1287482_pe933920_s5.jpg?f=s",                                                                                                                                                          rating: 4.8 },
  { id: 2009, name: "Cana con pluma",           price: 139,  category: "juguetes_gatos",    tag: "Nuevo",       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvECIrUiddYXrwm3d4ARC0Xrj_0kkUH0tvQw&s",                                                                                                                                                          rating: 4.8 },
  { id: 2010, name: "Tunel portatil",           price: 599,  category: "juguetes_gatos",    tag: "Nuevo",       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmpazlwAcn1zM2MxcqC1_BHb9T7ko7WA7pA&s",                                                                                                                                                          rating: 4.8 },

  // Aves
  { id: 3000, name: "Mezcla de Semillas Premium",  price: 699,  category: "alimento_aves",     tag: "Popular",     image: "https://m.media-amazon.com/images/I/61vAsiEpkBL._AC_UF1000,1000_QL80_.jpg",                                                                                                                                                                      rating: 4.6 },
  { id: 3001, name: "Juguete Columpio Madera",     price: 95,   category: "juguetes_aves",     tag: "Nuevo",       image: "https://m.media-amazon.com/images/I/61EIDf9TX5L.jpg",                                                                                                                                                                                            rating: 4.5 },
  { id: 3002, name: "Jaula Espaciosa 60cm",        price: 850,  category: "jaulas_aves",       tag: "Premium",     image: "https://m.media-amazon.com/images/I/71j6+Qh7+lL._AC_UF1000,1000_QL80_.jpg",                                                                                                                                                                     rating: 4.8 },
  { id: 3002, name: "Alimento Mazuri",        price: 499,  category: "alimento_aves",       tag: "Premium",     image: "https://www.casaluna.com.mx/cdn/shop/products/aves.jpg?v=1752002857",                                                                                                                                                                     rating: 4.8 },
  { id: 3002, name: "campanitas colgantes",        price: 199,  category: "juguetes_aves",       tag: "Premium",     image: "https://www.superbirdtoystore.com/assets/images/sb1196_72_1500_bird.jpg",                                                                                                                                                                     rating: 4.8 },
  { id: 3002, name: "Jaula XL",        price: 1699,  category: "jaulas_aves",       tag: "Premium",     image: "https://img.vevorstatic.com/mx%2FYTSNL251753I8188WV0%2Fgoods_img-v1%2Fbird-cage-m100-11.jpg?timestamp=1699233263000&format=webp&format=webp",                                                                                                                                                                     rating: 4.8 },




  // Peces
  { id: 4000, name: "Alimento Tropical Flakes",   price: 120,  category: "alimento_peces",    tag: "",            image: "https://i5.walmartimages.com/asr/e31ca21d-e6ae-4b9b-8b20-7b22497a5a09.0213aa99ec247f55e2019e8a8b18a68f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",                                                                                            rating: 4.4 },
  { id: 4001, name: "Castillo Decorativo",         price: 210,  category: "decoracion_peces",  tag: "Nuevo",       image: "https://m.media-amazon.com/images/I/71698qo6Z7L._AC_UF894,1000_QL80_.jpg",                                                                                                                                                                       rating: 4.7 },
  { id: 4002, name: "Pecera Panorámica 20L",       price: 650,  category: "peceras_peces",     tag: "Popular",     image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ7l4pObQ41GGA9dXOCXMehmFvEdA0tdv8WazLXsMq1PsOHzr6_F_WvvDNo4j2FJO7W8yrJZOh2anXD0hLIuTtND2KFpdzhB48LIWsIq9PKU8X316uj0m4JcbDR1hEkZDyrvT3YshA&usqp=CAc",                        rating: 4.9 },
  { id: 4002, name: "Alimentacion Matsya Banghu para Koi",       price: 650,  category: "alimento_peces",     tag: "Popular",     image: "https://5.imimg.com/data5/DY/GM/MY-14182288/fish-feeds-500x500.png",                        rating: 4.9 },
  { id: 4002, name: "Cofre del tesoro para pecera",       price: 650,  category: "decoracion_peces",     tag: "Popular",     image: "https://m.media-amazon.com/images/I/714McfIuhhL._AC_UF894,1000_QL80_.jpg",                        rating: 4.9 },
  { id: 4002, name: "Pecera pequena",       price: 650,  category: "peceras_peces",     tag: "Popular",     image: "https://m.media-amazon.com/images/I/519KXTz7M+L.jpg",                        rating: 4.9 },


];