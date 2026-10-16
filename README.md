## IT-01: Top-Down Integration Testing ด้วย Stub

ส่วนที่เป็น **Real**
- หน้า Login ของเว็บไซต์ SauceDemo จริง: Login ด้วย `standard_user` / `secret_sauce`
- การตรวจสอบว่า Login สำเร็จและเข้าสู่ `inventory.html`

ส่วนที่เป็น **Stub**
- Inventory Stub ที่สร้างด้วย `page.setContent()` เพื่อจำลองการแสดงผลหน้า Inventory
- แสดงข้อความ `Mock Inventory Ready`
- แสดงสินค้าจำลอง 2 รายการ: `Mock Backpack` และ `Mock Bike Light`

Stub ข้อนี้เป็นการจำลอง DOM ระดับ Browser หลัง Login จริง ไม่ใช่การแทน Internal Module ของ SauceDemo โดยตรง

## IT-02: Bottom-Up Integration Testing ด้วย Driver

บทบาทของ **Driver** (`driverOpenInventory()`)
- เตรียมสถานะ Login โดยใช้ `BrowserContext.addCookies()` กำหนด Cookie `session-username` เป็น `standard_user` บนโดเมน `www.saucedemo.com`
- เปิด `https://www.saucedemo.com/inventory.html` โดยตรง ไม่ผ่าน Login Form

ส่วนที่เป็น **Real**
- หน้า Inventory: แสดงสินค้าครบ 6 รายการ
- การเพิ่มสินค้า Sauce Labs Backpack และ Sauce Labs Bike Light ลง Shopping Cart
- Cart Badge แสดง `2`
- หน้า Shopping Cart: มีสินค้าทั้งสองรายการ
