## **1. Jadval Tushunchalari**

### **1.1. Region (Mintaqalar)**
**Region** jadvali mamlakatdagi mintaqalarni (hududlarni) saqlash uchun ishlatiladi. Har bir mintaqa o‘zining noyob identifikatori va nomiga ega.

| **Maydon** | **Ma'lumot Turi** | **Tavsif** |
|------------|-------------------|------------|
| id         | SERIAL PRIMARY KEY | Har bir mintaqaning noyob identifikatori |
| name       | VARCHAR(255) NOT NULL | Mintaqaning nomi |

**Foydalanilishi:**
- Mintaqalarni tasniflash va ularni boshqa jadvallar bilan bog‘lash (masalan, Dorixonalar jadvali bilan).

### **1.2. District (Tumanlar)**
**District** jadvali mamlakatdagi tumanlarni saqlash uchun mo‘ljallangan. Har bir tuman o‘ziga tegishli mintaqaga bog‘langan bo‘ladi.

| **Maydon** | **Ma'lumot Turi** | **Tavsif** |
|------------|-------------------|------------|
| id         | SERIAL PRIMARY KEY | Har bir tumaning noyob identifikatori |
| name       | VARCHAR(255) NOT NULL | Tumaning nomi |
| region_id  | INT NOT NULL FOREIGN KEY REFERENCES "Region" (id) ON DELETE CASCADE | Tuman tegishli bo‘lgan mintaqaning IDsi |

**Foydalanilishi:**
- Mintaqa va tumanlar o‘rtasidagi munosabatni tashkil etish.
- Dorixonalarni mintaqa va tuman bo‘yicha tasniflash.

### **1.3. MedicineType (Dori Turlari)**
**MedicineType** jadvali dorilarning turini saqlash uchun ishlatiladi. Har bir dori turi o‘zining noyob identifikatori va nomiga ega.

| **Maydon** | **Ma'lumot Turi** | **Tavsif** |
|------------|-------------------|------------|
| id         | SERIAL PRIMARY KEY | Har bir dori turining noyob identifikatori |
| name       | VARCHAR(255) NOT NULL | Dori turining nomi |

**Foydalanilishi:**
- Dorilarning turini tasniflash va ularni boshqarish.
- Dorilar jadvali bilan bog‘lanish orqali dorilarning turini aniqlash.

### **1.4. Medicines (Dorilar)**
**Medicines** jadvali dorilarning ma'lumotlarini saqlash uchun mo‘ljallangan. Har bir dori o‘zining noyob identifikatori, nomi, ishlab chiqaruvchisi, turi, narxi, amal qilish muddati va qo‘shimcha ma'lumotlariga ega.

| **Maydon**      | **Ma'lumot Turi**    | **Tavsif** |
|-----------------|----------------------|------------|
| id              | SERIAL PRIMARY KEY | Har bir dorining noyob identifikatori |
| name            | VARCHAR(255) NOT NULL | Dori nomi |
| manufacturer    | VARCHAR(255) NOT NULL | Dori ishlab chiqaruvchisi |
| medicine_type_id | INT NOT NULL FOREIGN KEY REFERENCES "MedicineType" (id) ON DELETE CASCADE | Dorining turi IDsi |
| price           | NUMERIC(10, 2) NOT NULL | Dori narxi |
| expiry_date     | DATE NOT NULL         | Dori amal qilish muddati |
| info            | TEXT NOT NULL         | Dori haqida qo‘shimcha ma'lumot |

**Foydalanilishi:**
- Dorilarning to‘liq ma'lumotlarini saqlash va boshqarish.
- Stock jadvali bilan bog‘lanish orqali dorixonadagi dorilarning mavjudligini nazorat qilish.

### **1.5. Pharmacies (Dorixonalar)**
**Pharmacies** jadvali dorixonalarning ma'lumotlarini saqlash uchun ishlatiladi. Har bir dorixona o‘zining noyob identifikatori, nomi, manzili, joylashuvi, telefon raqami, elektron pochta manzili, tegishli mintaqa va tuman IDlariga ega.

| **Maydon**    | **Ma'lumot Turi**    | **Tavsif** |
|---------------|----------------------|------------|
| id            | SERIAL PRIMARY KEY | Har bir dorixonaning noyob identifikatori |
| name          | VARCHAR(255) NOT NULL | Dorixona nomi |
| address       | VARCHAR(255) NOT NULL | Dorixona manzili |
| location      | VARCHAR(255) NOT NULL | Dorixona joylashuvi (GPS koordinatalari yoki boshqa tavsif) |
| phone         | VARCHAR(50) NOT NULL  | Dorixona telefon raqami |
| email         | VARCHAR(255) NOT NULL | Dorixona elektron pochta manzili |
| region_id     | INT NOT NULL FOREIGN KEY REFERENCES "Region" (id) ON DELETE CASCADE | Dorixona tegishli bo‘lgan mintaqaning IDsi |
| district_id   | INT NOT NULL FOREIGN KEY REFERENCES "District" (id) ON DELETE CASCADE | Dorixona tegishli bo‘lgan tumaning IDsi |

**Foydalanilishi:**
- Dorixonalar haqida to‘liq ma'lumotlarni saqlash va boshqarish.
- Stock jadvali bilan bog‘lanish orqali dorixonadagi dorilarning sonini nazorat qilish.

### **1.6. Stock (Ombor)**
**Stock** jadvali dorixonalarda mavjud dorilarning sonini saqlash uchun ishlatiladi. Har bir yozuv dorixonaning IDsi, dorining IDsi va mavjudligi haqida ma'lumotni o‘z ichiga oladi.

| **Maydon**     | **Ma'lumot Turi**    | **Tavsif** |
|----------------|----------------------|------------|
| id             | SERIAL PRIMARY KEY | Har bir stok yozuvi uchun noyob identifikator |
| pharmacy_id    | INT NOT NULL FOREIGN KEY REFERENCES "Pharmacies" (id) ON DELETE CASCADE | Dorixona IDsi |
| medicine_id    | INT NOT NULL FOREIGN KEY REFERENCES "Medicines" (id) ON DELETE CASCADE | Dori IDsi |
| quantity       | INT NOT NULL       | Dorixonadagi dorining soni |
| UNIQUE (pharmacy_id, medicine_id) | | Har bir dorixona uchun har bir dori faqat bitta yozuvga ega bo‘lishi kerak |

**Foydalanilishi:**
- Dorixonadagi dorilarning mavjudligini nazorat qilish.
- Dorilarning narxi, soni va amal qilish muddatiga qarab boshqarish.