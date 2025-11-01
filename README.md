# 🧩 TypeScript Merge Project

This project is a small and simple example that shows how to use **TypeScript**  
to merge three arrays into one sorted array **without using `.sort()`**.

Two arrays are sorted from **small to big (ascending)**.  
One array is sorted from **big to small (descending)**.  
The program combines them into one sorted list using a custom merge algorithm.

---

## ✨ Features

- ✅ Uses **pure TypeScript** — no external sorting functions  
- ✅ Generates random ascending and descending arrays  
- ✅ Merges them efficiently using index pointers  
- ✅ Includes a small manual test for correctness  

---

## 🗂️ Folder Structure

src/
├── createArrays.ts # Creates ascending and descending arrays
├── mergingMethod.ts # Contains the merge() function logic
└── test.ts # Runs the main program and checks the result
tsconfig.json # TypeScript configuration
package.json # Node.js dependencies and scripts (optional)

yaml
Copy code

---

## ⚙️ How to Run the Project

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/typescript-merge-project.git
cd typescript-merge-project
